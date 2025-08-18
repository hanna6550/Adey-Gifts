import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
// import testReducer from './testSlice';
// import partnerReducer from "./partnerSlice";
// import teamReducer from "./teamSlice";
// import SubscriberReducer from './subscriber'

export const store = configureStore({
  reducer: {
    product: productReducer,
    // test: testReducer,
    // partner: partnerReducer,
    // team: teamReducer,
    // subscriber: SubscriberReducer,
  },
});
