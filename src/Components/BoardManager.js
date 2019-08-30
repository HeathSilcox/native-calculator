import React from 'react';
import {View} from 'react-native';
import styles from '../Stylesheets/styles';
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";

export default () => {

    return (
        <View style={styles.global.board}>
            <View style={{flexDirection: 'row'}}>
                <ButtonOperator input="clear" spanWidth="2"/>
                <ButtonOperator input="*"/>
                <ButtonOperator input="/"/>
            </View>

            <View style={{flexDirection: 'row'}}>
                <ButtonNumber input="7"/>
                <ButtonNumber input="8"/>
                <ButtonNumber input="9"/>
                <ButtonOperator input="-"/>
            </View>

            <View style={{flexDirection: 'row'}}>
                <ButtonNumber input="4"/>
                <ButtonNumber input="5"/>
                <ButtonNumber input="6"/>
                <ButtonOperator input="+"/>
            </View>

            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <ButtonNumber input="1"/>
                    <ButtonNumber input="2"/>
                    <ButtonNumber input="3"/>
                </View>
            </View>

            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <ButtonNumber input="0" spanWidth="2"/>
                    <ButtonOperator input="."/>
                </View>
            </View>

            <View style={{position: 'absolute', right: 0, bottom: 0}}>
                <ButtonOperator input="=" spanHeight="2"/>
            </View>
        </View>
    )
};