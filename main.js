const encrypt = [
  { emo: '😊', char: 'a' },
  { emo: '☺️', char: 'b' },
  { emo: '😂', char: 'c' },
  { emo: '😍', char: 'd' },
  { emo: '🥰', char: 'e' },
  { emo: '😎', char: 'f' },
  { emo: '🤔', char: 'g' },
  { emo: '🤣', char: 'h' },
  { emo: '😜', char: 'i' },
  { emo: '🤯', char: 'j' },
  { emo: '😇', char: 'k' },
  { emo: '😋', char: 'l' },
  { emo: '🤗', char: 'm' },
  { emo: '🙌', char: 'n' },
  { emo: '👏', char: 'o' },
  { emo: '👍', char: 'p' },
  { emo: '💪', char: 'q' },
  { emo: '🤘', char: 'r' },
  { emo: '👊', char: 's' },
  { emo: '✌️', char: 't' },
  { emo: '👋', char: 'u' },
  { emo: '🤚', char: 'v' },
  { emo: '✋', char: 'w' },
  { emo: '🤙', char: 'x' },
  { emo: '🖖', char: 'y' },
  { emo: '🤟', char: 'z'},
  { emo: '💀', char:' ' },
  { emo: '🥸', char: '-' },
  { emo: '☠️', char: '_'},
  { emo: '🎉', char: '1' },
  { emo: '🌟', char: '2' },
  { emo: '💡', char: '3' },
  { emo: '🔥', char: '4' },
  { emo: '🌈', char: '5' },
  { emo: '🚀', char: '6' },
  { emo: '⭐', char: '7' },
  { emo: '🍀', char: '8' },
  { emo: '🌺', char: '9' },
  { emo: '🌍', char: '0' },
];


const encryptedmssgOutput = document.getElementById('encrypted-mssg');


const messagetextInput = document.getElementById('message-text');


const copyEncryptedTextBtn = document.querySelector('#copyEncryptedTextBtn')



let encodedMessage = ''



messagetextInput.addEventListener('keyup', (event) => {
  const key = event.target.value.toLowerCase();
  const emojis = [];

  key.split('').forEach(char => {
    const encryptedChar = encrypt.find(entry => entry.char === char);

    if (encryptedChar) {
      emojis.push(encryptedChar.emo);
    } else {
      console.log('error occurred');
    }
  });

  encryptedmssgOutput.value = emojis.join('');
});


function copyEncryptedText() {
  const encryptedOutput = encryptedmssgOutput.value;

  if (!encryptedOutput) {
    return;
  }

  try {
    
    const url = `I have sent you an encrypted message, click on the link to decrypted it ${location.href}/? emocrypt=${encodeURIComponent(encryptedOutput)}`
      encryptedmssgOutput.value = url 
    encryptedmssgOutput.focus();
    encryptedmssgOutput.select();
    document.execCommand('copy');
    
      alert('EncryptedText has been copied to your clipboard')
  } catch (e) {
    alert('Error copying encrypted text to clipboard: ' + e);
  }
} 




copyEncryptedTextBtn.onclick = copyEncryptedText



const encodedText = '%F0%9F%91%8A%F0%9F%A4%A3%F0%9F%A5%B0%F0%9F%91%8A%F0%9F%92%80%F0%9F%A4%94%F0%9F%91%8F%F0%9F%91%8F%F0%9F%98%8D';





// const queryParams = new URLSearchParams(window.location.search);
// const encodedText = queryParams.get('emocrypt');
// const decodedText = decodeURIComponent(encodedText);

// console.log(decodedText);

// if (encodedText) {
//   const decodedText = decodeURIComponent(encodedText);
//   console.log('Decoded Text:', decodedText);

//   encryptedmssgOutput.value = decodedText;

//   const decrypted = encrypt.find(entry => entry.emo == decodedText);

//   if (decrypted) {
//     console.log('Decryption Successful');
//   } else {
//     console.log('Decryption Failed');
//     console.log('Encrypt Array:', decrypted);
//   }
// }
