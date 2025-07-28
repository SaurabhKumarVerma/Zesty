import { Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { ILoading } from '@interface/loading.interface';
import { app_images } from '../../../assets';

const Loading = (props: ILoading) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="fade" transparent={true} visible={props.isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView autoPlay source={app_images.loading} style={{ width: 220, height: 220 }} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
