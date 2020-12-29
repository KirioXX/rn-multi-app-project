import { AppTemplate } from '../../types/AppTemplate.d';

import HomeScreen from './Home';

export type RootParamList = {
  Home: undefined;
};

export default class App extends AppTemplate {
  constructor() {
    super({
      Home: {
        component: HomeScreen,
      },
    });
  }
}
