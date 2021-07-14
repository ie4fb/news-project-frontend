export const baseUrl = "https://api.news-project.ner.works";

export const headers = {
  "Content-Type": "application/json",
};


export const checkError = async (res) => {
  if (res.ok) {
    return res.json();
  }
  await res
    .text()
    .then((text) => {
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    })
    .then((text) => {
      return Promise.reject(text.message || text.error || text);
    });
};

export const formatDate = (item) => {
  const date = new Date();
  const months = [
    '',
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  const formattedDate = `${
    date.toISOString(item.date).split('').slice(0, 10).join('').split('-')[2]
  } ${
    months[
      parseInt(
        date
          .toISOString(item.date)
          .split('')
          .slice(0, 10)
          .join('')
          .split('-')[1]
      )
    ]
  } ${
    date.toISOString(item.date).split('').slice(0, 10).join('').split('-')[0]
  }`;

  return formattedDate
}