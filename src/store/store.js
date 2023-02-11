import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getStoreAndPersistor = () => {
  const store = createStore(persistedReducer, undefined, composedEnhancers);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default getStoreAndPersistor;
