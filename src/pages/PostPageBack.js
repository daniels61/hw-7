import React from 'react';
import axios from 'axios';
import './App.css';

const weatherKey = "b84ccb366c7ed27f713f2b1e7e884b34"

export default class PostPageBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      data: [],
      resp: null
    };
  }

  doEdit = (e) => {
    this.setState({
      city: e.target.value,
    });
  }

  getAllCities = (e) => {
    const url = "/cities"
    axios.get(url).then((res) =>
    {
      this.setState({
        data: res.data,
        resp: null
      });
    });
  }

  addCity = (e) => {
    const url = "/cities"
    const data = {
      name: this.state.city,
      population: 100000
    }
    axios.post(url, data)
    .then((res) => {
      this.setState({
        data: [],
        resp: "Success, great new city added!"
      });
    })
      .catch((err) => {
        this.setState({
          data: null,
          resp: "Error: something went wrong, try another city."
        });
      });
  }

  doCall = (e) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${weatherKey}&q=${this.state.city}`;
    axios.get(url)
      .then((res) => {
        this.setState({
          data: res.data,
          resp: null
        });
      })
      .catch((err) => {
        this.setState({
          data: null,
          resp: "Error: something went wrong, try another city."
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
        <div>
          <button onClick={this.getAllCities}>Get All Cities</button><br/>


          <input type="text" onChange={this.doEdit}></input>
          <button onClick={this.addCity}>Add City</button>
          
          <div>
            {this.state.resp?this.state.resp:null}
          </div>

          <div>
          {
            this.state.data.map((item =>
            <div>
              ID: {item.id}, Name: {item.name}, Population: {item.population}
            </div>
            ))
          }
          </div>
        </div>
    );
  }
}