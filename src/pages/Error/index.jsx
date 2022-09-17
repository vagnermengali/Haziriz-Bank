import { ContainerSection,} from "./style"
import { useContext } from "react";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Context } from "../../providers/lottieContext";
import { BsArrowRight } from 'react-icons/bs';

function Error() {
    const { animateState, defaultOptionsOne } = useContext(Context)
 
    return (
        <ContainerSection>
           <h1>Oops, algo deu errado…</h1>
            <div> 
            <Lottie className="img" options={defaultOptionsOne} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
            </div>
            <Link className="link"to="/">Voltar para a página principalㅤ<BsArrowRight/></Link>
        </ContainerSection>
    )
}

export default Error