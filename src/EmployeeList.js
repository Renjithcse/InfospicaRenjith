import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import EmpContext from './context/employee'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

const EmployeeList = () => {

    const { width } = useWindowDimensions()

    const empContext = useContext(EmpContext)

    const navigation = useNavigation()

    const deleteEmp = (id) => {
        empContext.deleteEmp(id)
    }

    const editEmp = (item) => {
        navigation.navigate("newEmp", { item })
    }

    const renderItem = ({item}) => {
        return(
            <View style={{ width: width- 10, minHeight: 100, borderWidth: 1, margin: 5, borderRadius: 5 }}>
                <Text>ID: {item?.empId}</Text>
                <Text>Name: {item?.empName}</Text>
                <Text>Email: {item?.email}</Text>
                <Text>Date of Birth: {moment(item?.dob).format("DD-MM-YYYY") }</Text>
                <Text>Phone: {item?.phone}</Text>
                <Text>Gender: {item?.Gender}</Text>
                <Text>Salary: {item?.Salary}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', margin: 5 }} onPress={() => deleteEmp(item.id)}>
                        <Text style={{ color: '#fff' }}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => editEmp(item)}
                    style={{ padding: 10, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                        <Text style={{ color: '#fff' }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const newEmployee = () => {
        navigation.navigate("newEmp")
    }

  return (
    <View style={{ flex: 1 }}>
        <FlatList 
            data={empContext.employeeList}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}` }

        />
        <TouchableOpacity onPress={newEmployee} style={{ position:'absolute', bottom: 10, right: 5, width: 40, height: 40, borderRadius: 20, backgroundColor: 'blue', zIndex: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 22, textAlign: 'center' }}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EmployeeList

const styles = StyleSheet.create({})