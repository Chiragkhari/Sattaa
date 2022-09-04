import { useState } from 'react';
import './VotingButton.css';

function Error({ innerChirag, className }) {
    return (
        <>
            <span className={className}> {innerChirag} </span>
        </>
    );
}

function VotersTable() {

    const [addFormData, setAddFormData] = useState({
        fullName: '',
        adharNumber: ''
    })
    const [userData, setUserData] = useState([{
        //  fullName: '',
        // adharNumber: ''
    },
    ]);
    const [errorMessage, setErrorMessage] = useState({
        fullNameError: "",
        adharNumberError: ""
    })

    const handleAddFormChange = (event) => {
        console.log(event)
        const fieldName = "" + event.target.attributes.getNamedItem("name").value
        const fieldValue = ""+ event.target.value;
        if(fieldName == "adharNumber"){
            if(+fieldValue < 0 ){
                fieldValue = ""
                return
            }
        }
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        console.log(newFormData)
        setAddFormData(newFormData);
        setErrorMessage("")

        
    };

    const handleAddFormSubmit = () => {
        const fullName = addFormData.fullName
        const adharNumber = addFormData.adharNumber
        const error = { ...errorMessage };
        if (fullName == "") {
            error["fullNameError"] = "*Please Enter Fullname";
            setErrorMessage(error)
        }
        if (adharNumber == "") {
            error.adharNumberError = "*Please Enter Adhar Number"
            setErrorMessage(error)

        }

        if(fullName&&adharNumber) {
            setUserData([...userData, addFormData])

        }
    }
    return (
        <div className="Voterstable">
            <table>
                <thead>
                    <tr>
                        <th style={{ 'width': '41%', 'padding-left': '123px' }}>Name</th>
                        <th >Adhar Number</th>
                    </tr>
                </thead>
                <tbody style={{ 'height': '183px', 'overflow': 'scroll', 'display': 'block', 'width': '244%' }}>
                    {
                        userData.map(user => {
                            return (
                                <tr style={{ 'display': 'inline-table', 'width': '99.8%' }}>
                                    {
                                        Object.values(user).map(data => {
                                            return (
                                                <td >
                                                    {data}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <input id='input' type="text" name="fullName" value={addFormData.fullName} required="required" placeholder='Enter your Name' onChange={handleAddFormChange} />
            <Error className="nameError" innerChirag={errorMessage.fullNameError} />
            <input id='input2' type="number" value={addFormData.adharNumber} name="adharNumber"  required="required" placeholder='Enter your Adhar Number' onChange={handleAddFormChange} />
            <Error className="adharError" innerChirag={errorMessage.adharNumberError} />
            <button id='button' onClick={handleAddFormSubmit}>Add</button>
        </div>
    )

}
export default { VotersTable }