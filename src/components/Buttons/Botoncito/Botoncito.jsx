import "./Botoncito.css"
const Botoncito = ({ texto = "Botoncito" }) => {
  return <button className="botoncito">{texto}</button>;
};
export default Botoncito;