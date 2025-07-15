import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import CustomImageCarousal from './customImageCarousal';
// import CustomImageCarousal from './../../assets/images/bannerImages';
  
  const HomeScreenBanner = () => {
    
    // Size is height is 1000 and width is 1000
    // const data = [
    //   {
    //     key: '1',
    //     image: require('./../../assets/images/bannerImages/image-product-1.jpg'),
    //   },
    //   {
    //     key: '2',
    //     image: require('./../../assets/images/bannerImages/image-product-2.jpg'),
    //   },
    //   {
    //     key: '3',
    //     image: require('./../../assets/images/bannerImages/image-product-3.jpg'),
    //   },
    //   {
    //     key: '4',
    //     image: require('./../../assets/images/bannerImages/image-product-4.jpg'),
    //   },
    // ];

    // Size is height is 450 and width is 800
    const data = [
      {
        key: '1',
        image: require('./../../assets/images/bannerImages/image1.png'),
      },
      {
        key: '2',
        image: require('./../../assets/images/bannerImages/image2.png'),
      },
      {
        key: '3',
        image: require('./../../assets/images/bannerImages/image3.png'),
      },
      {
        key: '4',
        image: require('./../../assets/images/bannerImages/image4.png'),
      },
    ];
    return (
      <View style={styles.container}>
        {/* <View style={styles.carouselContainer}>
          <Text style={styles.text}>Image Carousel Square</Text>
          <CustomImageCarousal data={data} autoPlay={true} pagination={true} />
        </View> */}
        <View style={styles.carouselContainer}>
          <CustomImageCarousal data={data} autoPlay={true} pagination={true} />
        </View>
      </View>
    );
  };
  
  export default HomeScreenBanner;
  
  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //   backgroundColor: 'white',
    },
    text: {textAlign: 'center', color: 'black', marginBottom: 10},
    carouselContainer: {
      // marginBottom: 20,
    },
  });