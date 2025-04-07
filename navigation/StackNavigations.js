import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FadeAnimation from '../src/screens/FadeAnimation';
import MoveObject from '../src/screens/MoveObject';
import Zoom from '../src/screens/Zoom';
import Spinning from '../src/screens/Spinning';
import LoopingPulse from '../src/screens/LoopingPulse';
import ShakeAnimation from '../src/screens/ShakeAnimation';
import PaymentSuccessAnimation from '../src/screens/PaymentSuccessAnimation';
import FirstAnim from '../src/reanimated/FirstAnim';
import AnimatingProps from '../src/reanimated/AnimatingProps';
import Customizing from '../src/reanimated/Customizing';
import Modifiers from '../src/reanimated/Modifiers';
import HandlingGesture from '../src/reanimated/HandlingGesture';
import PanGesture from '../src/reanimated/PanGesture';
import WithDecay from '../src/reanimated/WithDecay';
import DelayText from '../src/reanimated/DelayText';
import PaperComp from '../src/paper/PaperComp';
import ElementComp from '../src/elements/ElementComp';


const Stack = createNativeStackNavigator();

export default function StackNavigations() {
  return (
   <Stack.Navigator
    initialRouteName='Paper' screenOptions={{headerShown : false}}>
        <Stack.Screen name="FadeAnimation" component={FadeAnimation}/>
        <Stack.Screen name="Move" component={MoveObject}/>
        <Stack.Screen name="Zoom" component={Zoom}/>
        <Stack.Screen name="Spinning" component={Spinning}/>
        <Stack.Screen name="LoopPulse" component={LoopingPulse}/>
        <Stack.Screen name="shake" component={ShakeAnimation}/>
        <Stack.Screen name="payment" component={PaymentSuccessAnimation}/>
        <Stack.Screen name="firstAnim" component={FirstAnim}/>
        <Stack.Screen name="Props" component={(AnimatingProps)}/>
        <Stack.Screen name="customize" component={Customizing}/>
        <Stack.Screen name="modifier" component={Modifiers}/>
        <Stack.Screen name="gesture" component={HandlingGesture}/>
        <Stack.Screen name="panGesture" component={PanGesture}/>
        <Stack.Screen name="Decay" component={WithDecay}/>
        <Stack.Screen name="delayText" component={DelayText}/>
        <Stack.Screen name="Paper" component={PaperComp}/>
        <Stack.Screen name="element" component={ElementComp}/>
        
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})