import React , { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();
    
    goToStore = event => {
        event.preventDefault();
        // get the data from the form
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);


    };

    render () {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>please enter a store</h2>
                    <input 
                        type="text" 
                        ref={this.myInput} 
                        required
                        placeholder="Enter Store" 
                        defaultValue={getFunName()} />
                    <button type="submit">VISIT STORE</button>
                </form>
            </Fragment>    
        );
    }
}

export default StorePicker;