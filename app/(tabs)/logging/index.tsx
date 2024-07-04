import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor : 'red',
          marginTop : 150,
        }}
      >
        <Text style={{
          color : 'white'
        }}>prince nedjoh</Text>
      </View>
    </ScrollView>
  );
}
