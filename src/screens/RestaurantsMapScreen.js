import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Modal,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../global/styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Marker, {markerTopMargin, markerWidth} from '../components/Marker';
import AppButton from '../components/AppButton';

export default function RestaurantsMapScreen() {
  const [flash, setFlash] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');

  const [qrInBound, setQrInBound] = useState(false);

  const isInMarker = e => {
    console.log(e.bounds); // test for ios

    const origins = e.bounds.origin;

    // width and height are swapped in camera
    const cameraWidth = e.bounds.width;
    const cameraHeight = e.bounds.height;

    const widthScaler = cameraWidth / windowHeight;

    const markerSizeInCamera = markerWidth * widthScaler;
    const markerTopMarginScaled = (markerTopMargin * widthScaler) / 2;
    const markerStartInY = cameraHeight / 2 - 0.5 * markerSizeInCamera;
    const markerStartInX =
      cameraWidth / 2 - 0.5 * markerSizeInCamera + markerTopMarginScaled;

    if (
      origins[0].y >= markerStartInY &&
      origins[0].y <= markerStartInY + markerSizeInCamera &&
      origins[0].x >= markerStartInX &&
      origins[0].x <= markerStartInX + markerSizeInCamera
    ) {
      return true;
    }

    return false;
  };

  onSuccess = e => {
    try {
      const origin0IsInMarker = isInMarker(e);
      setQrInBound(origin0IsInMarker);
      setCode(e.data);
      // setModalVisible(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>{qrInBound && 'Getting Qr in bounds'}</Text>
      </View>
      <QRCodeScanner
        reactivate={true}
        reactivateTimeout={0}
        onRead={this.onSuccess}
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        cameraStyle={{height: windowHeight}}
        fadeIn={true}
        showMarker={true}
        customMarker={<Marker />}
      />
      <TouchableOpacity
        style={styles.flash}
        onPress={() => {
          setFlash(state => !state);
        }}>
        <Icon name="flash" size={32} color={colors.white}></Icon>
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.popUp}>
          <AppButton
            onPress={() => {
              setModalVisible(false);
            }}>
            Kill me
          </AppButton>
          <Text>qr data is {code}</Text>
        </View>
      </Modal>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
