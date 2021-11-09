import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

function AddClinicalRecords({ route, navigation }) {
    const { patientId } = route.params;
    return (
        <View style={styles.container}>
        <Text>patientId: {JSON.stringify(patientId)}</Text>
        
        <Text>Blood Pressure: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Blood Pressure"
        />
        <Text>Respiratory Rate: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Respiratory Rate"
        />
        <Text>Blood Oxygen Level: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Blood Oxygen Level"
        />
        <Text>Heartbeat Rate: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Heartbeat Rate"
        />
        
        <Button title="Submit" onPress={() => navigation.navigate({
                    name: 'ClinicalRecords',
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

export default AddClinicalRecords;
