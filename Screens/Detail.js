import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings'
import { useRoute } from '@react-navigation/native'

export default function Detail() {

    const data = useRoute().params
    const {name, price, image, detail}= data
  return (
    <View style={styles.container}>
        <Image
        style= {{height: 190}}
        source={{uri: image}}
        />
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>Price: {price}</Text>
            <Rating 
                showRating 
                imageSize={30}
            />
        </View>
        <View style={{margin: 8}}>
            <Text style={styles.title}>Introduction</Text>
            <Text>{detail}</Text>
        </View>
        <Button title="Add to favorite" color="#777777"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 8
    }
});