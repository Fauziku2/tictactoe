 document.addEventListener('DOMContentLoaded', init)

 function init () {
  var image1 = document.getElementsByClassName('img')
  var conditions = true
  var alert

  var b1 = document.querySelector('#b1')
  var b2 = document.querySelector('#b2')
  var b3 = document.querySelector('#b3')
  var b4 = document.querySelector('#b4')
  var b5 = document.querySelector('#b5')
  var b6 = document.querySelector('#b6')
  var b7 = document.querySelector('#b7')
  var b8 = document.querySelector('#b8')
  var b9 = document.querySelector('#b9')

  var start = document.querySelector('#start')

  function startOver () {
    b1.setAttribute('class', '')
    b2.setAttribute('class', '')
    b3.setAttribute('class', '')
    b4.setAttribute('class', '')
    b5.setAttribute('class', '')
    b6.setAttribute('class', '')
    b7.setAttribute('class', '')
    b8.setAttribute('class', '')
    b9.setAttribute('class', '')
    conditions = true
  }

  function checkWinner () {
    if ((b1.classList.contains('x') && b2.classList.contains('x') && b3.classList.contains('x')) ||
        (b4.classList.contains('x') && b5.classList.contains('x') && b6.classList.contains('x')) ||
        (b7.classList.contains('x') && b8.classList.contains('x') && b9.classList.contains('x')) ||
        (b1.classList.contains('x') && b4.classList.contains('x') && b7.classList.contains('x')) ||
        (b2.classList.contains('x') && b5.classList.contains('x') && b8.classList.contains('x')) ||
        (b3.classList.contains('x') && b6.classList.contains('x') && b9.classList.contains('x')) ||
        (b1.classList.contains('x') && b5.classList.contains('x') && b9.classList.contains('x')) ||
        (b3.classList.contains('x') && b5.classList.contains('x') && b7.classList.contains('x'))) {
      alert('X wins, play again')
      startOver()
      return false
    }

    if ((b1.classList.contains('o') && b2.classList.contains('o') && b3.classList.contains('o')) ||
        (b4.classList.contains('o') && b5.classList.contains('o') && b6.classList.contains('o')) ||
        (b7.classList.contains('o') && b8.classList.contains('o') && b9.classList.contains('o')) ||
        (b1.classList.contains('o') && b4.classList.contains('o') && b7.classList.contains('o')) ||
        (b2.classList.contains('o') && b5.classList.contains('o') && b8.classList.contains('o')) ||
        (b3.classList.contains('o') && b6.classList.contains('o') && b9.classList.contains('o')) ||
        (b1.classList.contains('o') && b5.classList.contains('o') && b9.classList.contains('o')) ||
        (b3.classList.contains('o') && b5.classList.contains('o') && b7.classList.contains('o'))) {
      alert('O wins, play again')
      startOver()
      return false
    }
  }

  function draw () {
    if ((b1.classList.contains('x') || b1.classList.contains('o')) &&
        (b2.classList.contains('x') || b2.classList.contains('o')) &&
        (b3.classList.contains('x') || b3.classList.contains('o')) &&
        (b4.classList.contains('x') || b4.classList.contains('o')) &&
        (b5.classList.contains('x') || b5.classList.contains('o')) &&
        (b6.classList.contains('x') || b6.classList.contains('o')) &&
        (b7.classList.contains('x') || b7.classList.contains('o')) &&
        (b8.classList.contains('x') || b8.classList.contains('o')) &&
        (b9.classList.contains('x') || b9.classList.contains('o'))) {
      alert('Draw! try again')
      startOver()
      return false
    }
  }

  function startGame () {
    if (!(this.classList.contains('x') || this.classList.contains('o'))) {
      if (conditions === true) {
        this.setAttribute('class', 'x')
        checkWinner()
        draw()
        conditions = false
        return false
      }
      if (conditions === false) {
        this.setAttribute('class', 'o')
        checkWinner()
        draw()
        conditions = true
      }
    }
  }

  for (var i = 0; i < image1.length; i = i + 1) {
    image1[i].addEventListener('click', startGame, false)
  }

  start.addEventListener('click', startOver, false)
// }
