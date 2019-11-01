var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import Typed from 'typed.js';


$(document).ready(() => {
  let time = "00:05"
  
  let options = {
    strings: [
      'Добро пожаловать на самый минималистичный в мире сайт диджитал агентства. ^2000 шутка.', 
      'Просто он еще не заполнен. Но работа над этим ведётся.',
      'А давать голые ссылки на работы совершенно не хочется.',
      `Поэтому подождите <br> <span class="timer">${time}</span>`,
      'Жаль, но нет, все таки ещё не успели заполнить', 
      'Но вскоре это произойдёт. А пока, можете лайкнуть нас в <a href="#" target="_blank" rel="noopener noreferrer" class="fb-link">fb</a>', 
      'Прикол, вы всё еще здесь? Вы — супер!', 
      'Ну всё, хватит залипать. вот вам классный тречок'
    ],
    typeSpeed: 30,
    startDelay: 1000,
    fadeOut: true,
    fadeOutClass: 'fade',
    loop: false,
    loopCount: 2,
    onStringTyped: function(pos, self) {
      if ((pos === 3) && (!self.finishTimer)) {
        typed.stop()
        startTimer()
      }

      if ((pos === 5) && (!typed.fbStart)) {
        typed.stop()
        fbStart()
      }
    },
  }

  var typed = new Typed('.typed', options)

  const startTimer = () => {
    const interval = setInterval(() => {
      if (time === '00:00') {
        typed.start()
        typed.finishTimer = true
        return clearInterval(interval)
      }
      const timer = $('.timer')
      const timeFromHTML = Number(timer.text().split(':')[1]) - 1
      time = `00:0${timeFromHTML}`
      timer.text(time)
    }, 1000)
  }

  const fbStart = () => {
    $('.fb-link').click(() => {
      window.onfocus = () => {
        typed.fbStart = true
        typed.start()
      }
    })
  }
});