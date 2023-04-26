import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// IMPORT THE NEEDED PAGES
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FourTwentyExpress from './pages/fourTwentyExpress';

// CREATE THE STACK
const Stack = createStackNavigator();

function App() {
  <NavigationContainer>
    <Stack.Navigator initialRouteName='HomePage'>
      {/** The Home page  */}
      <Stack.Screen 
        name='HomePage'
        component={HomePage}
        options={
          {
            title: "HomePage",
            
          }
        }/>
      {/** The Login page  */}
      <Stack.Screen 
        name='LoginPage'
        component={LoginPage}
        options={
          {
            title: "LoginPage",
            
          }
        }/>
      {/** four twenty express  */}
      <Stack.Screen 
        name='FourTwentyExpress'
        component={FourTwentyExpress}
        options={
          {
            title: "FourTwentyExpress",
            
          }
        }/>
      {/** MajorKill minis  */}
    </Stack.Navigator>
  </NavigationContainer>
}//end app function

export default App;

