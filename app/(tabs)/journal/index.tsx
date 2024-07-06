import Safescroll from '@/components/safeScroll/safescroll';
import { alljournals } from './components/journals';
import { Redirect } from 'expo-router';
import AppTypography from '@/styles/components/appTypography';
import Flex from '@/styles/components/flex';
import JournalCard from './components/journalCard';
import { useContext, useEffect } from 'react';
import { DataContext } from '@/context/dataContext';

export default function Journals() {
  const {journals} = useContext(DataContext)

  useEffect(()=>{
    console.log(journals)
  },[])

  return (
    !journals || !Array.isArray(journals) || journals?.length <= 0 ?
    <Redirect href='nojournal' />
    :
    <Safescroll>
      <Flex
        direction='column'
        gap={20}
      >
        {
          Array.isArray(journals) ? (journals).reverse().map((item, index : number) => (
            <JournalCard 
              data={item}
              index={index}
              key={index}
            />
          )) :
          <AppTypography>not array</AppTypography>
        }
      </Flex>
    </Safescroll>
  );
}
