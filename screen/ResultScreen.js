import React from 'react';
import { ScrollView, StyleSheet, StatusBar, WebView, ActivityIndicator } from 'react-native';

export default class DiscoverScreen extends React.Component {
    state = {
        logined: false
    }
    static navigationOptions = ({ navigationOptions, navigation }) => {
        return { title: 'Result 成绩' }
    };

    ActivityIndicatorLoadingView() {
        return (

            <ActivityIndicator
                color='#009688'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    render() {
        return (
            <WebView
                source={{ uri: 'https://mobile.4dking.com.my/v2/4d-results-west-malaysia.php' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={this.ActivityIndicatorLoadingView} 
                startInLoadingState={true}  
            />
            // <ScrollView style={styles.container}>

            // </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ActivityIndicatorStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      
    }
});
