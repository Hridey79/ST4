import {React,useState} from 'react'
import "./Form.css"
import hero from './herosection.svg'
import {Link,useNavigate} from 'react-router-dom'
import Data from './Data.jsx'
// 



function Form() {
    const [name,setname]=useState('');
    const [rating,setrating]=useState('');
    const [review,setreview]=useState(''); 
    let history=useNavigate();   
    const handleClick=(e)=>{
        e.preventDefault();
        let a=name,b=rating,c=review;
        Data.push({a,b,c});
        console.log(Data)
        history('/records')
        // console.log(Data)
    }
  return (
    <div className='customer_review'>
        <div className='Form'>
        <div className='form_content'>
            <h1 className='heading'>Customer Review Form</h1>
            <div className='Name'>
                <label>Product Name</label><br></br>
                <input className="name_input" type='text' onChange={(e)=>setname(e.target.value)} required placeholder='Name'></input>
            </div>
            <div className='Rating'>
                <label>Rating</label><br></br>
                <input className="rating_input" type='number' onChange={(e)=>setrating(e.target.value)} required placeholder='Rating' max={5}></input>
            </div>
            <div className='Review'>
                <label>Review</label><br></br>         
                {/* <input className="review_input" type='text' placeholder='Review'></input> */}
                <textarea className='review_input' type='text' onChange={(e)=>setreview(e.target.value)} required placeholder='Review' cols={50} rows={10}></textarea>
            </div>
            <div className='button'>
                <Link to='/records'>
                    <button type='submit' className='submit_button' onClick= {handleClick}>Submit</button>
                </Link>
            </div>
        </div>
        <div className='Image'>
            <img src={hero}></img>
        </div>
    </div>

    </div>
  )
}

export default Form