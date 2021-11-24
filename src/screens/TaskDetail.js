import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import ajax from "../ajax";


class TaskDetail extends React.Component {
    
    // static propTypes = {
    //     taskId: PropTypes.array.isRequired,
    // }
    state = {
        taskDetail : [],
    };
    async componentDidMount() {
        const { route } = this.props;
        const taskDetail = await ajax.fetchTaskDetail(route.params?.taskId);
        // console.log(taskDetail);
        this.setState({ taskDetail });
    }
    render () {
        const { navigation } = this.props;
        {
            return (
                <View style={styles.container}>
                    <View style={styles.info}>
                    <View>
                        <Text>Task ID: {this.state.taskDetail._id}</Text>
                    </View>
                    <View>
                        <Text>Task Name: {this.state.taskDetail.taskName}</Text>
                    </View>
                    <View>
                        <Text>Time: 10:00 AM</Text>
                    </View>
                    <View>
                        <Text>Proority: High</Text>
                    </View>
                    <View>
                        <Text>Where did the patient have pain?</Text>
                        <Text>butt</Text>
                        <Text>shoulder</Text>
                        <Text>head</Text>
                    </View>
                    <View>
                        <Text>How long has the pain last?</Text>
                        <Text>1 day</Text>
                        <Text>1 week</Text>
                        <Text>1 month</Text>
                    </View>
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                            onPress={() => navigation.navigate('TaskList')}>
                                <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    btn: {
        marginTop: 50,
        paddingTop: 10,
        height: 50,
        width: 100,
        backgroundColor: 'lightblue',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default TaskDetail;