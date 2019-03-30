import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Cuaca1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          city: '',
          forecast: {
            main: '_',
            description: '_',
            temp: 0
    }
        };
      }
      getWeather= () => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
        + this.state.city +
        '&appid=c038d2e3ee8bd9095ef3ef9cc4121459&units=metric';
        return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
              }
            });
          });
      }


    render() {
        return (
            <View style={styles.containerMain}>
                <View style={styles.Box1}>
                    <Text style={styles.TextHeader}>Prakiraan Cuaca</Text>
                </View>
                <View style={styles.Box2}>
                    <TextInput 
                        style={{ height: 40, color: 'white', fontSize: 20 }}
                        placeholder="Masukkan Nama Kota"
                        onChangeText={( city )=> this.setState({ city })}
                    />
                    <Button
                        style={{ width: 170 }}
                        onPress={()=> this.getWeather()}
                        title="View"
                        accessibilityLabel="Klik Untuk Mencari Kota"
                    />
                   
                </View>
                <View style={styles.Box3}>
                <Text style={styles.Text} >
                    Temperature = {this.state.forecast.temp}{'°Celcius \n'}
                    Weather     = {this.state.forecast.main} {'\n'}
                    Description = {this.state.forecast.description} {'\n'}

                 </Text>
                 </View>
                <View style={styles.Box4}>
                    <Text style={styles.Text1}>@Agus Agastia</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#B0E0E6',
        flexDirection: 'column'
    },
    
    Box1: {
        flex: 0.2,
        backgroundColor: '#4682B4',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Box2: {
        flex: 0.2,
        backgroundColor: '#4682B4',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 7,
        alignItems: 'center',
    },
    Box3: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 20,
        alignItems: 'flex-start'
    },
    Box4: {
        flex: 0.2,
        backgroundColor: '#4682B4',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Text: {
        color: 'black',
        fontSize: 20
    },
    TextHeader: {
        color: 'white',
        fontSize: 22
    },
    Text1: {
        color: 'white',
        fontSize: 17
    },
   
});

