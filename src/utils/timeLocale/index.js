export function getTimeFromDate(date) {
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${hour}:${minutes}:${seconds}`;
}

export function dateTimeToBrl(date) {
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  return `${date.getDate()}/${month}/${date.getFullYear()} ${getTimeFromDate(
    date
  )}`;
}
