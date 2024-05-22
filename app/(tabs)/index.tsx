import * as React from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

interface ImageProps {
    uri: string;
    style: object;
}

const DisplayImage: React.FC<ImageProps> = ({ uri, style }) => (
    <Image resizeMode="contain" source={{ uri }} style={style} />
);

import { Text } from 'react-native';

const Started: React.FC = () => (
    <View style={styles.container}>
        <DisplayImage uri="https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d6bf96687c33304905694f74af4f706f925a89d234fa5983bdf6142b1de41?apiKey=2242341d848e4f69b50b41ab30704fb3&" style={styles.mainImage} />
        <View style={styles.Btn}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Let Rock!
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        display: 'flex',
        maxWidth: 480,
        width: '100%',
        paddingBottom: 80,
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 'auto',
    },
    mainImage: {
        position: 'relative',
        width: '100%',
        aspectRatio: 0.65,
    },
    Btn: {
        marginTop: 20,
        marginBottom: 40,
        alignSelf: 'center',
        position: 'relative',
        maxWidth: '100%',
        aspectRatio: 2.94,
    },

    button: {
        backgroundColor: "#eb4b4f",
        padding: 15,
        // Apply borderRadius to the button 
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontSize: 18,
    },
});

export default Started;