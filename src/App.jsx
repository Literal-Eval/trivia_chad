import Home from "./components/home/Home";
import QuestionContextProvider from "./context/QuestionContextProvider";
import "./style.css";

const App = () => {
    return (
        <QuestionContextProvider>
            <Home></Home>
        </QuestionContextProvider>
    );
};

export default App;
