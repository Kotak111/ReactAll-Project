import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./component/layout/Header"
import Footer from "./component/layout/Footer"
import Adduser from "./component/pages/Adduser"
import Showuser from "./component/pages/Showuser"
import Updateuser from "./component/pages/Updateuser"
import Home from "./component/pages/Home"
import Counter from "./component/pages/Counter"
import AdminProject from "./component/pages/AdminProject"
import SingleProduct from "./component/pages/SingleProduct"
import ToolkitCounter from "./component/pages/ToolkitCounter"
import InsertUser from "./Firebase/pages/InsertUser"
import ViewUser from "./Firebase/pages/ViewUser"
import SingleUser from "./Firebase/pages/SingleUser"
import EditUser from "./Firebase/pages/EditUser"
import SignUp from "./Authentication/SignUp"
import Login from "./Authentication/Login"
import SignOut from "./Authentication/SignOut"
import GoogleUth from "./Authentication/GoogleUth"
import Sucees from "./Authentication/Sucees"

function App() {
      return(
        <>
       <Router>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/adduser"} element={<Adduser/>}></Route>
          <Route path={"/showuser/:id"} element={<Showuser/>}></Route>
          <Route path={"/updateuser/:id"} element={<Updateuser/>}></Route>
          <Route path={"/counter"} element={<Counter/>}></Route>
          <Route path={"/admin"} element={<AdminProject/>}></Route>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
          <Route path="/tool" element={<ToolkitCounter/>}></Route>
          <Route path="/insert" element={<InsertUser/>}></Route>
          <Route path="/view" element={<ViewUser/>}></Route>
          <Route path="/singleuser/:id" element={<SingleUser/>}></Route>
          <Route path="/edit/:id" element={<EditUser/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<SignOut/>}></Route>
          <Route path="/google" element={<GoogleUth/>}></Route>
          <Route path="/success" element={<Sucees/>}></Route>



        </Routes>
        <Footer/>
       </Router>

        </>
      )
}

export default App
