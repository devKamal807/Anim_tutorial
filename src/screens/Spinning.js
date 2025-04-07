import { Animated, Dimensions, PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

export default function Spinning() {
    const navigation = useNavigation()

    const rotateAnim = useRef(new Animated.Value(0)).current;

    const handleSpin = () => {
        rotateAnim.setValue(0);
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.box, { transform: [{ rotate: spin }] }]}>
                <Text style={styles.boxtxt}>spin</Text>
            </Animated.View>

            <TouchableOpacity style={styles.funbtn} onPress={handleSpin}>
                <Text style={styles.funbtntxt}>Spin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('LoopPulse')}}>
                                                    <Text>Next</Text>
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
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center'
    },
    funbtn:{
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#452CE8',
        height: height * 0.06,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: height * 0.05,

    },
    boxtxt:{
        fontSize:fontSize(16),
        color:'#ffff',
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
