import blackStar from '../assets/iconStarBlack.png'
import star from '../assets/iconStar.png'

const PaintStars = ({ rating }) => {
    return <>
        <img src={rating >= 1 ? blackStar : star} alt="" />
        <img src={rating >= 2 ? blackStar : star} alt="" />
        <img src={rating >= 3 ? blackStar : star} alt="" />
        <img src={rating >= 4 ? blackStar : star} alt="" />
        <img src={rating >= 5 ? blackStar : star} alt="" />
    </>
}
export default PaintStars