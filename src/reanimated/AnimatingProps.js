import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Svg, Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const {height,width} = Dimensions.get('window');

export default function AnimatingProps() {

    const navigation = useNavigation();

    const r = useSharedValue(20)

    const handlePress = () => {
        r.value += 10;
      };

      const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value),
      }));

  return (
    <SafeAreaView style={styles.container}>

        <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
        </Svg>

         <TouchableOpacity style={styles.funbtn} onPress={handlePress}>
                <Text style={styles.funbtntxt}>click</Text>
              </TouchableOpacity>

              <TouchableOpacity
                      style={styles.nxtbtn}
                      onPress={() => {
                        navigation.navigate('customize');
                      }}>
                      <Text style={styles.funbtntxt}>Next</Text>
                    </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    svg: {
        height: 250,
        width: '100%',
      },
      funbtn: {
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#452CE8',
        height: height * 0.06,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: height * 0.05,
      },
      nxtbtn: {
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
      funbtntxt:{
        color:'#ffff'
      }
})