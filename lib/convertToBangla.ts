import moment, { Moment } from 'moment';

interface DateComponents {
  day: string;
  month: string;
  year: string;
}

export default function convertToBanglaDigits(number: number): string {
  const banglaDigits: string[] = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  const digitMap: { [key: string]: string } = {};
  for (let i = 0; i < 10; i++) {
    digitMap[i.toString()] = banglaDigits[i];
  }

  return number.toString().replace(/\d/g, (digit: string) => digitMap[digit]);
}

function convertToBanglaMonth(month: string): string {
  const banglaMonths: { [key: string]: string } = {
    January: 'জানুয়ারী',
    February: 'ফেব্রুয়ারী',
    March: 'মার্চ',
    April: 'এপ্রিল',
    May: 'মে',
    June: 'জুন',
    July: 'জুলাই',
    August: 'আগস্ট',
    September: 'সেপ্টেম্বর',
    October: 'অক্টোবর',
    November: 'নভেম্বর',
    December: 'ডিসেম্বর',
  };

  return banglaMonths[month];
}



export function getCurrentDateInGMTPlus6(): DateComponents {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Dhaka',
  };

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    ...options,
    day: 'numeric',
  });

  const monthFormatter = new Intl.DateTimeFormat('en-US', {
    ...options,
    month: 'long',
  });

  const yearFormatter = new Intl.DateTimeFormat('en-US', {
    ...options,
    year: 'numeric',
  });

  const day = convertToBanglaDigits(parseInt(dateFormatter.format(currentDate)));
  console.log(monthFormatter.format(currentDate));
  
  const month = convertToBanglaMonth(monthFormatter.format(currentDate));
  const year = convertToBanglaDigits(parseInt(yearFormatter.format(currentDate)));

  return { day, month, year };
}





export function toBanglaDate(date: string): string {
  const now = moment();
  const momentDate = moment(date);
  const duration = moment.duration(now.diff(momentDate));

  if (duration.asSeconds() < 60) {
    return `${convertToBanglaDigits(Math.floor(duration.asSeconds()))} সেকেন্ড আগে`;
  } else if (duration.asMinutes() < 60) {
    return `${convertToBanglaDigits(Math.floor(duration.asMinutes()))} মিনিট আগে`;
  } else if (duration.asHours() < 24) {
    return `${convertToBanglaDigits(Math.floor(duration.asHours()))} ঘন্টা আগে`;
  } else if (duration.asDays() < 7) {
    return `${convertToBanglaDigits(Math.floor(duration.asDays()))} দিন আগে`;
  } else if (duration.asWeeks() < 4) {
    return `${convertToBanglaDigits(Math.floor(duration.asWeeks()))} সপ্তাহ আগে`;
  } else if (duration.asMonths() < 12) {
    return `${convertToBanglaDigits(Math.floor(duration.asMonths()))} মাস আগে`;
  } else {
    return `${convertToBanglaDigits(Math.floor(duration.asYears()))} বছর আগে`;
  }
}

// const date = "2023-06-01T10:30:00Z";
// console.log(toBanglaDate('2023-06-09T23:03:00.000Z'));

