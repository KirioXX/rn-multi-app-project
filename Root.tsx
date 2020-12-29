import 'react-native-gesture-handler';
import * as React from 'react';
import {getBundleId} from 'react-native-device-info';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AppTemplate} from './types/AppTemplate.d';

const bundleId = getBundleId();
let App: AppTemplate;
if (bundleId.match(/\.app1$/)) {
  App = new (require('./src/app1/index').default)();
} else if (bundleId.match(/\.app2$/)) {
  App = new (require('./src/app2/index').default)();
}

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries(App.navigation).map(([name, config]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={config.component}
            options={config.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
