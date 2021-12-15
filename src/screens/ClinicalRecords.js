import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from "react-native";
import ajax from "../ajax";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class ClinicalRecords extends React.Component {
    state = {
        clinicalRecords : [],
    };
    async componentDidMount() {
        const { route } = this.props;
        const clinicalRecords = await ajax.fetchClinicalRecords(route.params?.patientId);
        
        this.setState({ clinicalRecords });
    }
    render () {
        const { navigation } = this.props;
        {
            if(this.state.clinicalRecords == 0) {
                return (
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.notification}>No data found</Text>    
                        </View>
                        <View style={styles.btnAddClinical}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('UpdateClinicalRecords', {
                                    patientId: 86,
                                })}>
                                    <Text style={styles.newRecords}>New Records</Text>
                            </TouchableOpacity>
                        </View>
                        <View>

                        </View>
                    </View>
                );
            }
            return (
                <View style={styles.container}>
                    
                    <View style={styles.tableHeader}>
                    </View>
                    <View style={styles.list}>                    
                        <FlatList
                            data={this.state.clinicalRecords}
                            renderItem={({item}) => 
                            <View style={styles.info}>
                                <View style={styles.footer}>
                                    <Text style={styles.taskNameDisplay}>Blood Pressure: </Text>
                                    <Text style={styles.valueDisplay}>{item.bloodPressure}</Text>
                                </View>
                                <View style={styles.footer}>
                                    <Text style={styles.taskNameDisplay}>Respiratory Rate: </Text>
                                    <Text style={styles.valueDisplay}>{item.respiratoryRate}</Text>
                                </View>
                                <View style={styles.footer}>
                                    <Text style={styles.taskNameDisplay}>Blood Oxygen level: </Text>
                                    <Text style={styles.valueDisplay}>{item.bloodOxygenLevel}</Text>
                                </View>
                                <View style={styles.footer}>
                                    <Text style={styles.taskNameDisplay}>Heartbeat Rate: </Text>
                                    <Text style={styles.valueDisplay}>{item.heartBeatRate}</Text>
                                </View>
                                <View style={styles.btnAddClinical}>
                                    <TouchableOpacity
                                            onPress={() => navigation.navigate('UpdateClinicalRecords', {
                                                patientId: item.patientId,
                                            })}>
                                                <Text style={styles.newRecords}>Update Records</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            }
                        />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    btnAddClinical: {
        height: 50,
        textAlign: "right",
        marginRight: 10,
        marginTop: 30
    },
    newRecords: {
        color: "blue",
        textAlign: "center"
    },
    tableHeader: {
        flex: 3,
        fontSize:40,
        flexDirection: 'row',
        justifyContent:'space-around',
        textAlign: 'center',
    },
    taskId: {
        backgroundColor: 'purple',
        width: '25%',
    },
    time: {
        backgroundColor: 'powderblue',
        width: '25%',
    },
    taskName: {
        backgroundColor: 'skyblue',
        width: '25%',
    },
    info: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#bbb"
    },
    footer: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 15,
        marginLeft: 30
    },
    taskNameDisplay:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    valueDisplay: {
        flex: 1,
        textAlign: "right",
        marginRight: 30
    },
    notification: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        margin: 20
    }
});

export default ClinicalRecords;