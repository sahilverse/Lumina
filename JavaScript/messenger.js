var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "103620765482432");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v17.0'
    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Function to toggle the chat
let chatOpen = false;
function toggleChat() {
    if (chatOpen) {
        FB.CustomerChat.hideDialog();
        chatOpen = false;
    } else {
        FB.CustomerChat.showDialog();
        chatOpen = true;
    };
};

// Event listener to close chat when clicking anywhere on the page except the chat dialog
document.addEventListener("click", (e) => {
    if (chatOpen && e.target !== document.getElementById('liveChatBtn')) {
        FB.CustomerChat.hideDialog();
        chatOpen = false;
    };

});



