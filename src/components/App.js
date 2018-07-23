import React ,{Component } from 'react';
import {Form,Button,FormGroup,Label,Input,} from 'reactstrap';
import  '../index.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor(){
        super();
        this.state = {
            newDate : '',
            birthday:'1994-10-29',
            showStats:false
        }
    }
  
     changeBirthday(){
         this.setState({birthday:this.state.newDate});
         this.setState({showStats:true});
     }
     
    render(){
        return(
            <div className="App">
            <div>AgeTeller</div>
            <Form>
                <FormGroup>
                    <Label>Pick Your Birthday Date</Label>
                    <Input type="Date" onChange={event => this.setState({newDate:event.target.value})} /><br/>
                    <Button onClick={() =>this.changeBirthday()}>Submit</Button>
                    </FormGroup>
                </Form>
                {
                    this.state.showStats?
                  <AgeStats date={this.state.birthday} />
                  :<div></div>
                }
                </div>
        )
    }
}

export default App;