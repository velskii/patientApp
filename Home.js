import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Register';
import Login from './Login';
import AddPatient from './AddPatient';
import PatientList from './PatientList';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';


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
                    <View style={styles.info}>
                        <Text>Home Screen</Text>
                        <Text>UserId: {route.params?.userId}</Text>
                        <Text>Username: {route.params?.username}</Text>
                    </View>
                    <View style={styles.btn_group}>
                        <View style={styles.taskListBtn}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('TaskList', {
                                patientId: 86,
                            })}>
                                <Text>Your Task List</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addPatient}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('AddPatient', {
                                patientId: 86,
                                otherParam: 'anything you want here',
                            })}>
                                <Text>Add a Patient</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.patientList}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('PatientList')}>
                                <Text>Patient List</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    </>) 
                : (<>
                    <View style={styles.info}>
                        <Text>Don't have an account. Please login first.</Text>
                        <View style={styles.btn_login}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </>)
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
        name="TaskList" 
        component={TaskList} 
        options={{ title: 'Your Task List' }}/>
        <Stack.Screen 
        name="TaskDetail" 
        component={TaskDetail} 
        options={{ title: 'About this Task' }}/>
        <Stack.Screen 
        name="AddPatient" 
        component={AddPatient} 
        options={{ title: 'Add Patient' }}/>
        <Stack.Screen 
        name="PatientList" 
        component={PatientList} 
        options={{ title: 'Patient List' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        
    },
    info: {
        alignItems: 'center', 
        marginTop: 20,
    },
    input:{
        padding: 10, 
        backgroundColor: 'white'
    },
    btn_login: {
        padding: 15,
        margin: 15,
        textAlign: 'center',
        width: 100,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'steelblue'
    },
    btn_group: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        justifyContent: 'space-around',
    },
    addPatient: {
        marginTop: 50,
        height: 50,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    taskListBtn: {
        marginTop: 50,
        height: 50,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    patientList: {
        marginTop: 50,
        color: 'blue',
        height: 50,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
})

export default App;
