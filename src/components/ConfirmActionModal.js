const ConfirmActionModal = ({
  id,
  name,
  image,
  symbol,
  alertType,
  alertTrigger,
  alertTypeDesc,
}) => {
  return (
    <div>
      <h1>Confirm Modal!</h1>
      <p>{id}</p>
      <p>{name}</p>
      <p>{image}</p>
      <p>{symbol}</p>
      <p>{alertType}</p>
      {Number(alertType) === 2 ? (
        <p>-{alertTrigger}%</p>
      ) : (
        <p>{alertTrigger}%</p>
      )}
      <p>{alertTypeDesc}</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

export default ConfirmActionModal;
