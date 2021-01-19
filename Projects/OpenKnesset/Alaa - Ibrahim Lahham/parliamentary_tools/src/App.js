import './App.css';
import React from 'react';

//components
import Cards from './components/Cards.js';

const tools = getCardsFromDataBase();

function App() {
  return (
    <div className='App'>
      <header id='app-header' class='container App-header'>
        <div class='row'>
          <div id='logo' class='span4 clearfix'>
            <h1><a href='/'><img src='https://oknesset.org/static/img/oknesset-logo.png' alt='oknesset-logo' /><span>כנסת פתוחה</span></a></h1>
          </div>
        </div>

        <ul class='nav nav-pills'>
          <li id='nav-parties'><a href='/members/index.html'>ח'כים וסיעות</a></li>
          <li id='nav-committees'><a href='/committees/index.html'>ועדות</a></li>
        </ul>
      </header>

      <Cards tools={tools} />

    </div>
  );
}

export default App;

function getCardsFromDataBase() {
  return [
    {
      title: "שאילה רגילה",
      content: "שאלה לשר על עניין שהתחום תפקדיו ,אותה מפנה חבר כנסת , שאינו שר או סגן שר . התשובה לשאילתה תינתן במליאת הכנסת . על השר להשיב תוך 21 ימים ."
    },
    {
      title: "נאום בן דקה",
      content: "נאום של חבר כנסת , בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו'ר הכנסת או סגן יו'ר הכנסת המנהלים את הישיבה בפועל)"
    },
    {
      title: "כינוס הכנסת בזמן הפגרה",
      content: "הגשת דרישה ליו'ר הכנסת על ידי 25 ח'כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום"
    }
  ];
}