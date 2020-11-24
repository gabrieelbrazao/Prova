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

export function dateTimeToUTC(date) {
  const pieces = date.split(" ");
  const pieces2 = pieces[0].split("/");

  return new Date(`${pieces2[2]}-${pieces2[1]}-${pieces2[0]}T${pieces[1]}`);
}

export function isFutureDate(date) {
  console.log(dateTimeToUTC(date));
  return dateTimeToUTC(date).getTime() > new Date().getTime();
}

export function javaReturnToBrl(date) {
  const pieces = date.split(" ");
  const pieces2 = pieces[0].split("-");

  return `${pieces2[2]}/${pieces2[1]}/${pieces2[0]} ${pieces[1].split(".")[0]}`;
}
