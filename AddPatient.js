import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

function AddPatient({ route, navigation }) {
    const { patientId } = route.params;
    return (
      <View style={styles.container}>
        {/* <Text>patientId: {JSON.stringify(patientId)}</Text> */}
        
        <Text>First Name: </Text>
        <TextInput 
            style={styles.input}
            placeholder="First Name"
        />
        <Text>Last Name: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Last Name"
        />
        <Text>Gender: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Gender"
        />
        <Text>Age: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Age"
        />
        <Text>Health Insurance Number: </Text>
        <TextInput 
            style={styles.input}
            placeholder="66666"
        />
        <Text>Phone Number: </Text>
        <TextInput 
            style={styles.input}
            placeholder="123456"
        />
        <Text>Email: </Text>
        <TextInput 
            style={styles.input}
            placeholder="123@gmail.com"
        />
        
        <Button title="Submit" onPress={() => navigation.navigate({
                    name: 'PatientList',
                    params: { patientId: Math.floor(Math.random() * 100) },
                    merge: true,
                  })
        } />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        margin: 10
        // alignItems: 'center', 
        // justifyContent: 'center' 
    },
    input:{
        padding: 10,
        margin: 10,
        backgroundColor: 'white'
    },
    label: {

    },
})

export default AddPatient;
