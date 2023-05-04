import React from "react";
import DefaultPageLayout from "components/global/DefaultPageLayout";
import EventEmitter from 'utils/eventemitter';
import WeatherCenter from "components/eventemitter/WeatherCenter";
import City from "components/eventemitter/City";
import Ship from "components/eventemitter/Ship";

const EventEmitterPage = () => {
  const [eventEmitter, _] = React.useState(new EventEmitter());

  return (
    <DefaultPageLayout
      title="Event Emitter"
      description="Like EventEmitter in Node.js, we can create a simple EventEmitter to implement a publish-subscribe pattern. Just like using addEventListener in the browser."
    >
      <WeatherCenter eventEmitter={eventEmitter}></WeatherCenter>
      <div className="flex justify-between align-middle">
        <City eventEmitter={eventEmitter}></City>
        <Ship eventEmitter={eventEmitter}></Ship>
      </div>
    </DefaultPageLayout>
  );
};

export default EventEmitterPage;
