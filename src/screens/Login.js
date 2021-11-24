import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import ajax from '../ajax';

function Login({ route, navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="username" value={username} onChangeText={setUsername}/>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="password" value={password} onChangeText={setPassword}/>
        </View>

        <View style={styles.btnSection}>
          <Button title="Login" onPress={ async () => {
            const user = await ajax.login(username, password);
            console.log(user)
            if (user === undefined) {
              Alert.alert(
                "username doesn't exist or password is not right.",
                "",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              )
            } else {
              console.log(user.userId)
              console.log(user.userName)
              navigation.navigate({
              name: 'Home',
              params: { 
                userId: user.userId, 
                username: user.userName,
                position: user.position,
                loginToken: user.login_token,},
              merge: true,})
            }
            
            }} />
        </View>

        <View style={styles.registerLink}>
          <Text style={styles.linkText}>Do not hava an account yet? </Text>
          <Text style={{color: 'blue',fontSize: 22,}}
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
    btnSection: {
      width: '100%',
      height: '5%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    registerLink: {
        margin: 10,
        marginTop: 30,
        alignItems: 'center'
    },
    linkText: {
      fontSize: 20,
    },
})

export default Login;
