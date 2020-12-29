type NavigationConfig = {
  [key: string]: {
    component: () => JSX.Element;
    options: any;
  };
};

export class AppTemplate {
  public navigation: NavigationConfig;

  constructor(navigation: NavigationConfig) {
    this.navigation = navigation;
  }
}
