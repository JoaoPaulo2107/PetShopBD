const dictPTEN = {
  "Serviços": "Services",
  "Banho e tosa": "Bath and Grooming",
  "Doação": "Donation",
  "Venda de produtos": "Product Sales",
  "Quem somos?": "Who we are?",
  "Princípios": "Principles",
  "Onde estamos": "Where we are",
  "Agendar Consulta": "Schedule Appointment",
  "Seu nome": "Your name",
  "Seu e-mail": "Your e-mail",
  "Seu telefone": "Your phone",
  "Detalhes do atendimento": "Details of the service",
  "Agendar": "Schedule"
};

const dictENPT = Object.fromEntries(Object.entries(dictPTEN).map(([pt,en])=>[en,pt]));
let isEnglish = false;

function translatePage() {
  const dict = isEnglish ? dictENPT : dictPTEN;
  document.querySelectorAll("h1,h2,h3,p,button,a,textarea,input[placeholder]").forEach(el=>{
    if (el.placeholder && dict[el.placeholder]) {
      el.placeholder = dict[el.placeholder];
    } else {
      const txt = el.textContent.trim();
      if (dict[txt]) el.textContent = dict[txt];
    }
  });
  document.getElementById('translate-btn').textContent = isEnglish ? 'English' : 'Português';
  isEnglish = !isEnglish;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("translate-btn");
  if (btn) {
    btn.addEventListener("click", e => {
      e.preventDefault();
      translatePage();
    });
  }
});
