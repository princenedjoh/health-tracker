import { images } from '@/assets/dev';
import Button from '@/components/button/button';
import ImageBG from '@/components/imgbg/imgbg';
import Safescroll from '@/components/safeScroll/safescroll';
import AppTypography, { Title } from '@/styles/components/appTypography';
import Flex from '@/styles/components/flex';
import { sizes } from '@/utils/sizes';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

const NoJournal = () => {
  return (
    <Flex
      height={'100%'}
      direction='column'
      align='center'
      justify='center'
      position='relative'
    >
      <Button
        style={{
          position : 'absolute',
          bottom : 20,
          width : '95%'
        }}
        paddingVertical={20}
        onPress={()=>router.push('journal/suggestions')}
      >
        Start Journaling
      </Button>
      <Flex
        width={'auto'}
        direction='column'
        justify='center'
        align='center'
      >
        <ImageBG 
          source={images.clipboard}
          resizeMode='contain'
          width={150}
          height={150}
        />
        <Title>
          Start Journaling
        </Title>
        <Flex
          width={'80%'}
        >
          <AppTypography
            textAlign='center'
          >
            Improve your mental health and stress management. 
            (For those seeking emotional well-being)
          </AppTypography>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NoJournal