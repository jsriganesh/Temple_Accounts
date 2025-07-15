import React, { useEffect, useRef, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Animated, {
    AnimatedRef,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue,
} from 'react-native-reanimated';
import CustomImage from './customImage';
import Pagination from './pagination';

// 👇 Define the shape of the item data
interface CarouselItem {
  key: string;
  [key: string]: any; // for other possible props like imageUrl, title, etc.
    image?: any; // assuming image is an ImageSourcePropType or similar
}

interface Props {
  data:  { image: any; key: string; }[] // CarouselItem[];
  autoPlay?: boolean;
  pagination?: boolean;
}

const CustomImageCarousal: React.FC<Props> = ({ data, autoPlay = false, pagination = false }) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>() as AnimatedRef<Animated.ScrollView>;
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData, setNewData] = useState<CarouselItem[]>([
    { key: 'spacer-left' },
    ...data,
    { key: 'spacer-right' },
  ]);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.7;
  const SPACER = (width - SIZE) / 2;

  const x = useSharedValue(0);
  const offSet = useSharedValue(0);
  const targetX = useSharedValue(0);

  useEffect(() => {
    setNewData([{ key: 'spacer-left' }, ...data, { key: 'spacer-right' }]);
  }, [data]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: e => {
      offSet.value = e.contentOffset.x;
    },
  });

  useDerivedValue(() => {
    targetX.value =
      offSet.value >= Math.floor(SIZE * (data.length - 1) - 10)
        ? 0
        : Math.floor(offSet.value + SIZE);
  });

  useEffect(() => {
    if (isAutoPlay) {
      interval.current = setInterval(() => {
        scrollViewRef?.current?.scrollTo({ x: targetX.value, y: 0, animated: true });
      }, 2000);
    } else {
      interval.current && clearInterval(interval.current);
    }

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [isAutoPlay, scrollViewRef, targetX, autoPlay]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={() => setIsAutoPlay(false)}
        onMomentumScrollEnd={() => setIsAutoPlay(autoPlay)}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {newData.map((item, index) => (
          <CustomImage
            key={index}
            index={index}
            item={item}
            x={x}
            size={SIZE}
            spacer={SPACER}
          />
        ))}
      </Animated.ScrollView>

      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

export default CustomImageCarousal;
