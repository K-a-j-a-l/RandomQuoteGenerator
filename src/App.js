import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async() => {
        let arrayofQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random");
            console.log(data);
            arrayofQuotes = data.data;
        } catch (error) {
            console.log(error);
        }
        try {
            setQuote(arrayofQuotes.content);
            setAuthor(arrayofQuotes.author);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        quoteAPI();
    }, [])
    return ( <
        div className = "App" >

        <
        div className = "flex justify-center items-center min-h-screen p-6" >
        <
        div className = " p-4 max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
        <
        p className = "mb-3 text-gray-700 dark:text-gray-400" > { quote } <
        /p> <
        span className = "mb-3 text-gray-500" > -{ author } < /span> <
        button onClick = { quoteAPI }
        className = "m-3 block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >
        Next <
        /button>

        <
        /div> <
        /div> <
        /div>
    );
}

export default App;