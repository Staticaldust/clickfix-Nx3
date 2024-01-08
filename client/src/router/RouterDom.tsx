import { Route, Routes } from "react-router-dom"
import HomePage from "../components/home/HomePage"
import { App } from "../App"
import { User } from "../components/User"
import SignUp from "../components/sighUp/SighUp"

const RouterDom = () => {
    return (
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path="/user" element={<User />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default RouterDom