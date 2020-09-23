import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen411091Navigator from '../features/BlankScreen411091/navigator';
import BlankScreen311090Navigator from '../features/BlankScreen311090/navigator';
import BlankScreen211088Navigator from '../features/BlankScreen211088/navigator';
import BlankScreen111087Navigator from '../features/BlankScreen111087/navigator';
import BlankScreen011083Navigator from '../features/BlankScreen011083/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen411091: { screen: BlankScreen411091Navigator },
BlankScreen311090: { screen: BlankScreen311090Navigator },
BlankScreen211088: { screen: BlankScreen211088Navigator },
BlankScreen111087: { screen: BlankScreen111087Navigator },
BlankScreen011083: { screen: BlankScreen011083Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
