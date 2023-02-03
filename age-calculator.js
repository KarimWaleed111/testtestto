const calculateButton = document.querySelector('#calculate-button');
const result = document.querySelector('#result');

calculateButton.addEventListener('click', () => {
  const month = document.querySelector('#month').value;
  const day = document.querySelector('#day').value;
  const year = document.querySelector('#year').value;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let age = currentYear - year;
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
  }

  result.textContent = `Your age is ${age}.`;
});
