import React,{Component} from 'react';
import  '../index.css';


class AgeStats extends Component{
    timeSince(date){
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let difference = Math.abs(today-otherDate);
        let Days = Math.floor(difference/ (1000*3600*24));
        let Years = Math.floor(Days/365);
        Days -=Years*365;
        let Months = Math.floor(Days/31);
        return `${Years} years, ${Months} months, and ${Days} days`
    }
    render(){
        return(
            <div className="stats">
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
                </div>
        )
    }
}

export default AgeStats;