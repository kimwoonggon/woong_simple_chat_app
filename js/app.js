// CHATEO Chat App Main JS

// App state
const screens = {};
let currentScreen = "start";

// Navigation
function showScreen(screen) {
  Object.keys(screens).forEach(key => {
    screens[key].classList.add("hide");
  });
  if (screens[screen]) {
    screens[screen].classList.remove("hide");
    currentScreen = screen;
  }
}

/**
 * Render Start Screen
 */
function renderStartScreen() {
  const startScreen = document.createElement("div");
  startScreen.id = "screen-start";
  startScreen.className = "screen";
  startScreen.innerHTML = `
    <div class="status-bar" style="height:44px; background:#fff; border-radius:35px 35px 0 0; display:flex; align-items:center; padding:0 16px;">
      <img src="assets/startscreen_battery_cap.svg" alt="Battery" style="height:16px; margin-left:auto;">
      <span style="margin-left:8px; font-family:'SF UI Text',Arial,sans-serif; font-size:15px; color:#262628;">9:41</span>
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:756px; background:#BCD38B; border-radius:0 0 35px 35px;">
      <img src="assets/startscreen_rectangle1.svg" alt="Main Graphic" style="width:128px; height:75px; margin-top:120px; margin-bottom:32px;">
      <div style="display:flex; align-items:center; margin-bottom:24px;">
        <img src="assets/startscreen_chat_icon_vector1.svg" alt="Chat Icon 1" style="width:40px; height:40px;">
        <img src="assets/startscreen_chat_icon_vector2.svg" alt="Chat Icon 2" style="width:40px; height:40px; margin-left:-20px;">
      </div>
      <h1 style="font-family:Poppins,sans-serif; font-weight:700; font-size:20px; letter-spacing:0.05em; margin:0 0 8px 0; text-shadow:0px 6px 5px rgba(0,0,0,0.3);">CHATEO</h1>
      <button id="start-btn" style="margin-top:40px; background:#000; color:#fff; border:none; border-radius:30px; padding:16px 48px; font-size:18px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer; box-shadow:0px 6px 5px rgba(0,0,0,0.5); display:flex; align-items:center;">
        Start
        <img src="assets/startscreen_arrow_right_vector.svg" alt="Arrow" style="width:24px; height:24px; margin-left:12px;">
      </button>
      <button id="goto-chat-btn" style="margin-top:20px; background:#008000; color:#fff; border:none; border-radius:30px; padding:12px 32px; font-size:16px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer;">
        Go to Chat Room
      </button>
    </div>
  `;
  screens["start"] = startScreen;
  document.getElementById("app").appendChild(startScreen);

  // Button navigation
  startScreen.querySelector("#start-btn").addEventListener("click", () => {
    showScreen("chatlist");
  });
  // Go to Chat Room button
  startScreen.querySelector("#goto-chat-btn").addEventListener("click", () => {
    showScreen("chatroom");
  });
}

/**
 * Render Chat Rooms List Screen
 */
