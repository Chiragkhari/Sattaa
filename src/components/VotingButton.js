
import './VotingButton.css';

function VotingButton({ clickFunction, className = "" }) {
    return (
        <button className={className} onClick={clickFunction}>
        </button>
    );
}

function PersonInfo({setValue, value}) {
    return (
        <input type="text"  onChange={(e) => {
            setValue(e.target.value)
        }} className="info" placeholder="ENTER YOUR FULL NAME"></input>
    );


}



export default { VotingButton, PersonInfo };
