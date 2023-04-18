import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Context from './index'

const EmployeeContext = (props) => {

    const [employeeList, setEmployeeList] = useState([])
    const [allEmp, setAllEmp] = useState([])

    const addEmployee = (emp) => {
        let empList = [...allEmp, emp];
        setAllEmp(empList)
        setEmployeeList(empList);
    }

    const deleteEmp = (id) => {
        let list = allEmp.filter(emp => emp.id !== id);
        setAllEmp(list)
        setEmployeeList(list)
    }

    const updateEmp = (id, emp) => {
        let list = allEmp.filter(emp => emp.id !== id);
        setAllEmp([emp, ...list])
        setEmployeeList([emp, ...list]);
    }


    const filterEmp = (value) => {
        //let filterList = allEmp.filter(emp => emp)
    }

    return (
        <Context.Provider
            value={{
                ...props,
                employeeList,
                setEmployeeList,
                addEmployee,
                deleteEmp,
                updateEmp,
                filterEmp
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default EmployeeContext

const styles = StyleSheet.create({})