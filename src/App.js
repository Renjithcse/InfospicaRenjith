import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeList from './EmployeeList';
import EmployeeContext from './context/employee/EmployeeContext';
import NewEmployee from './NewEmployee';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <EmployeeContext>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={EmployeeList} />
                        <Stack.Screen name="newEmp" component={NewEmployee} options={{
                            presentation: 'modal'
                        }}  />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </EmployeeContext>
    )
}

export default App

const styles = StyleSheet.create({})