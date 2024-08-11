import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

const BMISchema = Yup.object({
    weight: Yup.number().required("Weight is required").min(1).max(300),
    height: Yup.number().required("Height is required").min(0.1).max(10)
});

export default function BMI() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmiIndex, setBMIndex] = useState(0);
    const [isBMIGenerated, setIsBMIGenerated] = useState(false);
    const [bmiRange, setbmiRange] = useState("")

    const calculateBMI = (weight: number, height: number) => {
        const ratio = weight / (height * height);
        let bmiCategory = '';
        if (ratio < 18.5) {
            bmiCategory = 'Underweight';
        } else if (ratio < 25) {
            bmiCategory = 'Normal';
        } else if (ratio < 30) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obese';
        }
        setBMIndex(ratio);
        setbmiRange(bmiCategory)
        setIsBMIGenerated(true);
    };

    const resetBMI = () => {
        setIsBMIGenerated(false);
        setWeight(0);
        setHeight(0);
        setBMIndex(0);
    };

    return (
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps="never">
                <Text style={styles.headingText}>BMI Calculator</Text>
                <View style={styles.BMIContainer}>
                    <Formik
                        initialValues={{ weight: "0", height: "0" }}
                        validationSchema={BMISchema}
                        onSubmit={(values) => {
                            calculateBMI(Number(values.weight), Number(values.height));
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            isValid,
                            handleSubmit,
                            handleReset
                            /* and other goodies */
                        }) => (
                            <>
                                <View style={styles.textInput}>
                                    <Text style={styles.inputText}>Weight (in Kgs):  </Text>
                                    {touched.weight && errors.weight && (
                                        <Text style={styles.err}>{errors.weight}</Text>
                                    )}
                                    <TextInput
                                        value={values.weight}
                                        onChangeText={handleChange("weight")}
                                        keyboardType='numeric'
                                        placeholder='Enter Weight in Kg'
                                        style={styles.inputStyle}
                                    />
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={styles.inputText}>Height (in Mtrs):  </Text>
                                    {touched.height && errors.height && (
                                        <Text style={styles.err}>{errors.height}</Text>
                                    )}
                                    <TextInput
                                        value={values.height}
                                        onChangeText={handleChange("height")}
                                        keyboardType='numeric'
                                        placeholder='Enter Height in Mtrs'
                                        style={styles.inputStyle}
                                    />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button
                                        title='Calculate'
                                        onPress={handleSubmit}
                                        color="#192A56"
                                    />
                                    <Button
                                        title='Reset'
                                        onPress={handleReset}
                                        color="#192A56"
                                    />
                                </View>
                            </>
                        )}
                    </Formik>
                    {isBMIGenerated ? (
                        <View style={[styles.card, styles.cardElevated]}>
                            <Text style={styles.subTitle}>Your BMI is:</Text>
                            <Text style={styles.description}>Long Press to Copy</Text>
                            <Text selectable style={styles.generatedPassword}>{bmiIndex}</Text>
                            <Text selectable style={styles.generatedPassword}>{bmiRange}</Text>
                        </View>
                    ) : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // ... (no changes)
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginHorizontal: 100,
        marginTop: 40
    },
    BMIContainer: {
        height: 400,
        width: 330,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginHorizontal: 23,
        marginTop: 20
    },
    textInput: {
        height: 200,
        width: 310,
        backgroundColor: "#192A56",
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        flex: 0.4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ffffff',
        color: "#ffffff"
    },
    inputText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 20
    },
    err: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF3E4D"
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000'
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },

});