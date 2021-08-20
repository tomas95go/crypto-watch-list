const ConfirmActionModal = ({
  id,
  name,
  image,
  symbol,
  alertType,
  alertTrigger,
  alertTypeDesc,
  onWatchList,
  action,
  price,
}) => {
  const handleWatchList = (event) => {
    if (event.target.value === `cancel`) {
      onWatchList(0, 'cancel');
    } else {
      const newAlert = {
        id: id,
        name: name,
        price: price,
        alert_trigger: alertTrigger,
        alert_type: alertType,
        alert_description: alertTypeDesc,
      };
      onWatchList(newAlert, action);
    }
  };

  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={(event) => handleWatchList(event)}
        value="cancel"
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered">Confirm action</p>
          <button
            className="delete"
            aria-label="close"
            onClick={(event) => handleWatchList(event)}
            value="cancel"
          ></button>
        </header>
        <section className="modal-card-body">
          <p className="has-text-center">
            Do you want to confirm the <strong>{name}</strong> alert when{' '}
            <strong>{alertTypeDesc.toLowerCase()}</strong>{' '}
            <strong>
              {Number(alertType) === 2 ? (
                <span>-{alertTrigger}%</span>
              ) : (
                <span>{alertTrigger}%</span>
              )}
            </strong>{' '}
            ?
          </p>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            value={id}
            onClick={(event) => handleWatchList(event)}
          >
            Save changes
          </button>
          <button
            className="button"
            value="cancel"
            onClick={(event) => handleWatchList(event)}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ConfirmActionModal;
