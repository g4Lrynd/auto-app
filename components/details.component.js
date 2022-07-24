import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, List, ListItem, Avatar } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const data = new Array(20).fill({
  title: 'Car Brand ',
  description: 'Description of this car brand',
});

export const DetailsScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const brand = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={ItemImage}
    />
  );

  const ItemImage = (props) => (
    <Avatar
      {...props}
      style={styles.avatar}
      source={require('../assets/icon.png')}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Auto App' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={brand}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    tintColor: null,
    marginRight: 10,
    shape: 'square',
    marginTop: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    textAlign: 'right',
    minWidth: 64,
  },
});