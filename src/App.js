import { Route, Routes } from 'react-router-dom';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home/Home';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './components/Common/Loading/Loading';
import NotFounded from './components/Common/NotFounded/NotFounded';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
}, []);

    if (loading){
        return <Loading></Loading>
    }

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<NotFounded />}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
