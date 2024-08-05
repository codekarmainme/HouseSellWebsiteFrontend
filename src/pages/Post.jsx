import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import '../styles/Post.css';
import axios from 'axios';

function Post() {
  const [type, setType] = useState('Vila');
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const[image,setImage]=useState(null);
  const[sucess,setSucess]=useState(false);
  const[err,setErr]=useState(false);

  const[imageurl,setImageurl]=useState(null);
  const handleSubmit = async () => {
   if(type==='' | price==='' | condition==='' | description==='' | address==='' | image===null){
       setErr(true);
   }
   else{
    try {
      await axios.post('http://127.0.0.1:8000/api/houses/', 
      {
        'type':type,
        "price":price,
        "condition":condition,
        "description":description,
        "address":address,
        "image":image,

      }, {
      headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       setSucess(true);
       setType('');
       setCondition('');
       setDescription('');
       setAddress('');
       setImageurl('');
       setImage(null);
       setPrice('');
    } catch (error) {
      console.error('Error posting house:', error);
   
      // Handle error
    }
   }
    
  };
 
  const handleImageChange = (e) => {
    setImage(
         e.target.files[0],
    );
    const url = URL.createObjectURL( e.target.files[0])
            setImageurl(url)
  };

  return (
    <>
      <div className="post">
      
        <h4>Send your house🏠 to big market place</h4>
        {
          sucess ? <div style={{backgroundColor:'rgb(191, 232, 203)', borderRadius:10, width:'70%'}}>
          <h5 style={{color:'black',textAlign:'center'}}>Your data posted succesfully!</h5>
          </div> : err ?
          <div style={{backgroundColor:'rgb(215, 147, 147)', borderRadius:10,width:'70%'}}>
          <h5 style={{color:'black',textAlign:'center' }}>Something went wrong.Check your data!</h5>
          </div>
          : null
        }
        <label htmlFor="type">Type:*</label>
        <select name="type" id="type" onChange={(e)=>setType(e.target.value)}>
          <option value="Vila">Vila</option>
          <option value="Real State">Real state</option>
          <option value="G+1">G+1</option>
          <option value="G+2">G+2</option>
         </select>
        <label htmlFor="price">Price:*</label>
        <input type="number" name="price" id="price" placeholder="Price..." onChange={(e)=>setPrice(e.target.value)} value={price} />

        <label htmlFor="address">Address*</label>
        <input type="text" name="address" id="address" placeholder="Address..." onChange={(e)=>setAddress(e.target.value)} value={address} />

        <label htmlFor="desc">Description:*</label>
        <textarea rows="5" type="text" name="description" id="desc" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={description} />

        <label htmlFor="cond">Condition:*</label>
        <textarea rows="5" type="text" name="condition" id="cond" placeholder="Condition" onChange={(e)=>setCondition(e.target.value)} value={condition} />

        <input type="file" accept="image/*" style={{ display: 'none' }} id="input-img" onChange={handleImageChange} />
        <button className='up-btn'>
          <FaImage />
          <label className="upload" htmlFor="input-img">
            Upload Look
          </label>
        </button>
        <img src={imageurl} alt="" className='up-img' />
      </div>
      <button  type="submit" onClick={handleSubmit} className="po-btn" >
        Post
      </button>
    </>
  );
}

export default Post;
