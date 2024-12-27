
import './App.css'
import { AudioClip } from './assets/type'
import Drum from './assets/drum';
import React from 'react';

const audioclips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1"
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2"
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3"
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3",
    description: "Heater 4"
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Clap.mp3",
    description: "Clap"
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Open-HH.mp3",
    description: "Open-HH"
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat"
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick.mp3",
    description: "Kick"
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Closed-HH.mp3",
    description: "Closed-HH"
  }
];


function App() {
  const playAudio=(e:React.KeyboardEvent<HTMLDivElement>)=>{
    const clip= audioclips.find((clip)=>clip.keyTrigger===e.key.toUpperCase());
    if(!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error);
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText=clip.description;
  };

  return (
    <>
        <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>FCC Drum machine</h1>
          <div className="whole-drum">
             {audioclips.map((clip)=>(
              <Drum audioClip={clip} key={clip.keyTrigger} />
             ))}
          </div>
          <div id="display"></div>
        </div>
    </>
  )
}

export default App
