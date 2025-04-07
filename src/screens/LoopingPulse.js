import { Animated, Dimensions, PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

export default function LoopingPulse() {
    const navigation = useNavigation();

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const [isPulsing, setIsPulsing] = useState(false);
    const animationRef = useRef(null);

    const togglePulse = () => {
        if (isPulsing) {
            animationRef.current.stop();
            scaleAnim.setValue(1);
        } else {
            animationRef.current = Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleAnim, {
                        toValue: 1.5,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            );
            animationRef.current.start();
        }
        setIsPulsing(!isPulsing);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]} />

            <TouchableOpacity style={styles.button} onPress={togglePulse}>
                <Text style={styles.buttonText}>{isPulsing ? 'Stop Pulse' : 'Start Pulse'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('shake')}}>
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
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
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
