import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Register';
import Login from './Login';
import AddPatient from './AddPatient';
import PatientList from './PatientList';
import PatientDetail from './PatientDetail';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import ClinicalRecords from './ClinicalRecords';
import AddClinicalRecords from './AddClinicalRecords';


function Home({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.username) {
            console.log("username is "+route.params?.username)
        }
        if (route.params?.userId) {
            console.log("userId is "+route.params?.userId)
        }
        if (route.params?.loginToken) {
            console.log("loginToken is "+route.params?.loginToken)
        }
        if (route.params?.position) {
            console.log("position is "+route.params?.position)
        }
    }, [route.params?.username, route.params?.userId, route.params?.position, route.params?.loginToken]);
  
    return (
        <View style={styles.container}>
            
            {
                route.params?.username.length > 0 
                ? (<>
                    <View style={styles.header}>
                        <Text  style={styles.headerText}>Home Screen</Text>
                    </View>

                    <View style={styles.info}>
                        <Image
                            style={{width: 100, height: 100, marginBottom: 20}}
                            source={require('../../assets/pharmaceutical-medical-symbol.jpeg')}
                        />
                        <Text>UserId: {route.params?.userId}</Text>
                        <Text>Username: {route.params?.username}</Text>
                        <Text>position: {route.params?.position}</Text>
                        <Text>loginToken: {route.params?.loginToken}</Text>
                    </View>
                    <View style={styles.btn_group}>
                        <View style={styles.patientList}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('TaskList', {
                                patientId: 86,
                            })}>
                                <Text style={styles.textColor}>Your Task List</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.patientList}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('PatientList')}>
                                <Text style={styles.textColor}>Patient List</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    </>) 
                : (<>
                    <View style={styles.info}>
                        <Image
                            style={{width: 100, height: 100, marginBottom: 20}}
                            source={require('../../assets/pharmaceutical-medical-symbol.jpeg')}
                        />
                        <Text>Please login to start your session.</Text>
                        <View style={styles.btn_login}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.txtLogin}>Login</Text>
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
            options={{ title: 'Add New Patient' }}/>
        <Stack.Screen 
            name="PatientList" 
            component={PatientList} 
            options={{ title: 'Patient List' }}/>
        <Stack.Screen 
            name="PatientDetail" 
            component={PatientDetail} 
            options={{ title: 'Patient Detail' }}/>
        <Stack.Screen 
            name="ClinicalRecords" 
            component={ClinicalRecords} 
            options={{ title: 'Clinical Records' }}/>
        <Stack.Screen 
            name="AddClinicalRecords" 
            component={AddClinicalRecords} 
            options={{ title: 'Add New Clinical Records' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "#FDFFB7",
        paddingStart:20,
    },
    header: {
        marginTop: 50,
        alignItems: 'center', 
    },
    headerText: {
        fontSize: 30,
        color: 'green',
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
    patientList: {
        marginTop: 50,
        color: '#FFC745',
        height: 70,
        width: "auto",
        backgroundColor: '#005C5B',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFC745',
        borderRadius: 20
    },
    txtLogin: {
        color: "white"
    },
    textColor: {
        color: "#FFC745",
        fontSize: 16,
        fontWeight: "bold",
        margin: 20
    }
})

export default App;
