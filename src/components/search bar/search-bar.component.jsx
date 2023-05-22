import { Component } from 'react';
import "./search-bar.css";

class Sbar extends Component {


    render() {
        const {placeholder, onChange, className} = this.props;        
        return(
            <input placeholder= {placeholder} onChange={onChange} type = "search" className = {`search-bar ${className}`} />
        )
    }

}

export default Sbar;