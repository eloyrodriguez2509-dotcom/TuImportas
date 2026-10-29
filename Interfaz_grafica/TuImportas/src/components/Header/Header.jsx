//Importamos el css que es el asigna estilo a las distintas etiquetas de
//este componente.
import Navbar from '../Navbar/Navbar'
import './Header.css'


//Iniciamos el componente Header
function Header (){
    return (
        //Eitqueta para declarar lo que vamos a ir metiendo dentro del componente
        <header className = "header">
            <Navbar />
        </header>
    )
}

//Hace visible el componente para otros archivos, como por ejemplo
//para hcer el import desde App.jsx.
export default Header