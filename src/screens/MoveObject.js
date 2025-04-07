import { Animated, Dimensions, PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

export default function MoveObject() {

    const navigation = useNavigation()

    const [ismove, setIsmove] = useState(false)

    const translateY = useRef(new Animated.Value(-200)).current;

    const handleMove = () =>{
        Animated.timing(translateY,{
            toValue: ismove ? -200 : 0,
            duration:1000,
            useNativeDriver:true,
        }).start()
        setIsmove(!ismove);
    }
  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.ball,{transform:[{translateY}]}]}>

        </Animated.View>
        <TouchableOpacity style={styles.funbtn}onPress={handleMove}>
                    <Text style={styles.funcbtntxt}> {ismove ? 'Return' : 'Move'}</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.nxtbtn} onPress={()=>{navigation.navigate('Zoom')}}>
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
    ball:{ 
        height:200,
        width:200,
        backgroundColor:'black',
        borderRadius:200/2,
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