import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import MovieDetails from "./pages/components/MovieDetails"; 
import SeriesDetails from "./pages/components/SeriesDetails"; 
import axios from 'axios';

const App = () => {
    return ( 
        <div> 
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/movie/:id" exact element={<MovieDetails/>} />
                <Route path="/tv/:id" exact element={<SeriesDetails/>} />
            </Routes> 
        
        </div>
    );
};

export default App;
