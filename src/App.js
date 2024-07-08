import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState('');
    const [email, setEmail] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');
    const [parentName, setParentName] = useState('');
    const [fatherIncome, setFatherIncome] = useState('');
    const [motherIncome, setMotherIncome] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isEligible, setIsEligible] = useState(false);
    const [submittedDetails, setSubmittedDetails] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseFloat(percentage) > 75) {
            setIsEligible(true);
            const details = {
                name,
                percentage,
                email,
                schoolName,
                address,
                parentName,
                fatherIncome,
                motherIncome,
                phoneNumber
            };
            setSubmittedDetails(details);
        } else {
            alert('Sorry, your percentage is below 75%. Application not submitted.');
        }
    };

    const handleReset = () => {
        setName('');
        setPercentage('');
        setEmail('');
        setSchoolName('');
        setAddress('');
        setParentName('');
        setFatherIncome('');
        setMotherIncome('');
        setPhoneNumber('');
        setIsEligible(false);
        setSubmittedDetails(null);
    };

    return (
        <div className={`App ${parseFloat(percentage) > 75 ? 'eligible' : ''}`}>
            <div className="form-container">
                <h1>Scholarship Application</h1>
                {isEligible ? (
                    <div className="success-message">
                        <p>Application successfully submitted!</p>
                        <p>Submitted Details:</p>
                        <ul>
                            <li><strong>Name:</strong> {submittedDetails.name}</li>
                            <li><strong>12th Grade Percentage:</strong> {submittedDetails.percentage}</li>
                            <li><strong>Email:</strong> {submittedDetails.email}</li>
                            <li><strong>School Name:</strong> {submittedDetails.schoolName}</li>
                            <li><strong>Address:</strong> {submittedDetails.address}</li>
                            <li><strong>Parent Name:</strong> {submittedDetails.parentName}</li>
                            <li><strong>Father's Income:</strong> {submittedDetails.fatherIncome}</li>
                            <li><strong>Mother's Income:</strong> {submittedDetails.motherIncome}</li>
                            <li><strong>Phone Number:</strong> {submittedDetails.phoneNumber}</li>
                        </ul>
                        <button onClick={handleReset}>Apply Again</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <label>
                            12th Grade Percentage:
                            <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} required />
                        </label>
                        <label>
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label>
                            School Name:
                            <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required />
                        </label>
                        <label>
                            Address:
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </label>
                        <label>
                            Parent Name:
                            <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
                        </label>
                        <label>
                            Father's Income:
                            <input type="text" value={fatherIncome} onChange={(e) => setFatherIncome(e.target.value)} required />
                        </label>
                        <label>
                            Mother's Income:
                            <input type="text" value={motherIncome} onChange={(e) => setMotherIncome(e.target.value)} required />
                        </label>
                        <label>
                            Phone Number:
                            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                        </label>
                        <button type="submit">Submit Application</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default App;