import { ContainerSection,} from "./style"
import { useContext } from "react";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Context } from "../../providers/userContext";
import { BsArrowRight } from 'react-icons/bs';

function Error() {
    const { animateState, defaultOptionsOne } = useContext(Context)
 
    return (
        <ContainerSection>
           <h1>Oops, something went wrong...</h1>
            <div> 
            <Lottie className="img" options={defaultOptionsOne} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
            </div>
            <Link className="link"to="/">Back to main page
            ㅤ<BsArrowRight/></Link>
        </ContainerSection>
    )
}

export default Error