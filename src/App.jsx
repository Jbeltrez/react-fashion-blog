import './App.css'

import React from "react";
import "./App.css"; 

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>

        {/* Navigation */}
        <nav aria-label="Main Navigation" role="navigation">
          <ul className="main-nav">
            <li><a href="#">Women's</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">On the Street</a></li>
            <li><a href="#">The Catwalk</a></li>
            <li><a href="#">AdWatch</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <article>
          <p className="date">11/12/20</p>
          <h3>On the Street in Brooklyn</h3>
          <img src="/blog-image-1.jpg" alt="A stylish person walking in Brooklyn" />
          <p>
            <span className="dropcap">C</span>ray ipsum, dolor sit amet consectetur adipiscing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam...
          </p>
          <a href="#" className="continue">Continues ...</a>
        </article>

        <article>
          <p className="date">11/11/20</p>
          <h3>Vintage in Vogue</h3>
          <img src="/blog-image-2.jpg" alt="A stylish group of people in vintage fashion" />
          <p>
            <span className="dropcap">S</span>elfies sunt, dolor sit amet consectetur adipiscing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi...
          </p>
          <a href="#" className="continue">Continues ...</a>
        </article>
      </main>

      {/* Footer */}
      <footer>
        <nav aria-label="Footer Navigation">
          <ul className="footer-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Women's</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">On the Street</a></li>
            <li><a href="#">The Catwalk</a></li>
            <li><a href="#">AdWatch</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tips</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
      </footer>
    </div>
  );
}

export default App;
