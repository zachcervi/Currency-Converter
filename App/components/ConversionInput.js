import React from 'react';
import { TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native'
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: "row"
    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: "bold"
    },
    input: {
        color: colors.textLight,
        flex: 1,
        padding: 10
    },
});

export const ConversionInput = ({onButtonPress, text, ...props }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props} />
        </View>
  
    );
};

