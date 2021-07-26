export const baseUrl = 'https://api.news-project.ner.works';
// export const baseUrl = "http://localhost:3001";

export const headers = {
  'Content-Type': 'application/json',
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
  if (item) {
    const date = new Date(item.date);
    const months = [
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
      date.toString().split('').slice(0, 15).join('').split(' ')[2]
    } ${months[date.getMonth()]} ${date.getFullYear()}`;

    return formattedDate;
  }
};
