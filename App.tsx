import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import LoginPage from './src/RecipientUI/LoginPage.tsx';
import RegistrationPage1 from "./src/RecipientUI/RegistrationPage1"
import RegistrationPage2 from "./src/RecipientUI/RegistrationPage2.tsx"
import RegistrationPage3 from "./src/RecipientUI/RegistrationPage3.tsx"
import RequestIC from "./src/RecipientUI/requestIC.tsx"
import ProfilePage from "./src/RecipientUI/ProfilePage.tsx"
import BottomTabNavigator from "./src/RecipientUI/BottomTabNavigator.tsx"
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <View style={styles.container}>
        <ProfilePage/>
       {/*
       <LoginPage/>

       <RegistrationPage2/>
       */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      paddingTop: 50,
  },
});


export default App;
