import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React,{useState} from 'react'
import { color } from '../untils/Color'

const TextInput1 = ({ placehoder, label, isPassword, value, onChangeText }) => {
    const [isVisible, setisVisible] = useState(true);
    const onPress = () => {
        setisVisible(!isVisible);
    }
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} secureTextEntry={!isVisible} placeholder={placehoder} style={styles.textInput} />
            <Text style={styles.eye}>
                {isPassword && <Text onPress={onPress}>{isVisible ? <Image style={styles.imgEye} source={require('../assets/icons/eyeOn.png')} /> : <Image style={styles.imgEye} source={require('../assets/icons/eyeOff.png')} />}</Text>}
            </Text>
        </View>
    )
}

export default React.memo(TextInput1);

const styles = StyleSheet.create({
    imgEye: {
        width: 28,
        height: 27.5,
    },
    eye: {
        position: 'absolute',
        right: 20,
        top: 39,
        alignSelf: 'flex-end',
        width: 34,
        height: 33,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: color.primary,
    },
    textInput: {
        borderWidth: 1,
        borderColor: color.grey,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        width: 350,
        height: 60,

    }
})