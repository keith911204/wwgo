import React from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
    TouchableHighlight,
    Dimensions,
    Alert,
    Text,
    TextInput
} from 'react-native';

export default class BetScreen extends React.Component {
    state = {
        betSite: [],
        number: null,
        big: null,
        small: null,
        betMethod: [],
        betSummary:[]
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Bet 投注' }
    };

    _betSite(int) {
        switch (int) {
            case 1:
                var list = this.state.betSite;
                if (list.includes("SPORT TOTO")) {
                    var index = list.indexOf("SPORT TOTO");
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                } else {
                    list.push("SPORT TOTO")
                }
                this.setState({ betSite: list });
                break;
            case 2:
                var list = this.state.betSite;
                if (list.includes("MAGNUM")) {
                    var index = list.indexOf("MAGNUM");
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                } else {
                    list.push("MAGNUM")
                }
                this.setState({ betSite: list });
                break;
            case 3:
                var list = this.state.betSite;
                if (list.includes("DA MA CAI")) {
                    var index = list.indexOf("DA MA CAI");
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                } else {
                    list.push("DA MA CAI")
                }
                this.setState({ betSite: list });
                break;
        }
    }

    _betSiteContain(param) {
        var index = this
            .state
            .betSite
            .indexOf(param);
        if (index > -1) {
            return true;
        } else {
            return false;
        }
    }

    _betMethodContain(param) {
        var index = this
            .state
            .betMethod
            .indexOf(param);
        if (index > -1) {
            return true;
        } else {
            return false;
        }
    }

    _clearBet() {
        this.setState({
            betSite: [],
            number: null,
            big: null,
            small: null,
            betMethod: [],
        })
    }

    _placeBet() {
        var array = ["8888","1234","4488","4848"];

        if(array.includes(this.state.number)){
            this._alert("This number is not available");
            this.setState({number : null})
            return;
        }
        if (this.state.betSite.length == 0) {
            this._alert("Please select at least one bet site");
            return;
        }
        if (this.state.number == null || this.state.number.length < 4) {
            this._alert("Please enter proper 4 digit number");
            return;
        }
        if ((this.state.big == 0 || this.state.big == null || this.state.big == "") && (this.state.small == 0 || this.state.small == "" || this.state.small == null)) {
            this._alert("Please enter the amount that you want to buy");
            return;
        }
        if (this.state.betMethod.length == 0) {
            this._alert("Please select at least one bet method");
            return;
        }
        if (this.state.big >= 1000 || this.state.big >= 1000 || (parseFloat(this.state.big) + parseFloat(this.state.small)) >= 1000) {
            this._alert("Buy limit exceed");
            this.setState({big : null, small : null})
            return;
        }

        var betSummary = this.state.betSummary;
        this
            .state
            .betMethod
            .forEach(element => {
                if (element == "STRAIGHT") {
                    var betDetail = {
                        number: this.state.number,
                        big: this.state.big != 0 && this.state.big != "" && this.state.big != null
                            ? parseInt(this.state.big, 10)
                            : 0,
                        small: this.state.small != 0 && this.state.small != "" && this.state.small != null
                            ? parseInt(this.state.small, 10)
                            : 0,
                        betMethod: element,
                        betSite: this.state.betSite,
                        total: (this.state.big != 0 && this.state.big != "" && this.state.big != null
                            ? parseInt(this.state.big, 10) * this.state.betSite.length
                            : 0) + (this.state.small != 0 && this.state.small != "" && this.state.small != null
                                ? parseInt(this.state.small, 10) * this.state.betSite.length
                                : 0)
                    }
                    betSummary.push(betDetail)
                }
                if (element == "IPERM") {
                    var betDetail = {
                        number: this.state.number,
                        big: this.state.big != 0 && this.state.big != "" && this.state.big != null
                            ? parseInt(this.state.big, 10)
                            : 0,
                        small: this.state.small != 0 && this.state.small != "" && this.state.small != null
                            ? parseInt(this.state.small, 10)
                            : 0,
                        betMethod: element,
                        betSite: this.state.betSite,
                        total: (this.state.big != 0 && this.state.big != "" && this.state.big != null
                            ? parseInt(this.state.big, 10) * this.state.betSite.length
                            : 0) + (this.state.small != 0 && this.state.small != "" && this.state.small != null
                                ? parseInt(this.state.small, 10) * this.state.betSite.length
                                : 0)
                    }
                    betSummary.push(betDetail)
                }
                if (element == "BOX") {
                    var betDetail = {
                        number: this.state.number,
                        big: this.state.big != 0 && this.state.big != "" && this.state.big != null
                            ? parseInt(this.state.big, 10)
                            : 0,
                        small: this.state.small != 0 && this.state.small != "" && this.state.small != null
                            ? parseInt(this.state.small, 10)
                            : 0,
                        betMethod: element,
                        betSite: this.state.betSite,
                        total: (this.state.big != 0 && this.state.big != "" && this.state.big != null
                            ? parseInt(this.state.big, 10) * this.state.betSite.length
                            : 0) + (this.state.small != 0 && this.state.small != "" && this.state.small != null
                                ? parseInt(this.state.small, 10) * this.state.betSite.length
                                : 0)
                    }
                    betSummary.push(betDetail)
                }
                this.setState({betSummary : betSummary})
                this._clearBet()
                console.log(betSummary)
            });
    }

