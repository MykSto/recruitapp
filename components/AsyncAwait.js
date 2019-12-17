import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export function FetchExample() {

    const [isLoading, setIsLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    async function fetchData(){
        try {
            let response = await fetch('https://facebook.github.io/react-native/movies.json')
            let responseJson = await response.json();

            setIsLoading(false);
            setDataSource(responseJson.movies);

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();

    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={({ id }, index) => id}
            />
        </View>
    );

}
