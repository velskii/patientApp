import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from "react-native";
import ajax from "./src/ajax";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class ClinicalRecords extends React.Component {
    state = {
        tasks : [],
    };
    async componentDidMount() {
        const tasks = await ajax.fetchTasks();
        // console.log(tasks);
        this.setState({ tasks });
    }
    render () {
        const { navigation } = this.props;
        {
            return (
                <View style={styles.container}>
                    <View style={{height: 50, textAlign: 'right',}}>
                    <TouchableOpacity
                            onPress={() => navigation.navigate('AddClinicalRecords', {
                                patientId: 86,
                            })}>
                                <Text>New Records</Text>
                    </TouchableOpacity>
                    </View>
                <View style={styles.tableHeader}>
                <View style={styles.taskId}>
                        <Text>Medical Name</Text>
                    </View>
                    <View style={styles.time}>
                        <Text>Time</Text>
                    </View>
                    <View style={styles.taskName}>
                        <Text>doses</Text>
                    </View>
                </View>
                <View style={styles.list}>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => 
                    <View style={styles.info}>
                        <Text style={styles.taskNameDisplay}>{item.title}</Text>
                        <Text style={styles.taskTimeDisplay}>7:00 AM</Text>
                        <Text style={styles.taskStatusDisplay}>300 ml/day</Text>
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
    TaskStatus: {
        backgroundColor: 'steelblue',
        width: '25%',
    },
    list: {
        backgroundColor: '#ddd',
        flex: 97,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    info: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#bbb",
        borderWidth: 1,
        borderTopWidth: 0,
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    taskIdDsiplay: {
        fontSize: 16,
        width: '25%',
    },
    taskTimeDisplay: {
        fontSize: 16,
        width: '25%',
    },
    taskNameDisplay:{
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        width: '25%',
    },
    taskStatusDisplay:{
        fontSize: 16,
        width: '25%',
    },
});

export default ClinicalRecords;