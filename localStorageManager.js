const localStorageManager = {
  // User login state
  isLoggedIn: function() {
    return localStorage.getItem('loggedIn') === 'true';
  },
  setLoggedIn: function(value) {
    localStorage.setItem('loggedIn', value ? 'true' : 'false');
  },
  logout: function() {
    localStorage.removeItem('loggedIn');
    alert('You have been logged out.');
  },

  // User credentials
  saveUserCredentials: function(name, email, password) {
    localStorage.setItem('savedName', name);
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', password);
  },
  getUserCredentials: function() {
    return {
      name: localStorage.getItem('savedName'),
      email: localStorage.getItem('savedEmail'),
      password: localStorage.getItem('savedPassword')
    };
  },

  // Cart items
  getCartItems: function() {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  },
  setCartItems: function(items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  },
  clearCart: function() {
    localStorage.removeItem('cartItems');
  }
};
