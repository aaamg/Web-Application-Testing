//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
//import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  
 
  function out(){
    if (strike = 4){
      return strike = 0
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Batter Strikes</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{strike}</div>
          </div>
          {/* <div className="timer">00:03</div> */}
          <div className="away">
            <h2 className="away__name">Batter Balls</h2>
            <div className="away__score">{ball}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setStrike(strike + 1)}>Strike Count</button>
          <button onClick={() => setStrike({out})}>Reset Strikes</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setBall(ball + 1)}>Ball Count</button>
          <button onClick={() => setBall(ball + 1)}>Ball Count</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setStrike(strike + 1)}>Foul</button>
          <button onClick={() => setStrike(strike = 0)}>Hit</button>
        </div>
        {/* <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setYards(yards + 1)}>Yard + 1</button>
          <button className="awayButtons__touchdown" onClick={() => setYards(yards - 1)}>Yard - 1</button>
        </div> */}
      </section>
    </div>
  );
}

export default App;
