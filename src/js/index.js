var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import Typed from 'typed.js';


$(document).ready(() => {
  let time = "00:05"
  
  let options = {
    strings: [
      'добро пожаловать на самый минималистичный в мире сайт диджитал агентства. ^2000 шутка.', 
      'просто он еще не заполнен.<br> но работа над этим ведётся.',
      'а давать голые ссылки на работы совершенно не хочется.',
      `поэтому подождите <br> <span class="timer">${time}</span>`,
      'жаль, но нет, все таки ещё <br> не успели заполнить', 
      'но вскоре это произойдёт.<br> а пока, можете лайкнуть нас в <a href="#" target="_blank" rel="noopener noreferrer" class="fb-link">fb</a>', 
      'прикол, вы всё еще здесь?<br> вы — супер!', 
      'ну всё, хватит залипать.<br> вот вам классный тречок'
    ],
    typeSpeed: 30,
    startDelay: 1000,
    fadeOut: true,
    fadeOutClass: 'fade',
    loop: false,
    loopCount: 2,
    onStringTyped: function(pos, self) {
      if (pos === 0) {
        $('.footer').addClass('active')
      }

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
      const timer = $('.timer')
      const timeFromHTML = Number(timer.text().split(':')[1]) - 1
      time = `00:0${timeFromHTML}`
      timer.text(time)
      if (time === '00:01') {
        typed.start()
        typed.finishTimer = true
        return clearInterval(interval)
      }
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