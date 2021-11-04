import React from 'react'


interface IProps {
    showMap: boolean
  };



const Wherewelend: React.FC<IProps> = (props: IProps) => {

    const handleMapClick = () => {
        window.open("https://lh3.googleusercontent.com/pw/AM-JKLWTxefoELajaYHU2s7d4qei7VchqV9sHPc7P97R0GZvHinGeA8rLZ4qAeszhhm0VdNvW9ndoIH7vAxVwXJz94xrbqzL9GpmjkLKdaNksh0cP35QlEPw243thiUne63j2l6raVfQbXSOOccJnkZaEO0=w604-h595", '_blank');
      }

    if (props.showMap == true) {
        return (
            <div id='where-we-lend-img' className="center-head">
                <img onClick={handleMapClick}
                src="https://lh3.googleusercontent.com/pw/AM-JKLWTxefoELajaYHU2s7d4qei7VchqV9sHPc7P97R0GZvHinGeA8rLZ4qAeszhhm0VdNvW9ndoIH7vAxVwXJz94xrbqzL9GpmjkLKdaNksh0cP35QlEPw243thiUne63j2l6raVfQbXSOOccJnkZaEO0=w604-h595" 
                alt="Northern California - From about Yuba City down to Fresno, across to Salinas, up the Coast including the Bay Area, up to around Santa Rosa, then up to Williams.">
                </img>
            </div>
        )
    } else {
        return (
            <div id='where-we-lend-img' className="center-head hiddenClass"></div>
        )
    }
}

export default Wherewelend
