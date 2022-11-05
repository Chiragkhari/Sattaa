import "./App.css";
import Button from "react-bootstrap/Button";
import Btn from "./components/button";
import ResultBox from "./components/resultbox";

function App() {
    return (
        <div className="App">
            <div className="main-div">
                <div className="para-div">
                    <p className="period">Period</p>
                    <p className="count-down">Count Down</p>
                </div>
                <div className="btn-div">
                    <Button variant="success" className="btn1" >Join Green</Button>
                    <Button className="btn2">Join Violet</Button>
                    <Button variant="danger" className="btn3">Join Red</Button>
                </div>
                <div className="ratiodiv">
                    <span className="ratio">1:2</span> <span className="ratio">1:4.5</span><span className="ratio">1:2</span>
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
                <span className="ratio2">1:9</span>
                <div className="records">
                    <p className="records2">Record</p>
                </div>
                {/* <div className="div1"></div>
                    <div className="div2"></div> */}
                <div className="resultdiv1" >
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                <div>
                <ResultBox className1="div1" className2="div2" />
                </div>
                </div>

                    {/* <Circles divClassName="recordrow1" circleClass="circle1" />
                <Circles divClassName="recordrow2" circleClass="circle2" />
                <Circles divClassName="recordrow3" circleClass="circle3" /> */}

            </div>
        </div>
    );
}

export default App;
