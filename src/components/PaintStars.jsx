
const PaintStars = ({ nam, rating, gender, job, city, state }) => {
    for (let index = 0; index < rating; index++) {
        console.log('Hola');

    }

    return <div>
        <h1>{nam}</h1>
        <article></article>
        <p>{gender}</p>
        <h3>{job}</h3>
        <article><h3>{city}</h3><h4>{state}</h4> </article>
    </div>

}
export default PaintStars