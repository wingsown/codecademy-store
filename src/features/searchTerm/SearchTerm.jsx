import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = (props) => {
    const { searchTerm, dispatch } = props;

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
      <div id="search-container">
          <img 
            id="search-icon"
            src={searchIconUrl}
            alt=""/>
          <input 
            type="text"
            id="search"
            value={searchTerm}
            onChange={onClearSearchTermHandler}
            placeholder="Search products" 
          />
          {searchTerm.length > 0 && (
              <button
                onClick={onClearSearchTermHandler}
                type="button"
                id="search-clear-button"
                >
              <img 
                src={clearIconUrl} 
                alt="" 
              />
          </button>
          )}
      </div>  
    );
};