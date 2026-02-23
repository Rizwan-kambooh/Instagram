import { View, Text, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import data from '../features/data.json';
import LinearGradient from 'react-native-linear-gradient';
import { openMediaPicker } from './CameraLaunch';

const Stories = () => {
    const [myStory, setMyStory] = useState(null);
    const [selectedStory, setSelectedStory] = useState(null);
    const [showStory, setShowStory] = useState(false);

    const handleAddStory = () => {
        if (myStory) {
            setSelectedStory(myStory.uri);
            setShowStory(true);
        } else {
            openMediaPicker(asset => {
                setMyStory(asset);
            });
        }
    };

    useEffect(() => {
        let timer;

        if (showStory) {
            timer = setTimeout(() => {
                setShowStory(false);
                setSelectedStory(null);
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [showStory]);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TouchableOpacity onPress={handleAddStory}>
                <View style={{ alignItems: 'center' }}>
                    <LinearGradient
                        colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 16,
                        }}
                    >
                        <View
                            style={{
                                width: 54,
                                height: 54,
                                borderRadius: 27,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {myStory ? (
                                <Image
                                    source={{ uri: myStory.uri }}
                                    style={{ width: 50, height: 50, borderRadius: 25 }}
                                />
                            ) : (
                                <Text style={{ fontSize: 24 }}>+</Text>
                            )}
                        </View>
                    </LinearGradient>

                    <Text style={{ marginTop: 4, fontSize: 12 }}>
                        Your Story
                    </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={data.homeFeed.stories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.storyId}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedStory(item.storyImages[0]);
                            setShowStory(true);
                        }}
                    >
                        <View style={{ alignItems: 'center', paddingLeft: 16 }}>
                            <LinearGradient
                                colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        width: 54,
                                        height: 54,
                                        borderRadius: 27,
                                        backgroundColor: '#fff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={{ uri: item.profileImage }}
                                        style={{ width: 50, height: 50, borderRadius: 25 }}
                                    />
                                </View>
                            </LinearGradient>

                            <Text
                                style={{
                                    marginTop: 4,
                                    fontSize: 12,
                                    width: 80,
                                    textAlign: 'center',
                                }}
                                numberOfLines={1}
                            >
                                {item.username}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <Modal visible={showStory} transparent animationType="fade">
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.95)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {selectedStory && (
                        <Image
                            source={{ uri: selectedStory }}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="contain"
                        />
                    )}
                </View>
            </Modal>
        </View>
    );
};

export default Stories;