import Player from './components/Player.jsx';
import Challenge from './components/Challenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title="Easy" targetTime={1}/>
        <Challenge title="Not that easy" targetTime={5}/>
        <Challenge title="Getting Tough" targetTime={10}/>
        <Challenge title="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
