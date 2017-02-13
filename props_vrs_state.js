

// Props

* Way of passing data from parent to child

* Manage data from a single location and construct UI based on that data

* Props are immutable

* Faster performance, preferred way of handling data



// State

* Reserved only for interactivity.
   To make UI interactive, need to be able to trigger changes to underlying data,
   this is done with state.

* State exists only inside individual components,
  once it is passed down into another component, it becomes props
  for that component / like a private snapshot of a component

* State is mutable

* use setState() to change state, is async and allows a callback

Is it props or state ? 

1. Is it passed in from a parent via props? If so, it probably isn't state.
2. Does it remain unchanged over time? If so, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it isn't state.


* Data flow is one-way down the component hierarchy
  - Data flow can be inverse by using callbacks