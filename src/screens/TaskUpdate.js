import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";
import ajax from "../ajax";


class TaskUpdate extends React.Component {
    state = {
        taskDetail : [],
        taskNameInput: "",
        taskTimeInput: "",
        taskStatusInput: "",
        taskPriorityInput: ""
    };
    async componentDidMount() {
        const { route } = this.props;
        const taskDetail = await ajax.fetchTaskDetail(route.params?.taskId, route.params?.userId);
        // console.log(taskDetail);
        this.setState({ taskDetail });
    }
    render () {
        const { navigation } = this.props;
        const { route } = this.props;
        var taskNameInput = this.state.taskNameInput
        {
            return (
                <View style={styles.container}>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Task ID: {this.state.taskDetail._id}</Text>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Task Name: </Text>
                        <TextInput style={styles.input} 
                        defaultValue={this.state.taskDetail.taskName} 
                        onChangeText={value => {
                            this.state.taskNameInput=value
                        }}/>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Time: </Text>
                        <TextInput style={styles.input} defaultValue={this.state.taskDetail.time} 
                        onChangeText={value => {
                            this.state.taskTimeInput=value
                        }}/>
                    </View>
                    <View style={styles.priority}>
                        <Text style={styles.label}>Priority:</Text>
                        <TextInput style={styles.input} defaultValue="normal" 
                        onChangeText={value => {
                            this.state.taskPriorityInput=value
                        }}
                        />
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Task Status: </Text>
                        <TextInput style={styles.input} defaultValue={this.state.taskDetail.status} 
                        onChangeText={value => {
                            this.state.taskStatusInput=value
                        }}
                        />
                    </View>

                    <View style={styles.btnSection}>
                        <Button 
                        title='Update' 
                        onPress={async() => {
                        
                            const result = await ajax.updateTask(route.params?.taskId, route.params?.userId, this.state.taskNameInput, this.state.taskTimeInput, this.state.taskStatusInput );
                            if (result !== undefined) {
                                alert(
                                    "update successfully.",
                                    "",
                                    [{ text: "OK", onPress:{}}]
                                )
                                navigation.push('TaskList', {
                                userId: route.params?.userId,
                                sth: "nothing"
                                })
                            }
                        }}/>
                        <Button title='TaskList' onPress={()=>navigation.navigate('TaskList', {
                                        userId: route.params?.userId,
                                        })}/>
                    </View>
                    
                </View>
            );
        }
    }
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
    input:{
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default TaskUpdate;