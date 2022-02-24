import {Routes, Route} from "react-router-dom";
import './App.scss';
import Container from "./app/containers/root/Container";
import MainPage from "./app/pages/main/Main";
import NotFound from "./app/pages/notFound/NotFound";

export default () => (
    <div className="App">
        <Routes>
            <Route path="/" element={<Container />} >
                <Route index element={<MainPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </div>
)
