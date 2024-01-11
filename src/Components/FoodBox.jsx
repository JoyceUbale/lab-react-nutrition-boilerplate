import React, { Component } from 'react'
import "./FoodBox.css"

export default class FoodBox extends Component {
  constructor(){
    super()
    this.state = {
      countNo:0,
      countCals:0
    }
  }
  render() {
    let data = this.props
    let {countNo,countCals}= this.state;
    let handleQuantity = (event)=>{
      this.setState({countNo:event.target.value})
    }
    let handleCalories = ()=>{
      this.setState({countCals:data.cal * countNo})
    }
    let handleReset = ()=>{
      this.setState({countNo:0})
      this.setState({countCals:0})
    }
    return (
        <>
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={data.img} width="120px"/>
            </figure>
          </div>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>{data.name}</strong> <br />
                <small>{data.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" placeholder='Enter The Number' onChange={handleQuantity}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={handleCalories}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <div>
          <h2>
              {countNo} {data.name} = { countCals} Calories
          </h2>
          <div>
            <button onClick={handleReset}>
                RESET
            </button>
          </div>
        </div>
      </div>
        </>
    )
  }
}