
import { useState } from 'react';
import './VotingButton.css';
import vb from './VotingButton';
import VotingCounterDiv from './VotingCounterDiv'; 
import vt from './Table'
// let theArray = []
function VotingCounter() {
    const [getRahulcount, setRahulCount] = useState(0);
    const [getModicount, setModiCount] = useState(0);
    // const [getUserName, setUserName] = useState("");
    
    
    return (
        <div className="App">
            <VotingCounterDiv value={getRahulcount} headerValue="Rahul's" />
            <VotingCounterDiv value={getModicount} headerValue="Modi's" />
            <vb.VotingButton className="Rahul" clickFunction={() => {
                setRahulCount(getRahulcount + 1);         
                // theArray.push(getUserName)
                // console.log(theArray)
            }} /> 
            <vb.VotingButton className="Modi" clickFunction={() => {
                setModiCount(getModicount + 1);
                // theArray.push(getUserName+"modi")
                // console.log(theArray)
            }} />
           {/* <vb.PersonInfo className="personInfo" setValue={setUserName} value={getUserName} /> */}
           
            <vt.VotersTable /> 
            
              </div>
    );
}

export default VotingCounter;
