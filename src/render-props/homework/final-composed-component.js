export const FinalComposedComponent = (props) => {
  if (!props.render) {
    return (
      <div>
        <p>Oops! There is no number</p>
      </div>
    );
  } else {
   return props.render(props.children);
  }
};
