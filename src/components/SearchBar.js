import React from "react";
import { StyleSheet, TextInput} from "react-native";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

class SearchBar extends React.Component {
    static propTypes = {
        // searchDeals: PropTypes.func.isRequired,
    }
    state = {
        searchTerm: ""
    }
    // debouncedSearchDeals= debounce(this.props.searchDeals, 300)
    handleChange=(searchTerm) => {
        this.setState({ searchTerm }, () => {
            // this.debouncedSearchDeals(this.state.searchTerm)
        });
    }
    render() {
        return (
            <TextInput
            placeholder="Seach all deals"
            style={styles.input}
            onChangeText={this.handleChange}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 12,
    }
})

export default SearchBar;