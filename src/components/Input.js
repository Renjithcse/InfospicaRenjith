import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Controller } from "react-hook-form";


const Input = ({fieldName, control, placeholder, error}) => {
    return (
        <View>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
                name={fieldName}
            />
            {error && <Text style={{ color: 'red', fontSize: 10, paddingLeft: 10 }}>{error?.message}</Text>}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})