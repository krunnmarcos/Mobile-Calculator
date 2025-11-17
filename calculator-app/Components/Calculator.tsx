import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import { Colors } from '@/utils/Colors'
import Button from '@/Components/Button'

const Calculator = () => {
    return(
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={{fontSize: 70, fontWeight: '300'}}>
                    1234
                </Text>
            </View>
            <View style={styles.keypad}>
                <Button title='C' type='top'/>
                <Button title='⌫' type='top'/>
                <Button title='%' type='top'/>
                <Button title='/' type='right'/>
                <Button title='7' type='number'/>
                <Button title='8' type='number'/>
                <Button title='9' type='number'/>
                <Button title='X' type='right'/>
                <Button title='6' type='number'/>
                <Button title='5' type='number'/>
                <Button title='4' type='number'/>
                <Button title='-' type='right'/>
                <Button title='3' type='number'/>
                <Button title='2' type='number'/>
                <Button title='1' type='number'/>
                <Button title='+' type='right'/>
                <Button title='0' type='number'/>
                <Button title='00' type='number'/>
                <Button title='.' type='number'/>
                <Button title='=' type='right'/>
            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.black
    },
    display: {
        flex: 1,
        backgroundColor: Colors.gray,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end', // alignItems se refere ao alinhamento X
        justifyContent: 'flex-end', //justifyContent ao Y
    },
    keypad: {
        flex: 2,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 15,
        padding: 30,
    },
})