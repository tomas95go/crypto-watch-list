const AddAlertForm = ({
  history,
  location: {
    state: { name, id, image, symbol },
  },
  match,
}) => {
  return (
    <div>
      <span>{id}</span>
      <span>{symbol}</span>
      <img src={image} alt={name} height="30px" width="30px" />
      <input disabled value={name} />
      <button> Create Alert</button>
    </div>
  );
};

export default AddAlertForm;
