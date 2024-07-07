
import { useMutation } from '@apollo/client';
// import '../styles/AddFriend.css';
import { ADD_FRIEND, REMOVE_FRIEND } from '../utils/mutations';

const AddFriendBtn = ({ id, isFriend }) => {
    // TODO: Mutation For Remove Friend
    const [toggleFriend] = useMutation(isFriend ? REMOVE_FRIEND : ADD_FRIEND);
    const HandleAddFriend = async () => {
        try {
            await toggleFriend({ variables: { id } })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='Add-Friend-Container'>
            <button className='Add-Friend-Button' onClick={HandleAddFriend}>
                {isFriend ? 'Remove Friend' : 'Add Friend'}
            </button>
        </div>
    );
}

export default AddFriendBtn;