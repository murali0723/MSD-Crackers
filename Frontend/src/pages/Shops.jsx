import React from 'react';
import castle from './Asstes/Shops/castle.jpeg';
import cra from './Asstes/Shops/cra.png'
import fire from './Asstes/Shops/fire.png'
import freedom from './Asstes/Shops/freedom.jpeg'
import gote from './Asstes/Shops/gote.png'
import ind from './Asstes/Shops/ind.jpeg'
import quality from './Asstes/Shops/quality.png'
import shiva from './Asstes/Shops/shiva.jpeg'
import welcome from './Asstes/Shops/welcome.png'
import "./Shops.css"


class Shops extends React.Component {
  render() {
    return (
      <div>
        <h1 className='top'> SHOPS</h1>
        <h1>CRACKERS CASTLE</h1>
        <img src={castle} alt="castle" />
        <h1>CRACKERS </h1>
        <img src={cra} alt="car" />
        <h1> FIRE CRACKERS</h1>
        <img src={fire} alt="fire" />
        <h1>FREEDOM CRACKERS</h1>
        <img src={freedom} alt="freedom" />
        <h1> GOTE CRACKERS</h1>
        <img src={gote} alt="gote" />
        <h1>CRACKERS INDIA</h1>
        <img src={ind} alt="ind" />
        <h1>QUALITY PRODUCTS</h1>
        <img src={quality} alt="quality" />
        <h1> SHIVAM CRACKERS</h1>
        <img src={shiva} alt="shiva" />
        <h1> WELCOME CRACKERS </h1>
        <img src={welcome} alt="welcome" />
        <h1 className='bottom '>This shops products are availabl Now </h1>
        <h1>Our MSD CRACKERS</h1>
      </div>
    );
  }
}

export default Shops;
