import React from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    TextInput,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export default class CashWalletTransferScreen extends React.Component {
    state = {
        logined: false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Cash Wallet Transfer 现金钱包' }
    };

    topup(){

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text>Please key in your amount (From Cash Wallet) : </Text>
                <Text>请输入你的充值银额 （从现金钱包） : </Text>
                <TextInput
                underlineColorAndroid='transparent'
                    style={{ height: 40, borderColor: '#A8A8A8', borderWidth: 1, padding: 5, marginTop: 15, marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.coupon}
                    placeholder="Amount 充值银额"
                    autoFocus={true}
                    keyboardType="number-pad"
                />
                <TouchableHighlight underlayColor="transparent" onPress={()=>{}}>
                    <View style={styles.button}>
                        <Text style={{fontWeight:"bold", color:"#fff"}}>Transfer 过账</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    button : {
        backgroundColor : "#A31919",
        padding: 15,
        justifyContent:"center",
        alignItems: "center"
    }
});
