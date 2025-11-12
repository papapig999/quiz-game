import './styles.css';
import { initGame, startGame, playAgain, showLogin } from './game.js';

// Make functions globally available for HTML onclick attributes
window.startGame = startGame;
window.playAgain = playAgain;
window.showLogin = showLogin;

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  const loader = document.getElementById('loader');
  
  try {
    console.log('Starting game initialization...');
    // Initialize the game
    await initGame();
    console.log('Game initialization complete');
    
    // Hide loader
    if (loader) {
      loader.remove();
    }
  } catch (error) {
    console.error('Error initializing game:', error);
    if (loader) {
      loader.innerHTML = '<p>Error loading quiz. Please try again.</p>';
    }
    // Also show an alert for visibility
    alert('Error initializing game: ' + error.message);
  }
});