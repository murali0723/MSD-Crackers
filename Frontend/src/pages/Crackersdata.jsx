import React from 'react';
import chakkara from './Asstes/Crackersdata/images/two-chakra.jpeg.jpg';
import flower_pots from './Asstes/Crackersdata/images/tri-crack.jpeg.jpg';
import sky_shots from './Asstes/Crackersdata/images/sky-crack.jpeg.jpg';
import skyshota from './Asstes/Crackersdata/images/sky-crack2.jpeg.jpg'
import rocket from './Asstes/Crackersdata/images/rocket-box.jpeg.jpg';
import rockets from './Asstes/Crackersdata/images/rocket.jpeg.jpg'
import bijili from './Asstes/Crackersdata/images/bijili.jpeg.jpg'
import bombs from './Asstes/Crackersdata/images/atom bomb.jpeg.jpg'
import walla from './Asstes/Crackersdata/images/saram.jpeg.jpg'
import wallas from './Asstes/Crackersdata/images/saram2.jpeg.jpg'
import "./Shops.css"

class Crackersdata extends React.Component {
  render() {
    return (
      <div>
        <h1 className='data'>CRACKERS DATA</h1>
        <h1>Chakkara</h1>
        <img src={chakkara} alt="chakkara"/>
        <h1>Flower Pots</h1>
        <img src={flower_pots} alt="flower pots"/>
        <h1>Sky Shots</h1>
        <img src={sky_shots} alt="sky shots" />
        <img src={skyshota} alt="skyshots" />
        <h1>Rocket</h1>
        <img src={rocket} alt="rocket" />
        <img src={rockets} alt="rockets" />
        <h1>Bijili</h1>
        <img src={bijili} alt="bijili"/> 
        <h1>Bombs</h1>
        <img src={bombs} alt='bombs'/>
        <h1>Walas</h1>
        <img src={walla} alt='walla'/>
        <img src={wallas} alt='wallas'/>
      </div>
    );
  }
}

export default Crackersdata;
