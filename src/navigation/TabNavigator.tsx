import {StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/Colors';
import {ROUTES} from './RouteConstants';
import More from '../scence/more/More';
import Administration from '../scence/administration/Administration';
import Exploitative from '../scence/exploitative/Exploitative';
import Main from '../scence/main/Main';
import {
  ADMINSTRATOR,
  EXPLOITATIVE,
  MAIN,
  MORE,
} from '../utlis/constants/ImageConstants';
import MoreRoutes from './MoreRoutes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },

        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GREY,
      }}>
      <Tab.Screen
        name={ROUTES.MORE_ROUTES}
        component={MoreRoutes}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'الرئيسية',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image source={MORE} style={styles.image} resizeMode={'cover'} />
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.ADMINISTRATOR}
        component={Administration}
        options={{
          tabBarLabel: 'إدارة المحفظة',

          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={ADMINSTRATOR}
              style={styles.image}
              resizeMode={'cover'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPLOITATIVE}
        component={Exploitative}
        options={{
          tabBarLabel: 'استثماراتي',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={EXPLOITATIVE}
              style={styles.image}
              resizeMode={'cover'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.MAIN}
        component={Main}
        options={{
          tabBarLabel: 'الرئيسية',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image source={MAIN} style={styles.image} resizeMode={'cover'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
