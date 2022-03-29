import { useState , useEffect} from "react";
import MeetupList from "../components/meetups/meetuplist";


function AllMeetupsPage(){

  const [isLoading ,setIsLoading] =useState(true);
  const [loadedMeetups,setLoadedMeetups] = useState([]);

//useEffect controls when a program runs
  useEffect(() =>{
    setIsLoading(true);

    fetch ('https://meeting-app-db8cf-default-rtdb.firebaseio.com/meetups.json'
  )
  .then((response )=> {
    return response.json();
  })
  .then((data )=>{
    const meetups =[];

    for (const key in data){
      const meetup={
        id:key,
        ...data[key]
      };
      meetups.push(meetup);
    }
    setIsLoading(false);
    setLoadedMeetups(meetups);
    
    
  });

  } ,[]);
  //empty array we dont have external dependance that keeps changing

  //use state changes what is on screen

 
  //fetch returns a promise
  
  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }

    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}


export default AllMeetupsPage;