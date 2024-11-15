import RentaPage from "./Renta/RentaPage";
import RentaCard from "./Renta/RentaCard";

function Home() {
    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column', minHeight: '100%', paddingBottom:'50px',gap: '30px'}}>
        <h1>Аренда жилья</h1>
       <img src="https://i.pinimg.com/originals/ef/c7/42/efc742d45f94803d58c53b365476bb56.gif" alt="" />
        </div>
    );
}

export default Home;