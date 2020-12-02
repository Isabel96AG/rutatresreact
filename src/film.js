const Peliculas=(props)=>{
    return(
        <>
        <h1>{props.titulo}</h1>
        <img src={props.cartel} alt=""/>
        <p>{props.sinopsis}</p>

        </>
    );
}
export default Peliculas;