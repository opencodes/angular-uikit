export const DefaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
export const DefaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
export const DefaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
export const DefaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

export interface DateObj {
  day: number;
  dayString: string;
  dayStringShort: string;
  date: string;
  month: string;
  monthString: string;
  monthStringShort: string;
  time: string;
  hours: string;
  minutes: string;
  seconds: string;
  year: string;
  UTCString: string;
  numericDate: string;
}
