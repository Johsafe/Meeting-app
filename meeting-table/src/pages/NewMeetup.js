import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';

function NewMeetupPage(){
    const history = useHistory();

    function AddMeetupHandler(MeetupData){
        fetch('https://meeting-app-db8cf-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(MeetupData),
            headers:{
                'content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });
    }
    return<section>
        <h1>Add New Meetups</h1>
        <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
    </section>
}


export default NewMeetupPage;