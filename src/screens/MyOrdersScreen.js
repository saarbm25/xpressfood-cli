import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../global/styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Marker from '../components/Marker';
import AppButton from '../components/AppButton';

export default function MyOrdersScreen() {
  const [flash, setFlash] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');

  onSuccess = e => {
    setCode(e);
    setModalVisible(true);
  };

  return (
    <View>
      <Text>moved to RestaurantsMapsScreen</Text>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const markerStartHeight = windowHeight * 0.3;
const markerStartWidth = windowWidth * 0.1;
const markerEndHeight = markerStartHeight + windowWidth * 0.8;
const markerEndWidth = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testing: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    backgroundColor: colors.blue,
    zIndex: 3,
    position: 'absolute',
    top: markerStartHeight,
    left: markerStartWidth,
  },
  topContainer: {
    height: windowHeight * 0.25,
    width: windowWidth,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: colors.white,
    position: 'absolute',
    top: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrscanner: {
    flex: 1,
  },
  flash: {
    borderWidth: 2,
    borderColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  modal: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUp: {
    height: 200,
    width: 300,
    borderRadius: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -150,
    marginTop: -100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
