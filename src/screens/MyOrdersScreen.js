import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Modal,
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
    setCode(e.data);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>whatever is up here</Text>
      </View>
      <QRCodeScanner
        reactivate={true}
        reactivateTimeout={3000}
        onRead={this.onSuccess}
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        cameraStyle={{height: '100%', width: '100%'}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    height: '25%',
    width: '100%',
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
  squre: {
    width: 50,
    height: 50,
    backgroundColor: colors.button,
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
