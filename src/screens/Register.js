// import * as React from 'react';
import React, {useState} from 'react';
import { Button, View, Text, TextInput, StyleSheet, Linking, CheckBox, Alert } from 'react-native';
import ajax from '../ajax';
import { RadioButton } from 'react-native-paper';

function Register({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = React.useState('doctor');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Register</Text>
            </View>

            <View style={styles.textSection}>
                <Text  style={styles.label}>User name</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text  style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Text  style={styles.label}>Repeat your Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="password"
                    value={repeatPassword}
                    onChangeText={setRepeatPassword}
                />
                <Text  style={styles.label}>Choose your position</Text>
            </View>
            <View style={styles.position}>
                <RadioButton
                    value="doctor"
                    status={ checked === 'doctor' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('doctor')}
                />
                <Text>doctor</Text>
                <RadioButton
                    value="nurse"
                    status={ checked === 'nurse' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('nurse')}
                />
                <Text>nurse</Text>
                <RadioButton
                    value="administrator"
                    status={ checked === 'administrator' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('administrator')}
                />
                <Text>administrator</Text>
            </View>
            <View style={styles.terms}>
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('http://google.com')}>Agree with Terms and policy</Text>
            </View>
            <View style={styles.btnSection}>
                <Button
                    title="Register"
                    onPress={async() => {
                        if (password.length < 6) {
                            alert("password's length should >= 6.",
                            "",
                            [
                              { text: "OK", onPress: {} }
                            ]);
                        } else if (password != repeatPassword) {
                            alert("password not same with repeat password.",
                            "",
                            [
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]);
                        } else {
                            console.log(username)
                            console.log(password)
                            console.log(checked)
                            const result = await ajax.register(username, password, checked);
                            console.log(result)
                            if (result !== undefined) {
                                    alert("Register successfully.","",[{ text: "OK", onPress: () => {}}]);
                                    navigation.navigate({
                                        name: 'Login'
                                    })
                            }
                        } 
                    }} />
            </View>
            
            <View style={styles.loginLink}>
                <Text style={{fontSize: 18,}}>Already hava an account? </Text>
                <Text style={{color: 'blue', fontSize: 20,}}
                        onPress={() => navigation.navigate({
                            name: 'Login',
                        })
                        }>Login</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        marginTop: 50,
        paddingStart:20,
    },
    header: {
      alignItems: 'center', 
    },
    headerText: {
      fontSize: 30,
      color: 'green',
    },
    textSection: {
      width: '80%',
      height: '30%',
      margin: 20,
      marginTop: 50,
    },
    label: {
        marginLeft: 20,
        fontSize: 20,
    },
    input:{
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
    },
    position: {
        marginTop: 60,
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    terms: {
        marginLeft: 60,
        flexDirection: 'row',
        width: '800%',
        height: '3%',
        alignItems: 'center',
    },
    btnSection: {
        paddingTop: 20,
        width: '100%',
        height: '3%',
        alignItems: 'center',
    },
    loginLink: {
        marginTop: 40,
        width: '100%',
        height: '5%',
        alignItems: 'center',
    },
})

export default Register;
