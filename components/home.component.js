import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Divider, Text, TopNavigation, TopNavigationAction, List } from '@ui-kitten/components';

const data = new Array(10).fill({
  title: 'Car Brand',
  description: 'Description of this car brand',
});

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  const brandCard = ({ item, index }) => (
    <Card style={styles.brandCard}>
      <View style={styles.brandCardView}>
        <Image
          style={styles.image}
          source={require('../assets/icon.png')}
        />
        <View style={styles.titleView}>
        <Text
          category='s1'>
          {`${item.title} ${index + 1}`}
        </Text>
        <Text
          style={styles.itemDescription}
          appearance='hint'>
          {`${item.description} ${index + 1}`}
        </Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Auto App' alignment='center'/>
      <Divider/>
      <List
        data={data}
        renderItem={brandCard}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginRight: 15,
  },
  brandCard: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  brandCardView: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    marginHorizontal: -24,
    marginVertical: -16,
  },
  titleView: {
    flexDirection: 'column',
    paddingVertical: 8,
  },
  itemDescription: {
    marginTop: 4,
  }
});