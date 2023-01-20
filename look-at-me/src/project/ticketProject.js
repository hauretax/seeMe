import './ticketProject.css'

export default function TicketProject() {
    return (
        <div className="ticketProject">
            <div className="ticket_title">
                <div>
                    <h1 className='ticket_project'>ticket</h1>
                    <div className='last_update'>22 fevrirer 2022</div>
                </div>
            </div>
            <div>Orci varius natoque penatibus et magnis dis parturient montes.   .</div>
            <div className='ticket_project_bottom'>
                <div className="tags">
                    <h2 className='ticket_project'>keyword</h2>
                    <span>word</span><span>random</span>
                </div>
                <div className="tags">
                    <h2 className='ticket_project'>links</h2>
                    <a href="https://github.com/hauretax" > le repos </a>
                </div>
            </div>
        </div>
    )
}