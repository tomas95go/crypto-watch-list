import ConfirmActionModal from './ConfirmActionModal';
import { useState } from 'react';
const AddAlertForm = ({
  history,
  location: {
    state: { name, id, image, symbol, current_price },
  },
  match,
  onWatchList,
  handleModalStatus,
  isOpen,
}) => {
  const alertTypes = [
    {
      id: 0,
      type: `Select an option...`,
      description: `Select alert type...`,
    },
    {
      id: 1,
      type: 'price_increase',
      description: `Price increase`,
    },
    {
      id: 2,
      type: 'price_decrease',
      description: `Price decrease`,
    },
  ];

  const alertTriggers = [
    {
      id: 0,
      description: `Select alert trigger...`,
      percentage: 0,
    },
    {
      id: 1,
      description: `10%`,
      percentage: 10,
    },
    {
      id: 2,
      description: `20%`,
      percentage: 20,
    },
    {
      id: 3,
      description: `30%`,
      percentage: 30,
    },
    {
      id: 4,
      description: `40%`,
      percentage: 40,
    },
    {
      id: 5,
      description: `50%`,
      percentage: 50,
    },
  ];

  const handleAlertType = (event) => {
    setAlertType(event.target.value);
  };

  const handleAlertTrigger = (event) => {
    setAlertTrigger(event.target.value);
  };

  const [alertType, setAlertType] = useState(0);
  const [alertTrigger, setAlertTrigger] = useState(0);

  return (
    <div className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <div className="card-header has-background-primary">
              <p className="card-header-title is-flex is-justify-content-center has-text-white has-text-weight-bold">
                {name}
                <img
                  className="ml-2"
                  src={image}
                  alt={name}
                  height="25px"
                  width="25px"
                />
              </p>
            </div>
            <div className="card-content">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label ">Alert type</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="select is-fullwidth has-text-centered">
                        <select
                          onChange={(event) => {
                            handleAlertType(event);
                          }}
                        >
                          {alertTypes.map((alert) => {
                            return alert.id ? (
                              <option key={alert.id} value={alert.id}>
                                {alert.description}
                              </option>
                            ) : (
                              <option
                                defaultValue={alert.id}
                                key={alert.id}
                                value={alert.id}
                              >
                                {alert.description}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label ">Trigger</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="select is-fullwidth has-text-centered">
                        <select
                          onChange={(event) => {
                            handleAlertTrigger(event);
                          }}
                        >
                          {alertTriggers.map((trigger) => {
                            return trigger.id ? (
                              <option
                                key={trigger.id}
                                value={trigger.percentage}
                              >
                                {trigger.description}
                              </option>
                            ) : (
                              <option
                                defaultValue={trigger.percentage}
                                key={trigger.id}
                                value={trigger.percentage}
                              >
                                {trigger.description}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal has-text-centered">
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button
                        className="button is-primary"
                        onClick={handleModalStatus}
                      >
                        Create Alert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isOpen ? (
            <ConfirmActionModal
              isOpen={isOpen}
              name={name}
              id={id}
              image={image}
              symbol={symbol}
              alertType={alertType}
              alertTrigger={alertTrigger}
              alertTypeDesc={alertTypes[alertType].description}
              onWatchList={onWatchList}
              action="add"
              price={current_price}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAlertForm;
