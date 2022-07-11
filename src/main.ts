import './style.css'


// The essence of Hangman AKA "Guess the word":
// Enter characters
// See which characters they guessed
// See which characters they got wrong
// Be told when they guessed the word
// Be told when they lose the game

// ???: How do we get a random

let state = {
  word: 'program',
  characters: ['b','c', 'w','v','m'],
  maxMistakes: 5
}

// Q: What's the word we're guesssing? ✅ state.word

// Q: What letters has the user entered?  ✅ state.characters
// Note: Don't allow the user to enter the same letter more than once

// Q: How many attempts do we have? ✅ state.maxMistakes

// Q: How many mistakes has the user made so far?
// Count the letters in state.characters that ARE NOT in state.word

function getmistakes(){
  let mistakes=state.characters.filter(character=>!state.word.includes(character))
  return mistakes

}

function mistakesCount(){
  let mistakesC=getmistakes()
  return mistakesC.length
}
mistakesCount()

  window.mistakesCount=mistakesCount
window.state=state
window.getmistakes=getmistakes


function getRightGuesses(){
  let mistakes=state.characters.filter(character=>state.word.includes(character))
  return mistakes
}

function getRightGuessesCount(){
 let rightG=getRightGuesses()
return rightG.length
}


function render (){
  let app=document.querySelector('#app')
  if(app===null)return
  app.textContent=''

  let displayMistakes=document.createElement('h5')
  displayMistakes.textContent=`Mistakes: ${getmistakes()}(${mistakesCount()})  ` 
  
  let rightGuesses=document.createElement('h5')
  rightGuesses.textContent=`Guesses: ${getRightGuesses()}(${getRightGuessesCount()})  ` 

  app.append(displayMistakes,rightGuesses)
}
render()


function userKeypress(){
  // event is to know what the user types
document.addEventListener('keyup',function(event){
 

// if its already there stop
 if (state.characters.includes(event.key)) return
 
  state.characters.push(event.key )



render()
})
}


userKeypress()
render()