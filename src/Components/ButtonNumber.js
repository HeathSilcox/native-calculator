import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from "../Stylesheets/styles";
import {useDispatch} from "react-redux";
import {displayNumber, clear} from "../Actions/actions";


export default (props) => {
    const dispatch = useDispatch();

    const chainDispatch = (input) => {
        dispatch(displayNumber(input));
    };

    if (props.spanWidth === "2") {
        return (
            <TouchableOpacity onPress={() => chainDispatch(props.input)}>
                <View style={styles.buttons.boxStylingBtnLargeBgWhite}>
                    <Text style={styles.buttons.textStylingBlack}>{props.input}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity onPress={() => chainDispatch(props.input)}>
            <View style={styles.buttons.boxStylingBtnBgWhite}>
                <Text style={styles.buttons.textStylingBlack}>{props.input}</Text>
            </View>
        </TouchableOpacity>
    );
};