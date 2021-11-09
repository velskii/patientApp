import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { priceDisplay } from "../util";
import ajax from "../ajax";

class Detail extends React.Component {
    static propTypes = {
        initialPatientData: PropTypes.object.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    state = {
        patient: this.props.initialPatientData
    }
    async componentDidMount(){
        const fullDeal = await ajax.fetchDealDetail(this.state.patient._id);
        console.log(fullDeal);
        this.setState({
            patient: fullDeal
        });
    }
    render() {
        const {patient} = this.state;
        return (
            <View style={styles.deal}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>
                <Image 
                source={{ }}
                style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{patient.firstName} {patient.lastName}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.cause}>Age: {patient.age}</Text>
                            <Text style={styles.price}>Gender: {patient.gender}</Text>
                        </View>
                </View>
                {
                    patient.user && (<View>
                        <Image source={{ uri:patient.user.avatar }} style={styles.avatar} />
                        <Text>{patient.user.name}</Text>
                    </View>)
                }
                <View>
                    <Text>{patient.description}</Text>
                </View>
                <View>
                    <Text>Health Status: </Text>
                    <Text>Drug History: </Text>
                    <Text>Allergy History: </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backLink: {
        marginBottom: 5,
        color: '#22f',
    },
    deal: {
        marginHorizontal: 12,
        marginTop: 50,
        borderColor: "#bbb",
        borderWidth: 1,
    },
    image:{
        width: "100%",
        height: 150,
        backgroundColor: "#ccc",
    },
    detail: {

    },
    info: {
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#bbb",
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: 'rgba(237,149,45,0.4)',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        marginTop: 15,
    },
    cause: {
        flex: 2,
    },
    price:{
        flex: 1,
        textAlign: 'right',
    },
    avatar: {
        width: 60,
        height: 60,
    }
})

export default Detail;