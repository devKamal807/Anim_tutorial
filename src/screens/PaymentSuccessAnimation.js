import React, { useRef } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const PaymentSuccessAnimation = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current; // Start at 0 (hidden)
  const opacityAnim = useRef(new Animated.Value(0)).current; // For fade-in

  const handleSuccess = () => {
    scaleAnim.setValue(0);
    opacityAnim.setValue(0);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
        <Animated.Text style={[styles.checkmark, { opacity: opacityAnim }]}>✔</Animated.Text>
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={handleSuccess}>
        <Text style={styles.buttonText}>Complete Payment</Text>
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
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PaymentSuccessAnimation;
