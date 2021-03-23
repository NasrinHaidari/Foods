import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageSlider from 'react-native-image-slider'


export default function App() {
    let images = [
        require("../assets/bg.jpg"),
        require("../assets/rice.jpg"),
        require("../assets/steak.jpg")
    ]
  return (
    <View style={styles.container}>
      <View style={styles.containerImageSlider}>
        <ImageSlider
            style={styles.imageSlider}
            images={images}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerImageSlider: {
        height: 170,
        margin: 8
    },
    imageSlider: {
        borderRadius: 10
    }
});