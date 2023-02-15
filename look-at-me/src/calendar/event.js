import React from 'react';

const Event = ({ title, dateStart, dateEnd }) => {
    const Start = new Date(dateStart);

    const startMonth = Start.toLocaleDateString('fr-FR', { month: 'short' });

    const startDay = Start.toLocaleDateString('fr-FR', { day: 'numeric' });


    const formattedTime = Start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <li className="events__item">
            <div className="events__item--left">
                <span className="events__name">{title}</span>
                <span className="events__date">{`${startMonth.substring(0, 3)} ${startDay}`}</span>
            </div>
            <span className="events__tag">{formattedTime}</span>
        </li>
    );
};

const EventList = ({ events }) => {
    return (
        <div className="events-container">
            <span className="events__title">Upcoming events this month</span>
            <ul className="events__list">
                {events.map(event => (
                    <Event key={event.title} {...event} />
                ))}
            </ul>
        </div>
    );
};

export default EventList;