import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const {height,width} = Dimensions.get('window')

export default function PanGesture() {

  const navigation = useNavigation();

  const pressed = useSharedValue(false)

  const offsetX = useSharedValue(0)
  const offsetY = useSharedValue(0)

  const pan = Gesture.Pan()
  .onStart(()=>{
    pressed.value = true;
  })
  .onChange((event)=>{
    offsetX.value = event.translationX;
    offsetY.value = event.translationY;
  })
  .onEnd(()=>{
    offsetX.value = withSpring(0)
    offsetY.value = withSpring(0)
    pressed.value = false
  });

  const animatedStyles = useAnimatedStyle(()=>({
    transform:[
      {translateX:offsetX.value},
      {translateY:offsetY.value},
      {scale:withTiming(pressed.value? 1.2 : 1)},
    ],
    backgroundColor: pressed.value ? 'gray' : '#B58DF1',
  }))


  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView >
        <View style={styles.container}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle,animatedStyles]}/>
        </GestureDetector>
        </View>
        
      </GestureHandlerRootView>

      <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('Decay')}}>
              <Text style={styles.nxttxt}>
                  Next
              </Text>
          </TouchableOpacity>
      
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  circle:{
    height:100,
    width:100,
    backgroundColor:'#b58df1',
    borderRadius:50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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