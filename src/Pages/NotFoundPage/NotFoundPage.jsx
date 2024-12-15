import { Link } from "react-router-dom";
import { Text } from "../../components/Text/Text"

export const Notfoundpage = () => {
    return(
        <div>
            <Text>Такой страницы не сущуствует. Перейдите <Link to="/" style={{color: "#D20A11"}}>Home</Link></Text>
        </div>
    )
}