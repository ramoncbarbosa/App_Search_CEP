import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Pages/Home/Home";
import { Search } from "../Pages/Search/Search";

const Stack = createNativeStackNavigator();

export function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Search"
        component={Search}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}