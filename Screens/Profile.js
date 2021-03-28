import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import ProfileItems from '../Components/ProfileItems'

export default function Profile() {
  return (
    <View style={styles.container}>
        <Image
            style={{ height: 200 }}
            source= {{uri: require("../assets/Profile.js")}}
        />

        <ProfileItems name="Username" value="Nasrin Haidari"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});