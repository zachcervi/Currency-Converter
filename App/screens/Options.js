import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { RowItem, RowSeparator } from '../components/RowItem'

const openUrl = url => {
    return Linking.openURL(url).catch(() => {
        Alert.alert("Sorry, something went wrong", "Please try again later.")
    })
}


export default () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <RowItem
                    text="Themes"
                    onPress={() => alert("Todo!")}
                    rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
                />
                <RowSeparator />
                <RowItem
                    text="React Native Basics"
                    onPress={() => openUrl("httpsads://www.google.com")}
                    rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
                />
                <RowSeparator />
                <RowItem
                    text="React Native By Example"
                    onPress={() => alert("Todo!")}
                    rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
