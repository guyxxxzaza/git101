import React from 'react';
import Forecast from './Forecast';
import background from './bg.jpeg';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        forecast: {
            main: 'main', 
            description: 'description', 
            temp: 0
        }
    }
}
render() {
    return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
        
        

      }}>
        <ImageBackground source={background} style={styles.backdrop}>
        <Text style={styles.white}>Zip code is {this.props.zipCode}.</Text>
        <Forecast {...this.state.forecast} />
        </ImageBackground>
    </View>
    );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 100 },
    backdrop: {
         width: '100%', 
         height: '100%',
         opacity: 0.5,
         
        
        },
    white: {
        color: 'white',
        fontSize: 24,
        textAlign:'center', 
        paddingTop: 25,
      },
    
    

});
