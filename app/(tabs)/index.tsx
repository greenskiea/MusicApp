import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';

import { Text } from 'react-native';
import { unknownTrackIrl } from '@/constants/Image';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';


const Started: React.FC = () => (

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
                        >Song Title</Text>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Artist Name</Text>
                    </View>

                    <View>
                        <TabBarIcon name={'play'} color={'white'} />
                    </View>
                </View>
            </TouchableHighlight>

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
                        >Song Title</Text>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Artist Name</Text>
                    </View>

                    <View>
                        <TabBarIcon name={'play'} color={'white'} />
                    </View>
                </View>
            </TouchableHighlight>

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
                        >Song Title</Text>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Artist Name</Text>
                    </View>

                    <View>
                        <TabBarIcon name={'play'} color={'white'} />
                    </View>
                </View>
            </TouchableHighlight>

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
                        >Song Title</Text>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Artist Name</Text>
                    </View>

                    <View>
                        <TabBarIcon name={'play'} color={'white'} />
                    </View>
                </View>
            </TouchableHighlight>

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
                        >Song Title</Text>
                        <Text numberOfLines={1}
                            style={{
                                ...styles.TrackTitleText,
                                color: '#fff'
                            }}
                        >Artist Name</Text>
                    </View>

                    <View>
                        <TabBarIcon name={'play'} color={'white'} />
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
        width: 50,
        height: 50,
    },

    TrackTitleText: {
        fontSize: 12,
        fontWeight: '600',
        maxWidth: '90%',
    },

    SongScroll: {
        marginTop: 20,
    },

    TouchSongScroll: {
        marginBottom: 10,
    }
});

export default Started;