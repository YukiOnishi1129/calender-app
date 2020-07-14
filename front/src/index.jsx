import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CalendarBoard from './components/CalendarBoard/container';
import Navigation from './components/Navigation/container';
import AddScheduleDialog from './components/AddScheduleDialog/container';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

//  初期化の際に必ず呼ぶ
dayjs.locale('ja');

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
