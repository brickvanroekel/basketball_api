import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation';
import React from 'react';
import StagesOverview from './components/stages/Stages';
import PremierLeague from './components/premierleague/PremierLeague';
import MatchAdd from './components/premierleague/matchAdd';

function App() {
  return (
    <>
      <Navigation/>
      <main className='mt-5'>
        <Routes>
          <Route path="/stages" element={<StagesOverview/>} />
          <Route path="/premierleague" element={<PremierLeague/>}/>
          <Route path="/premierleagueAdd" element={<MatchAdd/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
