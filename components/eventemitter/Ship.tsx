import React from 'react';
import EventEmitter from 'utils/eventemitter';
import { Weather, EventName } from 'constants/eventemitter';

const Ship = ({ eventEmitter }: { eventEmitter: EventEmitter; }) => {
  const [finshing, setFinshing] = React.useState(true);

  React.useEffect(() => {
    const subscribeWeather = (finshing: Weather) => {
      if (finshing === Weather.Sunny || finshing === Weather.Cloudy) {
        setFinshing(true);
      } else {
        setFinshing(false);
      }
    };

    eventEmitter.on(EventName.OnWeatherChange, subscribeWeather);

    return () => {
      eventEmitter.off(EventName.OnWeatherChange, subscribeWeather);
    };
  }, [eventEmitter]);

  return (
    <div className="flex-1">
      <h2>Ship</h2>
      {finshing ? 'Go fishing' : 'Take a break'}
    </div>
  );
};

export default Ship;