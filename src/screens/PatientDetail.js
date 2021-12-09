import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Alert} from "react-native";
import ajax from "../ajax";

class PatientDetail extends React.Component {
    state = {
        patient: []
    }
    async componentDidMount(){
        const { route } = this.props;
        const patientInfo = await ajax.fetchPatientDetail(route.params?.patientId);        
        // console.log(patientInfo);
        this.setState({
            patient: patientInfo
        });
    }
    render() {
        const {patient} = this.state;
        return (
            <FlatList
                data={this.state.patient}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    
                return (
                    <View style={styles.deal}>
                        {/* <TouchableOpacity onPress={this.props.onBack}>
                            <Text style={styles.backLink}>Back</Text>
                        </TouchableOpacity> */}
                        {/* <Image 
                            source={{ }}
                            style={styles.image}
                        /> */}
                
                        <View style={styles.info}>
                            <Text style={styles.title}>{item.firstName} {item.lastName}</Text>
                            <View style={styles.footer}>
                                <Text style={styles.cause}>Age: {item.age}</Text>                                                                
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.price}>Gender: {item.gender}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.cause}>Health Insurance Number: {item.healthInsuranceNo}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.price}>Phone: {item.phoneNo}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.price}>Email: {item.email}</Text>
                            </View>
                            <TouchableOpacity style={styles.clinicalBtn} onPress={() => this.props.navigation.navigate('ClinicalRecords', {
                            patientId: item._id,
                            })} >
                                <Text style={styles.btnClinicalRecords}>View Clinical Records</Text>
                            </TouchableOpacity>

                            <View style={styles.clinicalBtn}>
                                <TouchableOpacity
                                title='Delete'
                                onPress={async() => {
                                    return Alert.alert(
                                        "Are your sure?",
                                        "Are you sure you want to delete this patient?",
                                        [
                                          // The "Yes" button
                                          {
                                            text: "Yes",
                                            onPress: () => {
                                                const result = ajax.deletePatient(item._id);
                                                console.log(result)
                                                if (result !== undefined) {
                                                    Alert.alert(
                                                        "Delete this patient successfully!",
                                                        "",
                                                        [
                                                          { text: "OK", onPress: () => console.log("OK Pressed") }
                                                        ]
                                                      )
                                                      this.props.navigation.reset({
                                                        index: 0,
                                                        routes: [{ name: "PatientList" }],
                                                      });
                                                }
                                            },
                                          },
                                          // The "No" button
                                          // Does nothing but dismiss the dialog when tapped
                                          {
                                            text: "No",
                                          },
                                        ]
                                      );
                                }}>
                                    <Text style={styles.btnDeletePatient}>Delete this patient</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    {
                        patient.user && (<View>
                            <Image source={{ uri:patient.user.avatar }} style={styles.avatar} />
                            <Text>{patient.user.name}</Text>
                        </View>)
                    }
                        <View>
                            <Text>{patient.description}</Text>
                        </View>                        
                    </View>
                    )
                }
            }/>
            
        );
    }
}

const styles = StyleSheet.create({
    backLink: {
        marginBottom: 5,
        color: '#22f',
    },
    deal: {
        marginHorizontal: 12,
        marginTop: 50,
        borderColor: "#bbb",
        borderWidth: 1,
    },
    image:{
        width: "100%",
        height: 150,
        backgroundColor: "#ccc",
    },
    detail: {

    },
    info: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#bbb",
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: 'rgba(237,149,45,0.4)',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        marginTop: 15,
    },
    cause: {
        flex: 2,
    },
    price:{
        flex: 1,
        // textAlign: 'right',
    },
    clinicalBtn: {
        flex: 1,
        textAlign: 'right',
        borderColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 15
    },
    btnClinicalRecords: {
        color: "#1c42eb",
        textAlign: "center",
        fontWeight:"bold"
    },
    btnDeletePatient: {
        color: "#D32F2F",
        textAlign: "center",
        fontWeight: "bold"
    },
    avatar: {
        width: 60,
        height: 60,
    }
})

export default PatientDetail;