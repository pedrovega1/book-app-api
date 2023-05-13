import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("Find...");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className="search-form mt-[35px]">
      <div className="container">
        <form className="" onSubmit={handleSubmit}>
          <div className="search-form-elements ">
            <input
              type="text"
              placeholder="Find..."
              className="rounded-md p-4 pl-3 text-gray-900  leading-relaxed capitalize"
            />

            <button
              type="submit"
              className="p-4 border bg-gray-100 ml-2 hover:bg-gray-300  rounded-md"
              ref={searchText}
              onClick={handleSubmit}
            >
              <i className="fa-solid fa-magnifying-glass "></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
