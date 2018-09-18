import React from 'react';
import { StackNavigator, Header } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import CouponTopupScreen from '../screen/CouponTopupScreen';
import CashWalletTransferScreen from '../screen/CashWalletTransferScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import TicketScreen from '../screen/TicketScreen';


const RootStackNavigator = StackNavigator({
    Main: {
        screen: MainTabNavigator
    },
    CouponTopupScreen: {
        screen: CouponTopupScreen
    },
    CashWalletTransferScreen: {
        screen: CashWalletTransferScreen
    },
    FavouriteScreen: {
        screen: FavouriteScreen
    },
    TicketScreen:{
        screen : TicketScreen
    }
}, {
        navigationOptions: () => ({
            headerTitleAllowFontScaling: false,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#A31919',
            }
        })
    });

export default class RootNavigator extends React.Component {

    render() {
        return <RootStackNavigator />;
    }
}
