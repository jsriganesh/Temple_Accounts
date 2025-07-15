import React, { useLayoutEffect, useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import Animated, {
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

interface CustomImageProps {
  item: {
    key: string;
    image?: ImageSourcePropType;
    [key: string]: any;
  };
  x: SharedValue<number>;
  index: number;
  size: number;
  spacer: number;
}

const CustomImage: React.FC<CustomImageProps> = ({ item, x, index, size, spacer }) => {
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useLayoutEffect(() => {
    if (item.image) {
      const { width, height } = Image.resolveAssetSource(item.image);
      setAspectRatio(width / height);
    }
  }, [item.image]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8]
    );
    return {
      transform: [{ scale }],
    };
  }, [x.value]);

  if (!item.image) {
    return <View style={{ width: spacer }} key={index} />;
  }

  return (
    <View style={{ width: size }} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <Image source={item.image} style={[styles.image, { aspectRatio }]} />
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
  },
});
