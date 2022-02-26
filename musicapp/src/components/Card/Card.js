import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './Card.style';
const Card = props => {
  return (
    <View style={styles.container}>
      <Image source={{uri:props.song.imageUrl}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View>
          <View style={styles.descriptionContent}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}> {props.song.year}</Text>
          </View>
            {props.song.isSoldOut ? <View style={styles.soldOutWrapper}><Text style={styles.soldOut}>Sold Out</Text></View> : null}
        </View>
      </View>
    </View>
  );
};

export default Card;
