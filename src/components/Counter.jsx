
import { useDispatch, useSelector } from 'react-redux'

import {addCount} from '../Redux/Counter/action'
import '../styles/ProductDetails.css'


export const Counter= ()=> {
  localStorage.setItem("count",JSON.stringify(count))
  const [count,setCount]=useState(0);   
const dispatch = useDispatch();
const counter = useSelector((store) => 
 store.counter.counter
)
  return (
    <div className='counter'>
        <button  onClick={()=>{
    if(counter===1){
      return 
    }else{
      dispatch(addCount(-1))
    }
  }}>-</button>
  <div className='number'>
  {counter} 
  </div>

  <button onClick={()=>{
    dispatch(addCount(1))
  }}>
    +
  </button>
    </div>
  )
}