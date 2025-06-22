import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";

import { thunk } from "redux-thunk";

export const store = createStore(userReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
