import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Product Manager</h1>
      </header>
      <main className="app__main">
        <ProductManager />
      </main>
      <footer className="app__footer">
        <p>Nexup Frontend Challenge | YANG, Cristopher</p>
      </footer>
    </div>
  );
};

export default App;
