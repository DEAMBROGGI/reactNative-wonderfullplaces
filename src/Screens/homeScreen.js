import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >HOME SCREEN DE MI APP EXPO</Text>
      <Button
        onPress={() => navigation.navigate('Places')}
        title="Go to Places"
      />
    </View>
  );
}