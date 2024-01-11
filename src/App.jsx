import React from 'react';
import FoodBox from './Components/FoodBox';
import FoodData from "./resources/FoodData"



export default class App extends React.Component {
  constructor (){
    super()
    this.state = {
      value:"",
      newArr:FoodData
    }
  }
  render() {
       let {value,newArr} = this.state;
       let handleChange = (event)=>{
        console.log(event.target.value)
        let filteredData = FoodData.filter((el,i)=>el.name.includes(event.target.value))
        this.setState({newArr:filteredData})
       }
      console.log(FoodData)
      return (
        <>
        <div>
          <div>
            <input type="text" placeholder='Search Food Here' onChange={handleChange}/>
          </div>
          {
            newArr.map((el,i)=>(
              <FoodBox key={i} {...el}/>
            ))
          }
        </div>
        </>
    )
  }
}