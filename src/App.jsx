import './App.css'
import { AuthProvider } from './Context/Authcontext'
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Signin from './component/Signin'
import Signout from './component/Signout'
import Private from './component/Private'
import ShowUsers from './component/ShowUsers'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' exact element={<Signin/>}/>
            <Route element={<Private/>}>
              <Route path='/private' element={<Signout/>}/>
            </Route>
            <Route element={<Private/>}>
              <Route path='/users' element={<ShowUsers/>}/>
            </Route>

          </Routes>
        </AuthProvider>   
      </BrowserRouter>
    </div>
  )
}

export default App
