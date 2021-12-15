import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ajax from "../ajax";


class TaskDetail extends React.Component {
    state = {
        taskDetail : [],
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
        {
            return (
                <View style={styles.container}>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Task ID: {this.state.taskDetail._id}</Text>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Task Name: {this.state.taskDetail.taskName}</Text>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Time: {this.state.taskDetail.time}</Text>
                    </View>
                    <View style={styles.priority}>
                        <Text style={styles.label}>Priority: normal</Text>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.label}>Task Status: {this.state.taskDetail.status}</Text>
                    </View>
                    <View style={styles.btnSection}>
                        <Button 
                        title='Delete' 
                        onPress={async() => {
                            const result = await ajax.deleteTask(route.params?.taskId, route.params?.userId);
                            console.log(result)
                            if (result !== undefined) {
                                alert(
                                    "deleted successfully.",
                                    "",
                                    [{ text: "OK", onPress:{}}]
                                )
                                navigation.push('TaskList', {
                                userId: route.params?.userId,
                                })
                            }
                        }}/>
                        <Button 
                        title='Update' 
                        onPress={async() => {
                            navigation.navigate('TaskUpdate', {
                                userId: route.params?.userId,
                                taskId: route.params?.taskId
                            })
                        }}/>
                        <Button title='Task List' onPress={()=>navigation.navigate('TaskList', {
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

export default TaskDetail;