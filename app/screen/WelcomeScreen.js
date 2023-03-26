import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <>
        {/* <ImageBackground style={styles.backgroud}
            source={require("../assets/bg-image.jpg")} /> */}
            <View
            style={{backgroundColor:"dodgerblue",flex:1}}
            >

            </View></>
    );
}
const styles = StyleSheet.create({
    backgroud:{
        flex:1
    }
})

export default WelcomeScreen;