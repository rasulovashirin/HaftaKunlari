var elWeekForm = document.querySelector('.week__form');
var elFormInput = elWeekForm.querySelector('.week__num-input');
var elWeekDay = document.querySelector('.week__day');

elWeekForm.addEventListener('submit', function (evt){
  evt.preventDefault();


  var number = Number(elFormInput.value);

  if(number === 1){
    elWeekDay.textContent = ('Dushanba');
  }
  else if(number === 2){
    elWeekDay.textContent = ('Seshanba');
  }
  else if(number === 3){
    elWeekDay.textContent = ('Chorshanba');
  }
  else if(number === 4){
    elWeekDay.textContent = ('Payshanba');
  }
  else if(number === 5){
    elWeekDay.textContent = ('Juma');
  }
  else if(number === 6){
    elWeekDay.textContent = ('Shanba');
  }
  else if(number === 7){
    elWeekDay.textContent = ('Yakshanba');
  }
  else{
    elWeekDay.textContent = ('1 dan 7 gacha bo\'lgan son kiriting!');
  }
})
