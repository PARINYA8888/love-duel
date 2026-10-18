// Extra two-player challenges. The host creates each round and sends the
// complete prompt/options to the guest so both phones always see the same data.
const idiomSeeds = [
  ['จับปลาสองมือ','👐 🐟 🐟'], ['น้ำท่วมปาก','🌊 💧 👄 🤐'], ['ขี่ช้างจับตั๊กแตน','🐘 🏹 🦗'],
  ['ตำน้ำพริกละลายแม่น้ำ','🥣 🌶️ 🌊'], ['เข็นครกขึ้นภูเขา','🛞 🪨 ⛰️'], ['วัวหายล้อมคอก','🐄 💨 🏃 🪵'],
  ['หนีเสือปะจระเข้','🏃 🐅 ➡️ 🐊'], ['รำไม่ดีโทษปี่โทษกลอง','💃 🎺 👉 🥁'], ['กบในกะลาครอบ','🐸 🥥 🏠'],
  ['มือไม่พายเอาเท้าราน้ำ','✋ 🚣 🦶 🌊'], ['ปากหวานก้นเปรี้ยว','👄 🍯 ➡️ 🍋'], ['ขวานผ่าซาก','🪓 🌳 💥'],
  ['ชักแม่น้ำทั้งห้า','✋ 💧 🏞️ 5️⃣'], ['ปิดทองหลังพระ','🙈 🥇 🔙 🙏'], ['ตีงูให้กากิน','🪵 🐍 ➡️ 🐦‍⬛'],
  ['คางคกขึ้นวอ','🐸 ⬆️ 🛞'], ['หวานเป็นลมขมเป็นยา','🍬 💨 🍵 💊'], ['ขิงก็ราข่าก็แรง','🫚 🤜 🫚 🤛'],
  ['ตบมือข้างเดียวไม่ดัง','👏 1️⃣ 🔇'], ['ไก่เห็นตีนงูงูเห็นนมไก่','🐓 👀 🐍 👀'], ['ดินพอกหางหมู','🟤 🐷 🌀'],
  ['ฝนทั่งให้เป็นเข็ม','🌧️ 🔨 🪡'], ['กินน้ำใต้ศอก','🍽️ 💧 ⬇️ 💪'], ['เกลือเป็นหนอน','🧂 🐛'],
  ['ยกภูเขาออกจากอก','🙌 ⛰️ ➡️ 🫁'], ['ปั้นน้ำเป็นตัว','🤲 💧 🧍'], ['ไก่งามเพราะขนคนงามเพราะแต่ง','🐓 ✨ 👤 👔'],
  ['ช้างตายทั้งตัวเอาใบบัวปิด','🐘 💀 🍃'], ['ชุบมือเปิบ','💧 ✋ 🍚'], ['ข้าวใหม่ปลามัน','🍚 🆕 🐟 🛢️'],
  ['ลิงแก้แห','🐒 🪢 🕸️'], ['สอนจระเข้ให้ว่ายน้ำ','👨‍🏫 🐊 🏊'], ['อ้อยเข้าปากช้าง','🎋 ➡️ 🐘 👄'],
  ['กระต่ายตื่นตูม','🐇 😱 🥁'], ['ตักน้ำรดหัวตอ','🪣 💧 🌳'], ['คมในฝัก','🔪 📦'],
  ['กินปูนร้อนท้อง','🍽️ 🧱 🔥 😣'], ['หัวล้านได้หวี','👨‍🦲 🎁 🪮'], ['ปลาหมอตายเพราะปาก','🐟 💀 👄'],
  ['น้ำขึ้นให้รีบตัก','🌊 ⬆️ 🪣 🏃'], ['คบคนพาลพาลพาไปหาผิด','🤝 😈 ➡️ ⚠️'], ['โคแก่กินหญ้าอ่อน','🐂 👴 🍽️ 🌱'],
  ['เด็ดดอกฟ้า','🫴 🌸 ☁️'], ['ฟังหูไว้หู','👂 ✋ 👂'], ['รักพี่เสียดายน้อง','❤️ 👨 😩 👧'],
  ['หมากัดอย่ากัดตอบ','🐕 🦷 🚫 👄'], ['เห็นช้างขี้ขี้ตามช้าง','👀 🐘 💩 ➡️ 🐘'], ['จับเสือมือเปล่า','✋ 🐅'],
  ['พายเรือในอ่าง','🚣 🛁 🔄'], ['เอาหูไปนาเอาตาไปไร่','👂 🌾 👀 🌱']
];

