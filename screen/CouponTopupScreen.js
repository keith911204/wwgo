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

export default class CouponTopupScreen extends React.Component {
    state = {
        logined: false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Coupon Topup 充值券' }
    };

    topup(){

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text>Please key in your coupon number : </Text>
                <Text>请输入你的充值券号码 : </Text>
                <TextInput
                underlineColorAndroid='transparent'
                    style={{ height: 40, borderColor: '#A8A8A8', borderWidth: 1, padding: 5, marginTop: 15, marginBottom: 15 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.coupon}
                    placeholder="Coupon Number 充值券号码"
                    autoFocus={true}
                    keyboardType="number-pad"
                />
                <TouchableHighlight underlayColor="transparent" onPress={()=>{}}>
                    <View style={styles.button}>
                        <Text style={{fontWeight:"bold", color:"#fff"}}>Topup 充值</Text>
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
