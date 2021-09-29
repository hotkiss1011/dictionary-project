import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiKey = "abaf2506-b8a7-46fe-9273-0746a889a5ed";
        let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
    </div>
    );
}