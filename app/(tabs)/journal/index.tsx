import Safescroll from '@/components/safeScroll/safescroll';
import { alljournals } from './components/journals';
import { Redirect } from 'expo-router';
import AppTypography from '@/styles/components/appTypography';
import Flex from '@/styles/components/flex';
import JournalCard from './components/journalCard';

export default function Journals() {
  return (
    alljournals.length <= 0 ?
    <Redirect href='nojournal' />
    :
    <Safescroll>
      <Flex
        direction='column'
        gap={20}
      >
        {
          [1,2,3,4,5,6].map((item, index : number) => (
            <JournalCard 
              key={index}
            />
          ))
        }
      </Flex>
    </Safescroll>
  );
}
