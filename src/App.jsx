import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChanllege.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
      </div>
      <div id="challenges">
        <TimerChallenge title="Not Easy" targetTime={5} />
      </div>
      <div id="challenges">
        <TimerChallenge title="Getting Tough" targetTime={10} />
      </div>
      <div id="challenges">
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
