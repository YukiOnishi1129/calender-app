// 日付をカレンダー表記へ編集するロジック
import dayjs from 'dayjs';

// カレンダーの日付配列
export const createCalendar = (month) => {
  // 今月の最初の日を追加
  const firstDay = getMonth(month);
  // 最初の日の曜日をindexを取得
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      return firstDay.add(diffFromFirstDay, 'day');
    });
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

// 当日かどうか判断 (ブルーのポイントをいれる)
export const isSameDay = (d1, d2) => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

// 当月かどうか判断
export const isSameMonth = (m1, m2) => {
  const format = 'YYYYMM';
  return m1.format(format) === m2.format(format);
};

// 月の最初の日付かを判断
export const isFirstDay = (day) => day.date() === 1;

// 高階関数
const getMonthStateCreator = (diff) => (month) => {
  const day = getMonth(month).add(diff, 'month');
  return formatMonth(day);
};

export const getNextMonth = getMonthStateCreator(1);
export const getPreviousMonth = getMonthStateCreator(-1);

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});
