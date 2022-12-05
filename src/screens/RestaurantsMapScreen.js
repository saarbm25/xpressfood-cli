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

const isInsideBoundary = e => {
  let inBound;
  if (Platform.OS === 'android') {
    inBound = isInsideBoundaryAndroid(e);
  } else {
    inBound = isInsideBoundaryIos(e.bounds);
  }

  return inBound;
};

const isInsideBoundaryAndroid = e => {
  // Get the qr corners
  const qrOrigins = e.bounds.origin;
  console.log(qrOrigins);

  // Scaler to match screen size units to camera pixels
  const cameraWidth = e.bounds.width;
  const cameraHeight = e.bounds.height;

  // Camera is in landscape mode
  // Camera width is matched to screen height
  const widthScaler = cameraWidth / windowHeight;
  const markerTopMarginCameraPx = (markerTopMargin * widthScaler) / 2;

  // Create a marker object for boundary checks
  const markerOrigin = {
    x: (cameraHeight - markerWidth * widthScaler) / 2,
    y: (cameraWidth - markerWidth * widthScaler) / 2 + markerTopMarginCameraPx,
    size: markerWidth * widthScaler,
  };

  let qrInBounds = true;

  // For each point in the QR
  qrOrigins.forEach(origin => {
    // Camera is in landscape - y in camera is x in screen
    const inMarkerBoundsX =
      origin.y >= markerOrigin.x &&
      origin.y <= markerOrigin.x + markerOrigin.size;
    // Camera is in landscape - x in camera is y in screen
    const inMarkerBoundsY =
      origin.x >= markerOrigin.y &&
      origin.x <= markerOrigin.y + markerOrigin.size;

    // If not in bounds set flag to false
    if (!inMarkerBoundsX || !inMarkerBoundsY) {
      qrInBounds = false;
    }
  });

  return qrInBounds;
};

const isInsideBoundaryIos = bounds => {
  const markerOrigin = {
    x: (Dimensions.get('screen').width - markerWidth) / 2,
    y: (Dimensions.get('screen').height - markerHeight) / 2,
  };

  // Checking that QR not steps out of the marker in the left/top sides
  if (bounds.origin.x <= markerOrigin.x || bounds.origin.y <= markerOrigin.y) {
    return false;
  }

  // Checking that QR not steps out of the marker in the right/bottom sides
  const isStepsWidth =
    Number(bounds.origin.x) + Number(bounds.size.width) >=
    markerOrigin.x + markerWidth;
  const isStepsHeight =
    Number(bounds.origin.y) + Number(bounds.size.height) >=
    markerOrigin.y + markerHeight;
  if (isStepsWidth || isStepsHeight) {
    return false;
  }

  return true;
};

export default function RestaurantsMapScreen() {
  const [flash, setFlash] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');

  const [qrInBound, setQrInBound] = useState(false);

  onSuccess = e => {
    try {
      const inBounds = isInsideBoundary(e);
      console.log(inBounds);
      setQrInBound(inBounds);
      console.log(e.data);
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
        reactivateTimeout={100}
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
