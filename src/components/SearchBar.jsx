import {useState } from 'react';
import '../styles/searchbar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem('inputValue', inputValue);
        navigate('/search/' + inputValue.toString());
    }

    return (
        <form onSubmit={handleFormSubmit}> 
            <input
                className="search-bar"
                type="text"
                placeholder="Search for stuff"
                onChange = {handleInputChange}/>
            <button className="search-bar-button">
                <i className="fa-solid fa-magnifying-glass" style={{color: "#f7faff"}}></i>
            </button>  
        </form>
    )
}

export default SearchBar