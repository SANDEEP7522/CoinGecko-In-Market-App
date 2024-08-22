import { useParams } from "react-router-dom";


function CoinDetailsPage(){

const {coinId} = useParams();     


// Todo, make the Api call and Fetch coin data.

return(
    <div>
        <h1>
        Coin Details Page {coinId}
        </h1>
    </div>
)

}
export default CoinDetailsPage;