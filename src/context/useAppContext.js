import { useContext } from 'react';
import { AppContext } from './villageContext';

export function useAppContext() {
  return useContext(AppContext);
}
