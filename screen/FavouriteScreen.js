import React from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
    TextInput,
    Dimensions,
    Text,
    FlatList
} from 'react-native';

export default class DiscoverScreen extends React.Component {
    state = {
        logined: false,
        numberGroup: ["8888","1234","4488","4848"]
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Hot Number 红字' }
    };

    componentWillMount() {
        // var i;
        // var group = [];
        // for (i = 0; i < 100; i++) {
        //     var number = (Math.floor(Math.random() * 9999)) + 1111;
        //     var numberSet = {number : number}
        //     group.push(numberSet);
        // }
        
      
        // this.setState({ numberGroup :  group});
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topBar}>
                    <TextInput
                    underlineColorAndroid='transparent'
                        style={{ height: 40, borderColor: '#A8A8A8', borderWidth: 1, padding: 5, width: Dimensions.get('window').width - 20, backgroundColor: "#fff", alignSelf: "center" }}
                        onChangeText={(text) => this.setState({ filter : text })}
                        value={this.state.filter}
                        placeholder="Search 搜寻"
                        autoFocus={true}
                        keyboardType="number-pad"
                        maxLength={4}
                    />
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.numberGroup}
                        numColumns={4}
                        renderItem={({ item }) => (
                            <View style={[styles.box, {backgroundColor: this.state.filter == item ? "red" : "#fff"}]}>
                                <Text style={{color:this.state.filter == item ? "#fff" : "#000"}}>{item}</Text>
                            </View>

                        )}
                        keyExtractor={item => item.number}
                    />


                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flexDirection: "row",
        backgroundColor: "#CAD7DB",
        padding: 10
    },
    box:{
        width: Dimensions.get('window').width / 4,
        borderWidth: StyleSheet.hairlineWidth,
        padding:15,
        backgroundColor: "#fff",
        alignItems: "center"
    }
});