function renderChatListScreen() {
  const chatListScreen = document.createElement("div");
  chatListScreen.id = "screen-chatlist";
  chatListScreen.className = "screen hide";
  chatListScreen.innerHTML = `
    <div class="status-bar" style="height:44px; background:#fff; border-radius:35px 35px 0 0; display:flex; align-items:center; padding:0 16px;">
      <img src="assets/chatlist_battery_cap.svg" alt="Battery" style="height:16px; margin-left:auto;">
      <span style="margin-left:8px; font-family:'SF UI Text',Arial,sans-serif; font-size:15px; color:#262628;">9:41</span>
    </div>
    <div style="background:#BCD38B; border-radius:0 0 35px 35px; min-height:756px; padding:0 0 0 0;">
      <div style="display:flex; align-items:center; justify-content:space-between; padding:32px 24px 0 24px;">
        <h2 style="font-family:Poppins,sans-serif; font-weight:700; font-size:20px; margin:0; letter-spacing:0.06em; text-shadow:0px 6px 5px rgba(0,0,0,0.3);">Chats</h2>
        <img src="assets/chatlist_search_icon.svg" alt="Search" style="width:24px; height:24px; cursor:pointer;" id="chatlist-search-btn">
      </div>
      <div style="margin:32px 24px 0 24px;">
        <div style="display:flex; align-items:center; margin-bottom:16px;">
          <img src="assets/chatlist_story1.png" alt="Story 1" style="width:44px; height:44px; border-radius:50%; margin-right:8px;">
          <img src="assets/chatlist_story2.png" alt="Story 2" style="width:44px; height:44px; border-radius:50%; margin-right:8px;">
          <img src="assets/chatlist_story3.png" alt="Story 3" style="width:44px; height:44px; border-radius:50%;">
        </div>
        <div style="background:#DFDDC6; border-radius:16px; box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25); padding:16px; margin-bottom:16px; display:flex; align-items:center; cursor:pointer;" id="chatlist-room1">
          <img src="assets/chatlist_avatar2.png" alt="Avatar" style="width:44px; height:44px; border-radius:50%; margin-right:16px;">
          <div style="flex:1;">
            <div style="font-family:Roboto,sans-serif; font-weight:700; font-size:14px;">Flipkart Health+</div>
            <div style="font-family:Roboto,sans-serif; font-weight:500; font-size:10px; color:#000;">Get health & Happiness Delivered to ...</div>
          </div>
          <div style="font-family:Roboto,sans-serif; font-weight:600; font-size:11px; color:#2E2E2E; margin-left:8px;">12:09 PM</div>
        </div>
        <!-- Add more chat rooms as needed -->
      </div>
      <button id="chatlist-friends-btn" style="margin:32px auto 0 auto; display:block; background:#008000; color:#fff; border:none; border-radius:30px; padding:12px 32px; font-size:16px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer;">
        Find Friends
      </button>
      <button id="chatlist-communities-btn" style="margin:16px auto 0 auto; display:block; background:#000; color:#fff; border:none; border-radius:30px; padding:12px 32px; font-size:16px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer;">
        Communities
      </button>
    </div>
  `;
  // Inject bottom nav
  chatListScreen.innerHTML += renderBottomNav("chats");
  screens["chatlist"] = chatListScreen;
  document.getElementById("app").appendChild(chatListScreen);

  // Navigation to Friend Search
  chatListScreen.querySelector("#chatlist-friends-btn").addEventListener("click", () => {
    showScreen("friendsearch");
  });
  // Navigation to Chat Room
  chatListScreen.querySelector("#chatlist-room1").addEventListener("click", () => {
    showScreen("chatroom");
  });
  // Navigation to Friend Search via search icon
  chatListScreen.querySelector("#chatlist-search-btn").addEventListener("click", () => {
    showScreen("friendsearch");
  });
  // Navigation to Communities
  chatListScreen.querySelector("#chatlist-communities-btn").addEventListener("click", () => {
    showScreen("communities");
  });

  // Bottom nav logic
  chatListScreen.querySelector("#nav-chats").addEventListener("click", () => showScreen("chatlist"));
  chatListScreen.querySelector("#nav-calls").addEventListener("click", () => alert("Calls feature not implemented"));
  chatListScreen.querySelector("#nav-communities").addEventListener("click", () => showScreen("communities"));
  chatListScreen.querySelector("#nav-more").addEventListener("click", () => alert("More feature not implemented"));
}

/**
 * Render Friend Search Screen
 */
