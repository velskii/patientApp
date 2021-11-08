import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { priceDisplay } from "../util";
import ajax from "../ajax";

class DealDetail extends React.Component {
    static propTypes = {
        initialDealData: PropTypes.object.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    state = {
        deal: this.props.initialDealData
    }
    async componentDidMount(){
        const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
        console.log(fullDeal);
        this.setState({
            deal: fullDeal
        });
    }
    render() {
        const {deal} = this.state;
        return (
            <View style={styles.deal}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>
                <Image 
                source={{ uri: deal.media[0]}}
                style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.cause}>{deal.cause.name}</Text>
                            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                        </View>
                </View>
                {
                    deal.user && (<View>
                        <Image source={{ uri:deal.user.avatar }} style={styles.avatar} />
                        <Text>{deal.user.name}</Text>
                    </View>)
                }
                <View>
                    <Text>{deal.description}</Text>
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

export default DealDetail;