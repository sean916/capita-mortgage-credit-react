import React, { useState, useEffect } from 'react'
import './Newloanform.css';

interface IForm {
    activeFormGroup: string,
    tempMessage: boolean,
    name: string,
    email: string,
    phoneNum: string,
    ownerOccOrInv: string,
    propAddress: string,
    closeDate: string,
    refiOrPurch: string,
    purchasePrice: string,
    downPayment: string,
    estimatedRehab: string,
    estimatedARV: string,
    purchaseTime: string,
    flippingExp: string,
    estimatedValue: string,
    refiTime: string,
    exitStrat: string
}

const Newloanform = () => {

    const [activeFormGroup, setActiveFormGroup] = useState<IForm['activeFormGroup']>('');
    const [tempMessage, setTempMessage] = useState<IForm["tempMessage"]>(false);
    const [name, setName] = useState<IForm["name"]>('');
    const [email, setEmail] = useState<IForm["email"]>('');
    const [phoneNum, setPhoneNum] = useState<IForm["phoneNum"]>('')
    const [OwnerOccOrInv, setOwnerOccOrInv] = useState<IForm['ownerOccOrInv']>('');
    const [propAddress, setPropAddress] = useState<IForm['propAddress']>('')
    const [closeDate, setCloseDate] = useState<IForm['closeDate']>('')
    const [refiOrPurch, setRefiOrPurch] = useState<IForm['refiOrPurch']>('')
    const [purchasePrice, setPurchasePrice] = useState<IForm['purchasePrice']>('')
    const [downPayment, setDownPayment] = useState<IForm['downPayment']>('')
    const [estimatedRehab, setEstimatedRehab] = useState<IForm['estimatedRehab']>('')
    const [estimatedARV, setEstimatedARV] = useState<IForm['estimatedARV']>('')
    const [purchaseTime, setPurchaseTime] = useState<IForm['purchaseTime']>('')
    const [flippingExp, setFlippingExp] = useState<IForm['flippingExp']>('')
    const [estimatedValue, setEstimatedValue] = useState<IForm['estimatedValue']>('')
    const [refiTime, setRefiTime] = useState<IForm['refiTime']>('')
    const [exitStrat, setExitStrat] = useState<IForm['exitStrat']>('')


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setTempMessage(false);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setTempMessage(false);
        
    }
    const handlePhoneNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNum(e.target.value);
        setTempMessage(false);
    }
    const handlePropAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPropAddress(e.target.value);
        setTempMessage(false);
    }
    const handleCloseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCloseDate(e.target.value);
        setTempMessage(false);
    }
    const handlePurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchasePrice(e.target.value);
        setTempMessage(false);
    }
    const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDownPayment(e.target.value);
        setTempMessage(false);
    }
    const handleEstimatedRehabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEstimatedRehab(e.target.value);
        setTempMessage(false);
    }
    const handleEstimatedARVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEstimatedARV(e.target.value);
        setTempMessage(false);
    }
    const handlePurchaseTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchaseTime(e.target.value);
        setTempMessage(false);
    }
    const handleFlippingExpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFlippingExp(e.target.value);
        setTempMessage(false);
    }
    const handleEstimatedValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEstimatedValue(e.target.value);
        setTempMessage(false);
    }
    const handleRefiTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefiTime(e.target.value);
        setTempMessage(false);
    }
    const handleExitStratChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExitStrat(e.target.value);
        setTempMessage(false);
    }
    const handleOwnOccChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOwnerOccOrInv('Owner Occupied');
        setTempMessage(false);
    }
    const handleInvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOwnerOccOrInv('Investment Property');
        setTempMessage(false);
    }

    const handlePurchaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefiOrPurch(e.target.value);
        setActiveFormGroup(e.target.value)
        setTempMessage(false);
    }

    const handleRefiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefiOrPurch(e.target.value);
        setActiveFormGroup(e.target.value)
        setTempMessage(false);
    }

    const resetFields = () => {
        setActiveFormGroup('')
        setName('')
        setEmail('')
        setPhoneNum('')
        setOwnerOccOrInv('')
        setPropAddress('')
        setCloseDate('')
        setRefiOrPurch('')
        setPurchasePrice('')
        setDownPayment('')
        setEstimatedRehab('')
        setEstimatedARV('')
        setPurchaseTime('')
        setFlippingExp('')
        setEstimatedValue('')
        setRefiTime('')
        setExitStrat('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.stopPropagation();
        e.preventDefault();

        const formData: {[index: string]:any} = {
            'entry.1291402443': name,
            'entry.807969949': email,
            'entry.687532281': phoneNum,
            'entry.912044038': OwnerOccOrInv,
            'entry.1903481898': propAddress,
            'entry.2108037076': closeDate,
            'entry.2108130954': refiOrPurch,
            'entry.1531400808': estimatedValue,
            'entry.955882059': refiTime,
            'entry.1966155536': exitStrat,
            'entry.485828684': purchasePrice,
            'entry.690732259': downPayment,
            'entry.2131597815': estimatedRehab,
            'entry.1131533757': estimatedARV,
            'entry.1684110662': purchaseTime,
            'entry.573836672': flippingExp
        }

        const encodedValues = Object.keys(formData).map((key) => {
            const encKey = encodeURIComponent(key);
            const encValue = encodeURIComponent(formData[key]);
            return `${encKey}=${encValue}`;
        });

        let body = encodedValues.join('&').replace(/%20/g, '+')
        try {
            await fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLScbCqJUKr7p9raFrkMnBA5Ime2Kc4dnZtHrLeAvN9FjA1M2ig/formResponse", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type':
                    'application/x-www-form-urlencoded',
                },
                body
            });
        } finally {
            
            setTempMessage(true)
        }
            
    }   

    if (activeFormGroup === 'Refinance') {
        return (
            <div id="new-loan-form" className="center-head">
                <form id="loan-form" onSubmit={handleSubmit}>
                    <div className="center-head"><h2>New Loan Prequal Form</h2></div>

                    <div className="center-head noscript-container">
                        <noscript>
                            <h3>Javascript is disabled</h3>
                            <p>You need to enable Javascript to successfully submit this form.</p>
                            <a className='noscript-btn' href="http://www.enable-javascript.com/" target="_blank">Show me how to enable it</a>
                        </noscript>
                    </div>

                    <div id='form-name' className="form-group">
                        <label htmlFor='name'>Name :</label>
                        <br></br>
                        <input name='entry.1291402443' value={name} onChange={handleNameChange} id='name' type='text' required></input>
                    </div>

                    <div id='form-email' className="form-group">
                        <label htmlFor='email'>Email :</label>
                        <br></br>
                        <input name='entry.807969949' value={email} onChange={handleEmailChange} id='email' type='email' required></input>
                    </div>

                    <div id='form-phone' className="form-group">
                        <label htmlFor='phone-number'>Phone Number :</label>
                        <br></br>
                        <input name='entry.687532281' value={phoneNum} onChange={handlePhoneNumChange} id='phone-number' type='text'></input>
                    </div>

                    <br></br>

                    <div id='form-owner-occ-or-invest' className="form-group">
                        <span>Is this property Owner Occupied or is it an Investment Property?</span>
                        <br></br>
                        <input name='entry.912044038' onChange={handleOwnOccChange} type='radio' id='owner-occupied' value='Owner Occupied'></input>
                        <label htmlFor='owner-occupied'>Owner Occupied</label>
                        <br></br>
                        <br></br>
                        <input name='entry.912044038' onChange={handleInvChange} type='radio' id='investment-property' value='Investment Property'></input>
                        <label htmlFor='investment-property'>Investment Property</label>
                    </div>

                    <br></br>
                    <br></br>

                    <div id='form-prop-address' className="form-group">
                        <label htmlFor='property-address'>What is the subject property address? (include city / zip)</label>
                        <br></br>
                        <input name='entry.1903481898' value={propAddress} onChange={handlePropAddressChange} id='property-address' type='text'></input>
                    </div>

                    <div id='form-closing-date' className="form-group">
                        <label htmlFor='close-date'>How soon do you need to close? </label>
                        <br></br>
                        <input name='entry.2108037076' value={closeDate} onChange={handleCloseDateChange} id='close-date' type='text' ></input>
                    </div>

                    <br></br>

                    <div id='form-purchase-or-refi' className="form-group">
                        <span>Is this a Purchase or a Refinance?</span>
                        <div id='purchase-div'>
                            <input name='entry.2108130954' onChange={handlePurchaseChange} required type='radio' id="Purchase" value='Purchase'></input>
                            <label htmlFor='Purchase'>Purchase</label>
                        </div>
                        <br></br>
                        <div id='refinance-div'>
                            <input name='entry.2108130954' onChange={handleRefiChange} required type='radio' id="Refinance" value='Refinance'></input>
                            <label htmlFor='Refinance'>Refinance</label>
                        </div>
                    </div>
                    <br></br>

                    <div id='form-estimated-value' className="form-group refi-question">
                        <label htmlFor='estimated-value'>What is your estimated value?</label>
                        <br></br>
                        <input name='entry.1531400808' value={estimatedValue} onChange={handleEstimatedValueChange} id='estimated-value' type='text'></input>
                    </div>

                    <div id='form-refi-time' className="form-group refi-question">
                        <label htmlFor='refi-time'>How long do you need the loan?</label>
                        <br></br>
                        <input name='entry.955882059' value={refiTime} onChange={handleRefiTimeChange} id='refi-time' type='text' ></input>
                    </div>

                    <div id='form-exit-strat' className="form-group refi-question">
                        <label htmlFor='exit-strat'>What is your exit strategy?</label>
                        <br></br>
                        <input name='entry.1966155536' value={exitStrat} onChange={handleExitStratChange} id='exit-strat' type='text' ></input>
                       
                    </div>

                    <div className="center-head noscript-container">
                        <noscript>
                            <h3>Javascript is disabled</h3>
                            <p>You need to enable Javascript to successfully submit this form.</p>
                            <a className='noscript-btn' href="http://www.enable-javascript.com/" target="_blank">Show me how to enable it</a>
                            <br></br>
                            <br></br>
                        </noscript>
                    </div>
                    
                    { tempMessage == false ? <div><input className='button' id='submit-btn' type='submit'></input></div> : <p>Thank you for submitting, we will get back to you shortly.</p> }
                    
                </form>
            </div>
        )
    } else if (activeFormGroup === 'Purchase') {
        return (
            <div id="new-loan-form" className="center-head">
                <form id="loan-form" onSubmit={handleSubmit}>
                    <div className="center-head"><h2>New Loan Form</h2></div>

                    <div className="center-head noscript-container">
                        <noscript>
                            <h3>Javascript is disabled</h3>
                            <p>You need to enable Javascript to successfully submit this form.</p>
                            <a className='noscript-btn' href="http://www.enable-javascript.com/" target="_blank">Show me how to enable it</a>
                        </noscript>
                    </div>

                    <div id='form-name' className="form-group">
                        <label htmlFor='name'>Name :</label>
                        <br></br>
                        <input name='entry.1291402443' value={name} onChange={handleNameChange} id='name' type='text' required></input>
                    </div>

                    <div id='form-email' className="form-group">
                        <label htmlFor='email'>Email :</label>
                        <br></br>
                        <input name='entry.807969949' value={email} onChange={handleEmailChange} id='email' type='email' required></input>
                    </div>

                    <div id='form-phone' className="form-group">
                        <label htmlFor='phone-number'>Phone Number :</label>
                        <br></br>
                        <input name='entry.687532281' value={phoneNum} onChange={handlePhoneNumChange} id='phone-number' type='text'></input>
                    </div>

                    <br></br>

                    <div id='form-owner-occ-or-invest' className="form-group">
                    <span>Is this property Owner Occupied or is it an Investment Property?</span>
                    <br></br>
                        <input name='entry.912044038' onChange={handleOwnOccChange} type='radio' id='owner-occupied' value='Owner Occupied'></input>
                        <label htmlFor='owner-occupied'>Owner Occupied</label>
                        <br></br>
                        <br></br>
                        <input name='entry.912044038' onChange={handleInvChange} type='radio' id='investment-property' value='Investment Property'></input>
                        <label htmlFor='investment-property'>Investment Property</label>
                    </div>

                    <br></br>
                    <br></br>

                    <div id='form-prop-address' className="form-group">
                        <label htmlFor='property-address'>What is the subject property address? (include city / zip)</label>
                        <br></br>
                        <input name='entry.1903481898' value={propAddress} onChange={handlePropAddressChange} id='property-address' type='text'></input>
                    </div>

                    <div id='form-closing-date' className="form-group">
                        <label htmlFor='close-date'>How soon do you need to close? </label>
                        <br></br>
                        <input name='entry.2108037076' value={closeDate} onChange={handleCloseDateChange} id='close-date' type='text' ></input>
                    </div>

                    <br></br>

                    <div id='form-purchase-or-refi' className="form-group">
                        <span>Is this a Purchase or a Refinance?</span>
                        <div id='purchase-div'>
                            <input name='entry.2108130954' onChange={handlePurchaseChange} required type='radio' id="Purchase" value='Purchase'></input>
                            <label htmlFor='Purchase'>Purchase</label>
                        </div>
                        <br></br>
                        <div id='refinance-div'>
                            <input name='entry.2108130954' onChange={handleRefiChange} required type='radio' id="Refinance" value='Refinance'></input>
                            <label htmlFor='Refinance'>Refinance</label>
                        </div>
                    </div>
                    <br></br>

                    <div id='form-purchase-price' className="form-group purchase-question">
                        <label htmlFor='purchase-price'>What is your purchase price? </label>
                        <br></br>
                        <input name='entry.485828684' value={purchasePrice} onChange={handlePurchasePriceChange} id='purchase-price' type='text'></input>
                    </div>

                    <div id='form-down-payment' className="form-group purchase-question">
                        <label htmlFor='down-payment'>How much is your down payment?</label>
                        <br></br>
                        <input name='entry.690732259' value={downPayment} onChange={handleDownPaymentChange} id='down-payment' type='text'></input>
                    </div>

                    <div id='form-estimated-rehab' className="form-group purchase-question">
                        <label htmlFor='estimated-rehab'>What is your estimated rehab expense?</label>
                        <br></br>
                        <input name='entry.2131597815' value={estimatedRehab} onChange={handleEstimatedRehabChange} id='estimated-rehab' type='text'></input>
                    </div>

                    <div id='form-estimated-arv' className="form-group purchase-question">
                        <label htmlFor='estimated-arv'>What is your estimated After Repair Value?</label>
                        <br></br>
                        <input name='entry.1131533757' value={estimatedARV} onChange={handleEstimatedARVChange} id='estimated-arv' type='text'></input>
                    </div>

                    <div id='form-purchase-time' className="form-group purchase-question">
                        <label htmlFor='purchase-time'>How long do you need the loan?</label>
                        <br></br>
                        <input name='entry.1684110662' value={purchaseTime} onChange={handlePurchaseTimeChange} id='purchase-time' type='text'></input>
                    </div>

                    <div id='form-flipping-exp' className="form-group purchase-question">
                        <label htmlFor='flipping-exp'>What is your flipping experience?</label>
                        <br></br>
                        <input name='entry.573836672' value={flippingExp} onChange={handleFlippingExpChange} id='flipping-exp' type='text' ></input>
                        <br></br>
                    </div>

                    <div className="center-head noscript-container">
                        <noscript>
                            <h3>Javascript is disabled</h3>
                            <p>You need to enable Javascript to successfully submit this form.</p>
                            <a className='noscript-btn' href="http://www.enable-javascript.com/" target="_blank">Show me how to enable it</a>
                            <br></br>
                            <br></br>
                        </noscript>
                    </div>
                    
                    { tempMessage == false ? <div><input className='button' id='submit-btn' type='submit'></input></div> : <p>Thank you for submitting, we will get back to you shortly.</p> }
                    
                </form>
            </div>
        )
    } else {
        return (
            <div id="new-loan-form" className="center-head">
                <form id="loan-form" onSubmit={handleSubmit}>
                    <div className="center-head"><h2>New Loan Form</h2></div>

                    <div className="center-head noscript-container">
                        <noscript>
                            <h3>Javascript is disabled</h3>
                            <p>You need to enable Javascript to successfully submit this form.</p>
                            <a className='noscript-btn' href="http://www.enable-javascript.com/" target="_blank">Show me how to enable it</a>
                        </noscript>
                    </div>

                    <div id='form-name' className="form-group">
                        <label htmlFor='name'>Name :</label>
                        <br></br>
                        <input name='entry.1291402443' value={name} onChange={handleNameChange} id='name' type='text' required></input>
                    </div>

                    <div id='form-email' className="form-group">
                        <label htmlFor='email'>Email :</label>
                        <br></br>
                        <input name='entry.807969949' value={email} onChange={handleEmailChange} id='email' type='email' required></input>
                    </div>

                    <div id='form-phone' className="form-group">
                        <label htmlFor='phone-number'>Phone Number :</label>
                        <br></br>
                        <input name='entry.687532281' value={phoneNum} onChange={handlePhoneNumChange} id='phone-number' type='text'></input>
                    </div>

                    <br></br>

                    <div id='form-owner-occ-or-invest' className="form-group">
                    <span>Is this property Owner Occupied or is it an Investment Property?</span>
                    <br></br>
                        <input name='entry.912044038' onChange={handleOwnOccChange} type='radio' id='owner-occupied' value='Owner Occupied'></input>
                        <label htmlFor='owner-occupied'>Owner Occupied</label>
                        <br></br>
                        <br></br>
                        <input name='entry.912044038' onChange={handleInvChange} type='radio' id='investment-property' value='Investment Property'></input>
                        <label htmlFor='investment-property'>Investment Property</label>
                    </div>

                    <br></br>
                    <br></br>

                    <div id='form-prop-address' className="form-group">
                        <label htmlFor='property-address'>What is the subject property address? (include city / zip)</label>
                        <br></br>
                        <input name='entry.1903481898' value={propAddress} onChange={handlePropAddressChange} id='property-address' type='text'></input>
                    </div>

                    <div id='form-closing-date' className="form-group">
                        <label htmlFor='close-date'>How soon do you need to close? </label>
                        <br></br>
                        <input name='entry.2108037076' value={closeDate} onChange={handleCloseDateChange} id='close-date' type='text' ></input>
                    </div>

                    <br></br>

                    <div id='form-purchase-or-refi' className="form-group">
                        <span>Is this a Purchase or a Refinance?</span>
                        <div id='purchase-div'>
                            <input name='entry.2108130954' onChange={handlePurchaseChange} required type='radio' id="Purchase" value='Purchase'></input>
                            <label htmlFor='Purchase'>Purchase</label>
                        </div>
                        <br></br>
                        <div id='refinance-div'>
                            <input name='entry.2108130954' onChange={handleRefiChange} required type='radio' id="Refinance" value='Refinance'></input>
                            <label htmlFor='Refinance'>Refinance</label>
                        </div>
                    </div>
                    <br></br>
                    
                    { tempMessage == false ? <div><input className='button' id='submit-btn' type='submit'></input></div> : <p>Thank you for submitting, we will get back to you shortly.</p> }
                    
                </form>
            </div>
        )
    }
}

export default Newloanform
