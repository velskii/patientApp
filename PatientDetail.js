import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { priceDisplay } from "./src/util";
import ajax from "./src/ajax";

class PatientDetail extends React.Component {
    state = {
        patient: []
    }
    async componentDidMount(){
        const { route } = this.props;
        const patientInfo = await ajax.fetchPatientDetail(route.params?.patientId);
        console.log(patientInfo);
        this.setState({
            patient: patientInfo
        });
    }
    render() {
        const {patient} = this.state;
        return (
            <View style={styles.deal}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>
                {/* <Image 
                source={{ uri: patient.media[0]}}
                style={styles.image}
                /> */}
                <View style={styles.info}>
                    <Text style={styles.title}>{patient.firstName} {patient.lastName}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.cause}>Age: {patient.age}</Text>
                            <Text style={styles.price}>Gender: {patient.gender}</Text>
                            
                            <TouchableOpacity style={styles.clinicalBtn} onPress={() => this.props.navigation.navigate('ClinicalRecords')} >
                                <Text>Clinical Records</Text>
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
                <View>
                    <Text>Health Status: </Text>
                    <Text>Drug History: </Text>
                    <Text>Allergy History: </Text>
                </View>
            </View>
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
        backgroundColor: '#bbb',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
    }
})

export default PatientDetail;