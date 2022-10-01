const subtractDays = (date, days) => {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy;
};

const date = new Date();

const newDate = subtractDays(date, 10);

console.log(newDate);
