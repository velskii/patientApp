import * as React from 'react';
import ajax from "../ajax";
import { Button, View, Text, StyleSheet, TextInput, FlatList, Alert} from 'react-native';

class UpdateClinicalRecords extends React.Component {
    state = {
        clinicalRecords : [],
        bloodPressure: "",
        respiratoryRate: "",
        bloodOxygenLevel: "",
        heartBeatRate: ""
    };
    async componentDidMount() {
        const { route } = this.props;
        const clinicalRecords = await ajax.fetchClinicalRecords(route.params?.patientId);
        
        this.setState({ clinicalRecords });
    }
    render () {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.container}>                    
                <FlatList
                        data={this.state.clinicalRecords}
                        renderItem={({item}) => 
                        <View>
                            <View>
                                <Text style={styles.label}>Blood Pressure: </Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder={item.bloodPressure}
                                    value={this.state.clinicalRecords.bloodPressure}
                                    onChangeText={(input) => {
                                        this.setState({bloodPressure: input});
                                        
                                      }}
                                />
                            </View>
                            <View>
                                <Text style={styles.label}>Respiratory Rate: </Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder={item.respiratoryRate}
                                    value={this.state.respiratoryRate}
                                    onChangeText={(input) => {
                                        this.setState({respiratoryRate: input});
                                        
                                      }}
                                />
                            </View>
                            <View>
                                <Text style={styles.label}>Blood Oxygen level: </Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder={item.bloodOxygenLevel}
                                    value={this.state.bloodOxygenLevel}
                                    onChangeText={(input) => {
                                        this.setState({bloodOxygenLevel: input});
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={styles.label}>Heartbeat Rate: </Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder={item.heartBeatRate}
                                    value={this.state.heartBeatRate}
                                    onChangeText={(input) => {
                                        this.setState({heartBeatRate: input});
                                    }}
                                />
                            </View>
                            <View>
                                <Button title="Update" onPress={async() => {
                                        const result = await ajax.updateClinicalRecords(item.patientId, item._id, 
                                            this.state.bloodPressure, this.state.respiratoryRate, this.state.bloodOxygenLevel, this.state.heartBeatRate);
                                        if (result) {
                                            Alert.alert(
                                                "Update patient successfully!",
                                                "",
                                                [
                                                { text: "OK", ßonPress: () => console.log("OK Pressed") }
                                                ]
                                            )
                                            this.props.navigation.reset({
                                                index: 0,
                                                routes: [{ name: "ClinicalRecords", params: {"patientId": item.patientId} }]
                                            });
                                            // navigation.navigate('ClinicalRecords', {
                                            //     patientId: item.patientId,
                                            //     sth: "nothing"
                                            // })
                                        }       
                                    }}
                                />
                            </View>
                        </View>
                        }
                    />
                </View>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'flex-start',
        margin: 15        
    },
    input:{
        width: 300,
        padding: 10, 
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10
    },
    label:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        // width: '25%',
    },
})

export default UpdateClinicalRecords;
