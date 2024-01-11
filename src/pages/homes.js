import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import Colors from '../constant/Colors';

const App = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const menu = ['Action', 'Animation', 'Romance', 'Comedy', 'Documentary'];
  const [isLoading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);
  const [movieData1, setMovieData1] = useState(null);

  const getMovieData = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=5e102d2d&s=spider&plot=full',
      );
      const json = await response.json();
      setMovieData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getMovieData1 = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=5e102d2d&s=joker&plot=full',
      );
      const json = await response.json();
      setMovieData1(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
    getMovieData1();
  }, []);

  const scrollViewRef = useRef(null);

  const centerSecondCard = () => {
    if (scrollViewRef.current) {
      const width = Dimensions.get('window').width;
      const scrollToX = width - (width - 295) - 25;

      scrollViewRef.current.scrollToOffset({
        offset: scrollToX,
        animated: false,
      });
    }
  };

  // useEffect(() => {
  //   setActiveLink(menu[0]);
  // }, []);

  const renderItem = ({item}) => (
    <View style={styles.movieContainer}>
      <ImageBackground
        source={{
          uri: item.Poster,
        }}
        resizeMode="cover"
        style={[styles.imageBackground, {borderRadius: 16}]}>
        <Text style={styles.movieText}>{item.Title}</Text>
        <Text style={styles.h4}>{item.Year}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
          style={styles.profile}
        />
        <View>
          <Text style={styles.heading}>Hello, Tegar</Text>
          <Text style={styles.description}>
            Let's watch your favorite movie
          </Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149852.png',
          }}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search a title"
          placeholderTextColor={Colors.textColorGray}
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.ScrollMain}>
        <FlatList
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={() => centerSecondCard()}
          data={isLoading ? [] : movieData1?.Search || []}
          keyExtractor={item => item.imdbID || item.Title}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categories}>Categories</Text>
        <View style={styles.categoryList}>
          <FlatList
            horizontal
            data={menu}
            renderItem={({item}) => (
              <Text
                style={
                  item === activeLink ? styles.active : styles.categorieText
                }
                onPress={() => setActiveLink(item)}>
                {item}
              </Text>
            )}
            keyExtractor={item => item}
            contentContainerStyle={styles.textLinksContainer}
          />
        </View>
      </View>
      <View style={styles.ScrollCard}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={() => centerSecondCard()}
          data={isLoading ? [] : movieData?.Search}
          keyExtractor={item => item.imdbID}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <Image source={{uri: item.Poster}} style={styles.posterImage} />
              <Text
                style={styles.movieTextCard}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.Title}
              </Text>
              <Text style={styles.h4}>{item.Type}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
    marginHorizontal: 20,
  },
  profile: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  heading: {
    color: Colors.textColorWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: Colors.textColorGray,
    fontSize: 12,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primarySoft,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginLeft: 4,
    tintColor: Colors.textColorGray,
  },
  input: {
    flex: 1,
    fontSize: 14,
    height: 31,
    color: Colors.textColorGray,
  },
  cardContainer: {
    width: 135,
    height: 231,
    overflow: 'hidden',
    backgroundColor: Colors.primarySoft,
    borderRadius: 16,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  movieContainer: {
    width: 295,
    height: 154,
    backgroundColor: Colors.primarySoft,
    borderRadius: 16,
    margin: 7,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  movieText: {
    width: 200,
    fontSize: 16,
    fontWeight: 600,
    color: Colors.textColorWhite,
    marginLeft: 20,
  },
  movieTextCard: {
    width: 100,
    fontSize: 16,
    fontWeight: 600,
    color: Colors.textColorWhite,
    marginLeft: 20,
  },
  h4: {
    color: Colors.textColorWhite,
    marginLeft: 20,
    marginBottom: 20,
  },
  categoriesContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  categories: {
    color: Colors.textColorWhite,
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryList: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  categorieText: {
    color: Colors.textColorWhite,
    fontSize: 12,
    paddingVertical: 10,
    marginRight: 20,
  },
  textLinksContainer: {
    paddingVertical: 10,
  },
  active: {
    padding: 10,
    paddingHorizontal: 20,
    marginRight: 20,
    backgroundColor: Colors.primarySoft,
    borderRadius: 8,
    color: Colors.primaryBlue,
  },
  ScrollCard: {
    marginLeft: 15,
  },
  posterImage: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
});

export default App;
