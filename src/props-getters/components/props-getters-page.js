import { FormWithRenderProps } from "./form-with-render-props";

export const PropsGetterPage = () => {
  const onSubmit = (values) => alert(JSON.stringify(values));

  const _handleChange = (handleChange) => (e) => {
    // logic...
    alert("change");
    handleChange(e);
  };

  return (
    <>
      <h2>Example without Props Getter</h2>
      <FormWithRenderProps initialState={{ name: "", jobTitle: "" }}>
        {({ formValues, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={_handleChange(handleChange)}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
              />
            </div>
            <button style={{ margin: "8px 0" }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FormWithRenderProps>

      <hr></hr>
      <h2>Example with Props Getter</h2>
    </>
  );
};
