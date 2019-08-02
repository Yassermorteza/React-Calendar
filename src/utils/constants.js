export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const REMINDERS_URL = "http://localhost:3000/reminders/";
export const DAYS_IN_WEEK = 7;
export const CURRENT_DATE = new Date();
export const CURRENT_MONTH = CURRENT_DATE.getMonth();
export const CURRENT_YEAR = CURRENT_DATE.getFullYear();
export const NUMBER_OF_DAYS = new Date(CURRENT_YEAR, CURRENT_MONTH+1, 0).getDate();
export const MONTH_FIRST_DAY = new Date(CURRENT_DATE.getFullYear(), CURRENT_DATE.getMonth(), 1).getDay();
export const TODAY = CURRENT_DATE.getDate();