export function generateChart(contributions) {
  const today = new Date(); 
  const endDate = new Date(today); 
  const startDate = new Date(today); 
  startDate.setDate(startDate.getDate() - 357);
  const chartData = {};

  for (let i = 0; i < 51; i++) {
    const currentWeek = {};
    for (let day = 0; day < 7; day++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + (i * 7) + day); 
      const formattedDate = currentDate.toISOString().slice(0, 10); 
      
      if (contributions[formattedDate] !== undefined) {
        currentWeek[formattedDate] = contributions[formattedDate];
      } else {
        currentWeek[formattedDate] = 0; 
      }
    }
    chartData[`Week ${i + 1}`] = currentWeek;
  }

  return chartData;
}

export function dateFormatter(dateString) {
const originalDate = new Date(dateString);

const months = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const dayOfWeekIndex = originalDate.getDay(); 
const dayOfWeek = daysOfWeek[dayOfWeekIndex]; 

const day = originalDate.getDate();
const month = months[originalDate.getMonth()];
const year = originalDate.getFullYear();

const formattedDate = ` ${day} ${month}, ${year}`;
return `${dayOfWeek}, ${formattedDate}`

}