import React, { useMemo} from 'react'
import bg from './img/bg.png'
import './styles/Layouts.css'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard'
import Income from './Components/Incomes/Income'
import Expenses from './Components/Expenses/Expenses'
import {useGlobalContext} from './context/globalContext'

function App() {
  const [active, setActive] = React.useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
          return <Dashboard/>
      case 2:
          return <Income /> 
      case 3:
          return <Expenses/>
      default: 
          return <Dashboard/>  
    }
  }
  
  const orbMemo = useMemo(() => {
    return <Orb/>
  },[])
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      {orbMemo}
      <div className="main-layout">
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </div>
    </div>
  );
}

export default App;
