

import React, { useState } from 'react'
import './Container.css'
import Container from './Container'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Form(){
    const[cardholder,setcardholder]=useState('')
  const[cardno,setcardno]=useState('')
  const[expdate,setexpdate]=useState('')
  const[expdatey,setexpdatey]=useState('')

  const[cvv,setcvv]=useState('')
  const[error,setError]=useState(false)
  const handleconfirm=(e)=>{
    e.preventDefault();
    if(cardholder.length==0||cardno.length==0||cvv.length==0){
      setError(true)
    }

    if(cardholder&&cardno)
    {
   console.log("\ncardholder name:",cardholder,"\ncard number:",cardno,"\nEXP-DATE:",expdate,"\nCVV:",cvv)
    }
   }
   const con=()=>{
    toast.success('SUCESSFULLY CARD IS CREATED', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
   };
    
  return (
    <div>
      <div className='rectangle1'>
    <div className='rectangle2'>
      <Container
       tn={cardno}
       tc={cardholder}
       texm={expdate}
       texy={expdatey}
       tcv={cvv} />
     <form onSubmit={handleconfirm}>
      
      <label  className='CN'>CARDHOLDER NAME</label>
       <input onChange={e=>setcardholder(e.target.value)} type='text' className='name' placeholder='e.g. Jane Appleseed'maxLength={16} name='cardholder' required />
       {error&&cardholder.length<=0?
       <label className='cnr'>Cardholder name required</label>:""}
       <br/>
       <label className='cn'>CARD NUMBER</label>
       <input type='text' className='num' placeholder='e.g. 1234 5678 9123 0000'name='cardno'maxLength={16}  onChange={e=>setcardno(e.target.value)} required/>
       {error&&cardno.length<=0?
       <label className='nr'>Card number required</label>:""}
       <br/>
       <label className='ed'>EXP.DATE (MM/YY)</label>
       <input type='text' className='exp'placeholder='MM' name='expdate'maxLength={2}  onChange={e=>setexpdate(e.target.value)} required/>
       <input type='text'  className='dte'placeholder='YY' name='expdate' maxLength={2} onChange={e=>setexpdatey(e.target.value)} required/>
       <label className='cv'>CVV</label>
       <input type='text' className='CVV' placeholder=' e.g. 123'name='cvv' maxLength={3} onChange={e=>setcvv(e.target.value)} required/>
       {error&&cvv.length<=0?
       <label className='cvn'>CVC must be numeric</label>:""}
         <br/>
       <button className='btn' onClick={con} >confirm</button>

       </form>
       <ToastContainer/>
     </div>  
    </div>
    </div> 
    
  )
}

export default Form