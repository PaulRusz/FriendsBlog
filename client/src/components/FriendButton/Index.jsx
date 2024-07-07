
import { useMutation } from '@apollo/client'

// import './Index.css'
import { ADD_FRIEND, REMOVE_FRIEND } from '../../utils/mutations'

const FriendBtn = ({ id, isFriend }) => {
    const [ToggleFriend] = useMutation(isFriend ? REMOVE_FRIEND : ADD_FRIEND);
    const HandleAddFriend = async () => {
        try {
            await ToggleFriend({ variables: { id } })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='Friend-Container'>
            <button className='Friend-Button' onClick={HandleAddFriend}>
                {isFriend ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    );
}

export default FriendBtn;