import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <nav class="nav space-around">
        <div>
            <a class="nav-header" href="#">The Sports Adda</a>
        </div>
        <div>
            <input type="text" placeholder="Find here" class="search">
        </div>
        <div class="nav-links margin-left">
           <a href="./Authentication/login.html">
            <button class="btn solid-btn submit">Login</button>  
        </a>
            <a class="nav-item" href="./CartManagement/cartManagement.html">
                <i class="nav-icon fa-solid fa-cart-shopping"></i>
            </a>
            <a class="nav-item" href="./Wishlist/wishlist.html">
                <i class="nav-icon fa-solid fa-heart"></i>
            </a>
        </div>
        </nav>

      <main class="flex-column">
        <div class="category-cards">

            <div class="category">
                <image class ="cat-image" src="./src/assets/images/bats.jpg" alt="Bats" />
                <a class = "cat-item" href="./ProductListing/productListing.html" target="_blank">Bats</a>
    
            </div>
            <div class="category">
                <img class ="cat-image" src="./src/assets/images/balls.jpg" alt="Bats" />
                <a class = "cat-item" href="./ProductListing/productListing.html" target="_blank">Balls</a>
    
            </div>
            <div class="category">
                <img class ="cat-image" src="./src/assets/images/stumps.jpg" alt="Bats" />
                <a class = "cat-item" href="./ProductListing/productListing.html" target="_blank">Stumps</a>

                
    
            </div>
            <div class="category">
                <img class ="cat-image" src="./src/assets/images/gloves.jpeg" alt="Bats" />
                <a class = "cat-item" href="./ProductListing/productListing.html" target="_blank">Gloves</a>
    
            </div>

        </div>
        
        <div class="flex-column flex-center margin-top">
            <h1 class="flex-center margin-top">Welcome to the Sports Adda</h1>
            <img class="home-logo flex-center" src="./src/assets/images/sportsadda.jpg" alt=""/>

            <h2>Deals of the Day</h2>
        </div>

        
        <div class="category-cards margin-top">
            <div class="new-arrivals">
                <img class ="deal-image" src="./src/assets/images/pads.jpg" alt="Bats"/>
                <div>
                    <h3>Available at 70% OFF</h3>
                    <a class = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank"><i class="fa-solid fa-share"></i> Pads</a>
                </div>    

            </div>

            <div class="new-arrivals">
                <img class ="deal-image" src="./src/assets/images/helmet.jpg" alt="Bats"/>
                <div>
                    <h3>Available at 50% OFF</h3>
                    <a class = "cat-item margin-top" href="./ProductListing/productListing.html" target="_blank"><i class="fa-solid fa-share"></i> Helmets</a>
                </div>
                
            </div>
            <div>

            </div>

        </div>

        </main>


        <script src="https://kit.fontawesome.com/bbba0f11e7.js " crossorigin="anonymous "></script>
    </div>
  );
}

export default App;
