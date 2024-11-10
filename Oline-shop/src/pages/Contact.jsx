import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCocktailError,getCocktailSuccess,getCocktailStart } from '../redux/contact/contactSlice'
import axios from 'axios'
import { useEffect } from 'react'

const Api ="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

const Contact = () => {
  const {list ,loading,error}=useSelector((state)=>state.coctail)
  const distpach = useDispatch()

  async function getCoctail(){
    distpach(getCocktailStart())
    try {
      const res =await axios.get(Api)
      distpach(getCocktailSuccess(res.data.drinks));
      console.log(res);
      
      
    } catch (error) {
      console.log(error);  
     distpach(getCocktailError("error"))
      
    }
  }
  useEffect(()=>{ 
    getCoctail()
  },[])
  
  return (
    <div>
      <div>{list.map((item)=>(
        <div>
          <img src={item.strDrinkThumb} />
          <h4>{item.strDrink}</h4>
        </div>
      )

      )}</div>
      ghjkl
    </div>
  )
}

export default Contact
