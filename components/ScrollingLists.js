import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export function ListFunction(){
    return(
        <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
        //   renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        renderItem = {function({item}){
            return <Text style={styles.item}>{item.key}</Text>
        }}

        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
})