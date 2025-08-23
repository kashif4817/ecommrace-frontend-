import { toast,ToastContainer } from 'react-toastify'
import NavRoutes from './routes/NavRoutes'
import New from './pages/new register/New'
const App = () => {
  return (
    <div>
      {/* <New /> */}
      <NavRoutes />
      <ToastContainer autoClose='1000' />
    </div>
  )
}

export default App