function insertInterval(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  const result = [];
  let i = 0;
  let [start, end] = newInterval;

  while (i < intervals.length && intervals[i][1] < start) {
    result.push(intervals[i++]);
  }

  while (i < intervals.length && intervals[i][0] <= end) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    i++;
  }

  result.push([start, end]);

  while (i < intervals.length) {
    result.push(intervals[i++]);
  }

  return result;
}

console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
