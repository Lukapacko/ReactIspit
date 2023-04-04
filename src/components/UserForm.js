import React from 'react';
import { useState } from 'react';

function UserForm(props) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <label for="user-name">GitHub username:</label>
                <input type="text" id="user-name" value={inputValue} onChange={handleInputChange} name="user-name" placeholder='e.g Facebook'/>
                <button type="submit">GO!</button>
            </form>
        </div>
    );
}

export default UserForm;