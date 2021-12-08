import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import ajax from "../ajax";
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";

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
            if (this.state.patients != undefined) {
                return (
                    <View>
                      <View style={styles.searchbar}>
                          <SearchBar />
                          <TouchableOpacity
                              onPress={() => navigation.navigate('AddPatient', {
                                  patientId: 86,
                                  otherParam: 'anything you want here',
                              })}>
                              <Text style={{textAlign:"right", color: "blue", marginTop: 10, textAlign: "right"}}>Add a Patient</Text>
                          </TouchableOpacity>
                          
                          </View>
                          <View style={styles.main}>
                              <FlatList
                                    data={this.state.patients}
                                    renderItem={({item}) => 
                                    <Item patient={item} onPress={this.setCurrentPatient} />}
                                />
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
        height: "auto",
        width: "100%"
    },
    searchbar: {
        marginTop: 10,
        height: "auto",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
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