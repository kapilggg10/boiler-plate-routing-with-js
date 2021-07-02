import Home from './views/Home.js';
import Products from './views/Products.js';
import Contact from './views/Contact.js';

// To use history in routing
const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  // listing of all routes
  const routes = [
    {
      path: '/',
      name: 'Home',
      view: Home
    },
    {
      path: '/products',
      name: 'Products',
      view: Products
    },
    {
      path: '/contact-us',
      name: 'Contact',
      view: Contact
    }
  ];

  // Test each route for potential match
  let matchedRoute = routes.find(route => {
    return location.pathname === route.path;
  })

  if (!matchedRoute) {
    // default route to home
    matchedRoute = {
      ...routes[0]
    };
  }

  // create instace of view of selected route
  const view = new matchedRoute.view();

  // update html of app view
  document.querySelector('#app').innerHTML = await view.getHtml();
}

document.addEventListener('popstate', router);

// prevent default behaviour of anchor href and use history method to
// avoid unnecessary reloads
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
})