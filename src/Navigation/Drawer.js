import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/homeScreen';
import PlaceStackNavigation from './Stack'
import UserTabsNavigation from './Tabs'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Places" component={PlaceStackNavigation} />
            <Drawer.Screen name="User" component={UserTabsNavigation} />   
        </Drawer.Navigator>

    );
} 
 

