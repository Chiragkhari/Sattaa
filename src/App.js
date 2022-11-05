import "./App.css";
import Button from "react-bootstrap/Button";
import Btn from "./components/button";
import ResultBox from "./components/resultbox";
import { useEffect, useState } from "react";
import { getGameData } from "./utils/getGame";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Modal from 'react-modal';

// import Timer from 'react-timer'
// import CountdownTimer from "./components/timer";
// import Timer from "./components/newTimer";
// import { useTimer } from 'react-timer-hook';
function App() {
  const [gameData, setGameData] = useState({
    id: "Loading",
    status: "Inactive",
    // time: 0,
    green: 0,
    voilet: 0,
    red: 0,
    number: 0,
  });
  const [timer, setTime] = useState(0);

  useEffect(getDataFromAPI, []);

  function getDataFromAPI() {
    getGameData().then((data) => {
      setGameData(data);
      setTime(Number(data.time));
      console.log(timer, "==========================", data, data.time);
    });
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (
    <div className="App">
      <div className="main-div">
        <div className="md-12">
          <div className="md-6 para-div">
            <p className="period">Period</p>
            <span className="periodvalue"> {gameData?.id}</span>
            <p className="count-down">Count Down</p>
          </div>
            <div className="timerspan">
            <CountdownCircleTimer
              isPlaying
              duration={timer}
              size={50}
              strokeWidth={6}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            </div>
        </div>
        <div className="btn-div">
          <Button variant="success" className="btn1" onClick={openModal}>
            Join Green
          </Button>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
          <Button className="btn2">Join Violet</Button>
          <Button variant="danger" className="btn3">
            Join Red
          </Button>
        </div>
        <div className="ratiodiv">
          <span className="ratio">1:{gameData?.green}</span>{" "}
          <span className="ratio">1:{gameData?.voilet}</span>
          <span className="ratio">1:{gameData?.red}</span>
        </div>
        <div className="row1">
          <Btn className="any" value="1" />
          <Btn className="any" value="2" />
          <Btn className="any" value="3" />
          <Btn className="any" value="4" />
          <Btn className="any" value="5" />
        </div>
        <div className="row2">
          <Btn className="any" value="6" />
          <Btn className="any" value="7" />
          <Btn className="any" value="8" />
          <Btn className="any" value="9" />
          <Btn className="any" value="0" />
        </div>
        <span className="ratio2">1:{gameData?.number}</span>
        <div className="records">
          <p className="records2">Record</p>
        </div>
        <div className="resultdiv1">
          <div className="resultdiv2">
            <span className="recordnumber">888</span>
            <ResultBox className1="div1" className2="div2" />
          </div>
          <div className="resultdiv2">
            <span className="recordnumber">888</span>
            <ResultBox className1="div1" className2="div2" />
          </div>
        </div>
      </div>
    </div>
  );
  }

export default App;
