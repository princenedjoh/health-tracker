import { createContext, useEffect, useState } from "react";
import { retrieveJournals, retrieveLogs } from "./asyncStorage";

interface DataContextType {
  logs: string | undefined;
  journals: string | undefined;
  setItems: () => void;
  isLoading: boolean;
  error?: Error;
}

export const DataContext = createContext<DataContextType>({
  logs: '',
  journals: '',
  setItems: () => {},
  isLoading: false, //
  error: undefined,
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [logs, setLogs] = useState<string | undefined>();
  const [journals, setJournals] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const setItems = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const retrievedLogs = await retrieveLogs();
      const retrievedJournals = await retrieveJournals();
      setLogs(retrievedLogs);
      setJournals(retrievedJournals);
    } catch (err : any) {
      setError(err);
      console.error('Error retrieving data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setItems();
  }, []);

  return (
    <DataContext.Provider
      value={{ logs, journals, setItems, isLoading, error }}
    >
      {children}
    </DataContext.Provider>
  );
};
