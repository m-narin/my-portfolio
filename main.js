const downMessage1 = document.getElementById("down_message1")
const downMessage2 = document.getElementById("down_message2")
const downMessage3 = document.getElementById("down_message3")

const topMessage = document.getElementById("top_message")

downMessage1.onclick = function () {
  topMessage.textContent = "1998年5月20日"
}

downMessage2.onclick = function () {
  topMessage.textContent = "慶應"
}

downMessage3.onclick = function () {
  topMessage.textContent = "ラーメン"
}


