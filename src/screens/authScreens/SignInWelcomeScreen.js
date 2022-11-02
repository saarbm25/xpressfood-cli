import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../global/styles';
import ImagesSwiper from 'react-native-image-swiper'
import AppButton from '../../components/AppButton';

export default function SignInWelcomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>DISCOVER RESTAURANTS{'\n'}IN YOUR AREA</Text>
      <View style={{flex: 1}}>
        <ScrollView style={styles.imageContainer}>
            <ImagesSwiper 
                images={[`https://picsum.photos/400/200?random=${Math.random()}`, 
                        `https://picsum.photos/400/200?random=${Math.random()}`,
                        `https://picsum.photos/400/200?random=${Math.random()}`]}
                autoplay={true} 
                autoplayTimeout={3}
            />
        </ScrollView>
      </View>
      <View style={{marginBottom: 10}}>
        <AppButton>SIGN IN</AppButton>
        <AppButton inverted={true}>Create your account</AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.button,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginTop: 100,
  },
});
