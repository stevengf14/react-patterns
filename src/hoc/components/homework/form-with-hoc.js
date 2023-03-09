import { useState } from "react";
import axios from "axios";

const withControlledForm = (Form, initialState = {}) => {
  const ControlledForm = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    const [data, setData] = useState(null);
    const apiBaseUrl = "https://api.github.com";

    const getData = (url) => {
      return axios.get(url).catch((error) => {
        console.log(error);
        return [];
      });
    };

    const handleChange = (e) => {
      setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const doFetch = async () => {
        const fetchData = async () => {
          const dataGit = await getData(
            `${apiBaseUrl}/users/${username}/repos?sort=created`
          );
          console.log(dataGit);
          if (dataGit.status === 200) {
            setData(dataGit.data);
          } else {
            setData([]);
          }
        };
        fetchData();
      };
      doFetch();
      onSubmit(username);
    };

    return (
      <Form
        username={username}
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return ControlledForm;
};

const MyFormA = ({ username, data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>username</p>
        <input
          type="text"
          name="name"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Send</button>
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
    </form>
  );
};

export const MyFormAControlled = withControlledForm(MyFormA, "");
