import React from 'react'
import { ImageBackground, StyleSheet} from 'react-native'
import { Container } from 'native-base' 
import logo from '../assets/logo.png'

const SplashScreen = (props) =>(
    <Container>
        <ImageBackground source={logo} style={styles.splash} />
    </Container>
)

export default SplashScreen

const styles = StyleSheet.create({
    splash:{
        resizeMode:'cover',
        flex:1,
    }
})