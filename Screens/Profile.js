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
        <ProfileItems name="Gmail" value="nasrinhaidari@gmail.com"/>
        <ProfileItems name="Gender" value="Female"/>
        <ProfileItems name="Mobile" value="+93 0000 000 00"/>
        <ProfileItems name="Address" value="Herat City"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});