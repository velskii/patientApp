import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

function Login({ route, navigation }) {
    const [username, setUsername] = React.useState('');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
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
        
        <Button title="Login" onPress={() => navigation.navigate({
                    name: 'Home',
                    params: { username: username, userId: Math.floor(Math.random() * 100) },
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

export default Login;
