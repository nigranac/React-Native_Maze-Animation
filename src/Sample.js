import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Text, ScrollView} from 'react-native';
import posed from 'react-native-pose';



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
