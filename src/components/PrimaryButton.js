const PrimaryButton = (props) => {
  const { disableBtn, text } = props;

  return (
    <button
      className="primary-button"
      onClick={props.onClick}
      disabled={disableBtn}
    >
      {text}
      {props.children}
    </button>
  );
};

export default PrimaryButton;
