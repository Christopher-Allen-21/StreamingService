import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
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
    ]

    const convertSecondsToHours = (length: number) => {
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
    
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Movies</ThemedText>
      </ThemedView>
      <ThemedText>This is where the movies will be! Allegedly...</ThemedText>
    


    <FlatList 
        numColumns={3}
        data={movies} 
        renderItem={({item, index})=>(
            <View style={styles.row}>
                <>
                    <Image style={styles.thumbNail} source={{uri:item.thumbnail}}/>
                    <ThemedText style={styles.titleText}>{item.title}</ThemedText>
                    <ThemedText style={styles.descriptionText}>{item.longDescription}</ThemedText>
                    <ThemedText style={styles.descriptionText}>{item.rating}</ThemedText>
                    <ThemedText style={styles.descriptionText}>{convertSecondsToHours(item.duration)}</ThemedText>
                </>
            </View>
        )}>
    </FlatList>

            

    <VideoScreen></VideoScreen>

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
  },
  titleText: {
    width: 320,
  },
  descriptionText: {
    width: 320,
  }
});
