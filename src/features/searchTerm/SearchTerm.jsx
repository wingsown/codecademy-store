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
          <img src="" alt="" />
          <input type="text" />
          <button>
              <img src="" alt="" />
          </button>
      </div>  
    )
}