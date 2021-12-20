import { createStore,applyMiddleware,compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { reducers } from "../reducer";
import { rootSaga } from "../../saga/rootSaga";
import { sessionService } from 'redux-react-session';


export const configStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware]
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(reducers,
        initialState,
        composeEnhancer(applyMiddleware(...middleware)));
    sessionService.initSessionService(store, {refreshOnCheckAuth:true, driver:'LOCALSTORAGE'});
    sagaMiddleware.run(rootSaga);
    return store;
}