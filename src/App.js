import "./App.css";
// import AddTodoForm from "./components/AddToDoForm";
// import TodoList from "./components/ToDoList";
// import TotalCompleteItems from "./components/TotalCompleteItems";
import Body from "./routes/body/Body";
// import Footer from "./routes/Footer";
import Header from "./routes/Header";

function App() {
  return (
    // <div className="container bg-white p-4 mt-5">
    //   <h1>My Todo List</h1>
    //   <AddTodoForm />
    //   <TodoList />
    //   <TotalCompleteItems />
    // </div>
    <div className="App">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
