import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

function Blink (props) {

	const [isShowingText, setShowingText] = useState(true);
    
  // useEffect(() => {
  //   // Toggle the state every second
  //   setInterval(() => (
	// 	setShowingText(!isShowingText)
  //     )
  //   , 1000
  //   );
  // }
  // );

    // if (!isShowingText) {
    //   return null;
    // }

    return (
        <div>
<Text style={props.style}>{props.text}</Text>
    <Text>{isShowingText.toString()}</Text>
    </div>
    );

}

const styles = StyleSheet.create({
  bigBlue: {
      backgroundColor: 'blue'
  }
});


export function BlinkApp() {

  
    return (
      // <View>
        /* <Text>Mew</Text> */
        /* <Blink text='I love to blink' /> */
        /* <Blink style={{width: 50, height: 50, backgroundColor: 'powderblue', color: 'pink'}} text='Yes blinking is so great' /> */
        /* <Blink text='Why did they ever take this out of HTML' /> */
        /* <Blink text='Look at me look at me look at me' /> */
      /* </View> */
      <View style={{flex: 2, flexDirection: 'column', justifyContent: "space-between"}}>
        <View style={{flex: 2, width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, width: 50, height: 50, backgroundColor: 'steelblue'}} />

      </View>
      
    );

    


}