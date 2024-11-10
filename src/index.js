import React from "react";
import {Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "./screens/SearchScreen";
import { headerBackground } from "./utils/colors";

const Stack = createNativeStackNavigator()

const App=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Search" component={SearchScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;