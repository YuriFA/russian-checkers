export default class Chat {
  constructor (sendBtnHandler) {
    this.chat = document.getElementById('chat')
    this.chatMessages = []
    this.chatContent = document.getElementById('chat_content')
    this.messageField = document.getElementById('message')
    this.sendBtn = document.getElementById('send')
    this.bindBtnEvent('click', sendBtnHandler)
    this.showChat()
  }

  showChat () {
    if (this.chat) {
      this.chat.style.display = 'block'
    }
  }

  bindBtnEvent (event, handler) {
    this.sendBtn.addEventListener(event, handler)
  }

  clearField () {
    this.messageField.value = ''
  }

  addMessage (message) {
    this.chatMessages.push(message)
    var html = ''
    for (var i = 0; i < this.chatMessages.length; i++) {
      html += `${this.chatMessages[i]}<br />`
    }
    if (this.chatContent) {
      this.chatContent.innerHTML = html
    }
  }
}