function renderFriendSearchScreen() {
  const friendSearchScreen = document.createElement("div");
  friendSearchScreen.id = "screen-friendsearch";
  friendSearchScreen.className = "screen hide";
  friendSearchScreen.innerHTML = `
    <div class="status-bar" style="height:44px; background:#fff; border-radius:35px 35px 0 0; display:flex; align-items:center; padding:0 16px;">
      <img src="assets/friendsearch_battery_cap.svg" alt="Battery" style="height:16px; margin-left:auto;">
      <span style="margin-left:8px; font-family:'SF UI Text',Arial,sans-serif; font-size:15px; color:#262628;">9:41</span>
    </div>
    <div style="background:#BCD38B; border-radius:0 0 35px 35px; min-height:756px; padding:0 0 0 0;">
      <div style="display:flex; align-items:center; justify-content:space-between; padding:32px 24px 0 24px;">
        <h2 style="font-family:Poppins,sans-serif; font-weight:700; font-size:20px; margin:0; letter-spacing:0.06em; text-shadow:0px 6px 5px rgba(0,0,0,0.3);">Find Friends</h2>
        <img src="assets/friendsearch_search_icon.svg" alt="Search" style="width:24px; height:24px; cursor:pointer;" id="friendsearch-back-btn">
      </div>
      <div style="margin:32px 24px 0 24px;">
        <div style="background:#fff; border-radius:16px; box-shadow:0px 4px 4px 0px rgba(0,0,0,0.08); padding:16px; display:flex; align-items:center;">
          <img src="assets/friendsearch_avatar.png" alt="Avatar" style="width:48px; height:48px; border-radius:16px; margin-right:16px;">
          <div style="flex:1;">
            <div style="font-family:Poppins,sans-serif; font-weight:700; font-size:18px;">Floyd Warren</div>
            <div style="font-family:Poppins,sans-serif; font-weight:500; font-size:14px; color:#777D71;">8900000231</div>
          </div>
          <button id="friendsearch-invite-btn" style="background:#008000; color:#fff; border:none; border-radius:8px; padding:8px 16px; font-size:14px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer;">
            Invite
          </button>
        </div>
      </div>
      <button id="friendsearch-backlist-btn" style="margin:40px auto 0 auto; display:block; background:#000; color:#fff; border:none; border-radius:30px; padding:12px 32px; font-size:16px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer;">
        Back to Chats
      </button>
    </div>
  `;
  // Inject bottom nav
  friendSearchScreen.innerHTML += renderBottomNav("calls");
  screens["friendsearch"] = friendSearchScreen;
  document.getElementById("app").appendChild(friendSearchScreen);

  // Navigation back to Chat List
  friendSearchScreen.querySelector("#friendsearch-backlist-btn").addEventListener("click", () => {
    showScreen("chatlist");
  });
  // Navigation back to Chat List via search icon
  friendSearchScreen.querySelector("#friendsearch-back-btn").addEventListener("click", () => {
    showScreen("chatlist");
  });

  // Bottom nav logic
  friendSearchScreen.querySelector("#nav-chats").addEventListener("click", () => showScreen("chatlist"));
  friendSearchScreen.querySelector("#nav-calls").addEventListener("click", () => showScreen("friendsearch"));
  friendSearchScreen.querySelector("#nav-communities").addEventListener("click", () => showScreen("communities"));
  friendSearchScreen.querySelector("#nav-more").addEventListener("click", () => alert("More feature not implemented"));
}

/**
 * Render Chat Room Screen
 * (Accurately reflects Figma node-id=2-583)
 */
function renderChatRoomScreen() {
  const chatRoomScreen = document.createElement("div");
  chatRoomScreen.id = "screen-chatroom";
  chatRoomScreen.className = "screen hide";
  chatRoomScreen.innerHTML = `
    <div class="status-bar" style="height:44px; background:#fff; border-radius:35px 35px 0 0; display:flex; align-items:center; padding:0 16px;">
      <img src="assets/chatroom_battery_cap.svg" alt="Battery" style="height:16px; margin-left:auto;">
      <span style="margin-left:8px; font-family:'SF UI Text',Arial,sans-serif; font-size:15px; color:#262628;">9:41</span>
    </div>
    <div style="background:#BCD38B; border-radius:0 0 35px 35px; min-height:756px; display:flex; flex-direction:column;">
      <div style="display:flex; align-items:center; justify-content:space-between; padding:24px 24px 0 24px;">
        <button id="chatroom-back-btn" style="background:none; border:none; cursor:pointer;">
          <img src="assets/startscreen_arrow_right_vector.svg" alt="Back" style="width:24px; height:24px; transform:rotate(180deg);">
        </button>
        <div style="font-family:Poppins,sans-serif; font-weight:700; font-size:18px;">Flipkart Health+</div>
        <div></div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-end; padding:0 24px 24px 24px;">
        <!-- Incoming message bubble -->
        <div style="margin-bottom:8px; display:flex; align-items:flex-end;">
          <img src="assets/chatroom_avatar.png" alt="Avatar" style="width:44px; height:44px; border-radius:50%; margin-right:12px;">
          <div>
            <div style="background:#DFDDC6; border-radius:0px 16px 16px 16px; box-shadow:2px 4px 10px 0px rgba(0,0,0,0.5); padding:12px 16px; font-family:Roboto,sans-serif; font-size:14px; max-width:220px;">
              Get 💖Health & Happiness😀 delivered to your doorstep🚪<br>
              Shop at Flipkart Health+ & avail FLAT 20% 25% OFF on Medicines (Use Code: SAVER25)
            </div>
            <div style="font-size:10px; color:#545454; margin-top:4px; text-align:left;">12:05 PM</div>
          </div>
        </div>
        <!-- Outgoing message bubble -->
        <div style="margin-bottom:8px; display:flex; align-items:flex-end; flex-direction:row-reverse;">
          <div>
            <div style="background:#618B61; border-radius:16px 0px 16px 16px; color:#fff; box-shadow:2px 4px 4px 0px rgba(0,0,0,0.5); padding:12px 16px; font-family:Roboto,sans-serif; font-size:14px; max-width:220px;">
              OK
            </div>
            <div style="font-size:10px; color:#CFCFCF; margin-top:4px; text-align:right;">12:05 PM</div>
          </div>
        </div>
        <!-- Input area -->
        <div style="display:flex; align-items:center; margin-top:24px;">
          <input type="text" id="chatroom-input" placeholder="Message" style="flex:1; border-radius:16px; border:none; padding:12px 16px; font-size:14px; font-family:Roboto,sans-serif; background:#DFDDC6; margin-right:8px;">
          <button id="chatroom-send-btn" style="background:#008000; color:#fff; border:none; border-radius:16px; padding:12px 16px; font-size:16px; font-family:Poppins,sans-serif; font-weight:700; cursor:pointer;">
            Send
          </button>
        </div>
      </div>
    </div>
  `;
  // Inject bottom nav
  chatRoomScreen.innerHTML += renderBottomNav("chats");
  screens["chatroom"] = chatRoomScreen;
  document.getElementById("app").appendChild(chatRoomScreen);

  // Navigation back to Chat List
  chatRoomScreen.querySelector("#chatroom-back-btn").addEventListener("click", () => {
    showScreen("chatlist");
  });

  // Bottom nav logic
  chatRoomScreen.querySelector("#nav-chats").addEventListener("click", () => showScreen("chatlist"));
  chatRoomScreen.querySelector("#nav-calls").addEventListener("click", () => showScreen("friendsearch"));
  chatRoomScreen.querySelector("#nav-communities").addEventListener("click", () => showScreen("communities"));
  chatRoomScreen.querySelector("#nav-more").addEventListener("click", () => alert("More feature not implemented"));
}

