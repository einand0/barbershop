import './book.css'

function Book() {
    return (
        <div className="book-wrapper">
            <div className="book-infos">
                {/* <h1>
                    BOOK HERE
                </h1> */}

                <form action="">
                    <fieldset>
                        <legend>Book here</legend>

                        <label htmlFor="name" className="label">Name:</label>
                        <input type="text" id="name" name="name"  />

                        <label htmlFor="email" className="label">E-mail:</label>
                        <input type="email" id="email" name="email" />


                        <label for="phone" className="label">Phone number:</label>
                        <input type="tel" id="phone" name="cel-phone" required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="XX XXXXX-XXXX" />

                        <label for="date" className="label">Date:</label>
                        <input type='date' id='date' name='book-date'></input>


                        <label for="hour" className="label">Hour:</label>
                        <input type="time" id="hour" name="book-hour" required></input>

                        <button type="submit" id="send-btn">send</button>

                    </fieldset>
                </form>
            </div>

            <div className="image-book" />

        </div>

    )
}

export default Book