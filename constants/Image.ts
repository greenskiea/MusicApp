import unknownArtImage from '@/assets/unknown_artist.png'
import unknownTrackImage from '@/assets/unknown_track.png'
import addPlayList from '@/assets/AddPlayList.png'
import { Image } from 'react-native'

export const unknownTrackIrl = Image.resolveAssetSource(unknownTrackImage).uri
export const unknownArtistIrl = Image.resolveAssetSource(unknownArtImage).uri
export const addPlayListIrl = Image.resolveAssetSource(addPlayList).uri