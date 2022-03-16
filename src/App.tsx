import {Routes, Route} from "react-router-dom";
import './App.scss';
import Container from "./app/containers/root/Container";
import MainPage from "./app/pages/main/Main";
import NotFound from "./app/pages/notFound/NotFound";
import Overlay from "./app/components/Modals/Builder";
import RecyclingPoints from "./app/pages/recyclingPoints/RecyclingPoints";

export default () => (
    <div className="App">
        <Overlay />
        <Routes>
            <Route path="/" element={<Container />} >
                <Route index element={<MainPage />} />
                <Route path="points" element={<RecyclingPoints />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </div>
)
