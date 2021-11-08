import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Register';
import Login from './Login';
import AddPatient from './AddPatient';


function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.username) {
            console.log("username is "+route.params?.username)
        }
        if (route.params?.userId) {
            console.log("userId is "+route.params?.userId)
        }
        if (route.params?.patientId) {
            console.log("patientId is "+route.params?.patientId)
        }
    }, [route.params?.username, route.params?.userId, route.params?.patientId]);
  
    return (
        <View style={styles.container}>
            
            {
                route.params?.username.length > 0 
                ? (<>
                    <Text>Home Screen</Text>
                    <Text style={styles.label}>UserId: {route.params?.userId}</Text>
                    <Text style={styles.label}>Username: {route.params?.username}</Text>
                    <Button
                        title="AddPatient"
                        onPress={() => navigation.navigate('AddPatient', {
                            patientId: 86,
                            otherParam: 'anything you want here',
                        })} />
                    </>) 
                : (<>
                    <Text>Please register or login first.</Text>
                    <Button
                        style={styles.btn_left}
                        title="Login"
                        onPress={() => navigation.navigate('Login')} />
                    <Button
                    style={styles.btn_right}
                        title="Register"
                        onPress={() => navigation.navigate('Register')} /></>)
            }
        </View>
        );
    }



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen} 
        options={{ title: 'Home' }}/>
        <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ title: 'Register' }}/>
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ title: 'Login' }}
        initialParams={{ patientId: 42 }}/>
        <Stack.Screen 
        name="AddPatient" 
        component={AddPatient} 
        options={{ title: 'AddPatient' }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
        margin: 10,
    },
    btn_left: {
        flex: 1,
    },
    btn_right: {
        flex: 1,
    },
})

export default App;
