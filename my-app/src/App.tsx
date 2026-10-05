import './App.css';
import { Button } from './components/Button/Button';
import { User } from './components/User/User';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <header className="header">
        <User username="Artem Malkin" />
      </header>
      <main className="main">
        <h1>Buttons</h1>
        <Button content="Primary" variant="primary" onClick={handleClick} />
        <Button content="Secondary" variant="secondary" onClick={handleClick} />
        <Button
          content="Secondary 2"
          variant="secondary2"
          isActive
          onClick={handleClick}
        />
        <Button
          content="Primary"
          variant="primary"
          isActive
          onClick={() => {
            console.log('not active');
          }}
        />
      </main>
      <footer className="footer">footer</footer>
    </>
  );
}

export default App;
