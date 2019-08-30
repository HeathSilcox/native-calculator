import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from "../Stylesheets/styles";
import {useDispatch} from "react-redux";
import {displayNumber, clear, equal} from "../Actions/actions";

export default (props) => {
    const dispatch = useDispatch();

    const chainDispatch = (input) => {
        if (input === 'clear') {
            return dispatch(clear(input));
        }
        if (input === '=') {
            return dispatch(equal(input));
        }

        dispatch(displayNumber(input));

    };

    if (props.spanWidth === "2") {
        return (
            <TouchableOpacity onPress={() => chainDispatch(props.input)}>
                <View style={styles.buttons.boxStylingBtnLargeBgRed}>
                    <Text style={styles.buttons.textStylingWhite}>{props.input}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    if (props.spanHeight === "2") {
        return (
            <TouchableOpacity onPress={() => chainDispatch(props.input)}>
                <View style={styles.buttons.boxStylingBtnTallBgRed}>
                    <Text style={styles.buttons.textStylingWhite}>{props.input}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity onPress={() => chainDispatch(props.input)}>
            <View style={styles.buttons.boxStylingBtnBgRed}>
                <Text style={styles.buttons.textStylingWhite}>{props.input}</Text>
            </View>
        </TouchableOpacity>
    );
};