
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
  
    burger.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.classList.toggle("active");
    });
  });

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
