
import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../Components/styles/profile.css'
const ImgUpload =({
    onChange,
    src
  })=>
  <label htmlFor="photo-upload" className="upload">
  <div className="img-wrap img-upload" >
    <img for="photo-upload" src={src}/>
  </div>
  <input id="photo-upload" type="file" onChange={onChange}/> 
</label>
  
  
  const Name =({
    onChange,
    value
  })=>
  <div className="field">
  <TextField
      id="standard-password-input"
      label="name"
      type="text"
      variant="standard"
      onChange={onChange} 
    maxlength="25" 
    value={value} 
    />
  
</div>
  
    
  const Age =({
    onChange,
    value
  })=>
    <div className="field">
      <TextField
          id="standard-password-input"
          label="age"
          type="int"
          variant="standard"
          onChange={onChange} 
        maxlength="25" 
        value={value} 
        />
      
    </div>

const Gender =({
    onChange,
    value
  })=>
  <div className="field">
  <TextField
      id="standard-password-input"
      label="gender"
      type="text"
      variant="standard"
      onChange={onChange} 
    maxlength="25" 
    value={value} 
    />
  
</div>

const Mobile =({
    onChange,
    value
  })=>
  <div className="field">
  <TextField
      id="standard-password-input"
      label="mobile"
      type="int"
      variant="standard"
      onChange={onChange} 
    maxlength="10" 
    value={value} 
    />
  
</div>

const Address =({
    onChange,
    value
  })=>
  <div className="field">
  <TextField
      id="standard-password-input"
      label="address"
      type="text"
      variant="standard"
      onChange={onChange} 
    maxlength="50" 
    value={value} 
    />
  
</div>

const Bio =({
    onChange,
    value
  })=>
  <div className="field">
  <TextField
      id="standard-password-input"
      label="bio"
      type="text"
      variant="standard"
      onChange={onChange} 
    maxlength="1000" 
    value={value} 
    />
  
</div>
  
  
  const Profile =({
    onSubmit,
    src,
    name,
    age,
    gender,
    mobile,
    address,
    bio,
  })=>
  
    
       
       <form className="form-m" onSubmit={onSubmit}>
   
      <label >
        <div className="img-wrap" >
          <img for="photo-upload" src={src}/>
        </div>
      </label>
      <div className="dis">
      <div className="name">Name : {name}
     
        </div>
        <div className="age">Age : {age}</div>
        <div className="gender">Gender : {gender}</div>
        <div className="mobile">Mobile : {mobile}</div>
        <div className="address">Address : {address}</div>
        <div className="bio">Bio : {bio}</div>
        </div>
      <Button  type="submit" className="save"  variant="contained" size="medium" >
          Edit profile
        </Button> 
        
      
      </form>
    
       
        
  const Edit =({
    onSubmit,
    children,
  })=>

      <form  onSubmit={onSubmit}>
       
          {children}
          <Button  type="submit" className="save"  variant="contained" size="medium" >
          Save
        </Button>

      </form>
 
  class CardProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      age:'',
      gender:'',
      mobile:'',
      address:'',
      bio:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    
    editage = e => {
      const age = e.target.value;
      this.setState({
        age,
      });
    }
    
    editgender = e => {
        const gender = e.target.value;
        this.setState({
          gender,
        });
      }

      editMobile= e => {
        const mobile = e.target.value;
        this.setState({
          mobile,
        });
      }

      editAddress = e => {
        const address = e.target.value;
        this.setState({
          address,
        });
      }

      editBio = e => {
        const bio = e.target.value;
        this.setState({
          bio,
        });
      }
    handleSubmit= e =>{
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             age, 
             gender,
             mobile,
             address,
             bio,
             active} = this.state;
      return (
        <div>
        {(active === 'edit')?(
          <Edit onSubmit={this.handleSubmit}>

              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
              <Name onChange={this.editName} value={name}/>
              <Age onChange={this.editage} value={age}/>
              <Gender onChange={this.editgender} value={gender}/>
              <Mobile onChange={this.editMobile} value={mobile}/>
              <Address onChange={this.editAddress} value={address}/>
              <Bio onChange={this.editBio} value={bio}/>
            </Edit>
        ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} 
              name={name} 
              age={age}
              gender={gender}
              mobile={mobile}
              address={address}
              bio={bio}
              />)}

        </div>

      )

    }
  }
  
 export default CardProfile;
 