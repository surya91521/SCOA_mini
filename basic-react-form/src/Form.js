import React, { useCallback } from "react";
import "./App.css";
import axios from 'axios';
export default class Form extends React.Component {
  state = {
    Population_Size: "",
    Mutation_Rate: "",
    Crossover_rate: "",
    Crossover_Points: "",
    Generations: "",
    Run_GA: "",
    Result: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClear = (e) => {
    e.preventDefault();
    this.setState({
      Population_Size: "",
      Mutation_Rate: "",
      Crossover_rate: "",
      Crossover_Points: "",
      Generations: "",
      Run_GA: ""
    });
  }

  onSubmit = async(e) => {
    e.preventDefault();
    const body = {
          Population_Size: this.state.Population_Size,
          Mutation_Rate: this.state.Mutation_Rate,
          Crossover_rate: this.state.Crossover_rate,
          Crossover_Points: this.state.Crossover_Points,
          Generations: this.state.Generations,
          Run_GA: this.state.Run_GA
    }
    console.log(body);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/submit',
      data: body, // you are sending body instead
      headers: {
       // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    }).then(res => {
      this.setState({Result: res.data})
      console.log(this.state.Result);
    }).catch(err => {
      console.log('err', err);
    }).finally(res => {
      console.log('finally', res);
    })
    return;
   
  };

  render() {
    return (
      <div>
      <form>
        <input
          name="Population_Size"
          placeholder="Population_Size"
          value={this.state.Population_Size}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Mutation_Rate"
          placeholder="Mutation_Rate"
          value={this.state.Mutation_Rate}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Crossover_rate"
          placeholder="Crossover_rate"
          value={this.state.Crossover_rate}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Crossover_Points"
          placeholder="Crossover_Points"
          value={this.state.Crossover_Points}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Generations"
          type="Generations"
          placeholder="Generations"
          value={this.state.Generations}
          onChange={e => this.change(e)}
        />
        <br />
         <input
          name="Run_GA"
          type="Run_GA"
          placeholder="Run_GA"
          value={this.state.Run_GA}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        <button onClick={e => this.onClear(e)}>Clear</button>
      </form>
    <br />
    <p>
    {JSON.stringify(this.state.Result)}
    </p>
    </div>
    );
  }
}
