import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, Linking } from 'react-native';

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
            <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://google.com')}>
                By signing up, you are agree to our terms of Service and Privacy policy
            </Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate({
                    name: 'Login',
                    params: { username: username },
                    merge: true,
                  })
                } />
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
})

export default Register;
