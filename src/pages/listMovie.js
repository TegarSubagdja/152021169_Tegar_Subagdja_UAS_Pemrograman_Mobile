import React, {useState, useEffect} from 'react';
import {
  TextInput,
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constant/Colors';

const App = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [detailMovie, setDetailMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieData = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=5e102d2d&s=joker&plot=full',
      );
      const json = await response.json();
      setMovieData(json.Search || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardPress = data => {
    navigation.navigate('Details', {data});
  };

  const getDetail = async () => {
    try {
      const response = await fetch(
        'https://www.omdbapi.com/?apikey=5e102d2d&s=joker&plot=full',
      );
      const json = await response.json();
      setDetailMovie(json || null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const renderMovieItem = ({item}) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.listCard}>
        <Image source={{uri: item.Poster}} style={styles.poster} />
        <View style={styles.caption}>
          <Text style={styles.tipe}>{item.Type}</Text>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item.Title}
          </Text>
          <View style={styles.listText}>
            <Image
              source={require('../assets/icon/Calendar.png')}
              style={{width: 16, height: 16, marginRight: 5}}
            />
            <Text style={styles.h2}>{item.Year}</Text>
          </View>
          <View style={styles.listText}>
            <Image
              source={require('../assets/icon/Clock.png')}
              style={{width: 16, height: 16, marginRight: 5}}
            />
            <Text style={styles.h2}>Data Not Found</Text>
            <Text style={styles.light}>PG-13</Text>
          </View>
          <View style={styles.listText}>
            <Image
              source={require('../assets/icon/Movie.png')}
              style={{width: 16, height: 16, marginRight: 5}}
            />
            <Text style={styles.h2}>{item.Type}</Text>
            <Text style={styles.h1}>Movie</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.cancel}>Cancel</Text>
      </View>
      <View style={styles.listFilm}>
        <FlatList
          data={movieData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderMovieItem}
          showsVerticalScrollIndicator={false}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primarySoft,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 20,
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
  cancel: {
    color: Colors.textColorWhite,
  },
  listFilm: {
    marginHorizontal: 20,
  },
  poster: {
    width: 112,
    height: 147,
    borderRadius: 8,
  },
  title: {
    color: Colors.textColorWhite,
    fontSize: 16,
  },
  caption: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 5,
  },
  h2: {
    color: Colors.textColorGray,
    fontSize: 12,
  },
  listCard: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  listText: {
    flexDirection: 'row',
  },
  tipe: {
    backgroundColor: Colors.secondaryOrange,
    borderRadius: 6,
    fontSize: 10,
    textAlign: 'center',
    padding: 4,
    width: 65,
    color: Colors.textColorWhite,
  },
  h1: {
    fontSize: 12,
    marginLeft: 10,
    paddingLeft: 10,
    color: Colors.textColorWhite,
    borderLeftWidth: 1,
    borderLeftColor: Colors.textColorDarkGray,
  },
  light: {
    position: 'absolute',
    top: -3,
    left: 110,
    color: Colors.primaryBlue,
    borderWidth: 1,
    padding: 3,
    textAlign: 'center',
    borderColor: Colors.primaryBlue,
    borderRadius: 3,
    fontSize: 10,
  },
});

export default App;
