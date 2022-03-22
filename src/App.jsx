import "./App.css";

import logo from "./logo.png";

function App() {
  return (
    <div>
      <nav className="nav space-around">
        <div>
            <a className="nav-header" href="#">The Sports Adda</a>
        </div>
        <div>
            <input type="text" placeholder="Find here" className="search" />
        </div>
        <div className="nav-links margin-left">
           <a href="./Authentication/login.html">
            <button className="btn solid-btn submit">Login</button>  
        </a>
            <a className="nav-item" href="./CartManagement/cartManagement.html">
                <i className="nav-icon fa-solid fa-cart-shopping"></i>
            </a>
            <a className="nav-item" href="./Wishlist/wishlist.html">
                <i className="nav-icon fa-solid fa-heart"></i>
            </a>
        </div>
        </nav>

      <main className="flex-column">
        <div className="category-cards">

            <div className="category">
                <img className ="cat-image" src="./assets/images/bats.jpg" alt="Bats" />
                <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Bats</a>
    
            </div>
            <div className="category">
                <img className ="cat-image" src="./assets/images/balls.jpg" alt="Bats" />
                <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Balls</a>
    
            </div>
            <div className="category">
                <img className ="cat-image" src="./assets/images/stumps.jpg" alt="Bats" />
                <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Stumps</a>

                
    
            </div>
            <div className="category">
                <img className ="cat-image" src="./assets/images/gloves.jpeg" alt="Bats" />
                <a className = "cat-item" href="./ProductListing/productListing.html" target="_blank">Gloves</a>
    
            </div>

        </div>
        
        <div className="flex-column flex-center margin-top">
            <h1 className="flex-center margin-top">Welcome to the Sports Adda</h1>
            <img className="home-logo flex-center" src="./assets/images/sportsadda.jpg" alt=""/>

            <h2>Deals of the Day</h2>
        </div>

        
        <div className="category-cards margin">
            <div className="new-arrivals">
                <img className ="deal-image" src="./assets/images/pads.jpg" alt="Bats"/>
                <div>
                    <h3>Available at 70% OFF</h3>
                    <a className = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank"><i className="fa-solid fa-share"></i> Pads</a>
                </div>    

            </div>

            <div className="new-arrivals">
                <img className ="deal-image" src="./assets/images/helmet.jpg" alt="Bats"/>
                <div>
                    <h3>Available at 50% OFF</h3>
                    <a className = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank"><i className="fa-solid fa-share"></i> Helmets</a>
                </div>
                
            </div>
            <div>

            </div>

        </div>

        </main>


        
    </div>
  );
}

export default App;
