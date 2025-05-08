import Navbar from "./component/nav/Navbar"
import Posts from "./component/posts/Posts"


function App() {


  return (
    <>
    <Navbar/>
    <div style={{display:"flex"}}>
    <div style={{width :"70%"}}>
    <Posts userName="اكادميه ترميز"
    content="اكادميه مخصصه لتعليم  البرمجه بمختلف لغاتها وتقنياتها">
      <h2>20</h2>
    </Posts>
    <Posts userName="hello world" content="this is the hello world article"/>
    <Posts userName="post 3"
      content="this is the body of post 3"
    />
    </div>
    </div>
    </>
  )
}

export default App
