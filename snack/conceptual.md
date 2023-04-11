### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React router allows developers to handle client side routing on apps by mapping components  to links on single page React apps
- What is a single page application?
  A single page app  is a React web app that loads a single html and up-dates the page without fully reloading the page everytime 
- What are some differences between client side and server side routing?
  On the client side app  the clinet only needs to render the HTML which will have the JS and CSS attached while server siode would need to re-render and send it to the client, because of this client side also can render much faster than server-side 
- What are two ways of handling redirects with React Router? When would you use each?
  Redirect and History.push, redirect is used to get users directly from one route to another, history.push will get the user to the new route after either a form submission or some other user action
- What are two different ways to handle page-not-found user experiences using React Router? 
  Using a route without a path that renders a NotFound component, using redirect that also renders a NotFound component or a 404 page
- How do you grab URL parameters from within a component using React Router?
  You can grab  URL parameters using a usepParams hook to extract an object
- What is context in React? When would you use it?
  Context allows for datat to be passed down the component tree without manually passing down props, and allows components to share data without going through each level of the tree
- Describe some differences between class-based components and function components in React.
  Class-based components are more powerful and have more features and use a class that extends React.Component, while Function components are generally simpler, faster, and easier to read and write since hooks have been introduced 
- What are some of the problems that hooks were designed to solve?
  Hooks provide a simpler and more flexible way to manage state and behavior in components by solving complex component hierarchy, unnecessary re-renders, and confusing syntax