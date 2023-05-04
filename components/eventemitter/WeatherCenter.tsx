import React from 'react';
import EventEmitter from 'utils/eventemitter';
import { Weather, EventName } from 'constants/eventemitter';

const WeatherCenter = ({ eventEmitter }: { eventEmitter: EventEmitter; }) => {
  const [weather, setWeather] = React.useState<Weather>(Weather.Sunny);

  const changeWeather = (weather: Weather) => () => {
    setWeather(weather);
    eventEmitter.emit(EventName.OnWeatherChange, weather);
  };

  return (
    <div className="py-2">
      <p className="font-bold my-2">Today&apos;s weather is {weather}</p>
      <div>
        <span>Choose Weather: </span>
        <button className="bg-emerald-200 text-sm rounded px-2 mr-1" onClick={changeWeather(Weather.Sunny)}>{Weather.Sunny}</button>
        <button className="bg-gray-300 text-sm rounded px-2 mr-1" onClick={changeWeather(Weather.Cloudy)}>{Weather.Cloudy}</button>
        <button className="bg-sky-600 text-sm rounded px-2 mr-1 text-white" onClick={changeWeather(Weather.Rainy)}>{Weather.Rainy}</button>
        <button className="bg-neutral-600 text-sm rounded px-2 mr-1 text-white" onClick={changeWeather(Weather.Stormy)}>{Weather.Stormy}</button>
        <button className="bg-blue-300 text-sm rounded px-2 mr-1" onClick={changeWeather(Weather.Windy)}>{Weather.Windy}</button>
      </div>
    </div>
  );
};

export default WeatherCenter;