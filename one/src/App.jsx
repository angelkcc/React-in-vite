import "./myapp.css"
import styles from "./Header.module.css"
import Header from "./Header"

function App()
{
  let mystyle={
    color:'pink',
    fontSize:'55px'
  }
  return(
    <>
    <Header/>
    <h1 className="text-3xl">This is demo</h1>
    <h2 style={{color:'pink',background:'white'}}>Inline Css</h2>
    <h3 style={mystyle}>CSS in Object</h3>
    <h4 className="myh1">External CSS</h4>
    <h5 className={styles.header}>Header</h5>

    </>
  )
}
export default App