import logo from './logo.svg';
import './App.css';

// Mengimpor komponen Playground yang sudah kita buat
import JsxPlayground from './jsx-and-components/JsxExample';
import ComponentPlayground from './jsx-and-components/ComponentExample';
import PropsAndStatePlayground from './props-and-state/PropsAndStateExample';
import EventHandlingPlayground from './event-handling/EventHandlingExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Basics I Playground Playgroundx
        </p>

        {/* Menampilkan JsxPlayground */}
        <div style={{ backgroundColor: 'white', color: 'black', margin: '20px', padding: '10px', borderRadius: '8px', textAlign: 'left' }}>
          <JsxPlayground />
        </div>

        {/* Menampilkan ComponentPlayground */}
        <div style={{ backgroundColor: 'white', color: 'black', margin: '20px', padding: '10px', borderRadius: '8px', textAlign: 'left' }}>
          <ComponentPlayground />
        </div>

        {/* Menampilkan PropsAndStatePlayground */}
        <div style={{ backgroundColor: 'white', color: 'black', margin: '20px', padding: '10px', borderRadius: '8px', textAlign: 'left' }}>
          {/* <PropsAndStatePlayground /> */}
        </div>

        {/* Menampilkan EventHandlingPlayground */}
        <div style={{ backgroundColor: 'white', color: 'black', margin: '20px', padding: '10px', borderRadius: '8px', textAlign: 'left' }}>
          {/* <EventHandlingPlayground /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
