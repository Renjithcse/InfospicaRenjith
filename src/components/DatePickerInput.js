import moment from 'moment'
import React, { useCallback, useState } from 'react'
import { Button, TouchableOpacity, StyleSheet, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default ({value, placeHolder, changeDate, error}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const openPicker = useCallback(() => {
        setOpen(true)
    }, [])

    const closePicker = useCallback(() => {
        setOpen(false)
    }, [])

    const confirmDate = useCallback((date) => {
        setOpen(false)
        setDate(date)
        changeDate(date)
    }, [])

    return (
        <>
            <TouchableOpacity style={styles.input} onPress={openPicker}>
                <Text>{value ? moment(value).format("DD-MM-YYYY"): placeHolder }</Text>
            </TouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={confirmDate}
                onCancel={closePicker}
            />
             {error && <Text style={{ color: 'red', fontSize: 10, paddingLeft: 10 }}>{error?.message}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})