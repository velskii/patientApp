import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import ajax from "../ajax";

class TaskList extends React.Component {
    state = {
        tasks : [],
    };
    async componentDidMount() {
        const { route } = this.props;
        const tasks = await ajax.fetchTasks(route.params?.userId);
        console.log(tasks);
        this.setState({ tasks });
    }
    render () {
        const { navigation } = this.props;
        const { route } = this.props;
        {
            return (
            <View style={styles.container}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerText}>Task ID</Text>
                    <Text style={styles.headerText}>Time</Text>
                    <Text style={styles.headerText}>Task Name</Text>
                    <Text style={styles.headerText}>Task Status</Text>
                </View>

                <View style={styles.list}>
                    <FlatList
                        data={this.state.tasks}
                        renderItem={({item}) => 
                        <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', {
                            taskId: item._id,
                            userId: route.params?.userId,
                        })}>
                            <View style={styles.info}>
                                <Text style={styles.taskIdDsiplay}>{
                                item._id.substring(1, 8)
                                }</Text>
                                <Text style={styles.taskTimeDisplay}>{item.time}</Text>
                                <Text style={styles.taskNameDisplay}>{item.taskName}</Text>
                                <Text style={styles.taskStatusDisplay}>{item.status}</Text>
                            </View>
                        </TouchableOpacity>}
                    />
            </View>
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tableHeader: {
        marginTop: 30,
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-evenly',
    },
    headerText: {
        fontSize:22,
    },
    list: {
        marginTop: 30,
        borderTopColor: 'red',
        borderTopWidth: 2,
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

export default TaskList;