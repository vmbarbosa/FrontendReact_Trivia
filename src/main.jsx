import ReactDOM from 'react-dom/client'
import Fruta from './components/Fruta'

const root = document.getElementById('root')
//Estatal


ReactDOM.createRoot(root).render(
<div>
  <Fruta name={"Mango"} price={2000}></Fruta>
  <Fruta name={"Fresa"} price={1200}></Fruta>
  <Fruta name={"Banano"} price={500}></Fruta>
</div>
)

// class Micomponente extends React.Component {

//   render() {
//     const sw = true

//     if(sw) {
//       return <h1>Hola curso de frontend</h1>
//     }else {
//       return <h1>Adios curso de front</h1>
//     }
//   }
// }



// ReactDOM.createRoot(root).render(
// <>
// <Micomponente></Micomponente>
// <Micomponente></Micomponente>
// </>)
