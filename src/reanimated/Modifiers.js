import { Dimensions, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const {height,width} = Dimensions.get('window')

export default function Modifiers() {
    const navigation = useNavigation();
    const offset = useSharedValue(0);

    const style = useAnimatedStyle(()=>({
        transform:[{translateX:offset.value}],
    }));

    const OFFSET = 40;
    const TIME = 250;
    const DELAY = 400;

    const handlePress = () =>{
        offset.value = withDelay(
            DELAY,
            withSequence(
              // start from -OFFSET
              withTiming(-OFFSET, { duration: TIME / 2 }),
              // shake between -OFFSET and OFFSET 5 times
              withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
              // go back to 0 at the end
              withTiming(0, { duration: TIME / 2 })
            )
          );
    }


  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.box,style]}/>
        <TouchableOpacity style={styles.funbtn} onPress={handlePress}>
            <Text>Click</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('gesture')}}>
                                    <Text style={styles.nxttxt}>Next</Text>
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
    box: {
        width: 100,
        height: 100,
        margin: 50,
        borderRadius: 15,
        backgroundColor: '#b58df1',
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