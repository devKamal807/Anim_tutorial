import {
  Dimensions,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

export default function FirstAnim() {
  const navigation = useNavigation();

  const width = useSharedValue(100);
  const translateX = useSharedValue(0);

  const handleTranslate = () => {
    translateX.value = withSpring(translateX.value + 50);
  };

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.square, {width}, {transform: [{translateX}]}]}
      />

      <TouchableOpacity style={styles.funbtn} onPress={handlePress}>
        <Text style={styles.funbtntxt}>Expand</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.funbtn} onPress={handleTranslate}>
        <Text style={styles.funbtntxt}>Move</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nxtbtn}
        onPress={() => {
          navigation.navigate('Props');
        }}>
        <Text style={styles.funbtntxt}>Next</Text>
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
  square: {
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 10,
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
});
