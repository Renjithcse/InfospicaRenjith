import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useId, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from './components/Input'
import DatePickerInput from './components/DatePickerInput';
import RadioButton from './components/RadioButton';
import EmpContext from './context/employee';
import { useNavigation } from '@react-navigation/native';

const NewEmployee = ({route }) => {

    const { item } = route.params

    const empContext = useContext(EmpContext)

    const navigation = useNavigation()

    console.log({ emp: empContext.employeeList})

    const schema = yup.object({
        empId: yup.string().required("Employee ID is Required").matches(/^[0-9]+$/, "Must be only digits").max(10, 'Must be maximum of 10 digits'),
        empName: yup.string().max(50, "Employee Name must be less than 50 characters").required("Name is Required"),
        dob: yup.string().required("Date of Birth Is Required"),
        email: yup.string().max(50, "Employee Name must be less than 50 characters").email("Email is Required and Please Enter the Value Email (abc@xyz.com)").required("Email is Required and Please Enter the Value Email (abc@xyz.com)"),
        phone: yup.string().min(10).max(12).matches(/^[0-9]+$/, "Must be only digits").required("Phone is Required and Phone number should be 10 digits. Please Enter Value Message"),
        Salary: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Salary is Required").max(6, "Salary must be less than 6 characters"),
        Gender: yup.string().required("Gender is Required"),
    }).required();

    const [date, setDate] = useState(null)
    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: item ? {
            ...item
        } : {
            id: useId()
        }
    });

    const changeDate = (date) => {
        setDate(date);
        setValue("dob", date)
    }


    const selectGender = (value) => {
        setValue("Gender", value)
    }

    

    const onSubmit = data => {
        if(item){
            empContext.updateEmp(item.id, data)
        }
        else{
            empContext.addEmployee(data)
        }
        
        navigation.goBack()
    }

    return (
        <View>
            <Input 
                fieldName={"empId"}
                control={control}
                placeholder={"ID"}
                error={errors.empId}
            />
            <DatePickerInput 
                value={date}
                placeHolder={"Date Of Birth"}
                changeDate={changeDate}
                error={errors.dob}
            />
            <Input 
                fieldName={"empName"}
                control={control}
                error={errors.empName}
                placeholder={"Name"}
            />
            <Input 
                fieldName={"email"}
                control={control}
                error={errors.email}
                placeholder={"Email"}
            />
            <Input 
                fieldName={"phone"}
                control={control}
                error={errors.phone}
                placeholder={"Phone Number"}
            />
            <Input 
                fieldName={"Salary"}
                error={errors.Salary}
                control={control}
                placeholder={"Salary"}
            />

            <RadioButton 
                selectGender={selectGender}
                error={errors.Gender}

            />

            <Button
                onPress={handleSubmit(onSubmit)}
                title="Save"
                color="#841584"
            />
        </View>
    )
}

export default NewEmployee

const styles = StyleSheet.create({})