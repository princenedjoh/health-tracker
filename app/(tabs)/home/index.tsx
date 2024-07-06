import Safescroll from '@/components/safeScroll/safescroll';
import AppTypography from '@/styles/components/appTypography';
import Flex from '@/styles/components/flex';
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import Dates from './components/dates';
import Top from './components/top/top';
import Description from './components/description';
import { useContext, useEffect } from 'react';
import { retrieveLogs } from '@/context/asyncStorage';
import { DataContext } from '@/context/dataContext';

export default function HomeScreen() {
  const {setItems, logs} = useContext(DataContext)
  const getlogs = async () => {
    await setItems();
    console.log(typeof logs)
  }

  useEffect(() => {
    console.log('items')
    getlogs()
  }, []);

  return (
    <Safescroll>
      {/* <Dates /> */}
      <Top />
      <Description />
    </Safescroll>
  );
}
