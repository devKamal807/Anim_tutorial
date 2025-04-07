import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity, Text, Dimensions, PixelRatio } from 'react-native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

const ShakeAnimation = () => {
    const navigation = useNavigation();

  const shakeAnim = useRef(new Animated.Value(0)).current;

  const handleShake = () => {
    shakeAnim.setValue(0); // Reset position
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateX: shakeAnim }] }]} />
      
      <TouchableOpacity style={styles.button} onPress={handleShake}>
        <Text style={styles.buttonText}>Shake</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('payment')}}>
                                                                      <Text>Next</Text>
                                                                  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    marginBottom: 20,
    borderRadius:100/2,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  nxtbtn:{
    width: '20%',
    alignItems: 'center',
    backgroundColor: '#327a43',
    height: height * 0.06,
    borderRadius: 5,
    justifyContent: 'center',
    position: 'absolute',
    bottom: height * 0.03,
    right: width * 0.05,
    zIndex: 10,
},
});

export default ShakeAnimation;
