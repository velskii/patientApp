import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ajax from "./src/ajax";
import List from "./src/components/List";
import SearchBar from "./src/components/SearchBar";

class PatientList extends React.Component {
    state = {
        patients : [],
        patientsFromSearch: [],
        currentPatientId : null,
    };
    searchPatients = async (searchTerm) => {
      const patientsFromSearch =  await ajax.fetchPatientSearchResults(searchTerm);
      console.log(patientsFromSearch);
      this.setState({ patientsFromSearch });
    }
    clearSearch = () => {
      this.setState({ patientsFromSearch: [], });
    }
    async componentDidMount() {
        const patients = await ajax.fetchInitialPatients();
        // console.log(patients);
        this.setState({ patients });
    }
    setCurrentPatient = (patientId) => {
        this.props.navigation.navigate('PatientDetail', {
            patientId: patientId,
        });
        this.setState({
            // currentPatientId: patientId
        });
    }
    unSetCurrentPatient = () => {
        this.setState({
            currentPatientId: null
        });
    }
    currentPatient = () => {
        return this.state.patients.find(
            (patient) => patient.key === this.state.currentPatientId
        );
    }
    render () {
        const { navigation } = this.props;
        {
            if (this.state.patients.length > 0) {
                return (
                  <View style={styles.main}>
                    <SearchBar />
                    <List patients={this.state.patients} onItemPress={this.setCurrentPatient} />
                    <View style={styles.newPatient}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('AddPatient', {
                                patientId: 86,
                                otherParam: 'anything you want here',
                            })}>
                                <Text>Add a Patient</Text>
                            </TouchableOpacity>
                        </View>
                  </View>
                );
            }
        
        }
        return (
            <View style={styles.container}>
                <View style={styles.newPatient}>
                    <Text>No patient data yet, maybe </Text>
                    <Text style={{color: 'blue'}}
                        onPress={() => navigation.navigate('AddPatient', {
                            patientId: 86,
                        })}>Add a new Patient</Text>
                    <Text> ?</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    main: {
        marginTop: 10,
        height: "100%",
        flex: 99,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },
    newPatient: {
        marginTop: 50,
        height: 30,
        width: 100,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default PatientList;