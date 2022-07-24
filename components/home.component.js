import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Auto App' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>TEST</Button>
      </Layout>
    </SafeAreaView>
  );
};