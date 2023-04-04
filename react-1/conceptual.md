### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a front-end JS developed by FaceBook, you would you is to build apps quickly and more easily than tradtional HTML,CSS,JS apps
- What is Babel?
    Babel is a tool used to convert ES2015 to backwards compatible JS
- What is JSX?
    JSX is an extention to React that allows developers to write in JS in an HTML-like syntax which makes creating UI components easier
- How is a Component created in React?
    A component is a reusable UI that can be used throughout the app
- What are some difference between state and props?
    State is used to changed within the component based on different events or interactions that happen while props do not change are passed from the parent component to another component to change how it should look or act
- What does "downward data flow" refer to in React?
    Downward data flow is when data is passed down from parent components to others as props but it cannot modified nor passed back to the parent component unless through a callback function 
- What is a controlled component?
    A controlled component is a form that is controlled by the React and its stored in the state
- What is an uncontrolled component?
    An uncontrolled component is a form controlled by the browsers stae and stored in the DOM 
- What is the purpose of the `key` prop when rendering a list of components?
    A key prop is a prop that will most likely change so that when the React renders it doesn't need to re-render every component over again if only one has changed
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    It can be a poor choice to use 'key' for an array because when React re-renders it can remove parts of the array or change the order and cause the code to have issues
- Describe useEffect.  What use cases is it used for in React components?
    UseEffect allows developers to perform side effects in components, after the component has rendered a callback function can be excuted to decided if it needs to re-render
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    UseRef returns a mutable ref object, but it does not cause the component to re-render because it is mutable and not part of the state nor props
- When would you use a ref? When wouldn't you use one?
    Refs are used to manipulate the DOM or to access component instances, you wouldn't want to use one for managing component states nor when updating the DOM often 
- What is a custom hook in React? When would you want to write one?
    A custom hook in React is a JavaScript function that uses one or more built-in React hooks, and/or other custom hooks, to provide a specific piece of functionality to one or more React components, you'd want to use oone for repeating complex components