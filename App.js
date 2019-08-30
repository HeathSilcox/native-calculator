import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import * as Font from 'expo-font';
import {useComponentWillMount} from "./src/Hooks/useComponentWillMount";
import styles from './src/Stylesheets/styles';
import BoardManager from "./src/Components/BoardManager";
import Result from "./src/Components/Result";
import {Provider} from "react-redux";
import store from "./src/store";


export default () => {
    const [areFontLoaded, setAreFontLoaded] = useState(false);

    useComponentWillMount(async () => {
        await Font.loadAsync({
            'Indie Flower': require('./assets/fonts/IndieFlower-Regular.ttf'),
            'Exo': require('./assets/fonts/Exo-Regular.ttf'),
        });

        setAreFontLoaded(true);
    });

    return (
        <Provider store={store}>
            <View style={styles.global.container}>
                <StatusBar hidden={true} translucent={true} />
                {
                    areFontLoaded ? (
                        [<Result key={1} />,
                        <BoardManager key={2} />]
                    ) : null
                }
            </View>
        </Provider>
    );
};
