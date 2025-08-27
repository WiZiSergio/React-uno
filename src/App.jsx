import './App.css'
import  Botoncito  from './components/Buttons/Botoncito/Botoncito'; 
// {} para llamar Botoncito del archivo jsx de la carpeta Botoncito 
// from la dirección pero comilla simple
// borramos todo detro de return <> hasta </> y entre ella <Botoncito />
function App() {
  return (
    <>
      <Botoncito />
      <Botoncito texto="Botoncito2" />
      <Botoncito texto="Botoncito3" />
    </>
  )
}
export default App
// <Botoncito />  dejamos espacios al cerrar /