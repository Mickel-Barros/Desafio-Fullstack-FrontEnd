import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Homepage'
import { LoginPage } from '../components/Login'
import { RegisterPage } from '../components/Register'
import { UserPage } from '../components/User'
const RoutesMain = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path="register" element={ <RegisterPage/> } />
            <Route path="/user/" element={ <UserPage/> } />
            <Route path="login" element={ <LoginPage/> } />
        </Routes>

    )

}

export default RoutesMain