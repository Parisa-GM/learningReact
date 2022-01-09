import React from 'react';
import Header from './component/Header';
import Menu from './component/Menu';


const handleClick = (e : React.MouseEvent<HTMLElement>) => {
  console.log('here');
  e.preventDefault();
};
function App() {
  return (
    <div className="App">
      <h1>ff</h1>
      <Header title='آموزش  React'></Header>
      <Menu onShow={handleClick}/>
    </div>
  );
}

export default App;
