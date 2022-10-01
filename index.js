const subtractDays = (date, days) => {
  date.setDate(date.getDate() - days);
  return date;
};

let newDate = new Date();
console.log(subtractDays(newDate, 10).getDate());
