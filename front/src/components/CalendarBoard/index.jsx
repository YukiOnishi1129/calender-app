import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { GridList } from '@material-ui/core';
import * as styles from './style.css';

dayjs.locale('ja');

const createCalendar = () => {
  // 今月の最初の日を追加
  const firstDay = dayjs().startOf('month');
  //   最初の日の曜日をindexを取得
  const firstDayIndex = firstDay.day();
  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, 'day');
      return day;
    });
};

const calendar = createCalendar();

const CalendarBord = () => {
  console.log(calendar);

  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => (
          <li key={c.toISOString()}>
            <div className={styles.element}>{c.format('D')}</div>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBord;
