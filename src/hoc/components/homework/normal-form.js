import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const NormalForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const apiBaseUrl = "https://api.github.com";

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const getData = (url) => {
    return axios.get(url).catch((error) => {
      console.log(error)
      return [];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doFetch = async () => {
      const fetchData = async () => {
        const data = await getData(
          `${apiBaseUrl}/users/${username}/repos?sort=created`
        );
        console.log(data);
        if(data.status===200){
          setData(data.data);
        } else{
          setData([])
        }
        
      };
      fetchData();
    };
    doFetch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>username</p>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      {data !== null && (
        <div>
          {Array.isArray(data) &&
            data.map(({ name, html_url }) => (
              <div key={html_url}>
                <p>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </p>
              </div>
            ))}
        </div>
      )}
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

NormalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
