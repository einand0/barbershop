import './container.css'

function Container() {
    return (
        <div className='container'>
            <div className="name-wrapper" data-aos="zoom-in">
                <h1>
                    barber <span>shop</span>
                </h1>
            </div>

            <a href="#send-btn" data-aos="zoom-in" id="book-btn">book now</a>
        </div>
    )
}

export default Container