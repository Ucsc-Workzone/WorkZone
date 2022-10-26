

import React, { useState } from 'react';
import './styles/profile.css';
import coverimg from '../../assets/images/cover.jpg';


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



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
        <h1>SKILLS </h1>

        <div className='skills'>

          <h1>Node</h1> <h1>PHP</h1><h1>C++</h1><h1>JavaScript</h1><h1>C#</h1>
        </div>




      </div>
      <div className='right'>
        <h1>Ongoing Projects</h1>

        <div className='projects'>
          <div className='left'>
            <div class="progress">
              <div class="progress-value"></div>
            </div>
            <br></br>
            <h1>51%</h1>
            <br></br>


            <h1>Mobile App Development</h1>
          </div>
          <div className='left'>
            <div class="progress">
              <div class="progress-value"></div>
            </div>
            <br></br>
            <h1>40%</h1>
            <br></br>


            <h1>Eterpise Application</h1></div>
          <div className='left'>
            <div class="progress">
              <div class="progress-value"></div>
            </div>
            <br></br>
            <h1>55%</h1>
            <br></br>


            <h1>Web  App</h1></div>
        </div>

        <div className='form'>

          <h1>User Details</h1>

          <div className="cc">

            <form>

              <br></br>
              <label>
                First Name
              </label>
              <input type="text" name="fname" placeholder='Malithi' value={'Malithi'} />

              <label>
                Last Name
              </label>
              <input type="text" name="lname" placeholder='Perera' value={'Perera'} /> <br></br>
              <label>
                Phone No
              </label>
              <input type="text" name="phone" placeholder='' value={'0785497726'} /> <br></br>
              <label>
                Address
              </label>
              <input type="textarea" name="address" placeholder='No.118, Vijayarajadahana, Mirigama' rows="4" columns="10" value={'No.118, Vijayarajadahana, Mirigama'} />
              <br></br>
              <input type="submit" value="Update" />
            </form><br></br>

          </div>







        </div>




      </div>


    </div>





  </>);
}

export default userProfile;