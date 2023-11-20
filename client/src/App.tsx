import React from 'react';
import './App.css';
import Container from './components/Container';

function App() {

  const appTitle = "Employee Product Perks Program",
    logo = "../public/logo.png",
    user = {
      firstName: 'Nagaraju',
      lastName: 'Oggu',
      role: 'Admin',
      address: {},
      pointsPerMonth: 50,
      perks:
      {
        january: {
          availablePoints: 30,
          totalPoints: 50,
        },
        april: {
          availablePoints: 10,
          totalPoints: 50,
        },
        December: {
          availablePoints: 0,
          totalPoints: 50,
        }
      }
    };

  return (
    <div className="App">
      <Container title={appTitle} logo={logo} user={user} />
    </div>
  );
}

export default App;
