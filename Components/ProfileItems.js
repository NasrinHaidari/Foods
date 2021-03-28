import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}></Text>
        <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    txt: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 8
    }
});