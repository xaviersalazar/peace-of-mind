import { Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const client = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  return (
    <Provider value={client}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<a href="/">Return to homepage</a>} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
