import{createStore, applyMiddleware} from 'redux';
import { composeWithDevtools } from 'redux-devtools-extensions';
import thunk from 'redux-thunk';

const middleware = [thunk]


const store= createStore(
    reducer,
    composeWithTools(applyMiddleware(...thunk))
);


export default store;