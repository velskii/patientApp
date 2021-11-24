import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import Register from './Register';

function Login({ route, navigation }) {
    const [username, setUsername] = React.useState('');
    return (
      <View style={styles.container}>
        <Text>Username</Text>
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
        
        <Button title="Login" onPress={() => navigation.navigate({
                    name: 'Home',
                    params: { username: username, userId: Math.floor(Math.random() * 100) },
                    merge: true,
                  })
        } />
        <View style={styles.registerLink}>
          <Text>Do not hava an account yet? </Text>
          <Text style={{color: 'blue'}}
                  onPress={() => navigation.navigate({
                    name: 'Register',
                  })
                }>Register</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        marginTop: 50
    },
    input:{
        padding: 10,
        margin: 10,
        backgroundColor: 'white'
    },
    registerLink: {
        margin: 10
    },
})

export default Login;
