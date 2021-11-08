import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

function AddPatient({ route, navigation }) {
    const { patientId, otherParam } = route.params;
    return (
      <View style={styles.container}>
        <Text>AddPatient Screen</Text>
        <Text>patientId: {JSON.stringify(patientId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        
        <Text>Something to input</Text>
        <TextInput 
            style={styles.input}
            placeholder="something"
        />
        
        <Button title="Add" onPress={() => navigation.navigate({
                    name: 'Home',
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

export default AddPatient;
