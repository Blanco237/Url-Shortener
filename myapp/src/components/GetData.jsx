import React, {useState} from 'react'
import { UserContext } from '../providers/UserProvider';
import classes from '../assets/styles/components/data.module.css'
import { saveUserInfo } from '../firebaseUtils';
import { useHistory } from 'react-router-dom'

const GetData = ({ user }) => {
    const history = useHistory();

    const [company, setCompany] = useState('Google');
    const [position, setPosition] = useState('Software Engineer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveUserInfo(user,company, position);
        console.log('User Info Saved');
        history.push('/dashboard');
    }

  return (
    <div className={classes.container}>
        <div className={classes.body}>
            <h3>Set Your Data</h3>
            <form>
                <input type="text" placeholder="Enter Company..." value={company} onChange={(e)=> setCompany(e.target.value)}/>
                <input type="text" placeholder="Enter Position..." value={position} onChange={(e) => setPosition(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default GetData