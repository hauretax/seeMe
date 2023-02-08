import React from 'react';

const Event = ({ title, dateStart, dateEnd }) => {
    const Start = new Date(dateStart);
    const End = new Date(dateEnd);

    const startMonth = Start.toLocaleDateString('fr-FR', { month: 'short' });
    const endMonth = End.toLocaleDateString('fr-FR', { month: 'short' });

    const startDay = Start.toLocaleDateString('fr-FR', { day: 'numeric' });
    const endDay = End.toLocaleDateString('fr-FR', { day: 'numeric' });


    const formattedTime = Start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <li className="events__item">
            <div className="events__item--left">
                <span className="events__name">{title}</span>
                <span className="events__date">{`${startMonth.substring(0, 3)} ${startDay} - ${endMonth.substring(0, 3)} ${endDay}`}</span>
            </div>
            <span className="events__tag">{formattedTime}</span>
        </li>
    );
};

const EventList = ({ events }) => {
    return (
        <div className="events-container">
             <ul className="events__list">
                {events.map(event => (
                    <Event key={event.title} {...event} />
                ))}
            </ul>
        </div>
    );
};

export default EventList;