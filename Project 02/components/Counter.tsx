import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function Counter() {
    const [counter, setcounter] = useState(0);

    const increment = () => {
        setcounter(counter + 1);
    }

    const decrement = () => {
        setcounter(counter - 1);
    }

    const reset = () => {
        setcounter(0);
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.headingText}>Counter</Text>
                <View style={styles.numContainer}>
                    <Text style={styles.counterStyle}>{counter}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={increment}
                            color="#192A56"
                            title="Increment(+)"
                        //style={styles.plusBtn}
                        />
                        <Button
                            onPress={decrement}
                            color="#192A56"
                            title="Decrement(-)"
                        //style={styles.plusBtn}
                        />
                        <Button
                            onPress={reset}
                            color="#192A56"
                            title="Reset(0)"

                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginHorizontal: 140
    },
    numContainer: {
        height: 200,
        width: 300,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginHorizontal: 40,
        marginTop: 20
    },
    counterStyle: {
        color: "#000000",
        fontSize: 20,
        marginHorizontal: 140,
        marginTop: 50
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 20
    },

});
