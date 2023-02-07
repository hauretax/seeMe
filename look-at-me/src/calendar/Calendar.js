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
        const datetofind = `${i}-${month}-${year}`
        tab.push(tmpEvents.find(e => e.dateText === datetofind) ? { nb: i, class: 'calendar-table__event' } : { nb: i, class: '' })
    }
    for (let i = 1; i < dayToMoov; i++) {
        tab.unshift({ nb: ' ', class: 'noHover' })
    }
    return tab
}

const tmpEvents = [{ title: 'Town hall meeting', dateStart: 1640486400000, dateEnd: 1640569600000 },
{ title: 'Community gathering', dateStart: 1648684800000, dateEnd: 1648751200000 },
{ title: 'City council meeting', dateStart: 1655036800000, dateEnd: 1655081600000 },
{ title: 'Public forum', dateStart: 1661604800000, dateEnd: 1661659200000 },
{ title: 'Neighborhood meeting', dateStart: 1666022400000, dateEnd: 1666080000000 },
{ title: 'Town hall discussion', dateStart: 1676614400000, dateEnd: 1676694400000 },
{ title: 'Municipal meeting', dateStart: 1685772800000, dateEnd: 1685852400000 },
{ title: 'Local government meeting', dateStart: 1693758400000, dateEnd: 1693835200000 },
{ title: 'Community council meeting', dateStart: 1703305600000, dateEnd: 1703386800000 },
{ title: 'City hall meeting', dateStart: 1711678400000, dateEnd: 1711758400000 },
{ title: 'Town hall meeting', dateStart: 1693200000, dateEnd: 1693286400000 },
{ title: 'Community gathering', dateStart: 1704608000000, dateEnd: 1704780800000 },
{ title: 'City council meeting', dateStart: 1717440000000, dateEnd: 1717484800000 },
{ title: 'Public forum', dateStart: 1730240000000, dateEnd: 173030400000 },
{ title: 'Neighborhood meeting', dateStart: 1739840000000, dateEnd: 173990400000 },
{ title: 'Town hall discussion', dateStart: 1754144000000, dateEnd: 175422400000 },
{ title: 'Municipal meeting', dateStart: 1767232000000, dateEnd: 176731600000 },
{ title: 'Local government meeting', dateStart: 1781712000000, dateEnd: 178176800000 },
{ title: 'Community council meeting', dateStart: 179450400000, dateEnd: 179454800000 },
{ title: 'City hall meeting', dateStart: 1806912000000, dateEnd: 1806956800000 },
{ title: 'Town hall meeting', dateStart: 1819321600000, dateEnd: 1819398400000 },
{ title: 'Community gathering', dateStart: 1831724800000, dateEnd: 1831804800000 },
{ title: 'City council meeting', dateStart: 1845472000000, dateEnd: 1845516800000 },
{ title: 'Public forum', dateStart: 1858272000000, dateEnd: 185833600000 },
{ title: 'Neighborhood meeting', dateStart: 1867872000000, dateEnd: 186793600000 },
{ title: 'Town hall discussion', dateStart: 1882086400000, dateEnd: 1882166400000 },
{ title: 'Municipal meeting', dateStart: 1894982400000, dateEnd: 189504800000 },
{ title: 'Local government meeting', dateStart: 1909462400000, dateEnd: 190952800000 },
{ title: 'Community council meeting', dateStart: 192195200000, dateEnd: 192199600000 },
{ title: 'City hall meeting', dateStart: 1934361600000, dateEnd: 1934435200000 },
{ title: 'Town hall meeting', dateStart: 1946860800000, dateEnd: 1946934400000 },
{ title: 'Community gathering', dateStart: 1959260000000, dateEnd: 1959333600000 },
{ title: 'City council meeting', dateStart: 1972824000000, dateEnd: 1972868800000 },
{ title: 'Public forum', dateStart: 1985624000000, dateEnd: 1985680800000 },
{ title: 'Neighborhood meeting', dateStart: 1995224000000, dateEnd: 199528800000 },
{ title: 'Town hall discussion', dateStart: 2009527200000, dateEnd: 2009607200000 },
{ title: 'Municipal meeting', dateStart: 2022531200000, dateEnd: 202259200000 },
];


function getEvent(year, month) {
    let events = [];
    tmpEvents.forEach(function (el) {

        const elDate = new Date(el.dateStart)
        el.dateText = `${elDate.getDate()}-${elDate.getMonth()}-${elDate.getFullYear()}`
        if (elDate.getMonth() === month && elDate.getFullYear() === year)
            events.push(el)
    })
    return events
}


export default function Calendar() {
    const monthTab = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
    const dayTab = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']


    const date = new Date();
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [calendTab, setCalend] = useState(getMonthDays(year, month + 1));
    console.log(month)
    const [events, setEvents] = useState(getEvent(year, month + 1));


    console.log(events)
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
        console.log(month)
        setEvents(getEvent(tmpYear, tmpMonth + 1))
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