import { useState } from "react";
import PropTypes from "prop-types";

export const Todo = ({ title, footer }) => {
  const [data, setData] = useState("");

  const handleSubmit = ({ name, age }) => {
    setData(
      `Your name is ${name} and your age is ${age}... You're getting old`
    );
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
      <TodoTitle>
        <h2>{title}</h2>
      </TodoTitle>
      <main>
        <TodoForm onSubmit={handleSubmit} />
        <TodoMessage>{data}</TodoMessage>
      </main>
      <TodoFooter>{footer}</TodoFooter>
    </div>
  );
};

const TodoTitle = ({ children }) => <header>{children}</header>;

const TodoFooter = ({ children }) => (
  <footer>
    <strong>{children}</strong>
  </footer>
);

const TodoForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleInputChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleInputChangeAge = ({ target: { value } }) => {
    setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 5, margin: 10 }}>
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

const TodoMessage = ({ children }) => <div>{children}</div>;

Todo.protoTypes = {
  title: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

TodoTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

TodoFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

TodoMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
