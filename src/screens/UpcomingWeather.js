import React from "react"
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native"
import ListItem from '../components/ListItem';
const DATA = [
  {
    dt_txt: "2022-08-30 12:00:00",
    main: {
      temp_min: 10.76,
      temp_max: 15.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 15:00:00",
    main: {
      temp_min: 10.76,
      temp_max: 20.87,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 5.76,
      temp_max: 15.87,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
];

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
    />
  )
  const { container, image} = styles
    return (
      <SafeAreaView style={container}>
        <ImageBackground
          source={require("../../assets/upcoming.jpg")}
          style={image}
        >
        <Text>Uppcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          // ItemSeparatorComponent={() => (
          // )}
          />
        </ImageBackground>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    
    image: {
        flex: 1
    }
})
export default UpcomingWeather

