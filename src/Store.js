// import Reducer from "./Reducer/Reducer";
// import { createStore, applyMiddleware, compose  } from "redux";
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// rootReducer

// const persistConfig = {
//   key: 'User_data',
//   storage
// }
// const persistedReducer = persistReducer(persistConfig, Reducer)

// // const Store=createStore(persistedReducer,composeWithDevTools());
// const loggerMiddleware = createLogger();
// export const store = createStore(Reducer, compose(
//   applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware,
//   ),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

// export const persistor = persistStore(store);
// export default { store, persistor };

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore,persistReducer } from 'redux-persist';
import rootReducer from './Reducer/combine'
// import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//       key: 'User_data',
//       storage
//     }
const loggerMiddleware = createLogger();
// const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export const persistor = persistStore(store);

export default { store, persistor };