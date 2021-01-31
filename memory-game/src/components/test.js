function handleClick(e) {
  setIsFlipped(!isFlipped);
  // props.updateScore(1);

  // console.log("target " + e.target.id);

  if (props.firstCard === 0) {
    props.setFirstCard(e.target.id);
  } else {
    props.setSecondCard(e.target.id);
    setTimeout(function () {
      compareCards();
    }, 2000);
  }
}

function compareCards() {
  console.log("första " + props.firstCard);
  console.log("andra " + props.secondCard);

  if (props.firstCard === props.secondCard) {
    console.log("lika");
    props.updateScore(1);
  } else {
    console.log("olika");
    setIsFlipped(!isFlipped);
  }

  // props.setFirstCard(0);

  // props.setSecondCard(0);
}
