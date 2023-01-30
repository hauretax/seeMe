import './calendar.css'

export default function Calendar() {
    const monthTab = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
    const dayTab = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    const calendTab = [26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const date = new Date();
    let month = date.getMonth()
    let year = date.getFullYear();

    function getFirstMonthDay(dateString) {
        var date = new Date(dateString);
        date.setDate(1);
        return date.getDay();
    }
    console.log(getFirstMonthDay("2023/01/20", 12))

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
                                    <div className="calendar-table__row">
                                        {dayTab.map(function (object, i) {
                                            return <div key={i} className="calendar-table__col" >{object[0]}</div>;
                                        })}

                                    </div>
                                </div>
                                <div className="calendar-table__body">
                                    {calendTab.map(function (object, i) {
                                        return <div key={i} className="calendar-table__col" >{object}</div>;
                                    })}

                                    {/* <div className="calendar-table__row">
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>30</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__today">
                                            <div className="calendar-table__item">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>3</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>4</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event">
                                            <div className="calendar-table__item">
                                                <span>5</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>6</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col calendar-table__event">
                                            <div className="calendar-table__item">
                                                <span>7</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>8</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>9</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>10</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>11</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>12</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>13</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>14</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>15</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                                            <div className="calendar-table__item">
                                                <span>16</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long">
                                            <div className="calendar-table__item">
                                                <span>17</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                                            <div className="calendar-table__item">
                                                <span>18</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>19</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>21</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>22</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>23</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>24</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>25</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>26</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--start">
                                            <div className="calendar-table__item">
                                                <span>27</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-table__row">
                                        <div className="calendar-table__col calendar-table__event calendar-table__event--long calendar-table__event--end">
                                            <div className="calendar-table__item">
                                                <span>28</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>29</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>30</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col">
                                            <div className="calendar-table__item">
                                                <span>31</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__event calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div className="calendar-table__col calendar-table__inactive">
                                            <div className="calendar-table__item">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div> */}
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