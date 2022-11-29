import React, { FC, useEffect, useState } from 'react';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
      <ul>
        <li>
          <a className="navbar-brand" href="/home">Home</a>
          <a className="navbar-brand" href="/stages">Stages</a>
          <a className="navbar-brand" href="/premierleague">PremierLeague</a>
          <a className="navbar-brand" href="/premierleagueAdd">PremierLeagueAdd</a>


        </li>
      </ul>
    </nav>
    )
    
}
export default Navigation;