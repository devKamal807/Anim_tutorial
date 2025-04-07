import { Animated, Dimensions, PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

export default function FadeAnimation() {
    const navigation = useNavigation();

    const [isvisible, setIsvisible] = useState(false)


    const fadeAnim = useRef(new Animated.Value(0)).current;


    const handleFadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: isvisible?0: 1, // Fully visible
            duration: 4000,
            useNativeDriver: true,
        }).start();
        setIsvisible(!isvisible)
    };

  return (
    <SafeAreaView style={styles.container}> 
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
            <Text style={styles.txt}>Hello!</Text>
        </Animated.View>

        <TouchableOpacity style={styles.funbtn}onPress={handleFadeIn}>
            <Text style={styles.funcbtntxt}> {isvisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('Move')}}>
            <Text>Next</Text>
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
    content:{
        height:200,
        width:200,
        borderRadius:100,
        backgroundColor:'gray',
        justifyContent:'center'
    },
    txt:{
        textAlign:'center',
        fontSize:fontSize(28),
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
})