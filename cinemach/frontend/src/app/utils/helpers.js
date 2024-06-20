export const getYouTubeVideoId = (url) => {
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.toString().match(regExp);

  if (match) {
    return match[1];
  }

  return null;
};

export const handleMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let hoursLabel;
  let minutesLabel;

  if (hours % 10 === 1) {
    hoursLabel = "час";
  } else if (hours % 10 >= 2 && hours % 10 <= 4) {
    hoursLabel = "часа";
  } else if (hours % 10 >= 5 && hours % 10) {
    hoursLabel = "часов";
  }

  if (remainingMinutes % 10 === 1 || remainingMinutes % 10 === 21) {
    minutesLabel = "минута";
  } else if (remainingMinutes % 10 >= 2 && remainingMinutes % 10 <= 4) {
    minutesLabel = "минуты";
  } else if (remainingMinutes % 10 >= 5 && remainingMinutes % 10 <= 20) {
    minutesLabel = "минут";
  } else {
    minutesLabel = "минут";
  }

  if (hours === 0) {
    return `${remainingMinutes} ${minutesLabel}`;
  } else if (hours === 1 && remainingMinutes === 0) {
    return "60 минут";
  } else {
    return `${hours} ${hoursLabel} ${remainingMinutes} ${minutesLabel}`;
  }
};

export const handleformattedDate = (inputDate) => {
  const date = new Date(inputDate);

  const day = date.getDate();
  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
