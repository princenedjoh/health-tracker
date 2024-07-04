import Safescroll from '@/components/safeScroll/safescroll';
import AppTypography from '@/styles/components/appTypography';
import Flex from '@/styles/components/flex';
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import Dates from './components/dates';
import Top from './components/top/top';
import Description from './components/description';

export default function HomeScreen() {
  return (
    <Safescroll>
      {/* <Dates /> */}
      <Top />
      <Description />
    </Safescroll>
  );
}
