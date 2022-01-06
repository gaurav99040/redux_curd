
import './App.css';
import Curd from "./Curd"
import { store, persistor } from './Store';
import Show from './Show';
import Update from './Update';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* < Router>
    <Routes> */}
        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<Curd />} exact />
          <Route path="/showdata" element={<Show />} />
          <Route path="/update/:id" element={<Update />} />

          {/* </Switch> */}
        </Routes>
        {/* </Routes>
     </Router> */}
      </PersistGate>
    </Provider>



  );
}

export default App;
