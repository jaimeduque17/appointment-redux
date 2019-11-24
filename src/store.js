import { createStore } from 'redux';
import reducer from './reducers';
import { getStateStorage, saveStateStorage } from './localstorage';

// initial state is defined
// const initialState = [];

// get appointments of localstorage
const storageState = getStateStorage();

const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveStateStorage({
        appointments: store.getState().appointments
    })
})

export default store;