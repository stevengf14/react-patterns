import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const TodoContext = createContext();
const { Provider } = TodoContext;

export const FinalTodo = ({ children }) => {
  const [data, setData] = useState("");

  const handleSubmit = ({ name, age }) => {
    setData(
      `Your name is ${name} and your age is ${age}... You're getting old`
    );
  };

  const valuesProvider = {
    handleSubmit,
    data,
  };

  return (
    <div
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        padding: "8px",
      }}
    >
      <Provider value={valuesProvider}>{children}</Provider>
    </div>
  );
};

export const TodoTitle = ({ children }) => <header>{children}</header>;

export const TodoFooter = ({ children }) => (
  <footer>
    <strong>{children}</strong>
  </footer>
);

export const TodoForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { handleSubmit } = useContext(TodoContext);

  const handleInputChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleInputChangeAge = ({ target: { value } }) => {
    setAge(value);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, age });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={_handleSubmit} style={{ padding: 5, margin: 10 }}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleInputChangeName}
            required
            style={{ marginLeft: 3 }}
          />
        </label>
      </div>
      <br></br>
      <div>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={handleInputChangeAge}
            required
            style={{ marginLeft: 3 }}
          />
        </label>
      </div>

      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export const TodoMessage = () => {
  const { data } = useContext(TodoContext);
  return <div>{data}</div>;
};

FinalTodo.Title = TodoTitle;
FinalTodo.Footer = TodoFooter;
FinalTodo.Form = TodoForm;
FinalTodo.Message = TodoMessage;

FinalTodo.protoTypes = {
  children: PropTypes.node.isRequired,
};
