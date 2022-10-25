

import React, { useState } from 'react';
import './styles/profile.css';
import coverimg from '../../assets/images/cover.jpg';



const userProfile = () => {
  return (<>

    <div className="mainsection">

      <div className='left'>

        <div className='leave'>

          <div className='one'>
            <span className='xc'>1</span>
            <span className='xcc'><br></br>Leaves Taken</span>

          </div>

          <div className='one'>
            <span className='xc'>11</span>
            <span className='xcc'><br></br>Leaves Remaining</span>

          </div>

        </div>

        <h1>Name : Bimsar Kulasekara</h1>
        <h1>Age : 22 Yrs</h1>
        <h1>Gender : Male</h1>
        <h1>Mobile : 0785619959</h1>
        <h1>Address : No. 123/A Mirigama</h1>
        <h1>Bio : I’m a professional developer with experience working with technologies like Native android development, Mobile cross-platform development, backend/frontend development and Firebase & Google Cloud platform. </h1>

        <div className='skills'>

          <h1>Node</h1> <h1>PHP</h1><h1>C++</h1><h1>JavaScript</h1><h1>C#</h1><br></br><h1>Java</h1>
        </div>




      </div>
      <div className='right'>
        <h1>Name : Bimsara Kulasekara</h1>


      </div>


    </div>





  </>);
}

export default userProfile;