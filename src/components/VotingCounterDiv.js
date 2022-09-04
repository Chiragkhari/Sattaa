
import './VotingButton.css';

function VotingCounterDiv({ value = "", headerValue="" }) {
    return (
        <>
            <span> {headerValue}  </span>
            <div className="App">
                {value}
            </div>
        </>
    );
}



export default VotingCounterDiv;
