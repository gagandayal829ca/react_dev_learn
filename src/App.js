import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Auth from "./components/Auth";
import ShoppingLists from "./components/ShoppingList";
import ClickMe from "./components/ClickMe";

function App() {
  return (
    <div className="App">
      <h1>React Dev</h1>
      <Auth />
      <Button />
      <Profile />
      <ShoppingLists />
      <ClickMe />
      <ClickMe />
    </div>
  );
}

export default App;
