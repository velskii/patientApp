import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, Linking } from 'react-native';
import Login from './Login';

function Register({ navigation }) {
    const [username, setUsername] = React.useState('');
    return (
        <View style={styles.container}>
            
            <Text>User name</Text>
            <TextInput 
                style={styles.input}
                placeholder="username"
                value={username}
                onChangeText={setUsername}
             />
            <Text>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder="password"
            />
            <Text>Repeat your Password</Text>
            <TextInput 
                style={styles.input}
                placeholder="password"
            />
            <View style={styles.termLink}>
                <Text>By signing up, you are agree to our </Text>
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('http://google.com')}>Terms of Service and Privacy policy</Text>
            </View>
            
            <Button
                title="Register my account"
                onPress={() => navigation.navigate({
                    name: 'Login',
                    params: { username: username },
                    merge: true,
                  })
                } />
            <View style={styles.loginLink}>
                <Text>Already hava an account? </Text>
                <Text style={{color: 'blue'}}
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
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    input:{
        padding: 10, 
        backgroundColor: 'white'
    },
    label: {

    },
    loginLink: {

    },
    termLink: {

    },
})

export default Register;
