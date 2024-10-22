import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Responsive } from '../../../constant/Responsive'
import Video from 'react-native-video'
import { IndexStyles } from '../../../import/IndexStyles'
import { Icon } from '../../../constant/Icon'


interface Props = {
    message: string,
    image: string,
    video: string,
    audio: string,
    username: string,
    time: string,
    role: string,
}

const ItemMessageUser = ({ item, user, playVideo, currentPlayingVideoId, setCurrentPlayingVideoId, isPlaying, playingMessageId, startAudio, stopAudio }: any) => {
    return (
        <View style={[
            IndexStyles.StyleChatWithAdmin.viewItem,
            {
                alignSelf: item.role === user.role ? 'flex-end' : 'flex-start',
                backgroundColor: item.role === user.role ? '#DCF8C6' : '#FFF',
                justifyContent: item.role === user.role ? 'flex-end' : 'flex-start',
                alignItems: item.role === user.role ? 'flex-end' : 'flex-start',
            },
        ]}>
            {item.message && (
                <Text style={IndexStyles.StyleChatWithAdmin.textMessage}>{item.message}</Text>
            )}
            {item.image && (
                <Image
                    source={{ uri: item.image as string }}
                    style={{ width: Responsive.wp(50), height: Responsive.hp(30), borderRadius: 10, marginTop: 5 }}
                />
            )}
            {item.video && (
                <TouchableOpacity onPress={() => playVideo(item.video)}>
                    <Video
                        source={{ uri: item.video }}
                        paused={currentPlayingVideoId !== item.video} // Quản lý trạng thái phát/dừng video
                        style={{ width: Responsive.wp(50), height: Responsive.hp(30), borderRadius: 10, marginTop: 5 }}
                        resizeMode="cover"
                        onEnd={() => {
                            setCurrentPlayingVideoId(null); // Reset trạng thái khi video kết thúc
                        }}
                    />
                    <View style={{ position: 'absolute', top: 10, right: 10 }}>
                        {currentPlayingVideoId === item.video ? (
                            <Icon.PauseSVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                        ) : (
                            <Icon.PlaySVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                        )}
                    </View>
                </TouchableOpacity>
            )}
            {item.audio && (
                <TouchableOpacity
                    onPress={() => {
                        if (isPlaying && playingMessageId === item.audio) {
                            stopAudio();
                        } else {
                            startAudio(item.audio);
                        }
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}    >
                    {isPlaying && playingMessageId === item.audio ? (
                        <Icon.PauseSVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                    ) : (
                        <Icon.PlaySVG width={Responsive.wp(6)} height={Responsive.hp(5)} fill={'red'} />
                    )}
                    <Text style={IndexStyles.StyleChatWithAdmin.textAudio}>Phát ghi âm</Text>
                </TouchableOpacity>
            )}
            <Text style={IndexStyles.StyleChatWithAdmin.textName}>{item.username}</Text>
            <Text style={IndexStyles.StyleChatWithAdmin.textTime}>{item.time}</Text>
        </View>
    )
}

export default ItemMessageUser