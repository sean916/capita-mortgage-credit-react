import React from 'react'
import './Contactinfo.css';

interface IProps {
    showSpace: boolean
};

const Contactinfo: React.FC<IProps> = (props: IProps) => {

    if (props.showSpace == true) {
        return (
            <div>
                <hr></hr>
                <br></br>
                <div className="center-head" id="contact-us">
                    <p>916-529-4665 {'\u00A0'} {'\u00A0'} | {'\u00A0'} {'\u00A0'}      CapitaMortgageCredit@gmail.com</p>
                </div>
                <br></br>
                <div className="center-head copyright" id='copyright-div'>
                    <p>Copyright 2021. Capita Mortgage Credit {'\u00A0'} {'\u00A0'} | {'\u00A0'} {'\u00A0'} Bureau of Real Estate # 01824199 </p>
                </div>
                <br></br>
                <div className='copyright-space'></div>
            </div>
        )
    } else return (
        <div>
            <hr></hr>
            <br></br>
            <div className="center-head" id="contact-us">
                <p>916-529-4665 {'\u00A0'} {'\u00A0'} | {'\u00A0'} {'\u00A0'}      CapitaMortgageCredit@gmail.com</p>
            </div>
            <br></br>
            <div className="center-head copyright" id='copyright-div'>
                <p>Copyright 2021. Capita Mortgage Credit {'\u00A0'} {'\u00A0'} | {'\u00A0'} {'\u00A0'} Bureau of Real Estate # 01824199 </p>
            </div>
            <br></br>
        </div>
    )
}

export default Contactinfo
