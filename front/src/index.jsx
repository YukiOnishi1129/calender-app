import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import CalendarBoard from './components/CalendarBoard';
//  初期化の際に必ず呼ぶ
dayjs.locale('ja');

const App = () => (
  <div>
    <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
