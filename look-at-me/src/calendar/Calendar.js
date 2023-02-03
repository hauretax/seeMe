import './calendar.css'
import React, { useState } from 'react';
import EventList from './event';

// ref :  https://codepen.io/eliza-rjb/pen/xmbEWX
function getFirstMonthDay(dateString) {
    var date = new Date(dateString);
    date.setDate(1);
    return date.getDay();
}

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getMonthDays(year, month) {
    let dayToMoov = getFirstMonthDay(`${year}/${month}/01`)
    if (dayToMoov === 0)
        dayToMoov = 7;
    const numberDays = daysInMonth(year, month)
    const tab = [];
    for (let i = 1; i <= numberDays; i++) {
        tab.push({nb : i, class: 'calendar-table__event'})
    }
    for (let i = 1; i < dayToMoov; i++) {
        tab.unshift({nb: ' ', class: 'noHover'})
    }
    return tab
}

const tmpEvents = [{ title: 'Town hall meeting', dateStart: 1693200000, dateEnd: 1693286400000 },
{ title: 'Community gathering', dateStart: 1704608000000, dateEnd: 1704780800000 },
{ title: 'City council meeting', dateStart: 1717440000000, dateEnd: 1717484800000 },
{ title: 'Public forum', dateStart: 1730240000000, dateEnd: 173030400000 },
{ title: 'Neighborhood meeting', dateStart: 1739840000000, dateEnd: 173990400000 },
{ title: 'Town hall discussion', dateStart: 1754144000000, dateEnd: 175422400000 },
{ title: 'Municipal meeting', dateStart: 1767232000000, dateEnd: 176731600000 },
{ title: 'Local government meeting', dateStart: 1781712000000, dateEnd: 178176800000 },
{ title: 'Community council meeting', dateStart: 179450400000, dateEnd: 179454800000 },
{ title: 'City hall meeting', dateStart: 1806912000000, dateEnd: 1806956800000 }
]
function getEvent() {

    return tmpEvents
}


export default function Calendar() {
    const monthTab = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
    const dayTab = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']


    const date = new Date();
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [calendTab, setCalend] = useState(getMonthDays(year, month + 1));

    const [events, setEvents] = useState(getEvent());

    // console.log(month, getMonthDays(2023, 2))

    function moovMonth(value) {
        let tmpMonth = month
        let tmpYear = year
        if (tmpMonth + value === -1) {
            tmpYear--
            tmpMonth = 11
        }
        else if (tmpMonth + value === 12) {
            tmpYear++;
            tmpMonth = 0
        }
        else
            tmpMonth += value
        setYear(tmpYear);
        setMonth(tmpMonth);
        setCalend(getMonthDays(tmpYear, tmpMonth + 1))
    }

    return (
        <div className="my_calendar">
            <div className="main-container-wrapper">

                <div className="calendar-container">
                    <div className="calendar-container__header">
                        <button className="calendar-container__btn calendar-container__btn--left" onClick={() => moovMonth(-1)} >
                            -
                        </button>
                        <h2 className="calendar-container__title">{monthTab[month]} {year}</h2>
                        <button className="calendar-container__btn calendar-container__btn--right" onClick={() => moovMonth(1)} >
                            +
                        </button>
                    </div>
                    <div className="calendar-container__body">
                        <div className="calendar-table">
                            <div className="calendar-table__header">
                                {/* show days */}
                                <div className="calendar-table__row">
                                    {dayTab.map(function (object, i) {
                                        return <div key={i} className="calendar-table__col" >{object[0]}</div>;
                                    })}

                                </div>
                            </div>
                            {/* show number in calendar */}
                            <div className="calendar-table__body">
                                {calendTab.map(function (object, i) {
                                    return <div key={i} className={`calendar-table__col ${object.class} `} >
                                        <div className={`calendar-table__item ${object.class} `}>
                                            <span>{object.nb}</span>
                                        </div>
                                    </div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <EventList events={events} />
            </div>
        </div>
    )
}