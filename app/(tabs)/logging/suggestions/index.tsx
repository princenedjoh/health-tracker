
import Safescroll from '@/components/safeScroll/safescroll';
import { Entypo } from '@expo/vector-icons';
import theme from '@/styles/theme';
import Segment from './components/segment';
import Group from '@/components/settings/group';
import { optionsTypes } from '@/components/settings/option';

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
    <Safescroll>
      <Group 
        options={options}
      />
      <Segment />
      <Segment />
    </Safescroll>
  );
}
