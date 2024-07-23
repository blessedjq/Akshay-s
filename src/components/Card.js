import classes from '../styles/card.module.css';

const Card=({img,icon ,text})=>{
    return (
        <div className={classes.card} style={{backgroundImage:`url(${img})`}}>
            <img src={icon} alt={text} className={classes.icon}/>
            <h1>{text}</h1>
        </div>
    );
}
export default Card;