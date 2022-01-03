
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import './assets/css/global.css';
import './assets/css/keyframes.css';
import './assets/css/normalize.css';
import { Layout } from "./components/Layout/Layout";
import { Contact } from "./modules/contact/screens/Contact";
import { Home } from "./modules/home/screens/Home";

export const App = () =>
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Layout>
    </BrowserRouter>