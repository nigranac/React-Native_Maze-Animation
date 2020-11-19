import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView} from 'react-native';
import posed from 'react-native-pose';
const GridItem = posed.View({
  RIGHT: {rotate: '45deg'},
  LEFT: {rotate: '-45deg'},
});
const POSITIONS = ['LEFT', 'RIGHT'];
const getRandomPosition = (arr = POSITIONS) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Grid = ({items}) =>
items.map(({key, position}) => (
  <GridItem pose={position} key={key} style={styles.gridItem}>
    <View style={styles.gridItemDiagonal} />
  </GridItem>
));

const constructGrid = () => {
  return [...Array(33).keys()].map((index) => ({
    key:index,
    position: getRandomPosition(),
  }));
};

const Sample = () => {
  const [parca, setParca] = useState('RIGHT');

  useEffect(() => {
    setTimeout(() => {
      setParca(parca === 'RIGHT' ? 'LEFT' : 'RIGHT');
    }, 1000);
  }, [parca]);

  return (
    <View style={styles.container}>
      <Grid items={constructGrid()} />
    </View>
  );
};

export default Sample;

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: 'gold',
    borderWidth: 2,
    borderColor: '#333',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  },
  gridItemDiagonal: {
    width: 3,
    height: Math.sqrt(2) * 100,
    backgroundColor: 'purple',
  },
  container: {
    flex: 1,
    backgroundColor: 'gold',
    flexDirection:"row",
    flexWrap:"wrap"
  },
});

