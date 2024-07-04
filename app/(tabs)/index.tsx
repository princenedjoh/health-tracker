import { Redirect, router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <Redirect href={'/home'} />
  );
}
