// import {configureStore} from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import {persistStore, persistReducer} from 'redux-persist';
// import sagas from './sagas';
// import rootReducer from './rootReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
// // if (__DEV__) {
// //   const createDebugger = require('redux-flipper').default;
// //   middlewares.push(createDebugger());
// // }

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: middlewares,
// });
// const persistedStore = persistStore(store);
// sagaMiddleware.run(sagas);

// export {store, persistedStore};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
