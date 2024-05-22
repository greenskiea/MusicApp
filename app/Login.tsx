import * as React from "react";
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from "react-native";

const MyComponent: React.FC = () => {
    return (
        <ImageBackground
            source={require('../assets/images/Signup.png')}
            style={styles.container}
        >

            <View style={styles.Textcontainer}>
                <Text style={styles.text}>Let's get you in</Text>
            </View>

            <View style={styles.Input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Username"
                    placeholderTextColor="#B4B4B4"
                />
            </View>

            <View style={styles.Input}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Password"
                    placeholderTextColor="#B4B4B4"
                />
            </View>

            <View style={styles.Btn}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        gap: 25
    },

    Textcontainer: {
        marginTop: 60,
        marginBottom: 30,
    },

    text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },

    Input: {
        width: 280,
        borderRadius: 10,
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: "#412c68",
        display: "flex",
        fontSize: 15,
        fontWeight: "400",
        padding: 10,
        paddingHorizontal: 20,
    },

    textInput: {
        width: "100%",
        color: '#fff'
    },

    Btn: {
        width: '100%',
        marginTop: 50,
        marginBottom: 40,
        alignSelf: 'center',
        position: 'relative',
    },

    button: {
        backgroundColor: "#9568ed",
        padding: 10,
        // Apply borderRadius to the button 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MyComponent;