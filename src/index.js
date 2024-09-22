import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];

/* 
    1. The name of components ALWAYS must start with an uppercase letter 
    2. They ALWAYS need to return some markup. 
*/
function App() {
    return (
        <div className='container'>
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
        </div>
    );
}

function Header() {
  return (
    <header className='header'> 
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  // Next, we're going to use a React Element: <></>
  /*Use fragments when you need to return multiple elements without adding innecessary nodes on the DOM. It's a common practice and recommended in ReactJS to mantain clean code and optimize the DOM */
  

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment key="LOL">
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
          </ul>
        </React.Fragment>
      ) : <p>We're still working on our menu, please come back later</p>}
     
      { /* <Pizza name="Pizza Spinacci" 
      ingredient="Tomato, mozarella, spinach, and rocotta cheese" 
      photoName="pizzas/spinaci.jpg" 
      price={100}></Pizza>

      <Pizza 
      name="Pizza Funghi" 
      ingredients="Tomato, mushrooms" 
      price={10} 
      photoName="pizzas/funghi.jpg"></Pizza> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  if(pizzaObj.soldOut) return null;

  return (
      <li className='pizza'>
          <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.price + 3}</span>
          </div>
      </li>
  );
}

function Footer() {
  //return React.createElement('footer', null, "We're currently open");

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  
  //if(hour >= openHour && hour <= closeHour) alert("We're currently open!"); else alert ("Sorry, we're closed");
  
  /*
  if(!isOpen) return (
    <p>CLOSED</p>
  );*/

  return (
    <footer className='footer'>
      {isOpen ? (<Order closeHour={closeHour} openHour={openHour}/>) : <p>We're happy to welcome you between {openHour}:00 hrs and {closeHour}:00 hrs</p>}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>We're open from {openHour}:00 hrs until {closeHour}:00 hrs. Come visit us or order online</p>
      <button className='btn'>Order Here!</button>
    </div>
  );
}


// Rendering the root in the DOM (React v18)
const root = ReactDOM.createRoot(document.getElementById('root'));

/*The only thing that React.StrictMode does is that during development, it will render all components twice in order to find certain bugs. And also, React will check if we're using outdated parts of the React API.*/
root.render(
    <React.StrictMode> 
        <App /> 
    </React.StrictMode>
);

// React before 18
//React.render(<App />);