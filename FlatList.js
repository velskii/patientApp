import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ajax from "./src/ajax";
import DealList from "./src/components/DealList";
import DealDetail from "./src/components/DealDetail";
import SearchBar from "./src/components/SearchBar";

class App extends React.Component {
    state = {
        deals : [],
        dealsFromSearch: [],
        currentDealId : null,
    };
    searchDeals = async (searchTerm) => {
      const dealsFromSearch =  await ajax.fetchDealSearchResults(searchTerm);
      this.setState({ dealsFromSearch });
    }
    clearSearch = () => {
      this.setState({ dealsFromSearch: [], });
    }
    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        // console.log(deals);
        this.setState({ deals });
    }
    setCurrentDeal = (dealId) => {
        this.setState({
            currentDealId: dealId
        });
    }
    unSetCurrentDeal = () => {
        this.setState({
            currentDealId: null
        });
    }
    currentDeal = () => {
        return this.state.deals.find(
            (deal) => deal.key === this.state.currentDealId
        );
    }
    render () {
        {
            if (this.state.currentDealId) {
                return <DealDetail initialDealData={this.currentDeal()}
                onBack={this.unSetCurrentDeal}
                />
            }
            if (this.state.deals.length > 0) {
                return (
                  <View style={styles.main}>
                    <SearchBar />
                    <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />
                  </View>
                );
            }
        
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>ptientApp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize:40,
    },
    main: {
      marginTop: 30,
    },
});

export default App;