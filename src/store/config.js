import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from "../Login/store/LoginReducer";
import dashboardReducer from "../Dashboard/store/DashboardReducer";


const rootReducer = combineReducers({
    user: loginReducer,
    dashboard: dashboardReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;