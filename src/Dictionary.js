import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css"
import SearchResults from "./SearchResults";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [definitions, setDefinitions] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setDefinitions(response.data[0]);
    }

    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey =
          "563492ad6f91700001000001144fbf14b05a48f68256fd4aae7c5225";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Type your word here..."
          />
          <input type="submit" onSubmit={search} />
        </form>
        <SearchResults data={definitions} />
        <Photos photo={photos} />
      </div>
    );
}