// App.js
import React from 'react';
import SimpleJSX from './components/SimpleJSX';
import RecordsList from './components/RecordsList';
import ToggleElement from './components/ToggleElement';
import EnableDisableButton from './components/EnableDisableButton';
import TwoWayBinding from './components/TwoWayBinding';
import SumTwoNumbers from './components/SumTwoNumbers';
import AddTechnology from './components/AddTechnology';
import TaskDisplay from './components/TaskDisplay';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import './App.css';

function App() {
  return (
    <div className="container">
      <TaskDisplay />
      <h1>1. Display Simple JSX</h1>
      <SimpleJSX />
      <h1>2. Display an Array of Records on Screen</h1>
      <RecordsList />
      <h1>3. Show/Hide Element on Screen</h1>
      <ToggleElement />
      <h1>4. Enable/Disable a Button</h1>
      <EnableDisableButton />
      <h1>5. Two-Way Data Binding using Textbox</h1>
      <TwoWayBinding />
      <h1>6. Do Sum of Two Numbers</h1>
      <SumTwoNumbers />
      <h1>7. Dynamically Add Child Components (Tools List)</h1>
      <AddTechnology />
      <h1>8. Counter</h1>
      <Counter />
      <h1>9. Filter</h1>
      <SearchFilter />

    
    </div>
  );
}

export default App;
