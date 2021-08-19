import ConfirmActionModal from './ConfirmActionModal';
import { useState } from 'react';
const AddAlertForm = ({
  history,
  location: {
    state: { name, id, image, symbol },
  },
  match,
}) => {
  const alertTypes = [
    {
      id: 0,
      type: `Select an option...`,
      description: `Select an option...`,
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
      description: `Select an option`,
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

  const handleModalStatus = () => {
    setModalStatus(!isOpen);
  };

  const handleAlertType = (event) => {
    setAlertType(event.target.value);
  };

  const handleAlertTrigger = (event) => {
    setAlertTrigger(event.target.value);
  };

  const [isOpen, setModalStatus] = useState(false);
  const [alertType, setAlertType] = useState(0);
  const [alertTrigger, setAlertTrigger] = useState(0);

  return (
    <div>
      <span>{id}</span>
      <span>{symbol}</span>
      <img src={image} alt={name} height="30px" width="30px" />
      <input disabled value={name} />
      <button onClick={handleModalStatus}> Create Alert</button>
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
            <option defaultValue={alert.id} key={alert.id} value={alert.id}>
              {alert.description}
            </option>
          );
        })}
      </select>
      <select
        onChange={(event) => {
          handleAlertTrigger(event);
        }}
      >
        {alertTriggers.map((trigger) => {
          return trigger.id ? (
            <option key={trigger.id} value={trigger.percentage}>
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
        />
      ) : (
        false
      )}
    </div>
  );
};

export default AddAlertForm;
