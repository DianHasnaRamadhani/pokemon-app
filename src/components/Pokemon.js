import React from 'react';
import { Link } from 'react-router-dom';
class Pokemon extends React.Component{
    constructor(props) {
        super(props);
        this.state={isOpen:false}
    }
    render() {
        return (
            <div className='pokemon-card'>
                <div className='pokemon-item'>
                    <p>{this.props.name}</p>
                    <img src={this.props.image} alt=''/>
                    <Link className='btn' to={`/pokemon/${this.props.id}`}>View</Link>
                </div>
            </div>
        );
    }
}
export default Pokemon;