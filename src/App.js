import React from 'react';
import './App.css';

function Header(props){
  return(
      <header>
        <h1>{props.name}'s Kitchen</h1>
      </header>
  );
}

function Main(props){
    return(
      <section>
          We have every type of dish!
          <ul style={{textAlign : "left"}}>
              {props.dishes.map(
                  (dish) => <li key={dish.toString()}>{dish}</li>
              )}
          </ul>
      </section>
    );
}

function Footer(props){
    return(
        <p>
            {props.year} CopyRights reserved
        </p>
    );
}

const dishes = [
    "Mac and cheese",
    "Salmon",
    "BBQ Chicken",
    "Rice"
];


function App() {
  return (
    <div className="App">
        <Header name="Iqbal"/>
        <Main dishes={dishes}/>
      <Footer year={new Date().getFullYear().toString()}/>
    </div>
  );
}

export default App;
