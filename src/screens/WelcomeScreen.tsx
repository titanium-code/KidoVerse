import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const welcomeImage = require('../assets/welcome.jpg');

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={welcomeImage} style={styles.background}>
      {/* Other content can go here if needed */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 40, // Adjust as needed
      left: '10%', // Centers the button horizontally
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: '100%',
      paddingVertical: 25,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      // Shadow for iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      // Elevation for Android
      elevation: 8,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  