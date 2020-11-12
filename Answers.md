# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS is a library that let's you build scaleable apps using components.
1. What does it mean to think in react?
    It's a methodology when laying out your application. You start with the html prototype and you parse out the internal groups into their own elements as you go.
1. Describe state.
    State is a variable that is kept in the container with mutability.
1. Describe props.
    Props are values that are passed to another component from its parent component. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    Side effects are functions that fire when the component is rendered to the DOM. To watch a prop or state you would write the useEffect like this
        useEffect(()=> {

        }, [prop or state goes here])
