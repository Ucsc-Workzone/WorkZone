
import React,{useState} from 'react';

import Button from '@mui/material/Button';
import img from './profile.png';
import { Avatar } from '@mui/material';

const MemberProfile = () => {
    const[image,setimage] = useState("");
    const [imagecrop,setimagecrop] = useState(false);
    const[src,setSrc] = useState(null);
    const [profile,setprofile] = useState([]);
    const [pview,setpview] = useState(false);

    const profilefinal = profile.map((item) => item.pview);

    const onClose = () =>{
        setpview(null);
    };

    const onCrop = (view) => {
        setpview(view);        
    };

    const saveCropImage = () =>{
        setprofile([...profile,{ pview}]);
        setimagecrop(false);
    };
    return (
        < >
            <h2> Member Profile</h2>
        <div >
            <div >
           <img
            style={{
                width:"100px",
                height: "100px",
                borderRadius:"50%",
                objectFit:"cover",


            }}
            onClick={() => setimagecrop(true)}
            src={profilefinal.length ? profilefinal : img}
             alt="" />
            <label>Hiruni</label>
<dialog
visible={imagecrop}
            header={() =>(
                <p>
update profile
                </p>
            )
            }
onHide={() => setimagecrop(false)} >
    <div>
        <Avatar
        width={100}
        height={100}
        onCrop={onCrop}
        onClose={onClose}
        src={src}
        shadingColor={"#474649"}
       />
        <div >
<div>
    <button
       onClick={saveCropImage}
       label="Save"
       icon ="pi pi-check"
    />

   
</div>
        </div>
       
    </div>
</dialog>
            <input Text 
            type="file"
            accept='/image/*'
            onChange={(event)=>{
                const file =event.target.files[0];
                if(file && file.type.substring(0,5)==="image"){
                     setimage(file);
                }else{
                    setimage(null)
                }
            }}   
            />
            </div>
        </div>

        </>
    );
};

export default MemberProfile;
