import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-10 px-20'>
                <h1 className='font-bold'>State Vs Props</h1>
                <article>
                    <p>
                        state: State is managed within the component. State can be changed(mutable).State can be accessed using the use state hooks in functional components and in-class components can be accessed using this State. State changes can be asynchronous.State is controlled by react components.State can used to display changes with the component
                    </p>
                    <p>
                        Props: Props gets passed to the component. Props are read only and cannot be changed (immutable). Props can be accessed in functional component using props parameter and in-class component, props can the accessed using this props. Props are read only. Props are controlled by whoever renders the components. Props are used to communicate between components
                    </p>
                </article>
                <h1 className='font-bold my-5'>How useState Works </h1>
                <article>
                    <p>
                        React is a javascript library it use for web development. useState is an react hook. the use state hook allows us to track state in a function component. to use the useState hook. you must import it from the react library also you must invoke it inside a react component
                    </p>
                </article>
                <h1 className='font-bold my-5'>UseEffect </h1>
                <article>
                    <p>
                        useEffect is a hook in React that allows you to perform side effects in your functional components. Side effects can include things like fetching data from a server, manipulating the DOM, or setting up event listeners. <br />

                        Manipulating the DOM: You can use useEffect to manipulate the DOM by adding or removing elements, changing the styles of elements, or animating elements. <br />

                        Setting up event listeners: You can use useEffect to set up event listeners for things like clicks, key presses, or scrolling. <br />

                        Cleaning up: You can use useEffect to clean up after your component by removing event listeners, clearing intervals or timeouts, or canceling subscriptions. <br />

                    </p>
                </article>
                <h1 className='font-bold my-5'>How does React Work </h1>
                <article>
                    <p>
                    React uses a virtual DOM (Document Object Model) to represent the state of the UI.  that instead of manipulating the actual DOM directly, React creates a virtual representation of it. and then updates the real DOM based on any changes to the virtual DOM <br />

                    react uses a one-way data flow, which means that data flows down from a parent component to its children through props. When the state of a parent component changes, it will re-render all of its children components, passing down any new props as needed. <br />

                    When a component's state changes, React will update the virtual DOM and then compare it to the previous virtual DOM to find any differences. It will then only update the parts of the real DOM that need to be updated, instead of re-rendering the entire page. <br />
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blog;