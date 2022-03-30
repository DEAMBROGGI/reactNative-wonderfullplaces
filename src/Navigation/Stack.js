import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetalleScreen from '../Screens/detailScreen';
import CommentsScreen from '../Screens/commentsScreen';
import PlacesScreen from '../Screens/placeScreen';


const Stack = createStackNavigator();
export default function PlaceStackNavigation() {

    return (

        <Stack.Navigator initialRouteName="Places"
            screenOptions={{ headerBackTitle: "Back" }}
        >
            <Stack.Screen name="Lugares" component={PlacesScreen}
                options={{ headerShown: false, }} />
            <Stack.Screen name="Place" component={DetalleScreen} />
            <Stack.Screen name="Comments" component={CommentsScreen} options={({ navigation, route }) => ({
                headerTitle: "Comments"
            })} />
        </Stack.Navigator>

    )
}