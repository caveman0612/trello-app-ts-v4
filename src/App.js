import "./App.css";
import Body from "./routes/body/Body";
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
    </div>
  );
}

export default App;
