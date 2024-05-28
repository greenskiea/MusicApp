import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';

import { Text } from 'react-native';
import { addPlayListIrl, unknownTrackIrl } from '@/constants/Image';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';


const PLayList: React.FC = () => (

    <View style={{
        backgroundColor: 'black', flex: 1, paddingTop: '20%', paddingLeft: '5%', paddingRight: '5%'
    }}>

        <View>
            <Text style={{ ...styles.TextTitle }}>Songs</Text>
        </View>

        <ScrollView style={{ ...styles.SongScroll }}>
            <TouchableHighlight style={{ ...styles.TouchSongScroll }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{
                            uri: unknownTrackIrl,

                        }}
                            style={{
                                ...styles.TrackWorkImage,
                            }}

                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Lmao</Text>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TitleText,
                                color: '#9c9c9f'
                            }}
                        >3 Songs</Text>
                    </View>

                </View>
            </TouchableHighlight>

            <TouchableHighlight style={{ ...styles.TouchSongScroll }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{
                            uri: addPlayListIrl,

                        }}
                            style={{
                                ...styles.TrackWorkImage,
                            }}

                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Add more Playlist</Text>
                    </View>

                </View>
            </TouchableHighlight>


        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    TextTitle: {
        fontSize: 30,
        color: 'white'
    },

    TrackWorkImage: {
        borderRadius: 8,
        width: 65,
        height: 65,
    },

    TrackTitleText: {
        fontSize: 20,
        fontWeight: '600',
        maxWidth: '90%',
    },

    SongScroll: {
        marginTop: 20,
    },

    TouchSongScroll: {
        marginBottom: 30,
    },

    TitleText: {
        fontSize: 12,

    }
});

export default PLayList;