import {withStore} from "../../utils/Store";

import { ChatPage  } from './chat';

const withChats = withStore((state) =>
    ({
        chatList: state.chatList
    // messagesList: state.messagesList || []
})
)

export default withChats(ChatPage)
