import React from "react";
import Movies from './movies';

function Filmpage(props) {
    const filmId = props.match.params.id;
    return (
        <div>
            <h1>{Movies[filmId].title}</h1>
            <p>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</p>
        </div>
    )
}

export default Filmpage;