
const Blog = () => {
    return (
        <div className="my-20 md:m-20">
            <div className="mb-10">
                <h1 className="text-2xl mb-8">1. What is the purpose of react-router?</h1>
                <p className="text-sm">
                    Answer:  In a traditional multi-page web application, navigating between pages is done by requesting different URLs from the server, and the server responds with entirely new HTML pages. However, in a single-page application, the server sends a single HTML page containing the necessary JavaScript, and all further interactions and changes in the UI are handled on the client-side without full page reloads.
                    The main purposes of React Router are:
                    <br></br> <br />
                    i. Client-side Routing: React Router allows you to define different routes in your application, associating each route with a specific React component. When the user navigates to a particular URL, React Router dynamically renders the corresponding React component on the page without a full page refresh. This provides a smoother user experience, as the page doesn't need to be reloaded for each route change.
                    <br /> <br />
                    ii. Nested Routing: React Router supports nested routes, meaning you can have components that render within other components, each having their own set of routes. This allows for more granular control over the UI and better organization of components.
                    <br /> <br />
                    iii. URL Manipulation: React Router provides tools for programmatically changing the URL without causing a full page reload. This is useful for scenarios like redirection after form submissions or controlling the URL based on user interactions.
                </p>
            </div>

            <div className="mb-10">
                <h1 className="text-2xl mb-8">2. How does context API work?</h1>
                <p className="text-sm">The Context API in React allows you to create a shared data store, known as "context," that can be accessed by any component within a specific subtree. It simplifies the process of passing data between components without the need for manual prop drilling. To use the Context API, you first create a context using React.createContext(), which provides a Provider component to wrap the part of the component tree where the data should be accessible. The Provider passes the data through its value prop, and any component within its subtree can consume this data using the Consumer component or the useContext hook. This approach is particularly useful for managing global state and avoiding the complexities of prop passing, making it easier to maintain and organize complex React applications.</p>
            </div>
            <div>
                <h1 className="text-2xl mb-8">3. Explain React useRef Hook</h1>
                <p className="text sm">Reacts useRef Hook is a powerful tool that enables developers to create mutable references in functional components. Unlike state variables, useRef does not trigger re-renders when its value changes, making it ideal for storing values that don't impact the component's visual output. The most common use case for useRef is to access and manipulate DOM elements directly. By attaching a ref to a DOM element, you can easily interact with it through the current property of the ref. This is particularly useful for handling focus, managing input selections, or performing imperative DOM operations. Additionally, useRef can be employed to maintain previous values or keep track of any mutable data within the component without triggering re-renders. By leveraging its ability to persist data across renders, React developers can optimize their applications and improve performance. Overall, useRef provides a convenient way to work with mutable data in a functional, declarative manner, enhancing the flexibility and efficiency of React components.</p>
            </div>
        </div>
    );
};

export default Blog;