import { createContext, useEffect, useState } from "react";
import { retrieveJournals, retrieveLogs } from "./asyncStorage";

interface DataContextType {
  logs: object | undefined;
  journals: object | undefined;
  setItems: () => void;
  isLoading: boolean;
  error?: Error;
}

export const DataContext = createContext<DataContextType>({
  logs: [],
  journals: [],
  setItems: () => {},
  isLoading: false, //
  error: undefined,
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [logs, setLogs] = useState<object | undefined>();
  const [journals, setJournals] = useState<object | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const setItems = async () => {
    setIsLoading(true);
    setError(undefined);
    try {
      let retrievedLogs = await retrieveLogs();
      let retrievedJournals = await retrieveJournals();
      console.log('settingsnow')
      console.log('retr logs:', retrievedLogs)
      if(retrievedLogs){
        console.log('new rewsir')
        console.log('typeof log', typeof retrievedLogs)
        let logsCopy = retrievedLogs
        while (typeof logsCopy === 'string'){
          console.log('whilte operation')
          logsCopy = JSON.parse(logsCopy)
        }
        console.log('typeof logssCopy:', typeof logsCopy)
        setLogs(logsCopy);
      }
      if(retrievedJournals){
        let journalsCopy = retrievedJournals
        while (typeof journalsCopy === 'string'){
          journalsCopy = JSON.parse(journalsCopy)
        }
        setJournals(journalsCopy);
      }
    } catch (err : any) {
      setError(err);
      console.error('Error retrieving data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{ logs, journals, setItems, isLoading, error }}
    >
      {children}
    </DataContext.Provider>
  );
};
