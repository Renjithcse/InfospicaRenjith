import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const RadioButton = ({selectGender, error}) => {

    useEffect(() => {
        selectGender("male")
    }, []);

    const [selected, setSelected] = useState('male')

    const { width } = useWindowDimensions()

    let options = [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]


    const selectGen = (value) => {
        setSelected(value)
        selectGender(value)
    }

  return (
    <>
        <Text style={{ paddingLeft: 10 }}>Gender</Text>
        <View style={{ flexDirection: 'row', height: 50, width: width-100, paddingLeft: 10, paddingRight: 50, justifyContent: 'space-between' }}>
      {options?.map(gen => (
        <TouchableOpacity onPress={() => selectGen(gen.value)} key={gen.value} style={{ backgroundColor: selected === gen.value ? 'green' :  'gray', width: 100, height: 30, marginRight: 5, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontWeight: 'bold', color: selected === gen.value ? '#fff' : 'black' }}>{gen.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
    {error && <Text style={{ color: 'red', fontSize: 10, paddingLeft: 10 }}>{error?.message}</Text>}

    </>
    
  )
}

export default RadioButton

const styles = StyleSheet.create({})