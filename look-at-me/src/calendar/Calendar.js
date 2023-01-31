import './calendar.css'

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
        tab.push(i)
    }
    for (let i = 1; i < dayToMoov; i++) {
        tab.unshift(' ')
    }
    return tab
}


export default function Calendar() {
    const monthTab = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
    const dayTab = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    const calendTab = getMonthDays('2023', '01')

    const date = new Date();
    let month = date.getMonth()
    let year = date.getFullYear();

    

    return (
        <div className="my_calendar">
            <div className="main-container-wrapper">
                <header>
                    <button className="header__btn header__btn--left" title="Menu">
                        <svg className="icon" width="20px" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#fff" d="M0 0h20v2H0zM0 7h20v2H0zM0 14h20v2H0z" />
                        </svg>
                    </button>
                    <button className="header__btn header__btn--right" title="Add event">
                        <svg className="icon" width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#fff" d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" />
                        </svg>
                    </button>
                </header>
                <main>
                    <div className="calendar-container">
                        <div className="calendar-container__header">
                            <button className="calendar-container__btn calendar-container__btn--left" title="Previous">
                                <i className="icon ion-ios-arrow-back"></i>
                            </button>
                            <h2 className="calendar-container__title">{monthTab[month]} {year}</h2>
                            <button className="calendar-container__btn calendar-container__btn--right" title="Next">
                                <i className="icon ion-ios-arrow-forward"></i>
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
                                        return <div key={i} className="calendar-table__col" >
                                            <div className={`calendar-table__item ${object === ' ' ? 'noHover' : ''}`}>
                                                <span>{object}</span>
                                            </div>
                                        </div>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events-container">
                        <span className="events__title">Upcoming events this month</span>
                        <ul className="events__list">
                            <li className="events__item">
                                <div className="events__item--left">
                                    <span className="events__name">Town hall meeting</span>
                                    <span className="events__date">Oct 5</span>
                                </div>
                                <span className="events__tag">16:00</span>
                            </li>
                            <li className="events__item">
                                <div className="events__item--left">
                                    <span className="events__name">Meet with George</span>
                                    <span className="events__date">Oct 7</span>
                                </div>
                                <span className="events__tag">10:00</span>
                            </li>
                            <li className="events__item">
                                <div className="events__item--left">
                                    <span className="events__name">Vacation!!!</span>
                                    <span className="events__date">Oct 16 - Oct 18</span>
                                </div>
                                <span className="events__tag events__tag--highlighted">All day</span>
                            </li>
                            <li className="events__item">
                                <div className="events__item--left">
                                    <span className="events__name">Visit Grandma</span>
                                    <span className="events__date">Oct 27 - Oct 28</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}