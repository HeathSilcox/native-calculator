import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Stylesheets/styles';
import { useSelector } from "react-redux";


export default () => {
    const result = useSelector(state => state.result);

    return (
        <View style={styles.global.boxResult}>
            <Text style={{color: '#fff', fontSize: 45,fontFamily: 'Indie' +
                    ' Flower'}}>{result}</Text>
        </View>
    );
};