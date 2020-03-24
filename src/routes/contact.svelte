<form name="contact" action="/contacted" method="POST" data-netlify="true">
    <label>
        <span>Where can I reach you ?</span>
        <input type="email" name="email" required>
    </label>
    <label>
        <span>What is this about ?</span>
        <input list="contact-options" name="subject">
        <datalist id="contact-options">
            <option>Blabla option 1</option>
            <option>Blabla option 1</option>
            <option>Blabla option 1</option>
        </datalist>
    </label>
    <label>
        <span>Write here your message</span>
        <textarea name="body"></textarea>
    </label>
    <div>
        <button type="submit">Send</button>
    </div>
</form>