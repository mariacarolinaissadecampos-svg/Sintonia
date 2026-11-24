const cards=[
  {
    "number": 1,
    "title": "Reputation",
    "classification": "Verdade da Mídia",
    "text": "O álbum Reputation, da Taylor Swift, é uma peça vitimista, calculista, em que a cantora fica na defensiva."
  },
  {
    "number": 2,
    "title": "Ribs",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "A música Ribs, da Lorde, trata sobre o fim do ensino médio e a despedida dos seus amigos de infância/adolescência."
  },
  {
    "number": 3,
    "title": "The Fame Monster",
    "classification": "Neutro",
    "text": "No álbum The Fame Monster da Lady Gaga há exploração dos lados sombrios da fama que também chamou atenção por seus personagens e estética."
  },
  {
    "number": 4,
    "title": "Lemonade",
    "classification": "Verdade do Artista",
    "text": "O álbum Lemonade, da Beyoncé, é uma jornada de cura que passa pela traição, pela ancestralidade e pela força das mulheres negras."
  },
  {
    "number": 5,
    "title": "drivers license",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "A música drivers license, da Olivia Rodrigo, é sobre o triângulo amoroso entre ela, Joshua Bassett e Sabrina Carpenter."
  },
  {
    "number": 6,
    "title": "Blackout",
    "classification": "Verdade da Mídia",
    "text": "O álbum Blackout, da Britney Spears, é o retrato de uma artista em colapso que não tinha controle sobre o próprio trabalho."
  },
  {
    "number": 7,
    "title": "Folklore",
    "classification": "Verdade do Artista",
    "text": "O álbum Folklore, da Taylor Swift, é feito de histórias e personagens inventados."
  },
  {
    "number": 8,
    "title": "Eternal Sunshine",
    "classification": "Neutro",
    "text": "O álbum Eternal Sunshine, da Ariana Grande, fala só sobre o fim de um casamento e o começo de um novo amor."
  },
  {
    "number": 9,
    "title": "Flowers",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "A música Flowers, da Miley Cyrus, é uma indireta para o ex-marido, Liam Hemsworth."
  },
  {
    "number": 10,
    "title": "Sorry",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "A música Sorry, do Justin Bieber, é um pedido de desculpas para a Selena Gomez."
  },
  {
    "number": 11,
    "title": "Brat",
    "classification": "Entre verdade do Artista e Neutro",
    "text": "O álbum Brat, da Charli XCX, é sobre festa, mas também sobre insegurança e sobre se comparar com outras mulheres."
  },
  {
    "number": 12,
    "title": "Escândalo Íntimo",
    "classification": "Verdade do Artista",
    "text": "O álbum Escândalo Íntimo, da Luísa Sonza, fala sobre desejo, intimidade e liberdade sexual feminina."
  },
  {
    "number": 13,
    "title": "Like a Prayer",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "O álbum Like a Prayer, da Madonna, foi feito para provocar a Igreja Católica."
  },
  {
    "number": 14,
    "title": "The Very First Night",
    "classification": "Verdade da Mídia",
    "text": "A música The Very First Night de Taylor Swift é sobre saudade e o desejo de reviver o início da relação com Karlie Kloss"
  },
  {
    "number": 15,
    "title": "Happier Than Ever",
    "classification": "Verdade do Artista",
    "text": "O álbum Happier Than Ever, da Billie Eilish, fala sobre fama, falta de privacidade e relacionamentos abusivos."
  },
  {
    "number": 16,
    "title": "thank u, next",
    "classification": "Entre verdade do Artista e Neutro",
    "text": "A música thank u, next, da Ariana Grande, é um recado para os ex-namorados, agradecendo pelo que cada um ensinou a ela"
  },
  {
    "number": 17,
    "title": "Red",
    "classification": "Neutro",
    "text": "O álbum Red, da Taylor Swift, é sobre o término dela com Jake Gyllenhaal."
  },
  {
    "number": 18,
    "title": "Fine Line",
    "classification": "Neutro",
    "text": "O álbum Fine Line, do Harry Styles, é sobre o fim de um relacionamento e a fase de descobrir quem ele é."
  },
  {
    "number": 19,
    "title": "The Tortured Poets Department",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "O álbum The Tortured Poets Department, da Taylor Swift, é sobre o romance relâmpago dela com Matty Healy."
  },
  {
    "number": 20,
    "title": "Born to Die",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "O álbum Born to Die, da Lana Del Rey, romantiza relacionamentos tóxicos."
  },
  {
    "number": 21,
    "title": "Material Girl",
    "classification": "Verdade da Mídia",
    "text": "A música Material Girl, da Madonna, mostra que ela só se importa com dinheiro."
  },
  {
    "number": 22,
    "title": "Papa Don't Preach",
    "classification": "Verdade da Mídia",
    "text": "A música Papa Don't Preach, da Madonna, é uma mensagem contra o aborto."
  },
  {
    "number": 23,
    "title": "After Hours",
    "classification": "Entre verdade da Mídia e Neutro",
    "text": "O álbum After Hours, do The Weeknd, é sobre o término dele com a Bella Hadid."
  },
  {
    "number": 24,
    "title": "Dancing with the Devil",
    "classification": "Verdade do Artista",
    "text": "O álbum Dancing with the Devil, da Demi Lovato, fala sobre a overdose dela e o processo de recomeçar."
  },
  {
    "number": 25,
    "title": "Man in the Mirror",
    "classification": "Verdade do Artista",
    "text": "A música Man in the Mirror, do Michael Jackson, diz que mudar o mundo começa por mudar a si mesmo."
  }
];
const $=s=>document.querySelector(s);let order=[],index=0,startX=0,startY=0,suppressClick=false;const screens=['splash','home','deck','card'];
function show(id){screens.forEach(s=>$('#'+s).hidden=s!==id);window.scrollTo(0,0)}
let splashTimer=setTimeout(()=>show('home'),2600);$('#enter').onclick=()=>{clearTimeout(splashTimer);show('home')};
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));$('#pop').onclick=()=>show('deck');
function modal(title,body,{showConfirmation=true,confirmationLabel='Entendi',onConfirm=()=>$('#dialog').close()}={}){$('#dialog > .eyebrow').hidden=!showConfirmation;const confirmation=$('#dialog-ok');confirmation.hidden=!showConfirmation;confirmation.firstChild.textContent=confirmationLabel+' ';confirmation.onclick=onConfirm;$('#dialog-title').textContent=title;$('#dialog-body').innerHTML=body;$('#dialog').showModal()}
$('#rock').onclick=()=>modal('O rock vem aí.','<p>Conheça a edição rock do Sintonia.</p>',{confirmationLabel:'Quero jogar',onConfirm:()=>{$('#dialog').close();window.location.assign('rock.html')}});
document.querySelectorAll('.help').forEach(b=>b.onclick=()=>modal('Como entrar em sintonia?','<ol><li>Uma pessoa sorteia e lê a carta em segredo.</li><li>Escolhe sua interpretação entre a narrativa da mídia e dos consumidores e a narrativa emitida pelo cantor.</li><li>Conta a história sem revelar sua escolha.</li><li>O grupo conversa e marca seu palpite no termômetro físico.</li><li>Revelem a escolha e discutam as diferentes interpretações.</li></ol><p>As cartas apresentam interpretações sobre obras musicais para discutir as narrativas da mídia, do público e dos artistas.</p>',{showConfirmation:false}));
$('#close-dialog').onclick=()=>$('#dialog').close();
function render(){const c=cards[order[index]];$('#flip').classList.remove('revealed');$('#flip').setAttribute('aria-label','Virar carta e ler história');$('#story-label').textContent='CARTA '+String(c.number).padStart(2,'0')+' · POP';$('#story-title').textContent=c.title;$('#story-text').textContent=c.text;$('#story-classification').textContent=c.classification;$('#counter').textContent=String(index+1).padStart(2,'0')+' / '+String(order.length).padStart(2,'0');$('#flip-hint').textContent='Toque na carta para revelar a história';$('#card-heading').textContent='Uma história te espera.'}
function draw(){order=cards.map((_,i)=>i);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}index=0;render();show('card')}
$('#stack').onclick=draw;
function move(delta){index=(index+delta+order.length)%order.length;render()}
$('#next').onclick=()=>move(1);$('#previous').onclick=()=>move(-1);
$('#flip').onclick=()=>{if(suppressClick){suppressClick=false;return}const revealed=$('#flip').classList.toggle('revealed');$('#flip').setAttribute('aria-label',revealed?'Ocultar história e virar para o verso':'Virar carta e ler história');$('#flip-hint').textContent=revealed?'Arraste para o lado para uma história diferente':'Toque na carta para revelar a história';$('#card-heading').textContent=revealed?'Entre em sintonia.':'Uma história te espera.'};
$('.carousel').addEventListener('pointerdown',e=>{startX=e.clientX;startY=e.clientY;suppressClick=false});$('.carousel').addEventListener('pointerup',e=>{let dx=e.clientX-startX,dy=e.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){suppressClick=true;move(dx<0?1:-1)}});
document.addEventListener('keydown',e=>{if(!$('#card').hidden&&!$('#dialog').open){if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)}});
