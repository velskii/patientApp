import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { priceDisplay } from "../util";

class Item extends React.Component {
    static propTypes = {
        patient: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }
    handlePress = () => {
        this.props.onPress(this.props.patient.key);
    }
    render() {
        const {patient} = this.props;
        return (
            <TouchableOpacity onPress={this.handlePress} style={styles.deal} >
                <Image 
                source={{ uri: patient.media[0]}}
                style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>Name: {patient.title}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.cause}>Age: {patient.cause.name}</Text>
                            <Text style={styles.price}>Gender: {priceDisplay(patient.price)}</Text>
                        </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 12,
        flex: 10,
        flexDirection: 'row',
        width: '100%',
    },
    image:{
        width: 60,
        height: 60,
        backgroundColor: "#ccc",
        flex: 1,
    },
    info: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#bbb",
        borderWidth: 1,
        borderTopWidth: 0,
        flex: 9,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
    },
    cause: {
        flex: 2,
    },
    price:{
        flex: 1,
        textAlign: 'right',
    }
})

export default Item;