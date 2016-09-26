document.addEventListener('DOMContentLoaded', init)
function init () {
  var currentPlayer = 1
  var conditions = false
  var clickCount = 0


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

  b1.addEventListener('click', boxClick)
  b2.addEventListener('click', boxClick)
  b3.addEventListener('click', boxClick)
  b4.addEventListener('click', boxClick)
  b5.addEventListener('click', boxClick)
  b6.addEventListener('click', boxClick)
  b7.addEventListener('click', boxClick)
  b8.addEventListener('click', boxClick)
  b9.addEventListener('click', boxClick)

  function boxClick () {
    clickCount++

    if (currentPlayer === 1) {
      this.classList.add('x')
    } else {
      this.classList.add('o')
    }
    if(clickCount >= 9) {
      conditions = true
    }
    // else {
    // alert('Draw Game')
    // }
    checkWin()
    resetGame()

    // if(clickCount <= 9) {
    //   checkdraw()
    // }
    checkDraw()
  //  console.log(b1.className)
  }


  b1.addEventListener('click', switchPlayer)
  b2.addEventListener('click', switchPlayer)
  b3.addEventListener('click', switchPlayer)
  b4.addEventListener('click', switchPlayer)
  b5.addEventListener('click', switchPlayer)
  b6.addEventListener('click', switchPlayer)
  b7.addEventListener('click', switchPlayer)
  b8.addEventListener('click', switchPlayer)
  b9.addEventListener('click', switchPlayer)

  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }

  function checkWin () {
    if ((b1.classList.contains('x') && b2.classList.contains('x') && b3.classList.contains('x')) ||
       (b4.classList.contains('x') && b5.classList.contains('x') && b6.classList.contains('x')) ||
       (b7.classList.contains('x') && b8.classList.contains('x') && b9.classList.contains('x')) ||
       (b1.classList.contains('x') && b4.classList.contains('x') && b7.classList.contains('x')) ||
       (b2.classList.contains('x') && b5.classList.contains('x') && b8.classList.contains('x')) ||
       (b3.classList.contains('x') && b6.classList.contains('x') && b9.classList.contains('x')) ||
       (b1.classList.contains('x') && b5.classList.contains('x') && b9.classList.contains('x')) ||
       (b3.classList.contains('x') && b5.classList.contains('x') && b7.classList.contains('x'))) {
         alert('X wins!')
         conditions = true
    }
    else if ((b1.classList.contains('o') && b2.classList.contains('o') && b3.classList.contains('o')) ||
             (b4.classList.contains('o') && b5.classList.contains('o') && b6.classList.contains('o')) ||
             (b7.classList.contains('o') && b8.classList.contains('o') && b9.classList.contains('o')) ||
             (b1.classList.contains('o') && b4.classList.contains('o') && b7.classList.contains('o')) ||
             (b2.classList.contains('o') && b5.classList.contains('o') && b8.classList.contains('o')) ||
             (b3.classList.contains('o') && b6.classList.contains('o') && b9.classList.contains('o')) ||
             (b1.classList.contains('o') && b5.classList.contains('o') && b9.classList.contains('o')) ||
             (b3.classList.contains('o') && b5.classList.contains('o') && b7.classList.contains('o'))) {
               alert('O wins!')
               conditions = true
    } else {

    }
  }

  start.addEventListener('click', resetButton)

  function resetButton () {
    location.reload()
  }

  function resetGame () {
    if (conditions === true) {
      location.reload()
    }
  }

  function checkDraw () {
      if ((b1.classList.contains('x') || b1.classList.contains('o')) &&
          (b2.classList.contains('x') || b2.classList.contains('o')) &&
          (b3.classList.contains('x') || b3.classList.contains('o')) &&
          (b4.classList.contains('x') || b4.classList.contains('o')) &&
          (b5.classList.contains('x') || b5.classlist.contains('o')) &&
          (b6.classList.contains('x') || b6.classList.contains('o')) &&
          (b7.classList.contains('x') || b7.classList.contains('o')) &&
          (b8.classList.contains('x') || b8.classList.contains('o')) &&
          (b9.classList.contains('x') || b9.classList.contains('o'))) {
          alert('It is a Draw!')
          conditions = true
        }
  }

}
