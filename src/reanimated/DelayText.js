import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated'

const {width,height} = Dimensions.get('window');

const DURATION = 1000
const DELAY = 500

const text = ['Chennai','Super','Kings']

export default function DelayText() {
    const [isShown, setShown] = useState(false);

  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);

  const show = () => {
    if (isShown) {
        opacity3.value = withDelay(0 * DELAY, withTiming(0, { duration: DURATION }));
        opacity2.value = withDelay(1 * DELAY, withTiming(0, { duration: DURATION }));
        opacity1.value = withDelay(2 * DELAY, withTiming(0, { duration: DURATION }));
    }
    else {
        opacity1.value = withDelay(0 * DELAY, withTiming(1, { duration: DURATION }));
        opacity2.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));
        opacity3.value = withDelay(2 * DELAY, withTiming(1, { duration: DURATION }));
    }

    setShown(!isShown);
};
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.text}>
        <Animated.Text style={[styles.label,  { opacity: opacity1 }]}>
          {text[0]}
        </Animated.Text>

        <Animated.Text style={[styles.label, { opacity: opacity2 }]}>
          {text[1]}
        </Animated.Text>

        {width > 450 && (
          <Animated.Text
            style={[styles.label, { opacity: opacity3 }]}>
            {text[2]}
          </Animated.Text>
        )}
      </View>

      {width <= 450 && (
        <Animated.Text style={[styles.label, { opacity: opacity3 }]}>
          {text[2]}
        </Animated.Text>
      )}
      <Button title={isShown ? 'Hide' : 'Show'} onPress={show} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text: {
        flexDirection: 'row',
      },

      label: {
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold',
        marginRight: 8,
        color:'#c7c034', 
      },
    
})