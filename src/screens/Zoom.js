import { Animated, Dimensions, PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

export default function Zoom() {

    const navigation = useNavigation();
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const translateYAnim = useRef(new Animated.Value(0)).current;

    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: isZoomed ? 1 : 2,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnim, {
                toValue: isZoomed ? 0 : 100,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();

        setIsZoomed(!isZoomed);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.ball, { transform: [{ scale: scaleAnim }] }]} />
            
            <Animated.View style={{ transform: [{ translateY: translateYAnim }] }}>
                <TouchableOpacity style={styles.funbtn} onPress={toggleZoom}>
                    <Text style={styles.funcbtntxt}>{isZoomed ? 'Zoom Out' : 'Zoom In'}</Text>
                </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('Spinning')}}>
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
    ball: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        borderRadius: 50,
        marginBottom: 20,
    },
    funbtn: {
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#452CE8',
        height: height * 0.06,
        borderRadius: 10,
        justifyContent: 'center',
  
    },

    funcbtntxt:{
        fontSize:fontSize(20),
        color:'#ffff'
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
    }
});
