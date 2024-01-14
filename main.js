const encrypt = [
  { emo: "😊", char: "a" },
  { emo: "⭐", char: "b" },
  { emo: "😂", char: "c" },
  { emo: "😍", char: "d" },
  { emo: "🥰", char: "e" },
  { emo: "😎", char: "f" },
  { emo: "🤔", char: "g" },
  { emo: "🤣", char: "h" },
  { emo: "😜", char: "i" },
  { emo: "🤯", char: "j" },
  { emo: "😇", char: "k" },
  { emo: "😋", char: "l" },
  { emo: "🤗", char: "m" },
  { emo: "🙌", char: "n" },
  { emo: "👏", char: "o" },
  { emo: "👍", char: "p" },
  { emo: "💪", char: "q" },
  { emo: "🤘", char: "r" },
  { emo: "👊", char: "s" },
  { emo: "🥶", char: "t" },
  { emo: "👋", char: "u" },
  { emo: "🤚", char: "v" },
  { emo: "✋", char: "w" },
  { emo: "🤙", char: "x" },
  { emo: "🖖", char: "y" },
  { emo: "🤟", char: "z" },
  { emo: "💀", char: " " },
  { emo: "🥸", char: "-" },
  { emo: "☠️", char: "_" },
  { emo: "🎉", char: "1" },
  { emo: "🌟", char: "2" },
  { emo: "💡", char: "3" },
  { emo: "🔥", char: "4" },
  { emo: "🌈", char: "5" },
  { emo: "🚀", char: "6" },
  { emo: "⭐", char: "7" },
  { emo: "🍀", char: "8" },
  { emo: "🌺", char: "9" },
  { emo: "🌍", char: "0" },
];

const encryptedmssgOutput = document.getElementById("encrypted-mssg");

const messagetextInput = document.getElementById("message-text");

const copyEncryptedTextBtn = document.querySelector("#copyEncryptedTextBtn");

const clearBtn = document.querySelector('.clear')

messagetextInput.addEventListener("keyup", (event) => {
  const key = event.target.value.toLowerCase();

  const emojis = [];

  key.split("").forEach((char) => {
    const encryptedChar = encrypt.find((entry) => entry.char === char);

    if (encryptedChar) {
      emojis.push(encryptedChar.emo);
    } else {
      console.log("error occurred");
    }
  });

  encryptedmssgOutput.value = emojis.join("");
});

function copyEncryptedText() {
  const encryptedOutput = encryptedmssgOutput.value;

  if (!encryptedOutput) {
    return;
  }

  try {
    const href = `I have sent you an Encrypted message, click on the link to decrypte it. ${
      location.href
    }?emocrypt=${encodeURIComponent(encryptedmssgOutput.value)}`;
    encryptedmssgOutput.value = href;
    encryptedmssgOutput.focus();
    encryptedmssgOutput.select();
    document.execCommand("copy");

    alert("EncryptedText has been copied to your clipboard");
    location.href = "/";
  } catch (e) {
    alert("Error copying encrypted text to clipboard: " + e);
  }
}

copyEncryptedTextBtn.onclick = copyEncryptedText;

// DECRYPTED EMOJIS

const params = new URLSearchParams(document.location.search);

const emocrypt = params.get("emocrypt");

if (emocrypt) {
  // location.href = '/'
  const encode = decodeURIComponent(emocrypt);
  encryptedmssgOutput.value = encode;

  const valArray = Array.from(encode);
  let arr = [];
  valArray.forEach((emoji) => {
    const decrypted = encrypt.find((entry) => entry.emo == emoji);

    if (decrypted) {
      arr.push(decrypted.char);
      messagetextInput.value = arr.join("");
      messagetextInput.setAttribute('readonly', true)
    } else {
      console.log("Cannot decrypted mssg");
    }
  });
}


function clearAll() {

  location.href = '/'
  messagetextInput.value = ''
  encryptedmssgOutput.value = ''
  messagetextInput.setAttribute('readonly', false)

}

clearBtn.addEventListener('click', clearAll);

