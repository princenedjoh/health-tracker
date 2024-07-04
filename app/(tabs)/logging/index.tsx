import { optionsTypes } from '@/components/settings/option';
import theme from '@/styles/theme';
import { Entypo } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { allLogs } from './suggestions/components/logs';
import Safescroll from '@/components/safeScroll/safescroll';

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
    </Safescroll>
  );
}
