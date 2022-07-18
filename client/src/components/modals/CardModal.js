import { Fragment,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import callAxios from '../../util/callAxios';
import CardHeader from '../cardcontent/CardHeader';
import CardBody from '../cardcontent/CardBody';
import { ReactSpinner } from 'react-spinning-wheel';
import 'react-spinning-wheel/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './css/CardModal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalWithScroll}>
                <div className={classes.modalContent}>{props.children}</div>
            </div>
        </div>
    );
}

const portalElement = document.getElementById('modal');

const CardModal = (props) => {
    const [card, setCard] = useState([{name:"",content:""}]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const fetchCard = async () => {
            const res = await callAxios("cards/"+props.keyVal);
            setCard(res.data);
            setIsLoading(false);
        }
            
        if(isMounted)
            fetchCard();

        return () => { isMounted = false };
    },[props.keyVal]);


    let content;

    if(isLoading){
        content = <ReactSpinner/>
    }
    else{
        content = <Fragment><CardHeader name={card[0].name} coverImage={card[0].coverImage} imageCaption = {card[0].imageCaption} imageAlt={card[0].imageAlt} category={card[0].category}/>
            <CardBody content={card[0].content}/></Fragment>;
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(
            <ModalOverlay>
                <div className={classes.closeModal}><span><FontAwesomeIcon icon={faTimes} onClick={props.onClose}/></span></div>
                {content}
            </ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default CardModal;