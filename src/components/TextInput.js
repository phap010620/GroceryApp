import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { color } from '../untils/Color'

const TextInput1 = ({ placehoder, options, label, type, isPassword, value, style, onChangeText, ...props }) => {
    const [isVisible, setisVisible] = useState(true);
    const [isModal, setisModal] = useState(false);
    const onPress = () => {
        setisVisible(!isVisible);
    }
    const selectedText = (otp) => {
        onChangeText(otp);
        setisModal(false);
    }
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            {type === 'picker' ? (
                <TouchableOpacity onPress={() => setisModal(true)} style={styles.container}>
                    {value ? (
                        <Text style={styles.textInput2}>{value?.title}</Text>

                    ) : (
                        <Text style={styles.textInput2}>{placehoder}</Text>
                    )
                    }

                    <Image style={styles.imgEye2} source={require('../assets/icons/back3.png')} />
                </TouchableOpacity>
            ) : (
                <View>
                    <TextInput value={value} onChangeText={onChangeText}
                        secureTextEntry={!isVisible} placeholder={placehoder}
                        {...props} style={[styles.textInput, style]} />
                    <Text style={styles.eye}>
                        {isPassword && <Text onPress={onPress}>{isVisible ? <Image style={styles.imgEye} source={require('../assets/icons/eyeOn.png')} /> : <Image style={styles.imgEye} source={require('../assets/icons/eyeOff.png')} />}</Text>}
                    </Text>
                </View>
            )}

            <Modal transparent={true} visible={isModal}>
                <TouchableOpacity style={styles.containerModal}>
                    <View>
                        <View style={{ width: 300, height: 200, backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                            <Text style={styles.text1}>Select options</Text>
                            {
                                options?.map(otp => {                                 
                                    if (!otp?.id) {
                                        return null;
                                    }

                                    const Selected = value?.id === otp?.id;
                                    return (
                                        <Text onPress={() => selectedText(otp)} style={[styles.text2, Selected ? styles.selectedOption : {}]} key={otp?.title}>{otp.title}</Text>
                                    )
                                })
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>

    )
}

export default React.memo(TextInput1);

const styles = StyleSheet.create({
    selectedOption: {
        fontWeight: 'bold',
        color: color.primary,
    },
    text2: {
        fontSize: 16,
        fontWeight: '400',
        color: color.black,
        marginBottom: 5
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: color.black,
        marginBottom: 10,
    },
    containerModal: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    imgEye2: {
        width: 10,
        height: 20,
        marginLeft: 310,
        position: 'absolute',
        //xoay ảnh 90 độ
        transform: [{ rotate: '269deg' }],
        top: 30

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgEye: {
        width: 28,
        height: 27.5,
    },
    eye: {
        position: 'absolute',
        right: 18,
        top: 15,
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
    },
    textInput2: {
        borderWidth: 1,
        borderColor: color.grey,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        width: 350,
        height: 60,
        paddingTop: 20,
    }
})