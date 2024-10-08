
import './App.css';
import { AuthProvider } from './Context/AuthContext';
import { AppProvider } from "./Context/AppContext";
import { AnimatePresence } from 'framer-motion';
import Router from './Router';

const App = () => {

  console.log("system rebooted")

  return (
    <>
    <AnimatePresence wait>
    <AuthProvider>
    <AppProvider>
      <Router/>   
    </AppProvider>

    </AuthProvider>

    </AnimatePresence>
    </>

  );

};



export default App;