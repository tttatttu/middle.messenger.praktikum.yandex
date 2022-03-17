import { withStore } from "../../utils/Store";
import { ProfilePage } from './profile';

const withUser = withStore((state) => ({...state.currentUser}))

export default withUser(ProfilePage)
