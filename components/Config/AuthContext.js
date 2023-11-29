import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Assuming you have a user object
  const [elderUser, setElderUser] = useState(null); // Assuming you have an elderUser object

  // Add other context-related state and logic here

  const updateUser = (updatedUser) => {
    // Implement logic to update the user in your context
    // For example:
    setElderUser({ ...elderUser, ...updatedUser });
  };

  const value = {
    user,
    elderUser,
    updateUser, // Include the updateUser function in the context
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
