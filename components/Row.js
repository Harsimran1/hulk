import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        backgroundColor: 'rgba(84, 67, 67, 0.6)',
        color: 'white',
        fontSize: 22,
    },
    photo: {
        height: 200,
        width: "100%",
        borderRadius: 20,
    },
});

class Row extends React.Component {
    render() {
        console.log(this.props);
        return <View style={styles.container}>
            <ImageBackground source={{uri: this.props.data.picture}} style={styles.photo}>
            <Text style={styles.text}>
                {`${this.props.data.name}`}
            </Text>
            </ImageBackground>
        </View>
    }
};

export default Row;