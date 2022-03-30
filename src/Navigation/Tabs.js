import * as React from 'react';
import UserFilesScreen from '../Screens/User/UserFilesScreen';
import HomeScreen from '../Screens/homeScreen';
import UserScreen from '../Screens/User/userScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();
export default function UserTabsNavigation() {

    return (

        <Tab.Navigator initialRouteName="UserAccount"
        tabBarOptions={{ 
            activeTintColor: "#000",
            activeBackgroundColor: "#feb72b",
            inactiveTintColor: "#FFF",
            inactiveBackgroundColor: "#527318"
          }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-home" size={size} color={color} /> 
                ) 
              }}
            />
            <Tab.Screen name="UserAccount" component={UserScreen} 
            options={{
                title: "Account",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-person" size={size} color={color} /> 
                ) 
              }}
            />
            <Tab.Screen name="UserFiles" component={UserFilesScreen} options={{
                title: "Files",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-folder" size={size} color={color} /> 
                ) 
              }}
            />
        </Tab.Navigator>

    )
}