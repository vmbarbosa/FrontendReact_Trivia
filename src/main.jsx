import ReactDOM from 'react-dom/client'
import Fruta from './components/Fruta'
import GranTotal from './components/GranTotal';

const root = document.getElementById('root')
//Estatal

const total = 1000

function functPadre (params) {
  console.log('Soy la funcion del padre',params);
}

ReactDOM.createRoot(root).render(
<div>
  <Fruta name={"Mango"} price={2000} bus={functPadre}></Fruta>
  <Fruta name={"Fresa"} price={1200} bus={functPadre}></Fruta>
  <Fruta name={"Banano"} price={500} bus={functPadre}></Fruta>
  <GranTotal total={total}></GranTotal>
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
