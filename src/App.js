import React from 'react';
import AddAppointment from './components/AddAppointment';
import ListAppointments from './components/ListAppointments';

// Redux
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Veterinary Patient Administrator</h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AddAppointment />
          </div>
          <div className="col-md-6">
            <ListAppointments />
        </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
