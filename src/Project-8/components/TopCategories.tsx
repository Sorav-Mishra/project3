import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';

// Category Images
import one from '../Images/1.png';
import two from '../Images/2.png';
import three from '../Images/3.png';
import four from '../Images/4.png';
import five from '../Images/5.png';
import six from '../Images/6.png';
import seven from '../Images/7.png';
import eigth from '../Images/8.png';

// Banner Images
import bunner from '../Images/bunner.webp';
import bunner1 from '../Images/bunner1.webp';
import bunner2 from '../Images/bunner2.webp';

// TopCategory bestseller

import best from '../Images/best1.webp';
import best1 from '../Images/best2.webp';

//   Dr. Chauhan’s Recommendation

import DR from '../Images/Dr.webp';

const TopCategories = () => {
  const images = [
    {source: one, label: 'Hair Care'},
    {source: two, label: 'Skin Care'},
    {source: three, label: 'Health'},
    {source: four, label: "Men's"},
    {source: five, label: "Women's"},
    {source: six, label: 'Eye Care'},
    {source: seven, label: 'Bone'},
    {source: eigth, label: 'Immunity'},
  ];

  const banner = [bunner, bunner1, bunner2];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get('window').width;
    const currentIndex = Math.round(scrollPosition / screenWidth);
    setActiveIndex(currentIndex);
  };

  const bestImage = [best, best1];

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View>
          {/* <Text style={styles.TopCategory}>Top Categories</Text> */}

          {/* Horizontal ScrollView for Categories */}
          <View style={styles.container}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}>
              {images.map((item, index) => (
                <View key={index} style={styles.categoryItem}>
                  <Image source={item.source} style={styles.image} />
                  <Text style={styles.categoryLabel}>{item.label}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Scrollable Banner Carousel */}
          <View style={styles.bannerContainer}>
            <FlatList
              data={banner}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              keyExtractor={(item, index) => index.toString()}
              onScroll={handleScroll}
              renderItem={({item}) => (
                <Image source={item} style={styles.banner} resizeMode="cover" />
              )}
            />

            {/* Dots on Banner */}
            <View style={styles.dotsContainer}>
              {banner.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    activeIndex === index
                      ? styles.activeDot
                      : styles.inactiveDot,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
        {/* OUR BEST SELLER */}
        <View>
          <Text style={styles.TopCategory1}>Our Bestsellers</Text>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container1}>
              {bestImage.map((be, index) => (
                <Image
                  key={index}
                  source={be}
                  style={styles.bestcote}
                  resizeMode="cover"
                />
              ))}
            </View>
          </ScrollView>
          {/* <View style={styles.container5}>
          {}
        </View> */}
        </View>
        {/*     Dr. Chauhan’s Recommendation   */}
        <View>
          <Text style={styles.TopCategory1}>Dr. Chauhan’s Recommendation</Text>
          <Image source={DR} style={styles.Dr} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // bc: {
  //   backgroundColor: '#fff',
  // },
  container: {
    marginTop: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'orange',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 0,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
  bannerContainer: {
    marginBlockStart: 5,
    position: 'relative',
  },
  banner: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#c74919',
  },
  inactiveDot: {
    backgroundColor: 'rgba(252, 143, 84, 1)',
  },
  container1: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    // margin: 20,
  },
  bestcote: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 10,
  },
  TopCategory1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline',
    //textDecorationColor: 'red',
  },
  Dr: {
    height: 80,
    width: '100%',
  },
});

export default TopCategories;
