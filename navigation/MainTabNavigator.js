import { TabNavigator, TabBarBottom } from 'react-navigation';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screen/HomeScreen';
import BetScreen from '../screen/BetScreen';
import ResultScreen from '../screen/ResultScreen';
import HistoryScreen from '../screen/HistoryScreen';
import ProfileScreen from '../screen/ProfileScreen';

export default TabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    ResultScreen: {
        screen: ResultScreen
    },
    BetScreen: {
        screen: BetScreen
    },
    HistoryScreen: {
        screen: HistoryScreen
    },
    ProfileScreen: {
        screen: ProfileScreen
    }
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'HomeScreen':
                        iconName = 'home';
                        break;
                    case 'ResultScreen':
                        iconName = 'comments';
                        break;
                    case 'BetScreen':
                        iconName = 'dollar';
                        break;
                    case 'HistoryScreen':
                        iconName = 'history';
                        break;
                    case 'ProfileScreen':
                        iconName = 'user';
                        break;
                }
                return (<FontAwesome
                    name={iconName}
                    size={25}
                    style={{
                        marginBottom: 0
                    }}
                    color={focused
                        ? "yellow"
                        : "#fff"} />);
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            allowFontScaling: false,
            showLabel: false,
            inactiveTintColor: "#fff",
            activeTintColor: "#fff",
            labelStyle: {
                marginBottom: 3,
            },
            style: {
                backgroundColor: "#A31919"
            }
        }
    });
