import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import ajax from '../ajax';

function AddPatient({ route, navigation }) {
    const { patientId } = route.params;
    const [checked, setChecked] = React.useState('Male');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [healthInsuranceNo, setHealthInsuranceNo] = React.useState('');
    const [phoneNo, setPhoneNo] = React.useState('');
    const [email, setEmail] = React.useState('');
    
    return (
      <View style={styles.container}>
        {/* <Text>patientId: {JSON.stringify(patientId)}</Text> */}
        <form>
        <Text>First Name: </Text>
        <TextInput 
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
        /><br/>
        <Text>Last Name: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
        />
        <View style={styles.gender}>
            <Text>Gender: </Text>
            <RadioButton
                value="Male"
                status={ checked === 'Male' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Male')}
            /><Text style={styles.txtGender}>Male</Text>
            <RadioButton
                value="Female"
                status={ checked === 'Female' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Female')}
            /><Text style={styles.txtGender}>Female</Text>
        </View>
        <Text>Age: </Text>
        <TextInput 
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={setAge}
        />
        <br/>
        <Text>Health Insurance Number: </Text>
        <TextInput 
            style={styles.input}
            placeholder="66666"
            value={healthInsuranceNo}
            onChangeText={setHealthInsuranceNo}
        />
        <br/>
        <Text>Phone Number: </Text>
        <TextInput 
            style={styles.input}
            placeholder="123456"
            value={phoneNo}
            onChangeText={setPhoneNo}
        />
        <br/>
        <Text>Email: </Text>
        <TextInput 
            style={styles.input}
            placeholder="123@gmail.com"
            value={email}
            onChangeText={setEmail}
        />
        
        <Button title="Submit" 
                onPress={async() => {
                const result = await ajax.addPatient(firstName, lastName, age, checked, healthInsuranceNo, phoneNo, email);
                if (result !== undefined) {
                    
                    alert("Add a new patient successfully!");
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "PatientList" }],
                      });               
                    
                }       
            }}
        />
        </form>
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
