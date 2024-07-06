import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLogs = async (logs : string) => {
  try {
    await AsyncStorage.setItem('logs', logs);
  } catch (error) {
    console.error('Error storing logs:', error);
  }
};

export const storeLogsDraft = async (logs : string) => {
  try {
    await AsyncStorage.setItem('logsDraft', logs);
  } catch (error) {
    console.error('Error storing logsDraft:', error);
  }
};

export const storeJournals = async (journals : string) => {
    try {
      await AsyncStorage.setItem('journals', journals);
    } catch (error) {
      console.error('Error storing journals:', error);
    }
};

export const storeJournalsDraft = async (journals : string) => {
  try {
    await AsyncStorage.setItem('journalsDraft', journals);
  } catch (error) {
    console.error('Error storing journals draft:', error);
  }
};

export const retrieveLogs = async () => {
  try {
    const logs = await AsyncStorage.getItem('logs');
    return logs ?? undefined;
  } catch (error) {
    console.error('Error retrieving logs:', error);
  }
};

export const retrieveLogsDraft = async () => {
  try {
    const logs = await AsyncStorage.getItem('logsDraft');
    return logs ?? undefined;
  } catch (error) {
    console.error('Error retrieving logs:', error);
  }
};

export const retrieveJournals = async () => {
    try {
      const journals = await AsyncStorage.getItem('journals');
      return journals ?? undefined;
    } catch (error) {
      console.error('Error retrieving journals:', error);
    }
};

export const retrieveJournalsDraft = async () => {
  try {
    const journals = await AsyncStorage.getItem('journalsDraft');
    return journals ?? undefined;
  } catch (error) {
    console.error('Error retrieving journals draft:', error);
  }
};

export const removeLogs = async () => {
  try {
    await AsyncStorage.removeItem('logs');
  } catch (error) {
    console.error('Error removing logs:', error);
  }
};

export const removeLogsDraft = async () => {
  try {
    await AsyncStorage.removeItem('logsDraft');
  } catch (error) {
    console.error('Error removing logs:', error);
  }
};

export const removeJournals = async () => {
    try {
      await AsyncStorage.removeItem('journals');
    } catch (error) {
      console.error('Error removing journals:', error);
    }
  };