import React from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, Text, View, Modal, Dimensions, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as user from "../util/user";

export default class SettingScreen extends React.Component {
    state = {
        logined: false,
        qr:false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Profile 户口' }
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.qr} //!false  => true
                    onRequestClose={() => { }}>
                    <View style={{justifyContent:"center",padding:15,backgroundColor:"white",width:Dimensions.get("window").width, height:Dimensions.get("window").height}}>
                    <Image style={{ width:300, height:300, alignSelf:"center" }} source={require('../assets/image/qr.png')} />
                        <TouchableHighlight style={{padding:44, justifyContent:"center", alignItems:"center"}} underlayColor="transparent" onPress={()=>{this.setState({qr:false})}}>
                            <Text style={{alignSelf:"center", fontWeight:"bold",fontSize:14}}>Close 关闭</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => { }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Account 账号户口</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.optionTextContent}>{user.getId()}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.setState({qr : true})}} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>QRCode 二维码</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <FontAwesome size={20} name="qrcode" />
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Change Password 更换密码</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <FontAwesome size={14} name="angle-right" />
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.seperator} />
                <TouchableHighlight onPress={() => { }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Cash Wallet 现金钱包</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.optionTextContent}>{parseFloat(user.getCash()).toFixed(2)}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Credit Wallet 信用钱包</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.optionTextContent}>{parseFloat(user.getCredit()).toFixed(2)}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.seperator} />
                <TouchableHighlight onPress={() => { this.props.navigation.navigate("CouponTopupScreen") }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Coupon Topup 充值券充值</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <FontAwesome size={14} name="angle-right" />
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.props.navigation.navigate("CashWalletTransferScreen") }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Topup From Cash Wallet 现金钱包充值</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <FontAwesome size={14} name="angle-right" />
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.optionText}>Withdraw 提款</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <FontAwesome size={14} name="angle-right" />
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.seperator} />
                <TouchableHighlight onPress={() => { }} underlayColor="#D1D1D1">
                    <View style={styles.optionList}>
                        <Text style={styles.optionText}>登出账号</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    optionList: {
        padding: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#E0E0E0',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionText: {
        fontSize: 14
    },
    optionTextContent: {
        fontSize: 14,
        color: '#999999'
    },
    seperator: {
        minHeight: 10
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    rightContainer: {
        justifyContent: 'flex-end'
    }
});
