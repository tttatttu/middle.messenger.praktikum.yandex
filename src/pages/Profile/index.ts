import { withStore } from "../../utils/Store";
import { ProfilePage } from './profile';

export const withUser = withStore((state) => ({...state.currentUser}))
console.log(withUser)
export default withUser(ProfilePage)