function makeEmojiPuzzleBank() {
  const hints = [
    'อ่านภาพตามลำดับตรง ๆ', 'อ่านภาพจากท้ายมาหน้า', 'เติมภาพที่ถูกบังด้วย ❔',
    'มีภาพลวงหนึ่งตัวอยู่ท้ายชุด', 'เริ่มอ่านจากภาพที่สองแล้ววนกลับ',
    'อ่านย้อนกลับและเติมภาพที่หายไป', 'หมุนภาพไปสองตำแหน่งก่อนอ่าน',
    'เติมภาพที่หายไป แล้วข้ามภาพลวงท้ายชุด', 'อ่านย้อนกลับและข้ามภาพลวงท้ายชุด',
    'เริ่มจากภาพสุดท้ายแล้ววนต่อ โดยภาพ ❔ ถูกซ่อน'
  ];
  const decoys = ['🎈','🚲','🍕','🌙','🎧','🧊','🪁','🛸','🧸','🏀'];
  const bank = [];
  idiomSeeds.forEach(([answer,raw],seedIndex) => {
    const source = raw.split(' ');
    for (let mode=0; mode<10; mode++) {
      let tokens = [...source];
      if ([1,5,8].includes(mode)) tokens.reverse();
      else if ([4,6,9].includes(mode)) { const shift = mode===4?1:mode===6?2:source.length-1; tokens=tokens.map((_,i)=>source[(i+shift)%source.length]); }
      if ([2,5,7,9].includes(mode) && tokens.length>2) tokens[(seedIndex+mode)%tokens.length]='❔';
      if ([3,7,8].includes(mode)) tokens.push(decoys[(seedIndex+mode)%decoys.length]);
      const choices=[answer];
      for (const offset of [1,11,23]) choices.push(idiomSeeds[(seedIndex+offset)%idiomSeeds.length][0]);
      const rotate=(seedIndex*3+mode)%choices.length;
      const options=choices.map((_,i)=>choices[(i+rotate)%choices.length]);
      const answerIndex=options.indexOf(answer);
      bank.push({id:seedIndex*10+mode,answer,clue:tokens.join(' '),hint:hints[mode],options,answerIndex});
    }
  });
  return bank;
}
const emojiPuzzleBank = makeEmojiPuzzleBank();

