import React, { FC } from 'react'
import { View,StyleSheet,Image, ImageSourcePropType, Pressable, Text} from 'react-native'

interface IUserChatProps  {
    name: string
    lastMessage?: string
    time: string
    messageCount?: number | string
    userImage?: ImageSourcePropType
    onPress: () => void
}

const UserChat:FC<IUserChatProps> = ({userImage,name,lastMessage, time, messageCount,onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.userImage} source={userImage} />
            </View>
            <View style={{marginLeft: 15}}>
                <Text>{name}</Text>
                <Text>{lastMessage}</Text>
            </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
            <Text>{time}</Text>
            {messageCount && <View style={styles.messageCount}>
                <Text>{messageCount}</Text>
            </View>}
        </View>
    </Pressable>
  )
}

export default UserChat

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:10,
    },
    messageCount: {
        backgroundColor: '#2277fe',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        marginTop: 5
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 30
    }
})