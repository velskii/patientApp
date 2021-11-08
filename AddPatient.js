import * as React from 'react';
import { Button, View, Text } from 'react-native';

function AddPatient({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AddPatient Screen</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
}


export default AddPatient;
