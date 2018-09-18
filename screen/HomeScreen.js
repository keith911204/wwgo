import React from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
    View,
    Dimensions,
    Text,
    TouchableHighlight,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class HomeScreen extends React.Component {
    state = {
        showAlert: false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Home 主页' }
    };

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    luckyNumber() {
        var val = Math.floor(1000 + Math.random() * 9000);
        this.setState({ luckyNumber: val.toString(), showAlert: true })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />

                <Image style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width / 2 }} source={require('../assets/image/true.jpeg')} />
                {/* <View style={{ flexDirection: "row", padding:10, backgroundColor:"#fff" }}>
                <View style={styles.leftContainer}>
                        <Text style={{fontWeight:'bold'}}>Cash : 1800.00</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={{fontWeight:'bold'}}>Credit : 322.00</Text>
                    </View>
                </View> */}
                <View style={{ flexDirection: "row" }}>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("CouponTopupScreen") }}>
                        <View style={[styles.square, { backgroundColor: "#f2f2f2" }]}>
                            <FontAwesome size={22} name="money" style={{ marginBottom: 10, color: 'red' }} />
                            <Text>充值券充值</Text>
                            <Text>Coupon Topup</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("CashWalletTransferScreen") }}>
                        <View style={styles.square}>
                            <FontAwesome size={22} name="money" style={{ marginBottom: 10, color: 'red' }} />
                            <Text>现金钱包充值</Text>
                            <Text>Wallet Transfer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("BetScreen") }}>
                        <View style={[styles.square, { backgroundColor: "#f2f2f2" }]}>
                            <FontAwesome size={22} name="dollar" style={{ marginBottom: 10, color: 'red' }} />
                            <Text>投注</Text>
                            <Text>Buy Number</Text>
                        </View>
                    </TouchableHighlight>

                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { }}>
                        <View style={styles.square}>
                            <FontAwesome size={22} name="money" style={{ marginBottom: 10, color: 'grey' }} />
                            <Text>提款</Text>
                            <Text>Withdraw</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("HistoryScreen") }}>
                        <View style={[styles.square, { backgroundColor: "#f2f2f2" }]}>
                            <FontAwesome size={22} name="history" style={{ marginBottom: 10, color: 'grey' }} />
                            <Text>记录</Text>
                            <Text>Bet History</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("ProfileScreen") }}>
                        <View style={styles.square}>
                            <FontAwesome size={22} name="user" style={{ marginBottom: 10, color: 'grey' }} />
                            <Text>户口</Text>
                            <Text>Profile</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.luckyNumber() }}>
                        <View style={[styles.square, { backgroundColor: "#f2f2f2" }]}>
                            <FontAwesome size={22} name="star" style={{ marginBottom: 10, color: 'red' }} />
                            <Text>幸运号码</Text>
                            <Text>Lucky Number</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("FavouriteScreen") }}>
                        <View style={styles.square}>
                            <FontAwesome size={22} name="heart" style={{ marginBottom: 10, color: 'red' }} />
                            <Text>红字</Text>
                            <Text>Hot Number</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={[styles.square, { backgroundColor: "#f2f2f2" }]}>
                        <TouchableHighlight underlayColor="#c4c4c4" onPress={() => { this.props.navigation.navigate("ResultScreen") }}>
                            <View style={[styles.square, { backgroundColor: "#f2f2f2" }]}>
                                <FontAwesome size={22} name="comments" style={{ marginBottom: 10, color: 'red' }} />
                                <Text>成绩</Text>
                                <Text>Results</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title={this.state.luckyNumber}
                    message="Lucky Number 幸运号码"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="Thank You 谢谢"
                    confirmText="Again 再来"
                    confirmButtonColor="#DD6B55"
                    cancelButtonColor="#A31919"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        var val = Math.floor(1000 + Math.random() * 9000);
                        this.setState({ luckyNumber: val.toString() })
                    }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    square: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#f4f4f4"
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    rightContainer: {
        justifyContent: 'flex-end'
    }
});
