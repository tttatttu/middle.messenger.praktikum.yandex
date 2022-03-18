import {withStore} from "../../utils/Store";

import {ChatPage} from './chat';

const withChats = withStore((state) => ({state}))
// const withChats = withStore((state) => ({chatList: state?.chatList}))
// const withChats = withStore((state) => ({chatList: state?.chatList}))
console.log(withChats)
export default withChats(ChatPage)
