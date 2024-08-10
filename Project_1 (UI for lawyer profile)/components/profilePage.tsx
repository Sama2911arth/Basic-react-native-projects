import { Image, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import More from './More';
var SendIntentAndroid = require('react-native-send-intent');

export default function ProfilePage() {
    function openContact(contact: string) {
        Linking.openURL(contact);
        //Linking.sendIntent("mailto:advbrshukla@gmail.com")
    }
    return (
        <View>
            <ScrollView>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <View style={styles.headerContainer}>
                    <View style={styles.imageCard}>
                        <Image
                            source={{ uri: "https://thumbs.dreamstime.com/z/d-man-lawyer-cartoon-character-working-features-lively-professional-depiction-three-dimensional-style-dressed-325048370.jpg" }}
                            style={styles.profileImage}
                        />
                        <View>
                            <Text style={styles.userName}>Adv Balram Shukla</Text>
                            <Text style={styles.userAge}>54, Male</Text>
                            <Text style={styles.userExp}>Experience: 30+ yrs</Text>
                            <Text style={styles.userField}>Specification: Finance</Text>
                            <Text style={[styles.verified]}> Verified</Text>
                        </View>

                    </View>
                    <View style={styles.aboutCard}>
                        <Text style={styles.aboutHeading}>About us:</Text>
                        <ImageBackground
                            source={{ uri: "https://getstackhost.com/wp-content/uploads/2022/07/Stories-B1.png" }}
                            style={styles.aboutBack}
                        >
                            <View style={styles.aboutView}>
                                <Text style={styles.aboutText} numberOfLines={5}>
                                    With over 30 years of High Court experience, we specialize in finance-related cases, offering expert legal guidance and dedicated representation to ensure justice and optimal outcomes for our clients.
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <ScrollView horizontal>
                        <View style={styles.payCard}>
                            <Text style={styles.payText}>Pay Now:</Text>
                            <Image
                                source={{ uri: "https://static.wixstatic.com/media/7d66e1_d66162a588e74941a50cbd4e445fbede~mv2.png/v1/fill/w_742,h_556,al_c,q_90/7d66e1_d66162a588e74941a50cbd4e445fbede~mv2.png" }}
                                style={styles.payImage}
                            />
                        </View>
                        <View style={[styles.bookCard]}>
                            <TouchableOpacity
                                onPress={() => { openContact("mailto:advbrshukla@gmail.com") }}
                            >
                                <Image
                                    source={{ uri: "https://png.pngtree.com/png-clipart/20230419/original/pngtree-book-now-label-clipart-design-png-image_9068569.png" }}
                                    style={styles.bookImage}
                                />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                    <View style={styles.contactCard}>
                        <Text style={styles.contactHeading}>Contact Us:</Text>
                        <View style={styles.callView}>
                            <TouchableOpacity
                                onPress={() => { openContact("tel:7898183094") }}
                            >
                                <Image
                                    source={{ uri: "data:image/jpeg;base64,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" }}
                                    style={styles.callImage}
                                /></TouchableOpacity>
                            <Text style={styles.callNum}> 7898183094</Text>

                        </View>

                        <View style={styles.callView}>
                            <TouchableOpacity
                                onPress={() => { openContact("mailto:samarthshukla@gmail.com") }}
                            >
                                <Image
                                    source={{ uri: "https://w7.pngwing.com/pngs/750/644/png-transparent-google-mail-google-mail-email-gmail-flat-icon-thumbnail.png" }}
                                    style={styles.callImage}
                                /></TouchableOpacity>
                            <Text style={styles.callNum}>samarthshukla994@gmail.com</Text>
                        </View>
                        <View style={styles.callView}>
                            <TouchableOpacity
                                onPress={() => { openContact("sms:7898183094") }}
                            >
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sF6HzXUDOsjbY0JqVG4L8ZkhQjaqAhnRCA&s" }}
                                    style={styles.callImage}
                                /></TouchableOpacity>
                            <Text style={styles.callNum}> 7898183094</Text>
                        </View>

                    </View>
                    <More />
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    headingContainer: {
        flex: 1,
        //flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 400,
        backgroundColor: "#000000",
        paddingTop: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 15,
        fontFamily: "Cochin",
        color: "#FFFFFF",
    },
    headerContainer: {
        backgroundColor: "#000000",

    },
    imageCard: {
        backgroundColor: "#EAF0F1",
        height: 180,
        width: 330,
        flex: 1,
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 25
    },

    profileImage: {
        height: 120,
        width: 120,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "#2B2B52"
    },

    userName: {
        marginTop: 30,
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
        marginBottom: 3,
        //marginHorizontal: 20
        // marginRight: 40
    },
    verified: {
        //flex: 1,
        //flexDirection: "column",
        //justifyContent: "center",
        //alignItems: "center",
        height: 30,
        width: 70,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        color: "#D63031",
        marginTop: 5,
        borderWidth: 2,
        borderColor: "#D63031",
        fontWeight: "bold",
        //marginHorizontal: 10,
        fontSize: 19
        // paddingLeft: 100
        // marginLeft: 40
    }
    ,
    userAge: {
        color: "#000000"
    },
    userExp: {
        color: "#000000",
        fontSize: 16
    },
    userField: {
        marginTop: 2,
        color: "#000000",
        fontSize: 16,
        marginBottom: 5
    },
    aboutCard: {
        backgroundColor: "#EAF0F1",
        height: 200,
        width: 330,
        borderRadius: 20,
        marginHorizontal: 25,
        marginTop: 20
    },
    aboutHeading: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Anton" || null,
        color: "#3C40C6",
        marginTop: 10,
        marginHorizontal: 20,
        paddingHorizontal: 8,
        marginRight: 210,
        borderWidth: 1,
        borderRadius: 10
    },
    aboutBack: {
        height: 160,
        opacity: 1,
        width: 310,
        // borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 3
    },
    aboutView: {
        marginHorizontal: 15,
        marginTop: 10,
        height: 150,
        width: 300,
        // backgroundColor: "#2F363F",
        borderRadius: 5,
        //borderColor: "#000000"
    },
    aboutText: {
        color: "#2C3335",
        fontSize: 16,
        marginTop: 5,
        borderWidth: 1,
        height: 130,
        width: 300,
        paddingTop: 15,
        paddingHorizontal: 5,
        borderColor: "#2B2B52",
        borderRadius: 5
    },
    payCard: {
        backgroundColor: "#FFFFFF",
        height: 170,
        width: 150,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10

    },
    payText: {
        fontSize: 20,
        color: "#3C40C6",
        marginHorizontal: 10,
        fontWeight: "bold",
        borderWidth: 1,
        marginTop: 5,
        marginRight: 50,
        paddingHorizontal: 5,
        borderRadius: 10

    },
    payImage: {
        height: 100,
        width: 140,
        marginTop: 10
    },
    bookCard: {
        backgroundColor: "#FFFFFF",
        height: 150,
        width: 160,
        //marginHorizontal: ,
        marginTop: 20,
        borderRadius: 10
    },
    bookImage: {
        height: 100,
        width: 140,
        marginTop: 20
    },
    contactCard: {
        backgroundColor: "#EAF0F1",
        height: 270,
        width: 330,
        borderRadius: 20,
        marginHorizontal: 25,
        marginTop: 20
    },
    contactHeading: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Anton" || null,
        color: "#3C40C6",
        marginTop: 10,
        marginHorizontal: 20,
        paddingHorizontal: 8,
        marginRight: 190,
        borderWidth: 1,
        borderRadius: 10
    },
    callView: {
        height: 60,
        width: 315,
        borderWidth: 1,
        marginHorizontal: 5,
        marginTop: 10,
        borderRadius: 20,
        flex: 1,
        flexDirection: "row",
        marginBottom: 5
    },
    callImage: {
        height: 50,
        width: 50,
        marginHorizontal: 15,
        marginTop: 5,
        borderRadius: 25
    },
    callNum: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#3C40C6",
        marginTop: 17
    }

},

)