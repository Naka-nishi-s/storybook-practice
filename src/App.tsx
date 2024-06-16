import "./App.css";
import Button from "./component/button/Button";
import { Danger, PrimaryLarge } from "./component/button/Button.stories";

function App() {
  return (
    <div>
      <Button {...PrimaryLarge.args}>ボタン</Button>
      <Button {...Danger.args}>ボタン</Button>
    </div>
  );
}

export default App;
