import { unknownTrackIrl } from '@/constants/Image';
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';

export type TrackListSong = {
    track: { title?: string, image?: string }
}

export const SongList = ({ track }: TrackListSong) => {
    const isActiveTrack = false;

    return <TouchableHighlight>
        <View>
            <View>
                <Image source={{
                    uri: unknownTrackIrl,

                }}
                    style={{
                        ...styles.TrackWorkImage,
                        opacity: isActiveTrack ? 0.6 : 1
                    }}

                />
            </View>

            <View style={{ width: '100%' }}>
                <Text numberOfLines={1}
                    style={{
                        ...styles.TrackTitleText,
                        color: isActiveTrack ? '#fff' : '#000'
                    }}
                >Song Title</Text>
            </View>

            <View style={{ width: '100%' }}>
                <Text numberOfLines={1}
                    style={{
                        ...styles.TrackTitleText,
                        color: isActiveTrack ? '#fff' : '#000'
                    }}
                >Artist Name</Text>
            </View>
        </View>
    </TouchableHighlight>
}


const styles = StyleSheet.create({
    TrackWorkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },

    TrackTitleText: {
        fontSize: 8,
        fontWeight: '600',
        maxWidth: '90%',
    }
});
