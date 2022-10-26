
import ".styles/report.css"
import React, { useState } from 'react';

const Popup = PropTypes => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const data = [
        {date: '5/1/22', name: "Anom Syndeya", type:"Half day" ,no: 2 },
        { type:"Half day" ,no: 2 },
        {date: '5/1/22', name: "Anom Syndeya", type:"full day" ,no: 3 },
        {date: '5/1/22', name: "Anom Syndeya", type:"Half day" ,no: 5 },
      ]

    return (
        <><div>
            <input className="button" 
                type="button"
                value="view attendance"
                onClick={togglePopup} />
            {isOpen && <Popup
                content={<>
                <h4>Atendance Report</h4><br></br>
                     <div className="App">
      
     
          </div>
          <button className="button"  >generate pdf</button>
                </>}
                handleClose={togglePopup} />}
        </div><div className="popup-box">
               
            </div></>
    );
  };
   
  export default Popup;