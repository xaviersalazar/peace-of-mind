import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      setUser(data?.session?.user || null);
      setLoading(false);
    };

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    getSession();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    signUp: async (data) => await supabase.auth.signUp(data),
    signIn: async (data) => await supabase.auth.signInWithPassword(data),
    signOut: async () => await supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
