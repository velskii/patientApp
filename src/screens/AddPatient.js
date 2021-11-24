import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Label } from 'react-native';
import { RadioButton } from 'react-native-paper';

function AddPatient({ route, navigation }) {
    const { patientId } = route.params;
    const [checked, setChecked] = React.useState('male');
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
        <View style={styles.gender}>
            <Text>Gender: </Text>
            <RadioButton
                value="male"
                status={ checked === 'male' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('male')}
            /><Text style={styles.txtGender}>Male</Text>
            <RadioButton
                value="female"
                status={ checked === 'female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('female')}
            /><Text style={styles.txtGender}>Female</Text>
        </View>
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
    gender: {
        flexDirection: 'row',
        marginTop: 10
    },
    txtGender: {
        marginTop: 10
    }
})

export default AddPatient;
