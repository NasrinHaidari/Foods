import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function FoodItems({image, name, price, detail}) {
  
    const navigation = useNavigation() // with (navigation) => we can go from one screen to another screen 
  
    return (
    <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate("Detail", {name, price, image, detail})}
    >
        <Image
            style={styles.image}
            source={{uri: image}}
        />
        <View style={{alighItems: "center"}}>
            <Text style={{fontWeight: "bold"}}>{name}</Text>
            <Text>{price}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginBottom: 10
    },
    image: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15
    }
});