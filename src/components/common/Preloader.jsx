import Reax from 'react';
import s from './Preloader.module.css'
import imgLoader from '../../assets/images/Loader2.gif'


let Preloader = (props) =>{
    return (
        <img className={s.preloader} src={imgLoader} />
    )
}
export default Preloader;