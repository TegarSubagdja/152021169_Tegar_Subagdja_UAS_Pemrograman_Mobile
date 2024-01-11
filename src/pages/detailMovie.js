import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../constant/Colors';

const Details = ({navigation}) => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieData = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=5e102d2d&t=joker&plot=full',
      );
      const json = await response.json();
      setMovieData(json || null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: movieData.Poster,
        }}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.background}>
          <View style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/icon/Back.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
              <Text style={styles.mainTitle}>{movieData.Title}</Text>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/221/221728.png',
                  }}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.panelImage}>
              <Image
                source={{
                  uri: movieData.Poster,
                }}
                style={{width: 205, height: 287, borderRadius: 12}}
              />
            </View>
            <View style={styles.detail}>
              <View style={styles.listAbout}>
                <View style={styles.about}>
                  <Image source={require('../assets/icon/Calendar.png')} />
                  <Text style={styles.textAbout}>{movieData.Year}</Text>
                </View>
                <View style={[styles.about, styles.aboutMid]}>
                  <Image source={require('../assets/icon/Clock.png')} />
                  <Text style={styles.textAbout}>{movieData.Runtime}</Text>
                </View>
                <View style={styles.about}>
                  <Image source={require('../assets/icon/Movie.png')} />
                  <Text style={styles.textAbout}>{movieData.Genre}</Text>
                </View>
              </View>
              <View style={styles.rating}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/221/221728.png',
                  }}
                  style={styles.rateIcon} // Corrected style name
                />
                <Text style={styles.rate}>{movieData.imdbRating}</Text>
              </View>
              <View style={styles.storyLine}>
                <Text style={[styles.mainTitle, {marginTop: 30}]}>Plot</Text>
                <ScrollView style={styles.scrollContainer}>
                  <Text style={{color: Colors.textColorGray}}>
                    {movieData.Plot}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  background: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0.92,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  rateIcon: {
    width: 20,
    height: 20,
  },
  mainTitle: {
    color: Colors.textColorWhite,
    fontSize: 16,
    // fontWeight: 600,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  panelImage: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconAbout: {
    width: 16,
    height: 16,
  },
  textAbout: {
    color: Colors.textColorGray,
    fontSize: 12,
  },
  listAbout: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  aboutMid: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Colors.textColorDarkGray,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  rating: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  rate: {
    color: Colors.secondaryOrange,
    fontSize: 16,
  },
  scrollContainer: {
    maxHeight: 150, // Sesuaikan tinggi sesuai kebutuhan
  },
});

export default Details;