const phraseSeeds = [
  ['วางแผน','ก่อน','แล้ว','ลงมือ'], ['ฟัง','ให้จบ','ก่อน','ตอบ'], ['ค่อย ๆ','คิด','แล้ว','ตัดสินใจ'],
  ['ความไว้ใจ','สร้าง','ด้วย','เวลา'], ['พูดตรง ๆ','แต่','รักษา','น้ำใจ'], ['ผิดพลาด','แล้ว','เรียนรู้','ต่อ'],
  ['ชนะใจ','ด้วย','ความจริงใจ','เสมอ'], ['ตั้งเป้าหมาย','แล้ว','แบ่ง','เป็นขั้น'], ['พักบ้าง','เพื่อ','ไปต่อ','ไหว'],
  ['คุยกัน','ก่อน','เข้าใจ','ผิด'], ['เลือกสิ่งสำคัญ','ก่อน','ใช้','เวลา'], ['ถามให้ชัด','ก่อน','สรุป','ความ'],
  ['งานยาก','เริ่มได้','ทีละ','ขั้น'], ['ยอมรับ','แล้ว','แก้ไข','ทันที'], ['ให้เกียรติ','กัน','แม้','เห็นต่าง'],
  ['ความสม่ำเสมอ','สำคัญกว่า','คำพูด','สวยหรู'], ['คิดต่าง','แต่','เคารพ','กัน'], ['โอกาสดี','มักมา','พร้อม','งานหนัก'],
  ['รู้ขอบเขต','แล้ว','ดูแล','ตัวเอง'], ['เปลี่ยนแผน','ได้','แต่ไม่','ทิ้งเป้าหมาย'], ['เก็บเงิน','ก่อน','ซื้อ','ของ'],
  ['พักใจ','แล้ว','ค่อย','คุย'], ['ซื่อสัตย์','กับ','ความรู้สึก','ตัวเอง'], ['ทำวันนี้','ให้','ดีกว่า','เดิม']
];
function shuffledCopy(values) { const result=[...values]; for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]]} return result; }
function choiceChallenge(prompt,answer,distractors,id,explanation='') {
  const pool=[...new Set([String(answer),...distractors.map(String).filter(value=>value!==String(answer))])];
  while(pool.length<5)pool.push(String(Number(answer)+pool.length+13));
  const options=shuffledCopy(pool.slice(0,5));
  return {id,prompt,options,answer:options.indexOf(answer),explanation};
}
function createMathChallenge() {
  const kind=Math.floor(Math.random()*5); let a,b,c,d,answer,prompt;
  if(kind===0){a=11+Math.floor(Math.random()*39);b=7+Math.floor(Math.random()*29);c=2+Math.floor(Math.random()*9);answer=a+b*c;prompt=`${a} + ${b} × ${c} = ?`;}
  else if(kind===1){a=8+Math.floor(Math.random()*31);b=6+Math.floor(Math.random()*24);c=2+Math.floor(Math.random()*8);answer=(a+b)*c;prompt=`(${a} + ${b}) × ${c} = ?`;}
  else if(kind===2){b=3+Math.floor(Math.random()*9);answer=3+Math.floor(Math.random()*17);a=b*answer;c=2+Math.floor(Math.random()*25);answer+=c;prompt=`${a} ÷ ${b} + ${c} = ?`;}
  else if(kind===3){a=12+Math.floor(Math.random()*28);b=3+Math.floor(Math.random()*12);c=2+Math.floor(Math.random()*15);d=2+Math.floor(Math.random()*9);answer=a*b-c*d;prompt=`${a} × ${b} − ${c} × ${d} = ?`;}
  else {a=20+Math.floor(Math.random()*70);b=5+Math.floor(Math.random()*40);c=3+Math.floor(Math.random()*35);answer=a-b+c;prompt=`${a} − ${b} + ${c} = ?`;}
  const distractors=[answer+1,answer-1,answer+(2+Math.floor(Math.random()*5)),answer-(2+Math.floor(Math.random()*5)),kind===0?a+b+c:kind===1?a+b+c:kind===2?a/b+c:kind===3?a*b-c*d: a+b+c];
  let unique=[...new Set(distractors.map(x=>Math.round(x)))].filter(x=>x!==answer);
  while(unique.length<4)unique.push(answer+unique.length+7);
  return choiceChallenge(prompt,String(answer),unique.slice(0,4).map(String),'math-'+kind+'-'+a+'-'+b+'-'+c+'-'+d);
}
function createLogicChallenge() {
  const family=Math.floor(Math.random()*6),p=2+Math.floor(Math.random()*12),q=2+Math.floor(Math.random()*8); let seq=[],answer,id;
  if(family===0){const step=3+Math.floor(Math.random()*17);seq=Array.from({length:5},(_,i)=>p+i*step);answer=p+5*step;id=`arith-${p}-${step}`;}
  else if(family===1){const step=2+Math.floor(Math.random()*9);seq=Array.from({length:5},(_,i)=>(p+i)*(p+i)+step);answer=(p+5)*(p+5)+step;id=`square-${p}-${step}`;}
  else if(family===2){const start=2+Math.floor(Math.random()*8);seq=[start,start+1];for(let i=2;i<6;i++)seq.push(seq[i-1]+seq[i-2]);answer=seq.pop();id=`fib-${start}`;}
  else if(family===3){const step=2+Math.floor(Math.random()*6);seq=Array.from({length:5},(_,i)=>p*(i+1)+step*(i%2));answer=p*6;id=`alt-${p}-${step}`;}
  else if(family===4){const base=2+Math.floor(Math.random()*6);seq=Array.from({length:5},(_,i)=>base**(i+1));answer=base**6;id=`power-${base}`;}
  else {const step=2+Math.floor(Math.random()*12);seq=Array.from({length:5},(_,i)=>(i+1)*(i+2)/2*step);answer=21*step;id=`tri-${step}`;}
  const prompt=`เลขถัดไปคืออะไร?  ${seq.join('  ·  ')}  ·  ?`;
  const distractors=[answer+q,answer-q,answer+2*q,Math.max(0,answer-q*2),answer+Math.ceil(answer*.1)];
  return choiceChallenge(prompt,String(answer),distractors.map(String),`logic-${id}`,'มองหารูปแบบการเพิ่ม คูณ หรือสลับลำดับของตัวเลข');
}
function createWordChallenge(used=[]) {
  const available=phraseSeeds.map((_,i)=>i).filter(i=>!used.includes(`word-${i}`));
  const index=available[Math.floor(Math.random()*available.length)]??Math.floor(Math.random()*phraseSeeds.length);
  const parts=phraseSeeds[index],answer=parts.join(' '),scrambled=shuffledCopy(parts);
  if(scrambled.join(' ')===(parts.join(' ')))scrambled.reverse();
  const wrong=[
    [...parts].reverse(),
    [parts[1],parts[0],parts[2],parts[3]],
    [parts[0],parts[2],parts[1],parts[3]],
    [parts[0],parts[1],parts[3],parts[2]]
  ].map(order=>order.join(' ')).filter((value,index,all)=>value!==answer&&all.indexOf(value)===index);
  return choiceChallenge(`เรียงวลีให้ตรงกับใจความ:  ${scrambled.join(' / ')}`,answer,wrong,`word-${index}`);
}
function createCodeChallenge() {
  let code,clues,valid;
  do {
    const digits=shuffledCopy(['1','2','3','4','5','6','7','8','9','0']).slice(0,3); code=digits.join('');
    const sum=digits.reduce((total,x)=>total+Number(x),0),tensEven=Number(digits[1])%2===0,onesEven=Number(digits[2])%2===0;
    clues={sum,tensEven,onesEven};
    valid=candidate=>candidate.length===3&&candidate[0]!=='0'&&new Set(candidate).size===3&&Number(candidate[0])+Number(candidate[1])+Number(candidate[2])===sum&&(Number(candidate[1])%2===0)===tensEven&&(Number(candidate[2])%2===0)===onesEven;
  } while(!valid(code));
  const distractors=[];
  for(let tries=0;tries<400&&distractors.length<4;tries++){const candidate=String(Math.floor(100+Math.random()*900));if(candidate!==code&&!distractors.includes(candidate)&&!valid(candidate))distractors.push(candidate)}
  while(distractors.length<4){const candidate=String(100+((Number(code)+distractors.length*137)%900));if(candidate!==code&&!distractors.includes(candidate)&&!valid(candidate))distractors.push(candidate)}
  const evenLabel=n=>n?'คู่':'คี่';
  const prompt=`รหัส 3 หลัก: ผลรวมเลขโดด = ${clues.sum} · หลักสิบเป็นเลข${evenLabel(clues.tensEven)} · หลักหน่วยเป็นเลข${evenLabel(clues.onesEven)} · ห้ามเลขซ้ำ`;
  return choiceChallenge(prompt,code,distractors,'code-'+code,'ใช้เงื่อนไขทั้งสามข้อคัดตัวเลือก');
}
function createPatternChallenge() {
  const sets=[['🔴','🔵','🟡'],['▲','●','■'],['🌑','🌓','🌕'],['♠️','♥️','♦️'],['🍋','🍇','🍒']];
  const set=sets[Math.floor(Math.random()*sets.length)],start=Math.floor(Math.random()*set.length),step=Math.random()<.5?1:2;
  const sequence=Array.from({length:6},(_,i)=>set[(start+i*step)%set.length]),answer=sequence.pop();
  const distractors=shuffledCopy([...set.filter(symbol=>symbol!==answer),...new Set(sets.flat())].filter((symbol,index,all)=>symbol!==answer&&all.indexOf(symbol)===index)).slice(0,4);
  return choiceChallenge(`จับรูปแบบแล้วเลือกตัวถัดไป:  ${sequence.join('  →  ')}  →  ?`,answer,distractors,`pattern-${set.join('')}-${start}-${step}`);
}
function createChallenge(type,used=[]) {
  if(type==='math')return createMathChallenge();
  if(type==='logic')return createLogicChallenge();
  if(type==='word')return createWordChallenge(used);
  if(type==='code')return createCodeChallenge();
  if(type==='pattern')return createPatternChallenge();
  return null;
}
function createUniqueChallenge(type,used=[]) {
  for(let i=0;i<100;i++){const challenge=createChallenge(type,used);if(challenge&&!used.includes(challenge.id))return challenge;}
  return createChallenge(type,used);
}
