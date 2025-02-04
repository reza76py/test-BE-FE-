import React, { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
    const [text, setText] = useState(""); // Store input value
    const [wordCount, setWordCount] = useState(null); // Store word count response

    const handleChange = (e) => {
        setText(e.target.value); // Update state on input change
    };

    useEffect(() => {
        if (text.trim() === "") {
            setWordCount(null); // Reset word count when input is empty
            return;
        }

        const delayRequest = setTimeout(() => {
            axios
                .post("http://127.0.0.1:8000/message/", { text })
                .then((res) => {
                    setWordCount(res.data.word_count);
                })
                .catch((err) => {
                    console.error(err);
                });
        }, 500); // Debounce: Wait 500ms after typing

        return () => clearTimeout(delayRequest); // Cleanup timeout
    }, [text]); // Trigger when `text` updates

    return (
        <div>
            <h2>MainPage</h2>
            <input type="text" onChange={handleChange} value={text} />
            {wordCount !== null && <p>Word Count: {wordCount}</p>}
        </div>
    );
};

export default MainPage;
