import {Dimensions, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    boxStylingBtnBgWhite: {
        width: width / 4,
        height: width / 4,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    boxStylingBtnBgRed: {
        width: width / 4,
        height: width / 4,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        backgroundColor: '#ff0047',
    },
    boxStylingBtnLargeBgWhite: {
        width: width / 2,
        height: width / 4,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    boxStylingBtnLargeBgRed: {
        width: width / 2,
        height: width / 4,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        backgroundColor: '#ff0047',
    },
    boxStylingBtnTallBgRed: {
        width: width / 4,
        height: width / 2,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        backgroundColor: '#ff0047',
    },
    textStylingBlack: {
        color: '#111',
        fontFamily: 'Exo',
        fontSize: 25,
        textAlign: 'center',
    },
    textStylingWhite: {
        color: '#fff',
        fontFamily: 'Exo',
        fontSize: 25,
        textAlign: 'center',
    }
});