    _alert(msg) {
        Alert.alert('Message', msg, [
            {
                text: 'OK',
                onPress: () => { }
            }
        ], { cancelable: false })
    }

    _betMethod(int) {
        switch (int) {
            case 1:
                var list = this.state.betMethod;
                if (list.includes("STRAIGHT")) {
                    var index = list.indexOf("STRAIGHT");
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                } else {
                    list.push("STRAIGHT")
                }
                this.setState({ betMethod: list });
                break;
            case 2:
                var list = this.state.betMethod;
                if (list.includes("IPERM")) {
                    var index = list.indexOf("IPERM");
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                } else {
                    list.push("IPERM")
                }
                this.setState({ betMethod: list });
                break;
            case 3:
                var list = this.state.betMethod;
                if (list.includes("BOX")) {
                    var index = list.indexOf("BOX");
                    if (index > -1) {
                        list.splice(index, 1);
                    }
                } else {
                    list.push("BOX")
                }
                this.setState({ betMethod: list });
                break;
        }
    }

    cancel(index){
        var array = this.state.betSummary;
        array.splice(index, 1);
        this.setState({betSummary : array})
    }

   

    allPossibleCases(number) {
        var array = number.split('');
        var count = 0;
        for(var i = 0; i < array.length; i++){
            console.log(i)
        }
    
    }
      

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={{padding:15}}>
                <Text
                    style={{
                        fontWeight: "bold",
                        marginBottom: 10
                    }}>
                    Select Bet Site (投注站) :
                </Text>
                <View style={{
                    flexDirection: "row"
                }}>
                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor="transparent"
                        onPress={() => {
                            this._betSite(1);
                        }}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: this._betSiteContain("SPORT TOTO")
                                    ? "green"
                                    : "#E0E0E0",
                                borderRadius: 5
                            }}>
                            <Text
                                style={{
                                    color: this._betSiteContain("SPORT TOTO")
                                        ? "white"
                                        : "black",
                                    fontWeight: "bold"
                                }}>SPORT TOTO</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor="transparent"
                        onPress={() => {
                            this._betSite(2);
                        }}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: this._betSiteContain("MAGNUM")
                                    ? "green"
                                    : "#E0E0E0",
                                borderRadius: 5
                            }}>
                            <Text
                                style={{
                                    color: this._betSiteContain("MAGNUM")
                                        ? "white"
                                        : "black",
                                    fontWeight: "bold"
                                }}>MAGNUM</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor="transparent"
                        onPress={() => {
                            this._betSite(3);
                        }}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: this._betSiteContain("DA MA CAI")
                                    ? "green"
                                    : "#E0E0E0",
                                borderRadius: 5
                            }}>
                            <Text
                                style={{
                                    color: this._betSiteContain("DA MA CAI")
                                        ? "white"
                                        : "black",
                                    fontWeight: "bold"
                                }}>DA MA CAI</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20
                    }}>
                    <View style={styles.col1}>
                        <Text>Number (号码)</Text>
                        <TextInput
                        underlineColorAndroid='transparent'
                            style={{
                                height: 40,
                                borderColor: '#A8A8A8',
                                borderWidth: 1,
                                padding: 5,
                                marginTop: 10,
                                borderRadius: 10
                            }}
                            onChangeText={(text) => this.setState({ number: text })}
                            value={this.state.number}
                            placeholder="Number 号码"
                            keyboardType="number-pad"
                            maxLength={4} />
                    </View>
                    <View style={styles.col2}>
                        <Text>Big 大 (ABC)</Text>
                        <TextInput
                        underlineColorAndroid='transparent'
                            style={{
                                height: 40,
                                borderColor: '#A8A8A8',
                                borderWidth: 1,
                                padding: 5,
                                marginTop: 10,
                                borderRadius: 10
                            }}
                            onChangeText={(text) => this.setState({ big: text })}
                            value={this.state.big}
                            keyboardType="number-pad" />
                    </View>
                    <View style={styles.col2}>
                        <Text>Small 小 (A)</Text>
                        <TextInput
                        underlineColorAndroid='transparent'
                            style={{
                                height: 40,
                                borderColor: '#A8A8A8',
                                borderWidth: 1,
                                padding: 5,
                                marginTop: 10,
                                borderRadius: 10
                            }}
                            onChangeText={(text) => this.setState({ small: text })}
                            value={this.state.small}
                            keyboardType="number-pad" />
                    </View>
                </View>

                <Text
                    style={{
                        fontWeight: "bold",
                        marginTop: 20,
                        marginBottom: 10
                    }}>
                    Bet Method (投注方法) :
                </Text>
                <View style={{
                    flexDirection: "row"
                }}>
                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor="transparent"
                        onPress={() => {
                            this._betMethod(1)
                        }}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: this._betMethodContain("STRAIGHT")
                                    ? "green"
                                    : "#E0E0E0",
                                borderRadius: 5
                            }}>
                            <Text
                                style={{
                                    color: this._betMethodContain("STRAIGHT")
                                        ? "white"
                                        : "black",
                                    fontWeight: "bold"
                                }}>Straight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor="transparent"
                        onPress={() => {
                            this._betMethod(2)
                        }}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: this._betMethodContain("IPERM")
                                    ? "green"
                                    : "#E0E0E0",
                                borderRadius: 5
                            }}>
                            <Text
                                style={{
                                    color: this._betMethodContain("IPERM")
                                        ? "white"
                                        : "black",
                                    fontWeight: "bold"
                                }}>IPerm</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor="transparent"
                        onPress={() => {
                            this._betMethod(3)
                        }}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: this._betMethodContain("BOX")
                                    ? "green"
                                    : "#E0E0E0",
                                borderRadius: 5
                            }}>
                            <Text
                                style={{
                                    color: this._betMethodContain("BOX")
                                        ? "white"
                                        : "black",
                                    fontWeight: "bold"
                                }}>Box</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                <TouchableHighlight
                    style={{
                        marginTop:20
                    }}
                    underlayColor="transparent"
                    onPress={() => {
                        this._placeBet()
                    }}>
                    <View
                        style={{
                            padding: 10,
                            backgroundColor: "#3B5998",
                            borderRadius: 5
                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                alignSelf: "center"
                            }}>Place Bet</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{
                        marginTop: 20,
                        marginLeft:10
                    }}
                    underlayColor="transparent"
                    onPress={() => {
                        this._clearBet();
                    }}>
                    <View
                        style={{
                            padding: 10,
                            backgroundColor: "red",
                            borderRadius: 5
                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                alignSelf: "center"
                            }}>Clear Bet</Text>
                    </View>
                </TouchableHighlight>
                </View>
                </View>
                <View style={styles.bar}>
                    <Text style={{color: "#fff", fontWeight:"bold"}}>Bet Summary</Text>
                </View>
                {this.state.betSummary.length > 0 ? this.state.betSummary.map((element, index)=>{
                    return(
                        <View key={index} style={[styles.list,{ flexDirection: "row", padding: 15 }]}>
                        <View style={styles.leftContainer}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{index+1} . {element.number}</Text>
                            <Text style={{ fontSize: 10, fontWeight: "normal" }}>{element.betSite.sort().join()}  ({element.betMethod})</Text>
                        </View>
                        <View style={styles.rightContainer}>
                        <View style={{ flexDirection: "row" }}>

                            <View style={[styles.leftContainer, { flex: 0, marginRight: 10 }]}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Big 大 : {element.big}</Text>
                            </View>
                            <View style={styles.rightContainer}>
                                <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>Small 小 : {element.small}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableHighlight underlayColor="transparent" onPress={()=>{this.cancel(index)}}>
                            <Text style={{fontWeight:"bold", color: "red", alignSelf:"flex-end"}}>Cancel</Text>
                            </TouchableHighlight>
                            
                        </View>
                        </View>
                    </View>
                    )
                }) : 
                <View>
                    <View style={styles.list}/>
                    <View style={styles.list}/>
                    <View style={styles.list}/>
                    <View style={styles.list}/>
                    <View style={styles.list}/>
                </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    logo: {
        width: Dimensions
            .get('window')
            .width / 4,
        height: Dimensions
            .get('window')
            .width / 4
    },
    col1: {
        width: (Dimensions.get('window').width - 30) / 2,
        paddingRight: 5
    },
    col2: {
        width: ((Dimensions.get('window').width - 30) / 2) / 2,
        paddingRight: 5
    },
    bar:{
        backgroundColor: "#A31919",
        padding:10,
        alignItems:"center"
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
        justifyContent: "center"
    },
    rightContainer: {
        justifyContent: 'flex-end',
        justifyContent: "center",
    },
});
