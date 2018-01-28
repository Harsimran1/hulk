import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableHighlight
} from 'react-native';

import data from '../../data/User';
import Row from '../../components/Row';

export default HomeScreen = ({navigation}) => (
    <View >
        <FlatList
            data={data}
            renderItem={({item}) => <TouchableHighlight onPress={() => navigation.navigate('Details')}>
                <Row data={item}  />
            </TouchableHighlight> }
        />
    </View>
);