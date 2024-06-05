import {useState} from "react";


function FormComponent() {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    function submitForm(e: any) {
        e.preventDefault();
        alert("Sending this email from " + email + " with content: " + content);
    }

    return (
        <div className="form-component">
            <form onSubmit={submitForm}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default FormComponent;