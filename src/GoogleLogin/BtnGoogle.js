// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';


// GoogleSignin.configure({
//     webClientId: '651940703726-eiguboa7qod970du6vqkhjs2pb35ggai.apps.googleusercontent.com',
// });

// async function onGoogleButtonPress() {
//     try {
//         await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//         // Get the users ID token
//         const { idToken } = await GoogleSignin.signIn();
//         // Create a Google credential with the token
//         const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//         // Sign-in the user with the credential
//         return auth().signInWithCredential(googleCredential);
//     } catch (error) {
//         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//             // user cancelled the login flow
//             console.log(statusCodes.SIGN_IN_CANCELLED)
//         } else if (error.code === statusCodes.IN_PROGRESS) {
//             // operation (e.g. sign in) is in progress already
//             console.log(statusCodes.IN_PROGRESS)
//         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//             // play services not available or outdated
//             console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
//         } else {
//             // some other error happened
//             console.log(error.messege)
//         }
//     }
// }
// const BtnGoogle = ({ navigation }) => {
//     return (
//         <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => navigation.navigate('Home'))} style={styles.btn1}>
//             <Image style={styles.btn} source={require('../assets/images/google.png')} />
//         </TouchableOpacity>
//     )
// }

// export default React.memo(BtnGoogle);

// const styles = StyleSheet.create({
//     btn1: {
//         width: 150,
//         height: 60,
//         marginTop: 20,
//         alignSelf: 'center',
//     },
//     btn: {
//         width: 150,
//         height: 60,
//         borderRadius: 10,

//     }
// })