/**
 * Render Communities Screen
 */
function renderCommunitiesScreen() {
  const communitiesScreen = document.createElement("div");
  communitiesScreen.id = "screen-communities";
  communitiesScreen.className = "screen hide";
  communitiesScreen.innerHTML = `
    <div class="status-bar" style="height:44px; background:#fff; border-radius:35px 35px 0 0; display:flex; align-items:center; padding:0 16px;">
      <img src="assets/communities_battery_cap.svg" alt="Battery" style="height:16px; margin-left:auto;">
      <span style="margin-left:8px; font-family:'SF UI Text',Arial,sans-serif; font-size:15px; color:#262628;">9:41</span>
    </div>
    <div style="background:#BCD38B; border-radius:0 0 35px 35px; min-height:756px; display:flex; flex-direction:column;">
      <div style="display:flex; align-items:center; justify-content:space-between; padding:24px 24px 0 24px;">
        <button id="communities-back-btn" style="background:none; border:none; cursor:pointer;">
          <img src="assets/startscreen_arrow_right_vector.svg" alt="Back" style="width:24px; height:24px; transform:rotate(180deg);">
        </button>
        <div style="font-family:Poppins,sans-serif; font-weight:700; font-size:18px;">Communities</div>
        <div></div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; justify-content:flex-start; padding:0 24px 24px 24px;">
        <div style="margin-top:32px; display:flex; flex-direction:column; gap:24px;">
          <div style="background:#fff; border-radius:16px; box-shadow:0px 4px 4px 0px rgba(0,0,0,0.08); padding:16px; display:flex; align-items:center;">
            <img src="assets/communities_avatar1.png" alt="Avatar" style="width:48px; height:48px; border-radius:11px; margin-right:16px;">
            <div style="flex:1;">
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:14px;">Stars Wars Torrent</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:400; font-size:12px; color:#686A8A;">14,440 Members</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:12px; color:#686A8A;">Movies</div>
            </div>
          </div>
          <div style="background:#fff; border-radius:16px; box-shadow:0px 4px 4px 0px rgba(0,0,0,0.08); padding:16px; display:flex; align-items:center;">
            <img src="assets/communities_avatar2.png" alt="Avatar" style="width:48px; height:48px; border-radius:11px; margin-right:16px;">
            <div style="flex:1;">
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:14px;">Lord of the Rings</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:400; font-size:12px; color:#686A8A;">1,050 Members</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:12px; color:#686A8A;">Movies</div>
            </div>
          </div>
          <div style="background:#fff; border-radius:16px; box-shadow:0px 4px 4px 0px rgba(0,0,0,0.08); padding:16px; display:flex; align-items:center;">
            <img src="assets/communities_avatar3.png" alt="Avatar" style="width:48px; height:48px; border-radius:11px; margin-right:16px;">
            <div style="flex:1;">
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:14px;">Crypto Art NFT</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:400; font-size:12px; color:#686A8A;">6,510 Members</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:12px; color:#686A8A;">Art</div>
            </div>
          </div>
          <div style="background:#fff; border-radius:16px; box-shadow:0px 4px 4px 0px rgba(0,0,0,0.08); padding:16px; display:flex; align-items:center;">
            <img src="assets/communities_avatar4.png" alt="Avatar" style="width:48px; height:48px; border-radius:11px; margin-right:16px;">
            <div style="flex:1;">
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:14px;">Tech World</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:400; font-size:12px; color:#686A8A;">22,114 Members</div>
              <div style="font-family:SF UI Text,sans-serif; font-weight:500; font-size:12px; color:#686A8A;">Tech</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  // Inject bottom nav
  communitiesScreen.innerHTML += renderBottomNav("communities");
  screens["communities"] = communitiesScreen;
  document.getElementById("app").appendChild(communitiesScreen);

  // Navigation back to Chat List
  communitiesScreen.querySelector("#communities-back-btn").addEventListener("click", () => {
    showScreen("chatlist");
  });

  // Bottom nav logic
  communitiesScreen.querySelector("#nav-chats").addEventListener("click", () => showScreen("chatlist"));
  communitiesScreen.querySelector("#nav-calls").addEventListener("click", () => showScreen("friendsearch"));
  communitiesScreen.querySelector("#nav-communities").addEventListener("click", () => showScreen("communities"));
  communitiesScreen.querySelector("#nav-more").addEventListener("click", () => alert("More feature not implemented"));
}

/**
 * Bottom Navigation Bar Component
 * @param {string} active - The active tab: "chats", "calls", "communities", "more"
 * @returns {string} - HTML string for the nav bar
 */
function renderBottomNav(active) {
  return `
    <nav class="bottom-nav" style="width:100%; max-width:360px; height:64px; background:#fff; border-radius:0 0 35px 35px; display:flex; justify-content:space-around; align-items:center; box-shadow:0px -2px 8px rgba(0,0,0,0.08); margin:0 auto 0 auto;">
      <button class="nav-btn${active==='chats' ? ' active' : ''}" id="nav-chats" style="background:none; border:none; display:flex; flex-direction:column; align-items:center; flex:1; cursor:pointer;">
        <img src="assets/communities_chat_icon_vector1.svg" alt="Chats" style="width:24px; height:24px;">
        <span style="font-size:10px; color:${active==='chats' ? '#000' : '#B8B8B8'}; font-family:'SF UI Text',sans-serif;">Chats</span>
      </button>
      <button class="nav-btn${active==='calls' ? ' active' : ''}" id="nav-calls" style="background:none; border:none; display:flex; flex-direction:column; align-items:center; flex:1; cursor:pointer;">
        <img src="assets/nav_calls.svg" alt="Calls" style="width:24px; height:24px;">
        <span style="font-size:10px; color:${active==='calls' ? '#000' : '#B8B8B8'}; font-family:'SF UI Text',sans-serif;">Calls</span>
      </button>
      <button class="nav-btn${active==='communities' ? ' active' : ''}" id="nav-communities" style="background:none; border:none; display:flex; flex-direction:column; align-items:center; flex:1; cursor:pointer;">
        <img src="assets/communities_chat_icon_vector2.svg" alt="Communities" style="width:24px; height:24px;">
        <span style="font-size:10px; color:${active==='communities' ? '#000' : '#B8B8B8'}; font-family:'SF UI Text',sans-serif;">Communities</span>
      </button>
      <button class="nav-btn${active==='more' ? ' active' : ''}" id="nav-more" style="background:none; border:none; display:flex; flex-direction:column; align-items:center; flex:1; cursor:pointer;">
        <img src="assets/nav_menu_1.svg" alt="More" style="width:24px; height:24px;">
        <span style="font-size:10px; color:${active==='more' ? '#000' : '#B8B8B8'}; font-family:'SF UI Text',sans-serif;">More</span>
      </button>
    </nav>
  `;
}

// Initial render
window.addEventListener("DOMContentLoaded", () => {
  renderStartScreen();
  renderChatListScreen();
  renderFriendSearchScreen();
  renderChatRoomScreen();
  renderCommunitiesScreen();
  showScreen("start");
});
