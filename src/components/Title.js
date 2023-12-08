import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../untils/Color'
import { useNavigation } from '@react-navigation/native';

const Title = ({Title}) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Image style={styles.icon} source={require("../assets/icons/icon_Back.png")} />
            </TouchableOpacity>
            <Text style={styles.text}>{Title}</Text>
        </View>
    )
}

export default React.memo(Title);

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 25,
        color: color.primary,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 18,
        height: 17,
        marginTop: 20,
        
    }
})