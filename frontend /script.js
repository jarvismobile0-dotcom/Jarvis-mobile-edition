const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const chatForm = document.getElementById('chat-form');

// ఫామ్ సబ్మిట్ అయినప్పుడు (Enter లేదా బటన్ క్లిక్ చేసినప్పుడు)
if (chatForm) {
    chatForm.onsubmit = (e) => {
        e.preventDefault();
        handleSend();
    };
}

// బటన్ క్లిక్ చేసినప్పుడు
document.getElementById('send').onclick = (e) => {
    e.preventDefault();
    handleSend();
};

function handleSend() {
    const t = input.value.trim();
    if (!t) return;
    
    add('YOU: ' + t, 'user');
    input.value = '';
    
    // AI ప్రాసెసింగ్ మెసేజ్ జోడించి, ఆ ఎలిమెంట్‌ను సేవ్ చేసుకుంటాం
    const aiMsg = add('J.A.R.V.I.S: Processing...', 'ai');
    
    setTimeout(() => {
        aiMsg.innerText = 'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

function add(text, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.innerText = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
    return d; // మెసేజ్ ఎలిమెంట్‌ను రిటర్న్ చేస్తుంది
}
