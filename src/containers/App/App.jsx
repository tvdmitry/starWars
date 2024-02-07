import './App.module.css';
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/people'>People</NavLink>

                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/people' element={<PeoplePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
