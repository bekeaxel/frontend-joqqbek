import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/searchbar.css';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const enteredValue = inputValue;
            navigate(enteredValue);
            setInputValue('');
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <form> 
            <input
                className="search-bar"
                type="text"
                placeholder="Search for stuff"
                onChange = {handleInputChange}
                onKeyDown={handleKeyDown} />
            <button className="search-bar-button">
                <i className="fa-solid fa-magnifying-glass" style={{color: "#f7faff"}}></i>
            </button>  
        </form>
    )
}

export default SearchBar