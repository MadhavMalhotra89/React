import React, { useState } from 'react';

const SearchBar = ( { onFormSubmit } ) => {
    const [term, setTerm] = useState('');

    const onInputchange = (e) => {
        setTerm(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search For A Video</label>
                    <input value={term} type="text" onChange={onInputchange}></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;