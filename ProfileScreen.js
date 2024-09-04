import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import profilesData from './data.json'; // import file data.json

// import gambar lokal manual menggunakan require
const images = {
  'fotoNayla.jpg': require('./components/fotoNayla.jpg'),
};

const ProfileScreen = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // load data dari JSON
    setProfiles(profilesData);
  }, []);

  // fungsi untuk dapat source gambar
  const getImageSource = (profile) => {
    if (profile.photo_local && images[profile.photo_local]) {
      // kalau ada photo_local, pakai gambar dari folder lokal
      return images[profile.photo_local];
    } else if (profile.photo_url) {
      // kalau ada photo_url, pakai URL gambar
      return { uri: profile.photo_url };
    }
    // default value kalau tidak ada gambar yang valid
    return null;
  };

  return (
    <ScrollView style={styles.container}>
      {profiles.map((profile, index) => (
        <View key={index} style={styles.profileCard}>
          {getImageSource(profile) && (
            <Image
              source={getImageSource(profile)}
              style={styles.profileImage}
            />
          )}
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileEmail}>{profile.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
});

export default ProfileScreen;
