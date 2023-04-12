import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './RouteConstants';
import More from '../scence/more/More';
import InvestmentProductUI from '../scence/investmentProduct/InvestmentProductUI';

const Stack = createNativeStackNavigator();
const MoreRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.INVESTMENT}
        component={InvestmentProductUI}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MoreRoutes;

const styles = StyleSheet.create({});
