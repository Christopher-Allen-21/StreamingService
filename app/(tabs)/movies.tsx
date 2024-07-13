import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import VideoScreen from "@/components/VideoScreen";
import { FlatList } from 'react-native-gesture-handler';

export default function TabThreeScreen() {

    const movies: Movie[] = [
        {
			"title": "Salt",
			"longDescription": "A CIA agent goes on the run after a defector accuses her of being a Russian spy.",
			"thumbnail": "https://video-content-bucket-1.s3.amazonaws.com/thumbNails/salt.jpg",
			"releaseDate": "2010",
			"rating": "PG-13",
			"cast": "Angelina Jolie, Liev Schreiber, Chiwetel Ejiofor, Daniel Olbrychski",
			"director": "Phillip Noyce",
			"genres": [
                "All", "Action"
			],
            "duration": 6000,
			"videoType": "MP4",
			"url": "https://video-content-bucket-1.s3.amazonaws.com/movies/Salt.mp4",
		},
        {
			"title": "The Big Lebowski",
			"longDescription": "Jeff \"The Dude\" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
			"thumbnail": "https://video-content-bucket-1.s3.amazonaws.com/thumbNails/theBigLebowski.jpg",
			"releaseDate": "1998",
			"rating": "R",
			"cast": "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi, David Huddleston",
			"director": "Joel Coen & Ethan Coen",
			"genres": [
                "All", "Action"
			],
			"duration": 7020,
			"videoType": "mp4",
			"url": "https://video-content-bucket-1.s3.amazonaws.com/movies/The+Big+Lebowski.mp4",
		},
        {
			"title": "The Lord of the Rings: The Fellowship of the Ring",
			"longDescription": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
			"thumbnail": "https://video-content-bucket-1.s3.amazonaws.com/thumbNails/fellowshipOfTheRing.jpg",
			"releaseDate": "2001",
			"rating": "PG-13",
			"cast": "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean, Sean Astin",
			"director": "Peter Jackson",
			"genres": [
                "All", "Fantasy"
			],
			"duration": 10680,
			"videoType": "MP4",
			"url": "https://video-content-bucket-1.s3.amazonaws.com/movies/The+Lord+of+the+Rings+-+The+Fellowship+of+the+Ring.mp4",
		},
        {
			"title": "Gladiator",
			"longDescription": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
			"thumbnail": "https://video-content-bucket-1.s3.amazonaws.com/thumbNails/gladiator.jpg",
			"releaseDate": "2000",
			"rating": "R",
			"cast": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed, Richard Harris",
			"director": "Ridley Scott",
			"genres": [
                "All", "Action", "Oscar Winners - Best Picture"
			],
			"duration": 9300,
			"videoType": "MP4",
			"url": "https://video-content-bucket-1.s3.amazonaws.com/movies/Gladiator.mp4",
		},
		{
			"title": "Skyfall",
			"longDescription": "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
			"thumbnail": "https://video-content-bucket-1.s3.amazonaws.com/thumbNails/skyfall.jpg",
			"releaseDate": "2012",
			"rating": "R",
			"cast": "Daniel Craig, Javier Bardem, Naomie Harris, Judi Dench",
			"director": "Sam Mendes",
			"genres": [
                "All", "Action"
			],
		    "duration": 8580,
			"videoType": "MP4",
			"url": "https://video-content-bucket-1.s3.amazonaws.com/movies/Skyfall.mp4",
		},
    ]

    const getHoursMinTime = (length: number) => {
        let hours = Math.floor(length / 3600)
        let minutes = length % 3600 / 60

        if(minutes < 10) {
            minutes = 0
        }

        if(minutes == 0) {
            return hours + "hr"
        }
        else {
            return hours + "hr " + minutes + "m"
        }
    }

    const playVideo = () => {

    }
    
  return (
    <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Movies ({movies.length})</ThemedText>
        </ThemedView>
        <ThemedText>This is where the movies will be! Allegedly...</ThemedText>


        <FlatList 
            numColumns={4}
            data={movies} 
            renderItem={({item, index})=>(
                <View style={styles.row}>
                    <View>
                        <TouchableOpacity onPress={playVideo}>
                            <Image style={styles.thumbNail} source={{uri:item.thumbnail}}/>
                        </TouchableOpacity>
                        <ThemedText type="subtitle" style={styles.titleText}>{item.title}</ThemedText>
                        <ThemedText style={styles.releaseRatingDurationText}>{item.releaseDate} | {item.rating} | {getHoursMinTime(item.duration)}</ThemedText>
                        <ThemedText style={styles.descriptionText}>{item.longDescription}</ThemedText>

                        {/* <VideoScreen videoSource={item.url}></VideoScreen> */}
                    </View>
                </View>
            )}>
        </FlatList>

                

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  row: {
    flex: 1,
    flexWrap:'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 50,
  },
  thumbNail: {
    width: 320,
    height: 200,
    resizeMode: 'stretch',
    marginHorizontal: "auto",
    cursor: 'pointer',
  },
  titleText: {
    width: 320,
    marginTop: 3,
  },
  releaseRatingDurationText: {
    width: 320,
    marginBottom: 5,
  },
  descriptionText: {
    width: 320,
    marginVertical: 3,
  },
});
