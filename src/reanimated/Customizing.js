import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const { width,height } = Dimensions.get('window');



export default function Customizing() {
    const navigation = useNavigation();

  const start = width / 2 - 160;
  const end = -start;

  const defaultAnim = useSharedValue(start);
  const changedAnim = useSharedValue(start);

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }));

  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: changedAnim.value }],
  }));

  useEffect(() => {
    defaultAnim.value = withRepeat(
      withSpring(end),
      -1,
      true
    );

    changedAnim.value = withRepeat(
      withSpring(end, {
        mass: 10,
        damping: 40,
      }),
      -1,
      true
    );
  }, [defaultAnim, changedAnim, end]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.box, animatedDefault]}>
        <Text style={styles.text}>Default</Text>
      </Animated.View>

      <Animated.View style={[styles.box, animatedChanged]}>
        <Text style={styles.text}>Heavy</Text>
      </Animated.View>

      <TouchableOpacity
                            style={styles.nxtbtn}
                            onPress={() => {
                              navigation.navigate('modifier');
                            }}>
                            <Text style={styles.nxttxt}>Next</Text>
                          </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
  nxttxt:{
    color:'#ffff',
  }
});
