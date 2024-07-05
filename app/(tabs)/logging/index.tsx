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
import { Fragment, useContext, useEffect } from 'react';
import DashedLine from 'react-native-dashed-line';
import { DataContext } from '@/context/dataContext';
import { removeLogs, retrieveLogs, storeLogs } from '@/context/asyncStorage';

export default function HomeScreen() {
    const {logs} = useContext(DataContext)
    const logsJSON = logs && JSON.parse(JSON.parse(logs))

    useEffect(()=>{
        console.log('logsJSON:', typeof logsJSON)
    },[logs])
  return (
    !logsJSON || logsJSON?.length <= 0 ?
    <Redirect href='nologs' />
    :
    <Safescroll>
        {
            Array.isArray(logsJSON) ? (logsJSON).map((item, index : number) => (
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
            )) : <AppTypography>not array</AppTypography>
        }
    </Safescroll>
  );
}
