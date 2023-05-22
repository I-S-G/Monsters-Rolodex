import { Component } from 'react';
import './monster.css';

class Monster extends Component {
    render() {
        const { monster } = this.props;
        return(
            <a target='_blank' href= {`https://robohash.org/${monster.id}?set=set2/100x100`}>
                <div className='monster'>
                    <img src = {`https://robohash.org/${monster.id}?set=set2/100x100`} className='monster-icon' />
                    <p className= "monster-name"> {monster.name} </p>
                    <p className='monster-email'> {monster.email} </p>
                </div>
            </a>
            
        )
    }
}

export default Monster;