import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    boxResult: {
        backgroundColor: '#453237',
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    board: {
        flexDirection: 'column',
    }
});