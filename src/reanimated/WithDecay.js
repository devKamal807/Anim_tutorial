import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get('window')

const SIZE = 120;
const BOUNDARY_OFFSET = 50;

export default function WithDecay() {

    const navigation = useNavigation();

    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0)
    const width = useSharedValue(0);
    const height = useSharedValue(0)

    const onLayout = (event) => {
        width.value = event.nativeEvent.layout.width;
      };
      const pan = Gesture.Pan()
        .onChange((event) => {
          offsetX.value += event.changeX;
          offsetY.value += event.changeY;
        })
        .onFinalize((event) => {
          offsetX.value = withDecay({
            velocity: event.velocityX,
            rubberBandEffect: true,
            clamp: [
              -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
              width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
            ],
          });
          offsetY.value = withDecay({
            velocity: event.velocityY,
            rubberBandEffect:true,
            clamp:[-(height.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
                height.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
            ]
          })
        });
    
      const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetX.value },
            {translateY:offsetY.value}
        ],

      }));
  return (
    <SafeAreaView style={styles.container}>
    <GestureHandlerRootView >

      <View onLayout={onLayout} style={styles.wrapper}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>

    <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('delayText')}}>
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
        height: '100%',
      },
      wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      box: {
        height: SIZE,
        width: SIZE,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        cursor: 'grab',
        alignItems: 'center',
        justifyContent: 'center',
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
        color:'#ffff'
    }
})