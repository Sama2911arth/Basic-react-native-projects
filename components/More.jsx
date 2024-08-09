import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function More() {
    const lawyers = [{
        uid: 1,
        name: "Mahesh Nema",
        Age: "60,Male",
        type: "Family Law",
        imageUrl: "https://xsgames.co/randomusers/assets/images/favicon.png"
    },
    {
        uid: 2,
        name: "Rajesh Mishra",
        Age: "58, Male",
        type: "Finance",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-3fHwHfTzFBOnb3uEH3Tj4klzmxgvLvahGGUts7R-dRPVI68TVElWbCWGmAuZe_ummY&usqp=CAU"
    },
    {
        uid: 3,
        name: "Santosh Dixit",
        Age: "57, Male",
        type: "Paper Works",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiB5LDeyJC7TfOV_Xn55MTumm6jkiuWdRXhHIMCAEf_e5pH9cds9jD9wsEvmn9HpMoWa4&usqp=CAU"
    },
    {
        uid: 4,
        name: "  Uma Shukla",
        Age: "54, Female",
        type: "Marriage Law",
        imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/695/236/desktop-wallpaper-pin-on-random-thing-aesthetic-sad-cartoon.jpg"
    },
    {
        uid: 5,
        name: "   Ram Rawat",
        Age: "48, Male",
        type: "Nothing",
        imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/695/236/desktop-wallpaper-pin-on-random-thing-aesthetic-sad-cartoon.jpg"
    }
    ]
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.moreHeading}>More Lawyers like this...</Text>
            </View>
            <ScrollView horizontal>

                {lawyers.map(({ uid, name, Age, type, imageUrl }) => (
                    <View key={uid} style={styles.moreCard}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.moreImage}
                        />
                        <Text style={styles.moreText}>{name}</Text>
                        <Text style={styles.moretext}>{Age}</Text>
                        <Text style={styles.moretext}>{type}</Text>

                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    moreHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginHorizontal: 20,

    },
    moreCard: {
        height: 160,
        width: 120,
        backgroundColor: "#FFFFFF",
        //marginHorizontal: 10,
        marginBottom: 30,
        marginStart: 20,
        marginTop: 10,
        borderRadius: 10
    },
    moreImage: {
        height: 80,
        width: 80,
        marginHorizontal: 18,
        borderRadius: 40
    },
    moreText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal: 10,
        marginBottom: 5
    },
    moretext: {
        color: "#000000",
        marginHorizontal: 10,
        marginBottom: 3
    }
})