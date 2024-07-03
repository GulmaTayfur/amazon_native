import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

export default function Carousel() {
  return (
    <View style={styles.carouselContainer}>
      <Swiper showsPagination={false} autoplay={true} style={styles.wrapper}>
        {CarouselData.map((item, index) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.imgStyle} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    height: 300,
  },
  imgStyle: {
    height: 250,
    width: '100%',
  },
  carouselContainer: {
    position: 'relative',
  },
});
