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

      const symbols=new Set(source),compact=answer.replace(/\s/g,'');
      const related=idiomSeeds.map(([candidate,candidateRaw],candidateIndex)=>{if(candidateIndex===seedIndex)return null;const candidateSymbols=new Set(candidateRaw.split(' '));let sharedSymbols=0;for(const symbol of symbols)if(candidateSymbols.has(symbol))sharedSymbols++;const other=candidate.replace(/\s/g,'');let longest=0;for(let start=0;start<compact.length;start++)for(let end=start+2;end<=compact.length;end++)if(other.includes(compact.slice(start,end)))longest=Math.max(longest,end-start);let sharedBigrams=0;const bigrams=new Set(compact.match(/.{2}/gu)||[]);for(const gram of bigrams)if(other.includes(gram))sharedBigrams++;return{candidate,candidateIndex,score:sharedSymbols*30+longest*4+sharedBigrams}}).filter(Boolean).sort((a,b)=>b.score-a.score||a.candidateIndex-b.candidateIndex).slice(0,4).map(item=>item.candidate);
      const choices=[answer,...related];
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
function createMathChallenge(difficulty='medium') {
  let kind,a,b,c,d,answer,prompt;
  const rand=(min,max)=>min+Math.floor(Math.random()*(max-min+1));
  if(difficulty==='easy'){
    kind=rand(0,3);
    if(kind===0){a=rand(12,49);b=rand(11,39);answer=a+b;prompt=`${a} + ${b} = ?`;}
    else if(kind===1){a=rand(30,89);b=rand(10,a-1);answer=a-b;prompt=`${a} − ${b} = ?`;}
    else if(kind===2){a=rand(3,12);b=rand(3,12);answer=a*b;prompt=`${a} × ${b} = ?`;}
    else {b=rand(3,12);answer=rand(3,12);a=b*answer;prompt=`${a} ÷ ${b} = ?`;}
  }else if(difficulty==='hard'||difficulty==='pro'){
    kind=rand(0,5);
    if(kind===0){a=rand(12,45);b=rand(11,39);c=rand(3,12);answer=a+b*c;prompt=`${a} + ${b} × ${c} = ?`;}
    else if(kind===1){a=rand(12,35);b=rand(8,29);c=rand(3,12);answer=(a+b)*c;prompt=`(${a} + ${b}) × ${c} = ?`;}
    else if(kind===2){b=rand(4,14);answer=rand(8,28);a=b*answer;c=rand(10,70);answer=a/b+c;prompt=`${a} ÷ ${b} + ${c} = ?`;}
    else if(kind===3){a=rand(14,45);b=rand(5,18);c=rand(4,24);d=rand(3,15);answer=a*b-c*d;prompt=`${a} × ${b} − ${c} × ${d} = ?`;}
    else if(kind===4){a=rand(18,90);b=rand(7,58);c=rand(5,44);answer=(a-b)*c;prompt=`(${a} − ${b}) × ${c} = ?`;}
    else {a=rand(2,12);b=rand(2,12);c=rand(2,12);d=rand(2,9);answer=a*b+c*d;prompt=`${a} × ${b} + ${c} × ${d} = ?`;}
    if(difficulty==='pro'&&Math.random()<.45){const x=rand(3,18),den=rand(2,9),k=rand(4,18);a=x*den;answer=x*k;prompt=`(${a} ÷ ${den}) × ${k} = ?`;}
    if(difficulty==='pro'&&Math.random()<.35){a=rand(12,45);b=rand(8,31);c=rand(2,9);answer=(a+b)/c; if(!Number.isInteger(answer)){b+=c-((a+b)%c);answer=(a+b)/c;}prompt=`(${a} + ${b}) ÷ ${c} = ?`;}
  }else{
    kind=rand(0,4);
    if(kind===0){a=rand(11,49);b=rand(7,29);c=rand(2,9);answer=a+b*c;prompt=`${a} + ${b} × ${c} = ?`;}
    else if(kind===1){a=rand(8,31);b=rand(6,24);c=rand(2,8);answer=(a+b)*c;prompt=`(${a} + ${b}) × ${c} = ?`;}
    else if(kind===2){b=rand(3,11);answer=rand(3,19);a=b*answer;c=rand(2,25);answer+=c;prompt=`${a} ÷ ${b} + ${c} = ?`;}
    else if(kind===3){a=rand(12,39);b=rand(3,12);c=rand(2,15);d=rand(2,9);answer=a*b-c*d;prompt=`${a} × ${b} − ${c} × ${d} = ?`;}
    else {a=rand(20,89);b=rand(5,39);c=rand(3,34);answer=a-b+c;prompt=`${a} − ${b} + ${c} = ?`;}
  }
  const distractors=[answer+1,answer-1,answer+rand(2,9),answer-rand(2,9),answer+(kind%2?13:-13)];
  let unique=[...new Set(distractors.map(x=>Math.round(x)))].filter(x=>x!==answer);
  while(unique.length<4)unique.push(answer+unique.length+17);
  return choiceChallenge(prompt,String(answer),unique.slice(0,4).map(String),`math-${difficulty}-${prompt}`);
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
    const digits=shuffledCopy(['1','2','3','4','5','6','7','8','9','0']).slice(0,4);code=digits.join('');
    const sum=digits.reduce((total,x)=>total+Number(x),0),outer=Number(digits[0])+Number(digits[3]),inner=Number(digits[1])+Number(digits[2]),firstEven=Number(digits[0])%2===0,lastEven=Number(digits[3])%2===0;
    clues={sum,outer,inner,firstEven,lastEven};
    valid=candidate=>{if(candidate.length!==4||candidate[0]==='0'||new Set(candidate).size!==4)return false;const d=[...candidate].map(Number);return d.reduce((t,n)=>t+n,0)===sum&&d[0]+d[3]===outer&&d[1]+d[2]===inner&&(d[0]%2===0)===firstEven&&(d[3]%2===0)===lastEven};
  }while(!valid(code));
  const distractors=[];
  for(let tries=0;tries<8000&&distractors.length<4;tries++){const candidate=String(Math.floor(1000+Math.random()*9000));if(candidate!==code&&!distractors.includes(candidate)&&candidate[0]!=='0'&&new Set(candidate).size===4&&[...candidate].reduce((t,n)=>t+Number(n),0)===clues.sum&&!valid(candidate))distractors.push(candidate)}
  while(distractors.length<4){const d=shuffledCopy([...code]);[d[0],d[1]]=[d[1],d[0]];const candidate=d.join('');if(candidate!==code&&!distractors.includes(candidate)&&candidate[0]!=='0'&&new Set(candidate).size===4&&!valid(candidate))distractors.push(candidate);else{const candidate2=String(1023+distractors.length*137);if(candidate2!==code&&!distractors.includes(candidate2)&&!valid(candidate2))distractors.push(candidate2)}}
  const evenLabel=n=>n?'คู่':'คี่';
  const prompt=`รหัส 4 หลัก · ผลรวมเลขโดด ${clues.sum} · หลักพันและหลักหน่วยรวมกันได้ ${clues.outer} · หลักร้อยกับหลักสิบรวมกันได้ ${clues.inner} · หลักพันเป็นเลข${evenLabel(clues.firstEven)} · หลักหน่วยเป็นเลข${evenLabel(clues.lastEven)} · ห้ามเลขซ้ำ`;
  return choiceChallenge(prompt,code,distractors,'code-'+code,'ตรวจทุกเงื่อนไขพร้อมกัน: ผลรวมคู่หลัก ผลรวมคี่หลัก และเลขคู่/คี่');
}
function createOddChallenge(){
  const groups=[['นก','ปลา','แมว','สุนัข','รถยนต์'],['ดาวอังคาร','ดาวศุกร์','ดาวพฤหัสบดี','ดาวเสาร์','ดวงจันทร์'],['กีตาร์','เปียโน','ไวโอลิน','กลอง','ไมโครโฟน'],['มกราคม','มีนาคม','พฤษภาคม','กรกฎาคม','วันอังคาร'],['ทองคำ','เงิน','ทองแดง','เหล็ก','เพชร'],['วิ่ง','ว่ายน้ำ','ปั่นจักรยาน','กระโดดเชือก','อ่านหนังสือ'],['กรุงเทพฯ','เชียงใหม่','ภูเก็ต','ขอนแก่น','ประเทศไทย'],['สามเหลี่ยม','สี่เหลี่ยม','วงกลม','ห้าเหลี่ยม','ลูกบาศก์']];
  const group=groups[Math.floor(Math.random()*groups.length)],outsider=group[group.length-1],choices=shuffledCopy([...group.slice(0,4),outsider]);
  return choiceChallenge(`คำใดไม่เข้าพวก?  ${choices.join(' · ')}`,outsider,choices.filter(x=>x!==outsider),`odd-${choices.join('-')}`,'หาคุณสมบัติร่วมของ 4 ตัวเลือก แล้วเลือกตัวที่ต่าง');
}
function createDetectiveChallenge(){
  const names=shuffledCopy(['มีนา','ต้น','แพร','วิน']);
  for(let attempt=0;attempt<500;attempt++){
    const subsets=names.map(()=>{let subset=names.filter(()=>Math.random()<.5);if(!subset.length||subset.length===names.length)subset=[names[Math.floor(Math.random()*names.length)]];return subset});
    const counts=names.map(culprit=>subsets.filter(set=>set.includes(culprit)).length),solutions=counts.map((n,i)=>n===1?i:-1).filter(i=>i>=0);
    if(solutions.length!==1)continue;
    const lines=subsets.map((set,i)=>`${names[i]}: “คนร้ายคือ ${set.join(' หรือ ')}”`);
    return choiceChallenge(`มีคนร้าย 1 คน และมีคำให้การจริงเพียง 1 ข้อ
${lines.join(' · ')}`,names[solutions[0]],names.filter((_,i)=>i!==solutions[0]),`detective-${names.join('')}-${subsets.map(s=>s.join('')).join('-')}`,'นับจำนวนคำให้การที่เป็นจริงของผู้ต้องสงสัยแต่ละคน');
  }
  return createLogicChallenge();
}
function createAlgebraChallenge(){
  const x=3+Math.floor(Math.random()*18),a=4+Math.floor(Math.random()*7),b=2+Math.floor(Math.random()*20),c=2+Math.floor(Math.random()*(a-2)),d=(a-c)*x+b;
  const answer=x,prompt=`หาค่า x:  ${a}x + ${b} = ${c}x + ${d}`;
  return choiceChallenge(prompt,String(answer),[answer+1,answer-1,answer+2,Math.max(0,answer-3)],`algebra-${a}-${b}-${c}-${d}`,'ย้ายพจน์ x มาไว้ฝั่งเดียว แล้วแยกค่าคงที่');
}
function createProbabilityChallenge(){
  const cases=[['ทอยลูกเต๋า 2 ลูก ผลรวมได้ 7','1/6',['1/12','1/4','1/3','5/12']],['ทอยลูกเต๋า 1 ลูก ได้เลขคู่','1/2',['1/3','2/3','1/6','5/6']],['หยิบไพ่ 1 ใบจากสำรับ 52 ใบ ได้ A','1/13',['1/4','1/26','1/12','4/13']],['โยนเหรียญ 3 ครั้ง ออกหัวทั้งหมด','1/8',['1/4','1/6','1/16','3/8']],['ทอยลูกเต๋า 2 ลูก ได้แต้มเหมือนกัน','1/6',['1/12','1/3','1/2','5/36']],['หยิบลูกบอลแดง 3 จาก 10 ลูก 1 ครั้ง','3/10',['1/3','2/5','1/5','7/10']],['ทอยลูกเต๋า 2 ลูก ผลรวมได้ 8','5/36',['1/6','1/9','1/12','7/36']],['โยนเหรียญ 4 ครั้ง ได้หัว 2 ครั้งพอดี','3/8',['1/4','1/2','5/16','5/8']],['จับไพ่ 1 ใบ ได้ไพ่โพแดง','1/4',['1/13','1/2','1/3','3/4']],['ทอยลูกเต๋า 2 ลูก ได้ผลรวมมากกว่า 10','1/12',['1/6','1/9','1/18','1/36']],['สุ่มเลข 1–10 ได้เลขเฉพาะ','2/5',['1/5','1/2','3/5','7/10']]];
  const [prompt,answer,distractors]=cases[Math.floor(Math.random()*cases.length)];
  return choiceChallenge(`ความน่าจะเป็นเท่ากับเท่าไร?  ${prompt}`,answer,distractors,`prob-${prompt}`,'คำนวณจำนวนกรณีที่ต้องการ ÷ จำนวนกรณีทั้งหมด');
}
function createPatternChallenge() {
  const sets=[['🔴','🔵','🟡'],['▲','●','■'],['🌑','🌓','🌕'],['♠️','♥️','♦️'],['🍋','🍇','🍒']];
  const set=sets[Math.floor(Math.random()*sets.length)],start=Math.floor(Math.random()*set.length),step=Math.random()<.5?1:2;
  const sequence=Array.from({length:6},(_,i)=>set[(start+i*step)%set.length]),answer=sequence.pop();
  const distractors=shuffledCopy([...set.filter(symbol=>symbol!==answer),...new Set(sets.flat())].filter((symbol,index,all)=>symbol!==answer&&all.indexOf(symbol)===index)).slice(0,4);
  return choiceChallenge(`จับรูปแบบแล้วเลือกตัวถัดไป:  ${sequence.join('  →  ')}  →  ?`,answer,distractors,`pattern-${set.join('')}-${start}-${step}`);
}

