// import { View, Text, FlatList, Image } from 'react-native'
// import React from 'react'
// import data from '../features/data.json';
// import LinearGradient from 'react-native-linear-gradient';
// const Stories = () => {
//     return (
//         <View style={{ flexDirection:'row', justifyContent: 'center' , alignItems: 'center'}}>
//             <View>
//                 <LinearGradient
//                     colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
//                     style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 30,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         marginLeft: 16,
//                     }}
//                 >
//                     <View
//                         style={{
//                             width: 54,
//                             height: 54,
//                             borderRadius: 27,
//                             backgroundColor: '#fff',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Text style={{ fontSize: 24, color: '#000' }}>+</Text>
//                     </View>
//                 </LinearGradient>
//                 <Text style={{ marginTop: 4, fontSize: 12, textAlign: 'center' }}
//                 numberOfLines={1}
//                 ellipsizeMode='tail'
//                 width={80}
//                 >Your Story</Text>
//             </View>
//             <FlatList
//                 data={data.homeFeed.stories}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 keyExtractor={(item) => item.storyId}
//                 renderItem={({ item }) => (
//                     <View style={{ alignItems: 'center', paddingLeft: 16 , marginVertical: 8}}>
//                         <LinearGradient
//                             colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
//                             style={{
//                                 width: 60,
//                                 height: 60,
//                                 borderRadius: 30,
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             <View
//                                 style={{
//                                     width: 54,
//                                     height: 54,
//                                     borderRadius: 27,
//                                     backgroundColor: '#fff',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <Image
//                                     source={{ uri: item.profileImage }}
//                                     style={{ width: 50, height: 50, borderRadius: 25 }}
//                                 />
//                             </View>
//                         </LinearGradient>

//                         <Text style={{ marginTop: 4, fontSize: 12 }}
//                             numberOfLines={1}
//                             ellipsizeMode='tail'
//                             width={80}
//                         >
//                             {item.username}
//                         </Text>

//                     </View>
//                 )}
//             />
//         </View>
//     )
// }

// export default Stories













import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import data from '../features/data.json';
import LinearGradient from 'react-native-linear-gradient';
import {openMediaPicker} from './CameraLaunch';

const Stories = () => {
  const [myStory, setMyStory] = useState(null);

  const handleAddStory = () => {
    openMediaPicker(media => {
      setMyStory(media);
      console.log('Selected Media:', media);
    });
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      
      {/* ADD STORY BUTTON */}
      <TouchableOpacity onPress={handleAddStory}>
        <View style={{alignItems: 'center'}}>
          <LinearGradient
            colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 27,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              
              {/* SHOW IMAGE IF SELECTED */}
              {myStory ? (
                <Image
                  source={{uri: myStory.uri}}
                  style={{width: 50, height: 50, borderRadius: 25}}
                />
              ) : (
                <Text style={{fontSize: 24}}>+</Text>
              )}

            </View>
          </LinearGradient>

          <Text
            style={{marginTop: 4, fontSize: 12, width: 80, textAlign: 'center'}}
            numberOfLines={1}
            ellipsizeMode="tail">
            Your Story
          </Text>
        </View>
      </TouchableOpacity>

      {/* OTHER STORIES */}
      <FlatList
        data={data.homeFeed.stories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.storyId}
        renderItem={({item}) => (
          <View style={{alignItems: 'center', paddingLeft: 16, marginVertical: 8}}>
            <LinearGradient
              colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 27,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.profileImage}}
                  style={{width: 50, height: 50, borderRadius: 25}}
                />
              </View>
            </LinearGradient>

            <Text
              style={{marginTop: 4, fontSize: 12, width: 80, textAlign: 'center'}}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.username}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Stories;