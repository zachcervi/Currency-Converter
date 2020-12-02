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
    containerDisabled: {
        backgroundColor: colors.offWhite
    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        backgroundColor: colors.white
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: "bold",
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    input: {
        color: colors.textLight,
        flex: 1,
        padding: 10
    },
});

export const ConversionInput = ({onButtonPress, text, ...props }) => {
    const containerStyles = [styles.container];
    if(props.editable === false){
        containerStyles.push(styles.containerDisabled)
    }
    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props} />
        </View>
  
    );
};

