import React from 'react';
import EventEmitter from 'utils/eventemitter';
import { Weather, EventName } from 'constants/eventemitter';

const City = ({ eventEmitter }: { eventEmitter: EventEmitter; }) => {
  const [work, setWork] = React.useState(true);

  React.useEffect(() => {
    const subscribeWeather = (weather: Weather) => {
      if (weather === Weather.Stormy) {
        setWork(false);
      } else {
        setWork(true);
      }
    };

    eventEmitter.on(EventName.OnWeatherChange, subscribeWeather);

    return () => {
      eventEmitter.off(EventName.OnWeatherChange, subscribeWeather);
    };
  }, [eventEmitter]);

  return (
    <div className="flex-1">
      <h2>City</h2>
      {work ? 'Go to work' : 'Have a day off'}
    </div>
  );
};

export default City;