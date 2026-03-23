import React, { createContext, useState, useContext } from 'react';
import { opportunities as initialOpportunities, userProfile as initialUserProfile } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [userProfile, setUserProfile] = useState(initialUserProfile);

  const toggleSave = (id) => {
    setOpportunities(prev => 
      prev.map(item => 
        item.id === id ? { ...item, isSaved: !item.isSaved } : item
      )
    );
  };

  const toggleEnroll = (id) => {
    setOpportunities(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const isNowEnrolled = !item.isEnrolled;
          
          // Update user profile stats
          setUserProfile(profile => ({
            ...profile,
            enrollments: profile.enrollments + (isNowEnrolled ? 1 : -1)
          }));
          
          return { ...item, isEnrolled: isNowEnrolled };
        }
        return item;
      });
      return updated;
    });
  };

  const incrementView = () => {
    setUserProfile(profile => ({
      ...profile,
      views: profile.views + 1
    }));
  };

  return (
    <AppContext.Provider value={{
      opportunities,
      userProfile,
      toggleSave,
      toggleEnroll,
      incrementView
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
