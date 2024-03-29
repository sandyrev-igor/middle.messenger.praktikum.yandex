export default `<div class="chat-page-box">

    <div class="chat-items-box">
        {{{inputSearch}}}
        {{{chatRooms}}}
    </div>
    <div class="chat-area-box">
        <div class="chat-area-footer">
            {{{activeChat}}}
            {{{chatControl}}}
            {{{newChat}}}
            {{{deleteChat}}}
            {{{addUser}}}
            {{{deleteUser}}}
        </div>
        <div class="chat-area-main">
            <time datetime="2021-11-18T09:54" class="message-date">
                <span>{{firstMessageDate}}</span>
            </time>
            {{{messages}}}
        </div>
        <div class="chat-msg-bottom">
            <img src="{{clip}}" alt="clip">
            <form id="messageForm">
                {{{messageArea}}}
                {{{arrowButton}}}
            </form>
        </div>
    </div>
</div>
`;
