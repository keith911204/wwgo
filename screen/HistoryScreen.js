import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class FriendScreen extends React.Component {
    state = {
        logined: false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'History 记录' }
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableHighlight underlayColor="transparent" onPress={()=>{ this.props.navigation.navigate("TicketScreen") }}>
                <View style={styles.list}>
                    <View style={styles.leftContainer}>
                        <Text style={{color:"#0BA9DE", fontWeight:"bold"}}>WED 4 / 7 / 2018</Text>
                        <Text>5:53:01 PM</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text>RM 48.00</Text>
                        <FontAwesome size={14} color="grey" name="chevron-right" style={{marginLeft:20}}/>
                    </View>
                </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="transparent" onPress={()=>{ this.props.navigation.navigate("TicketScreen") }}>
                <View style={styles.list}>
                    <View style={styles.leftContainer}>
                        <Text style={{color:"#0BA9DE", fontWeight:"bold"}}>WED 4 / 7 / 2018</Text>
                        <Text>5:53:01 PM</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text>RM 18.00</Text>
                        <FontAwesome size={14} color="grey" name="chevron-right" style={{marginLeft:20}}/>
                    </View>
                </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="transparent" onPress={()=>{ this.props.navigation.navigate("TicketScreen") }}>
                <View style={styles.list}>
                    <View style={styles.leftContainer}>
                        <Text style={{color:"#0BA9DE", fontWeight:"bold"}}>WED 4 / 7 / 2018</Text>
                        <Text>5:53:01 PM</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text>RM 8.00</Text>
                        <FontAwesome size={14} color="grey" name="chevron-right" style={{marginLeft:20}}/>
                    </View>
                </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="transparent" onPress={()=>{ this.props.navigation.navigate("TicketScreen") }}>
                <View style={styles.list}>
                    <View style={styles.leftContainer}>
                        <Text style={{color:"#0BA9DE", fontWeight:"bold"}}>WED 4 / 7 / 2018</Text>
                        <Text>5:53:01 PM</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text>RM 2.00</Text>
                        <FontAwesome size={14} color="grey" name="chevron-right" style={{marginLeft:20}}/>
                    </View>
                </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#c4c4c4",
        flexDirection: "row",
        padding:15,
        backgroundColor:"white"
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        justifyContent:"center"
    },
    rightContainer: {
        justifyContent: 'flex-end',
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "row"
    },
});
