import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons' // use icon in bottom Navigation

export default function FavoriteItems() {
      
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: require("../assets/pizza.jpg")}}
      />
      <View style={styles.content}>
        <Text style={styles.name}>Pizza</Text>
        <Text style={styles.price}>20$</Text>
      </View>
      <MaterialCommunityIcons
        style={{ alignSelf: "center" }}
        name="delete"
        size={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 5,
        borderBottomWidth: 0.1,
        borderBottomColor: "#841548"
    },
    image: {
      height: 120,
      width: 120,
      margin: 5
    },
    content: {
      justifyContent: "center",
      marginLeft: 5,
      flex: 1
    },
    name: {
      color: "green",
      fontSize: 18,
      marginBottom: 5
    },
    price: {
      color: "red",
      fontSize: 16
    }
});