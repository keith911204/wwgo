import React from 'react';
import { ScrollView, StyleSheet, StatusBar, WebView, ActivityIndicator, Text, View, TouchableHighlight } from 'react-native';

export default class TicketScreen extends React.Component {
    state = {
        logined: false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Ticket 票根' }
    };

    render() {
        return (
            <View  style={styles.container}>
                <ScrollView>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#c4c4c4", padding: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 28, fontWeight: "bold", alignSelf: "center" }}>1+3D</Text>
                    </View>
                    <View style={{ flexDirection: "row", padding: 15, paddingTop: 5 }}>
                        <View style={styles.leftContainer}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>A. 6090</Text>
                            <Text style={{ fontSize: 10, fontWeight: "normal" }}>D, M, T  (STRAIGHT)</Text>
                        </View>
                        <View style={[styles.rightContainer, { flexDirection: "row" }]}>

                            <View style={[styles.leftContainer, { flex: 0, marginRight: 10 }]}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Big 大 : 1</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Small 小 : 0</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", padding: 15, paddingTop: 5 }}>
                        <View style={styles.leftContainer}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>B. 1118</Text>
                            <Text style={{ fontSize: 10, fontWeight: "normal" }}>D, M, T  (STRAIGHT)</Text>
                        </View>
                        <View style={[styles.rightContainer, { flexDirection: "row" }]}>

                            <View style={[styles.leftContainer, { flex: 0, marginRight: 10 }]}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Big 大 : 2</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Small 小 : 2</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", padding: 15, paddingTop: 5 }}>
                        <View style={styles.leftContainer}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>C. 6832</Text>
                            <Text style={{ fontSize: 10, fontWeight: "normal" }}>D, M, T  (IPERM 24)</Text>
                        </View>
                        <View style={[styles.rightContainer, { flexDirection: "row" }]}>

                            <View style={[styles.leftContainer, { flex: 0, marginRight: 10 }]}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Big 大 : 1</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Small 小 : 0</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ borderWidth: 1, borderColor: "#c4c4c4", padding: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}>Total : RM 6.00</Text>

                    </View>

                    <View style={{ flexDirection: "row", padding: 15, paddingTop: 5 }}>
                        <View style={styles.leftContainer}>
                            <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>DRAW 0819/25</Text>
                            <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>8763243-38762734-123283776</Text>
                        </View>
                        <View style={[styles.rightContainer, { flexDirection: "row" }]}>
                            <Text style={{ fontSize: 12, fontWeight: "bold", color: "grey" }}>WED 4/7/2018</Text>

                        </View>

                    </View>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey", alignSelf: "center" }}>Ticket generated : WED 4/7/2018 5:08:39 PM</Text>
                </ScrollView>
                <TouchableHighlight underlayColor="transparent" onPress={()=>{}}>
                    <View style={styles.button}>
                        <Text style={{color:"white", fontWeight: "bold"}}>Bet Again</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ActivityIndicatorStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },
    leftContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        justifyContent: "center"
    },
    rightContainer: {
        justifyContent: 'flex-end',
        justifyContent: "center",
    },
    button:{
        backgroundColor : "#A31919",
        alignItems:"center",
        padding:15
    }
});
