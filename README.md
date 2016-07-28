# react-redux-helloworld
- Run gulp while editing my stuff so that build folder is properly edited
- You have to get the path of the index.html in build folder and copy and paste that into browser to see.

== React (or the View layer)
- React is completely optional (Redux does NOT depend on React)
- Redux canonically used with React
- Separate libraries help connect the two: react-redux (which gives us provider and connect).  We need to connect our redux store with react components

** VERY VERY IMPORTANT, THE ROUGH VIEW OF REACT, REDUX **
- you have a view that gets data from store. when you do something (i.e. complete a task) triggers a dispatch that our complete task returns an action that we've completed a task, action gets passed to reducer which modifies the state, and state goes back into the store and the store notifies everybody that's connected that there's a new state, that new state gets turned into props and props go to our view and renders the view.