
import { useContext} from 'react';
import MeetupList from '../components/meetups/meetuplist';
import FavoritesContext from '../store/favorites-context';




function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites ===0){
        content = <p>You Got no Favorites Yet . Start Adding Some?</p>
    }else{
        content = <MeetupList meetups= {favoritesCtx.favorites} />
    }
    return(<section>
        <h1>My Favorites</h1>
        {content}
        
    </section>
    );
}


export default FavoritesPage;