document.getElementById('chat-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const message = messageInput.value;
  if (message.trim() !== '') {
      addMessageToChat(message);
      messageInput.value = '';
  }
});

function addMessageToChat(message:string):void {
  const chatWindow = document.getElementById('chat-window') as HTMLDivElement;
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

  