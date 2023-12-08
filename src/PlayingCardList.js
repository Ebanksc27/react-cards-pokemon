import React from "react";
import { useAxios } from "./hooks"; // Import the useAxios hook
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { v4 as uuid } from "uuid";

function PlayingCardList() {
  // Use the useAxios hook with the base URL
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          // Ensure each card has a unique key
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
