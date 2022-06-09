import { useState, useCallback } from 'react';

export default function useAuthModel() {
  const [user, setUser] = useState({ name: 'james', age: 30 });

  const signin = useCallback(() => {
    setUser({ name: 'lebron', age: 23 });
  }, []);

  const signout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
