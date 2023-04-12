import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from './RouteConstants';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.TAB_NAVIGATOR}
          component={TabNavigator}
          options={{
            headerShown: false,
            headerTitleStyle: {
              fontSize: 19,
              fontFamily: 'italic',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#007bff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
