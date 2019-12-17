import React from 'react';
import { Image, View, Text } from 'react-native';

function Greeting (props){
    return (
        <View style={{alignItems: 'center'}}>
            <Text>Hello{props.name} {props.surname}</Text>
            {/* <Text>Hello{props.surname}</Text> */}
        </View>
    );
}

export function LotsOfGreetings(){
    // let pic = {
    //     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };
    return (
        <View style={{alignItems: 'center', top: 50}}>
        <div>
        <Greeting name='Rexxar' surname='Mala' />
        <Greeting name='Jaina' surname='whatever' />
        <Greeting name='Valeera' surname='adasd' />
        <Greeting name='Kaleera' surname='Galeera' />
        </div>
      </View>
    );

    
}
