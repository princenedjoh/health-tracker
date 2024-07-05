import { optionsTypes } from '@/components/settings/option';
import theme from '@/styles/theme';
import { Entypo } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { allLogs } from './components/logs';
import Safescroll from '@/components/safeScroll/safescroll';
import Flex from '@/styles/components/flex';
import AppTypography from '@/styles/components/appTypography';
import { View } from 'react-native';
import LogHistoryCard from './components/logHistoryCard';
import { Fragment } from 'react';
import DashedLine from 'react-native-dashed-line';

export default function HomeScreen() {
  const options : optionsTypes[] = [
      {
          title : 'See All',
          right : (
              <Entypo
                  name="chevron-right"
                  color={theme.colors.text.secondary}
                  style={{
                      marginTop : 1
                  }}
              />
          )
      }
  ]
  return (
    allLogs.length <= 0 ?
    <Redirect href='nologs' />
    :
    <Safescroll>
        {
            allLogs.map((item, index : number) => (
                <Fragment key={index}>
                    <LogHistoryCard
                        color={item.color}
                    />
                    <DashedLine
                        dashLength={5}
                        dashGap={3}
                        style={{
                            borderRadius: 5,
                            backgroundColor : theme.colors.bg.secondary,
                            width:'100%',
                            height:2,
                        }}
                    />
                </Fragment>
            ))
        }
    </Safescroll>
  );
}
