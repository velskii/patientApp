import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import ajax from "../ajax";

function CreateTask({ route, navigation }) {
    const [taskName, setTaskName] = React.useState('');
    const [taskTime, setTaskTime] = React.useState('');
    const [checked, setChecked] = React.useState('high');
    const [status, setStatus] = React.useState('assigned');

    return (
        <View style={styles.container}>
            <View style={styles.textSection}>
                <Text  style={styles.label}>Task for userId: {route.params?.userId}</Text>
            </View>

            <View style={styles.textSection}>
                <Text style={styles.label}>Task Name: </Text>
                <TextInput 
                style={styles.textInput}
                onChangeText={text => setTaskName(text)}
                value={taskName}/>
            </View>

            <View style={styles.textSection}>
                <Text style={styles.label}>Task Time:  </Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => setTaskTime(text)}
                    value={taskTime}/>
            </View>
            
            <View style={styles.priority}>
                <Text style={styles.label}>Priority: </Text>
                <RadioButton
                    value="high"
                    status={ checked === 'high' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('high')}
                />
                <Text>high</Text>
                <RadioButton
                    value="low"
                    status={ checked === 'low' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('low')}
                />
                <Text>low</Text>
            </View>
            <View style={styles.textSection}>
                <Text style={styles.label}>Task Initial Status: </Text>
            </View>
            <View style={styles.status}>
                <Text>assigned</Text>
                <RadioButton
                    value="assigned"
                    status={ status === 'assigned' ? 'checked' : 'unchecked' }
                    onPress={() => setStatus('assigned')}
                />
            </View>
            <View style={styles.status}>
                <Text>In Process</Text>
                <RadioButton
                    value="inProcess"
                    status={ status === 'inProcess' ? 'checked' : 'unchecked' }
                    onPress={() => setStatus('inProcess')}
                />
            </View>
            <View style={styles.status}>
                <Text>declined</Text>
                <RadioButton
                    value="declined"
                    status={ status === 'declined' ? 'checked' : 'unchecked' }
                    onPress={() => setStatus('declined')}
                />
            </View>
            <View style={styles.status}>
                <Text>closed</Text>
                <RadioButton
                    value="closed"
                    status={ status === 'closed' ? 'checked' : 'unchecked' }
                    onPress={() => setStatus('closed')}
                />
            </View>

            <View style={styles.btnSection}>
                <Button 
                title='Submit' 
                onPress={async() => {
                    const task = await ajax.createTask(route.params?.userId, taskName, taskTime, status);
                    console.log(task)
                    if (task === undefined) {
                        alert(
                            "create failed, please try later.",
                            "",
                            [
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                          )
                    }else {
                        alert(
                            "create successfully.",
                            "",
                            [
                              { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                          )
                        navigation.navigate('TaskList', {
                            userId: route.params?.userId,
                        })
                    }
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        paddingStart:20,
        marginTop: 40,
    },
    textSection: {
        margin: 10,
        flexDirection: 'row',
    },
    textInput: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 ,
    },
    label: {
        marginLeft: 20,
        fontSize: 20,
    },
    priority: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btnSection: {
        height: '10%',
    },
});

export default CreateTask;