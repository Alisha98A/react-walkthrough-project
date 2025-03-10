import React from "react";

// Vanilla Javascript function
//function FunctionalGreeting() {
//  return <h1>Hello from React!</h1>
//}

const FunctionalGreetingWithProps = (props) => {
console.log(props);
return <h1>Hello, {props.greeting} {props.name}, you are {props.age} years old </h1>;
}

export default FunctionalGreetingWithProps;