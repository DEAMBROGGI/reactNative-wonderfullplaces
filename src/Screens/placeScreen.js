import * as React from 'react';
import { Button, View, ScrollView } from 'react-native';
import PlacesCards from '../components/Cards/placesCards';

export default function PlacesScreen({ navigation }) {
  return (
    <>
      <View >
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />

      </View>
      <ScrollView >
        <PlacesCards navigation={navigation} />
      </ScrollView>
    </>
  );
}