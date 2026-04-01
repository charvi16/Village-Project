import React, { createContext, useContext, useState } from 'react';

const mockVillagers = [
  { id: 1, name: 'Vaidya Rajesh', role: 'Healer', age: 68 },
  { id: 2, name: 'Ananya', role: 'Teacher', age: 25 },
  { id: 3, name: 'Baba Ram Singh', role: 'Elder', age: 82 },
];

const mockNews = [
  { id: 1, title: 'Baisakhi Mela Planning', desc: 'The annual gathering at the mela grounds is taking shape.', category: 'Community' },
  { id: 2, title: 'Artisans Guild Expansion', desc: 'New workshop space opened for our traditional weavers.', category: 'Heritage' },
];

const AppContext = createContext();

export function AppProvider({ children }) {
  const [villagers, setVillagers] = useState(mockVillagers);
  const [news, setNews] = useState(mockNews);
  
  return (
    <AppContext.Provider value={{ villagers, news }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
