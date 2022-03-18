import {withStore} from "../../utils/Store";
import {ProfilePage} from './profile';

export const withUser = withStore((state) => ({...state.currentUser}))

export default withUser(ProfilePage)
