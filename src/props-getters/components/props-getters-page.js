import { FinalFormWithRenderProps } from "./final-form-with-render-props";
import { FormWithHoc } from "./form-with-hoc";
import { FormWithRenderProps } from "./form-with-render-props";
import { FormWithHook } from "./form-with-hook";

export const PropsGetterPage = () => {
  const onSubmit = (values) => alert(JSON.stringify(values));

  const _handleChange = (handleChange) => (e) => {
    // logic...
    alert("change");
    handleChange(e);
  };

  const logChange = () => {
    console.log("changed!");
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

      <h2>Example with Props Getter and Render Props</h2>
      <FinalFormWithRenderProps initialState={{ name: "", jobTitle: "" }}>
        {({ formValues, getInputProps, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                {...getInputProps({ onChange: logChange() })}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                {...getInputProps({ onChange: logChange() })}
              />
            </div>
            <button style={{ margin: "8px 0" }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FinalFormWithRenderProps>

      <hr></hr>

      <h2>Example with Props Getter and HOC</h2>
      <FormWithHoc onSubmit={onSubmit} />

      <hr></hr>

      <h2>Example with Props Getter and Custom Hook</h2>
      <FormWithHook onSubmit={onSubmit} />
    </>
  );
};
