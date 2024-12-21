import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice'
import bookReducer from './booksSlice'
import interactivReducer from './interactivSlise'





const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  events: interactivReducer,

})

const persistConfig = {
  key: 'root',
  storage,
 }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store) 
export  default store;