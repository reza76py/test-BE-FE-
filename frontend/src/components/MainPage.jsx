import React, {useState, useEffect} from "react";
import axios from "axios";


const MainPage = () => {
    const [message, setMessage]  = useState("");

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/message/")
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);
    return (
        <div>
            <h2>MainPage</h2>
            <p>{message}</p>
        </div>

    );
    
};

export default MainPage;