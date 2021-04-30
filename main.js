const downMessage1 = document.getElementById("down_message1")
const downMessage2 = document.getElementById("down_message2")
const downMessage3 = document.getElementById("down_message3")

const downMessage = document.getElementById("ds_down_down")

downMessage1.onclick = function () {
  downMessage.textContent = "1998年5月20日"
}

downMessage2.onclick = function () {
  downMessage.textContent = "慶應"
}

downMessage3.onclick = function () {
  downMessage.textContent = "ラーメン"
}


