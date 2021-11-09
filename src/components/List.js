import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import PropTypes from "prop-types";
import Item from "./Item";

class List extends React.Component {
    static propTypes = {
        patients: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View style={styles.list}>
                <FlatList
                    data={this.props.patients}
                    renderItem={({item}) => 
                    <Item patient={item} onPress={this.props.onItemPress} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: '#ddd',
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    }
})

export default List;