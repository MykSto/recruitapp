import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

export function Pizza () {
    const [text, setText] = useState('');

    var kazkas = function(){
        alert("nani")
    }

    return (

    <View style={{padding: 10}}>
    <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={(text) => setText(text)}
      value={text}
    />
    <Text style={{padding: 10, fontSize: 42}}>
      {text.split(' ').map((word) => word || '🍕').join(' ') }
    </Text>

    <Button
  onPress={kazkas}
  title="Press Me"
/>

  </View>
  );
}

