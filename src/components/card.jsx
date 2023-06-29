import imgVisa from '../assets/iconVisa.png'
import imgMarterCard from '../assets/iconMastercard.png'

const PaintCard = ({type, number,expirationMonth, expirationYear, bank, owner, cssClass}) => {
return <div className={cssClass}>
    <img src={`${type === 'visa' ? imgVisa : imgMarterCard}`} alt="" />
    <p>{number}</p>
    <p>Expires {expirationMonth}/{expirationYear} { bank}</p>
    <p>{owner}</p>
    
</div>
}
export default PaintCard

