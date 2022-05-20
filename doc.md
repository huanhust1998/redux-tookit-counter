1. Create a Redux Store with configureStore.

- configureStore accepts a reducer function as a named argument.
- configureStore automatically sets up the store with good default settings.

2. Put a <Provider> around your <App> and pass the store as a prop.
3. Create a redux state slice.
   +> name.
   +> initialState.
   +> one or more reducer functions to define how the state can be updated.
   => Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
4. Add slice reducers to the Store
5. Use Redux state and actions in react components.