const tabooSeeds=[
  {answer:'ส้มตำ',forbidden:['มะละกอ','ครก','ปลาร้า','เผ็ด'],options:['ส้มตำ','ตำแตง','ยำมะละกอ','ลาบ','ยำวุ้นเส้น']},
  {answer:'หมูกระทะ',forbidden:['เตา','หมู','กระทะ','น้ำจิ้ม'],options:['หมูกระทะ','ชาบู','สุกี้','ปิ้งย่าง','แจ่วฮ้อน']},
  {answer:'ชาบู',forbidden:['หม้อ','น้ำซุป','จุ่ม','เนื้อ'],options:['ชาบู','สุกี้','หมูกระทะ','ปิ้งย่าง','ก๋วยเตี๋ยวเรือ']},
  {answer:'กาแฟ',forbidden:['คาเฟอีน','เมล็ด','ชง','ขม'],options:['กาแฟ','ชา','โกโก้','มัทฉะ','นมสด']},
  {answer:'ชาไทย',forbidden:['สีส้ม','นมข้น','เย็น','ใบชา'],options:['ชาไทย','ชานมไต้หวัน','ชาเขียว','โกโก้','กาแฟเย็น']},
  {answer:'มัทฉะ',forbidden:['ชาเขียว','ญี่ปุ่น','ผง','ตี'],options:['มัทฉะ','ชาเขียว','ชาไทย','โฮจิฉะ','กาแฟ']},
  {answer:'บิงซู',forbidden:['น้ำแข็ง','เกาหลี','นม','เกล็ด'],options:['บิงซู','น้ำแข็งไส','ไอศกรีม','เฉาก๊วย','ซอฟต์เสิร์ฟ']},
  {answer:'ก๋วยเตี๋ยวเรือ',forbidden:['ชามเล็ก','น้ำตก','เลือด','เส้น'],options:['ก๋วยเตี๋ยวเรือ','ก๋วยเตี๋ยวต้มยำ','เย็นตาโฟ','บะหมี่เกี๊ยว','ข้าวซอย']},
  {answer:'ครัวซองต์',forbidden:['ฝรั่งเศส','เนย','แป้ง','ชั้น'],options:['ครัวซองต์','เดนิช','พัฟ','ขนมปัง','พาย']},
  {answer:'ซูชิ',forbidden:['ญี่ปุ่น','ข้าว','ปลา','วาซาบิ'],options:['ซูชิ','ซาชิมิ','ข้าวปั้น','ข้าวห่อสาหร่าย','เทมากิ']},
  {answer:'ทะเล',forbidden:['คลื่น','ชายหาด','น้ำเค็ม','ปลา'],options:['ทะเล','มหาสมุทร','อ่าว','เกาะ','แม่น้ำ']},
  {answer:'น้ำตก',forbidden:['ภูเขา','ไหล','หิน','แอ่งน้ำ'],options:['น้ำตก','ธารน้ำ','แก่ง','ลำธาร','น้ำพุ']},
  {answer:'ภูเขา',forbidden:['สูง','ยอด','ดอย','ปีน'],options:['ภูเขา','เนินเขา','ดอย','หน้าผา','ที่ราบสูง']},
  {answer:'สนามบิน',forbidden:['เครื่องบิน','ขึ้น','ลง','กระเป๋า'],options:['สนามบิน','สถานีรถไฟ','ท่าเรือ','สถานีขนส่ง','อาคารผู้โดยสาร']},
  {answer:'รถไฟฟ้า',forbidden:['สถานี','ราง','บัตร','ขบวน'],options:['รถไฟฟ้า','รถไฟใต้ดิน','รถไฟ','รถราง','รถด่วน']},
  {answer:'โรงแรม',forbidden:['ห้องพัก','นอน','เช็กอิน','กุญแจ'],options:['โรงแรม','รีสอร์ต','โฮสเทล','เกสต์เฮาส์','เซอร์วิสอพาร์ตเมนต์']},
  {answer:'แว่นกันแดด',forbidden:['ตา','เลนส์','แสง','ใส่'],options:['แว่นกันแดด','แว่นสายตา','คอนแทคเลนส์','หมวก','หน้ากาก']},
  {answer:'หูฟัง',forbidden:['เพลง','หู','เสียง','บลูทูธ'],options:['หูฟัง','ลำโพง','เฮดโฟน','ไมโครโฟน','เอียร์บัด']},
  {answer:'กล้องถ่ายรูป',forbidden:['ภาพ','ถ่าย','เลนส์','ชัตเตอร์'],options:['กล้องถ่ายรูป','กล้องวิดีโอ','มือถือ','กล้องฟิล์ม','กล้องวงจรปิด']},
  {answer:'ร่ม',forbidden:['ฝน','กาง','เปียก','ด้าม'],options:['ร่ม','เสื้อกันฝน','หมวก','กันสาด','ร่มสนาม']},
  {answer:'แอร์',forbidden:['เย็น','รีโมต','ห้อง','ลม'],options:['แอร์','พัดลม','เครื่องฟอกอากาศ','ฮีตเตอร์','เครื่องลดความชื้น']},
  {answer:'ลิฟต์',forbidden:['ขึ้น','ลง','ชั้น','กดปุ่ม'],options:['ลิฟต์','บันไดเลื่อน','บันได','ทางลาด','กระเช้า']},
  {answer:'ตู้เย็น',forbidden:['แช่','เย็น','อาหาร','ช่องฟรีซ'],options:['ตู้เย็น','ตู้แช่','ไมโครเวฟ','เครื่องทำน้ำแข็ง','กระติกน้ำแข็ง']},
  {answer:'หมอน',forbidden:['นอน','หนุน','เตียง','นุ่ม'],options:['หมอน','ผ้าห่ม','ที่นอน','เบาะ','หมอนข้าง']},
  {answer:'แหวน',forbidden:['นิ้ว','เพชร','สวม','แต่งงาน'],options:['แหวน','กำไล','สร้อยคอ','ต่างหู','จี้']},
  {answer:'น้ำหอม',forbidden:['กลิ่น','ฉีด','ขวด','หอม'],options:['น้ำหอม','โคโลญ','สเปรย์ระงับกลิ่น','โลชั่น','ก้านหอม']},
  {answer:'เน็ตฟลิกซ์',forbidden:['ดู','ซีรีส์','สตรีม','จอ'],options:['เน็ตฟลิกซ์','ดิสนีย์พลัส','ยูทูบ','ไพรม์วิดีโอ','เอชบีโอ']},
  {answer:'พอดแคสต์',forbidden:['ฟัง','เสียง','รายการ','ไมค์'],options:['พอดแคสต์','วิทยุ','หนังสือเสียง','ไลฟ์สด','เพลง']},
  {answer:'แชต',forbidden:['ข้อความ','พิมพ์','ส่ง','แอป'],options:['แชต','โทรศัพท์','วิดีโอคอล','อีเมล','ข้อความเสียง']},
  {answer:'เซลฟี่',forbidden:['ตัวเอง','กล้องหน้า','ถ่าย','มือถือ'],options:['เซลฟี่','ภาพหมู่','ภาพบุคคล','ภาพสะท้อน','ภาพแคนดิด']},
  {answer:'วันครบรอบ',forbidden:['วันที่','จำ','คบกัน','ฉลอง'],options:['วันครบรอบ','วันเกิด','วันวาเลนไทน์','วันแต่งงาน','วันแรกที่เจอ']},
  {answer:'ของขวัญ',forbidden:['ให้','ห่อ','เซอร์ไพรส์','แกะ'],options:['ของขวัญ','ของฝาก','ของที่ระลึก','การ์ด','ดอกไม้']},
  {answer:'ทะเลาะกัน',forbidden:['โกรธ','เถียง','ไม่เข้าใจ','งอน'],options:['ทะเลาะกัน','งอน','เถียงกัน','เข้าใจผิด','ประชด']},
  {answer:'คิดถึง',forbidden:['ห่าง','อยากเจอ','ไกล','เหงา'],options:['คิดถึง','เป็นห่วง','เหงา','รัก','โหยหา']},
  {answer:'เดต',forbidden:['แฟน','นัด','เที่ยว','สองคน'],options:['เดต','ทริป','ปาร์ตี้','กินข้าว','ดูหนัง']},
  {answer:'คำสัญญา',forbidden:['พูด','รับปาก','ทำ','อนาคต'],options:['คำสัญญา','ข้อตกลง','คำขอ','คำขอโทษ','คำมั่น']},
  {answer:'เงินเก็บ',forbidden:['ออม','ธนาคาร','ฝาก','อนาคต'],options:['เงินเก็บ','เงินลงทุน','เงินฉุกเฉิน','เงินเดือน','เงินสด']},
  {answer:'ทำงานล่วงเวลา',forbidden:['ออฟฟิศ','ดึก','เจ้านาย','โอที'],options:['ทำงานล่วงเวลา','ทำงานกะดึก','ทำงานวันหยุด','ประชุมด่วน','รับงานเพิ่ม']},
  {answer:'วันหยุด',forbidden:['ทำงาน','พัก','เสาร์','อาทิตย์'],options:['วันหยุด','วันลา','วันนักขัตฤกษ์','วันพักร้อน','วันหยุดยาว']},
  {answer:'รถติด',forbidden:['ถนน','รถ','ช้า','แยก'],options:['รถติด','รถติดไฟแดง','รถชน','ปิดถนน','รถเสีย']},
  {answer:'ฝนตก',forbidden:['เปียก','เมฆ','ร่ม','น้ำ'],options:['ฝนตก','ฝนปรอย','พายุ','ฝนฟ้าคะนอง','หมอกลง']},
  {answer:'พระอาทิตย์ตก',forbidden:['เย็น','ขอบฟ้า','แสง','พระอาทิตย์ขึ้น'],options:['พระอาทิตย์ตก','พระอาทิตย์ขึ้น','แสงสนธยา','พลบค่ำ','รุ่งสาง']},
  {answer:'หมา',forbidden:['เห่า','หาง','ซื่อสัตย์','สุนัข'],options:['หมา','หมาป่า','จิ้งจอก','แมว','สุนัขจิ้งจอก']},
  {answer:'แมว',forbidden:['เหมียว','หนวด','ขน','ร้อง'],options:['แมว','เสือ','แมวป่า','สุนัข','ลิง']},
  {answer:'ยุง',forbidden:['กัด','คัน','เลือด','บิน'],options:['ยุง','แมลงวัน','ริ้น','ผึ้ง','ตัวเรือด']},
  {answer:'งู',forbidden:['เลื้อย','พิษ','ลิ้น','ฉก'],options:['งู','ปลาไหล','กิ้งก่า','จิ้งจก','ตะกวด']},
  {answer:'หอยทาก',forbidden:['ช้า','เปลือก','เมือก','ฝน'],options:['หอยทาก','ทาก','หอยโข่ง','หอยเชอรี่','ปูเสฉวน']},
  {answer:'กีตาร์',forbidden:['ดีด','สาย','เพลง','คอร์ด'],options:['กีตาร์','อูคูเลเล่','เบส','ไวโอลิน','พิณ']},
  {answer:'เปียโน',forbidden:['คีย์','กด','เพลง','คีย์บอร์ด'],options:['เปียโน','คีย์บอร์ด','ออร์แกน','เมโลเดียน','ฮาร์ป']},
  {answer:'ฟุตบอล',forbidden:['ประตู','เตะ','ลูกบอล','สนาม'],options:['ฟุตบอล','ฟุตซอล','รักบี้','แฮนด์บอล','บาสเกตบอล']},
  {answer:'แบดมินตัน',forbidden:['ลูกขนไก่','ตบ','เน็ต','ไม้'],options:['แบดมินตัน','เทนนิส','สควอช','ปิงปอง','พิคเคิลบอล']}
];
function createTabooChallenge(used=[]){
  const available=tabooSeeds.map((_,index)=>index).filter(index=>!used.includes('taboo-'+index));
  const index=available[Math.floor(Math.random()*available.length)]??Math.floor(Math.random()*tabooSeeds.length),seed=tabooSeeds[index];
  const options=shuffledCopy(seed.options);
  return{id:'taboo-'+index,prompt:'ฟังคำใบ้จากอีกคน แล้วเลือกคำเป้าหมาย',target:seed.answer,forbidden:[...seed.forbidden],options,answer:options.indexOf(seed.answer)};
}

function createChallenge(type,used=[]) {
  if(type==='taboo')return createTabooChallenge(used);
  if(type==='math')return createMathChallenge(typeof selectedMathDifficulty==='string'?selectedMathDifficulty:'medium');
  if(type==='logic')return createLogicChallenge();
  if(type==='word')return createWordChallenge(used);
  if(type==='code')return createCodeChallenge();
  if(type==='pattern')return createPatternChallenge();
  if(type==='odd')return createOddChallenge();
  if(type==='detective')return createDetectiveChallenge();
  if(type==='algebra')return createAlgebraChallenge();
  if(type==='probability')return createProbabilityChallenge();
  return null;
}
function createUniqueChallenge(type,used=[]) {
  for(let i=0;i<100;i++){const challenge=createChallenge(type,used);if(challenge&&!used.includes(challenge.id))return challenge;}
  return createChallenge(type,used);
}
