import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const {height,width} = Dimensions.get('window')

export default function HandlingGesture() {
    const navigation = useNavigation();

    const pressed = useSharedValue(false);

    const tap = Gesture.Tap()
      .onBegin(() => {
        pressed.value = true;
      })
      .onFinalize(() => {
        pressed.value = false;
      });
  
    const animatedStyles = useAnimatedStyle(() => ({
      backgroundColor: pressed.value ? 'gray' : '#B58DF1',
      transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],
    }));
  
  return (
    <SafeAreaView style={styles.container}>
    <GestureHandlerRootView >
      <View style={styles.container}>

        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circle, animatedStyles]} />

        </GestureDetector>
      </View>
    </GestureHandlerRootView>

    <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('panGesture')}}>
        <Text style={styles.nxttxt}>
            Next
        </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

      },
      circle: {
        height: 120,
        width: 120,
        borderRadius: 500,
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
    nxttxt:{
      color:'#ffff',
    }
})