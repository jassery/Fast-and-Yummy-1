import axios from 'axios'
import React, { useState } from 'react'


function CreatFood () {
const [file,setFile]=useState("")
const [url,setUrl]=useState("")
const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const [price,setPrice]=useState(0)

const uploadImg = async()=>{

  const form = new FormData()
  form.append("file",file)
  form.append("upload_preset","jassery")

 await axios.post("https://api.cloudinary.com/v1_1/dj6am9a7q/upload",form).then((reslt)=>setUrl(reslt.data.secure_url))

}


const zid =()=>{
    axios.post("http://localhost:5000/api/Foods/add",{name:name,dsc:desc,img:url,price:price,}).then((reslt)=>{
console.log(reslt)
    }).catch((err)=>{
      console.log(err)
    })


  }


  return (
    
    <div >CreatFood
<div>
<input type="file"  onChange={(e)=>{setFile(e.target.files[0])}}/> 
<br />
<button onClick={uploadImg} >upload</button>
<img src={url} />
</div> 
<br />
<input type="text" placeholder='name' onChange={(e)=>{setName(e.target.value)}} /> <br />
<input type="text" placeholder='dec' onChange={(e)=>{setDesc(e.target.value)}}/>  <br />
<input type="number" placeholder='price' onChange={(e)=>{setPrice(e.target.value)}}/> <br />

<input type="button" value="Creat" onClick={zid}/>


    </div>
    
  )
}

export default CreatFood;