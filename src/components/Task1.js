import React from 'react'


function Task1() {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task1</h1>
        <h1>Introduction to useEffect in React</h1>

<p>
  The useEffect Hook is a fundamental tool in React functional components for managing
  <strong>side effects</strong>. Side effects are any interactions your component has with
  the outside world or anything that isn't directly related to rendering the UI based on
  props and state. Common examples include data fetching, setting up subscriptions,
  timers, and directly manipulating the DOM.
</p>

<h2>Why is useEffect used?</h2>

<p>
  Functional components are designed to be pure functions, meaning given the same inputs,
  they should always return the same output without causing any observable changes outside
  of the component itself. Side effects break this purity.
</p>

<p>
  useEffect provides a way to perform these side effects in a controlled and predictable
  manner within your functional components. It essentially bridges the gap between the
  declarative nature of React's rendering and the imperative world of side effects.
</p>

<h2>Key benefits of using useEffect:</h2>

<ul style={{listStyleType:"none"}}>
  <li>
    <strong>Lifecycle Management:</strong> It consolidates the logic for component lifecycle
    events (like mounting, updating, and unmounting) into a single Hook.
  </li>
  <li>
    <strong>Separation of Concerns:</strong> It helps to separate the rendering logic from the
    side effect logic, making your components cleaner and easier to understand.
  </li>
  <li>
    <strong>Cleanup:</strong> It provides a mechanism to clean up resources created by your
    effects (e.g., clearing timers, unsubscribing from events) to prevent memory leaks
    and unexpected behavior.
  </li>
  <li>
    <strong>Controlled Execution:</strong> You can control when your effects run based on
    changes to specific values (dependencies), ensuring they only execute when necessary.
  </li>
</ul>

<p>
  In essence, useEffect allows you to "hook into" the lifecycle of your functional
  component and perform actions that go beyond simply rendering JSX, ensuring these
  actions are managed correctly throughout the component's existence.
</p>
    </div>
  )
}

export default Task1