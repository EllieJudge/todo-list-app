What is React?

JS LIBRARY! Created by FB. Used for building UIs and front end apps.
By front end,means in the browser - client side instead of server side 1.24... ??

Often called a framework (behaves like one). Entire app view.

Why use it?
-with js A LOT more code, more difficult than using a framework
-easier to build intricate front end projects
-organised, self contained components with their own states
-React has Virtual DOM (updates only whats needed, so quicker)
-easier to use when working in teams

!IMPORTNANT!
Need to learn these first:
classes, destructuring, high order array methods (forEach, map, filter), arrow funcs, fetch API & Promises

State:
an object that determines how that component renders and behaves
can also have applicationlevel state by using state manager like Redux or Reacts own Context API...

Anatomy of a Component
class based vs functional

class based: life cycle, diff life cycle methods, holds states 


Class Post extends React.Component {
    state = {
        title:'Post One',
        body: 'This is my post'
    }

    render() {
        return {
            <div>
            <h3>{this.state.title}</h3>
            <p>{this.state.body}</p>
            </div>
        }
    }
}
-class called post, extends component class in react library
-render takes care of rendering whats on the page
-render method required life cycle?
-this returns jsx(what gets put on page)
-can have js expressions EMBEDDED directly in the markup.
-so here, we are displaying title and body from the state
-can create component state by creating object with diff key value pairs

index.html - output for application is the root id in here...
index.js - uses root as entry point for react, imports react lib,dom, and main app component. Then ReactDOM is rendering the app component through getElementById('root')

jsx-use className not class.

When we get started with react app, delete all the unnecessary code and files (logos, css/clean up app.js and html).

Create a new folder in src called components. Create a Todos.js in that (can copy app.js code and update). Then call (render?) through app.js <Todos /> 

Different components can have their own state. But often need state that multiple components can access. Need our todos to get fed into multiple components.. so he puts his todos in the main app.js's state.

-------------CONFUSION!!---------------
Ok so this is where I get confused...
-create todos in state in app.js (why, this makes no sense, why not create it in the todos file, hello? anyway..)
then call/render? this through the <Todos = {this.state.todos}>

but can also go into todos and get it from todos with props console.log(this.props.todos)... again, what is the point?

Solution...? So you pass things down to components from app's state with props?
- - - - - - - - - - - - - - - - - - - - 


Now need to output something to screen.
Need to loop through.
In react we use the .map method (high order array method)
Basically returns array from array, we are using it to loop through



COOOOOOOL!!!!!
Apparently previously installed add on..
Type RCE TAB and creates it for you! Nice.

Prop Types.
prop types are a validation for properties that a component should have. Can set the type and whether required or not.


Can store style in a variable and pass it into stuff.

Spread operator = ...

Random id generator npm install uuid - also very cool!!

Router - npm i react-router-dom 

Could use fetch api (regular js) but this dudeo likes using axios an htgp(??)library. npm i axios.


So, instead of having the Todos hard coded, manually in app.js, we can fetch them from somewhere else; 
CUT, bye bye >>  {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }

Simple, easy to use back end... 
https://jsonplaceholder.typicode.com
we are importing this /todos to replace our todos

Now we are adding a backend typicode thing we can delete previous code that used random id generator uuid

// import uuid from 'uuid'; 

//this was in our to do app
 const newTodo = {
    id: uuid.v4(), << this was when we were using a random id generator, commented out at the top :)
    title,
    completed: false
  }



































































