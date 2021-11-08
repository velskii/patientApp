import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Register';
import Login from './Login';
import AddPatient from './AddPatient';


function Home({ navigation, route }) {
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
                    <View style={styles.label}>
                        <Text>Home Screen</Text>
                        <Text>UserId: {route.params?.userId}</Text>
                        <Text>Username: {route.params?.username}</Text>
                    </View>
                    <Button
                        title="AddPatient"
                        onPress={() => navigation.navigate('AddPatient', {
                            patientId: 86,
                            otherParam: 'anything you want here',
                        })} />
                    </>) 
                : (<>
                    <Text style={styles.label}>Dont have an account. Please login first.</Text>
                    
                    <View style={styles.btn_group}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View></>)
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
        component={Home} 
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
    },
    input:{
        padding: 10, 
        backgroundColor: 'white'
    },
    label: {
        marginTop: 20,
    },
    btn_group: {
        padding: 15,
        margin: 15,
        textAlign: 'center',
        width: 100,
        height: 50,
        backgroundColor: 'steelblue'
    },
})

export default App;
