import React from 'react';
import { ImageBackground, StyleSheet} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            source={require("../assets/image.png")}/>
    );
}
const styles = StyleSheet.create({
    backgroud:{
        flex:1
    }
})

export default WelcomeScreen;