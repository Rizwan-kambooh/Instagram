import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
  mediaType: 'mixed',
  videoQuality: 'high',
  durationLimit: 30,
};


// ✅ ASK CAMERA PERMISSION (ANDROID ONLY)
const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera to add stories',
        buttonPositive: 'OK',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};


// CAMERA
const openCamera = async callback => {
  const hasPermission = await requestCameraPermission();

  if (!hasPermission) {
    Alert.alert('Permission Denied');
    return;
  }

  launchCamera(options, response => {
    if (response.didCancel) return;
    if (response.errorCode) {
      Alert.alert('Error', response.errorMessage);
      return;
    }

    callback(response.assets[0]);
  });
};


// GALLERY
const openGallery = callback => {
  launchImageLibrary(options, response => {
    if (response.didCancel) return;
    if (response.errorCode) {
      Alert.alert('Error', response.errorMessage);
      return;
    }

    callback(response.assets[0]);
  });
};


// MAIN FUNCTION
export const openMediaPicker = callback => {
  Alert.alert('Add Story', 'Choose an option', [
    {text: 'Camera', onPress: () => openCamera(callback)},
    {text: 'Gallery', onPress: () => openGallery(callback)},
    {text: 'Cancel', style: 'cancel'},
  ]);
};