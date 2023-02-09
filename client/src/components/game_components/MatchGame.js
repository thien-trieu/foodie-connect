import './MatchGame.css';
import { useEffect, useState } from "react"
import SingleCard from './SingleCard';

const cardImages = [
  { "src": "/img/pancake.png", matched: false },
  { "src": "/img/waffle.png", matched: false },
  { "src": "/img/ramen.png", matched: false },
  { "src": "/img/pizza.png", matched: false },
  { "src": "/img/icecream.png", matched: false },
  { "src": "/img/coffee.png", matched: false }
]

function MatchGame() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  // duplicate each card once
  // shuffle array (cards)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }


  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(()=>{ 

    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) { 
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        console.log("match !")
      resetTurn()
      } else { console.log("does not match")
      setTimeout(() => resetTurn(), 500)
      }

    }
  }, [choiceOne, choiceTwo])


  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="Game">
     <h1>Foodie Connect</h1>
     <button onClick={shuffleCards}>New Game</button>
 
     <div className="card-grid">
      {cards.map(card => (
        <SingleCard
           key={card.id} 
           card={card}
           handleChoice={handleChoice}
           flipped={card === choiceOne || card === choiceTwo || card.matched}
           disabled={disabled}
        />
      ))}
     </div>
     <p>Turns: {turns}</p>
    </div>
  );
}

export default MatchGame;