const $=s=>document.querySelector(s);
const screens={home:$('#home'),lobby:$('#lobby'),game:$('#game'),result:$('#result')};
const questions=[
['รู้จักกัน','ถ้าให้เลือกไปเที่ยวด้วยกัน 1 ที่ ฉันจะเลือกที่ไหน?',['ทะเล','ภูเขา','คาเฟ่ในเมือง','ต่างประเทศ']],
['รู้จักกัน','ถ้าฉันมีวันหยุด 1 วัน ฉันอยากทำอะไรมากที่สุด?',['นอนอยู่บ้าน','ออกไปเที่ยว','ดูหนัง/ซีรีส์','ไปหาอะไรกิน']],
['รู้จักกัน','ถ้าฉันได้เงินก้อนใหญ่ ฉันน่าจะซื้ออะไรเป็นอย่างแรก?',['ของที่อยากได้','รถ/มอเตอร์ไซค์','เก็บหรือลงทุน','พาเธอไปเที่ยว']],
['รู้จักกัน','เวลาเครียด ฉันมักจะทำอะไร?',['เงียบและอยู่คนเดียว','นอน','หาอะไรทำให้ลืม','เล่าให้เธอฟัง']],
['รู้จักกัน','ถ้าฉันเลือกอาหารได้แค่อย่างเดียวทั้งวัน ฉันจะเลือกอะไร?',['ของหวาน','ของทอด','อาหารตามสั่ง','หมูกระทะ/ชาบู']],
['รู้จักกัน','ถ้าฉันตื่นสาย สิ่งแรกที่ฉันน่าจะทำคืออะไร?',['รีบอาบน้ำ','เช็กมือถือ','หาอะไรกิน','นอนต่อ']],
['รู้จักกัน','ของขวัญแบบไหนที่ทำให้ฉันดีใจที่สุด?',['ของที่ใช้ได้จริง','ของที่อยากได้มานาน','ของทำมือ','เซอร์ไพรส์พาไปเที่ยว']],
['รู้จักกัน','ถ้าเลือกดูหนังกับเธอ ฉันน่าจะเลือกแนวไหน?',['โรแมนติก','ตลก','แอ็กชัน','สยองขวัญ']],
['ความสัมพันธ์','สิ่งแรกที่ฉันชอบในตัวเธอคืออะไร?',['หน้าตา','นิสัย','รอยยิ้ม/แววตา','ความเป็นตัวเอง']],
['ความสัมพันธ์','เวลาเราทะเลาะกัน ฉันอยากให้เธอทำอะไรมากที่สุด?',['เข้ามาคุย','ให้เวลาฉันก่อน','กอดหรือปลอบ','พูดตรง ๆ ว่ารู้สึกยังไง']],
['ความสัมพันธ์','ถ้ามีเวลาอยู่ด้วยกันแค่ 2 ชั่วโมง ฉันอยากทำอะไร?',['กินข้าว','เดินเล่น','ดูหนัง','นั่งคุยกัน']],
['ความสัมพันธ์','คำพูดแบบไหนจากเธอที่ทำให้ฉันใจฟูที่สุด?',['คิดถึงนะ','เก่งมาก','อยู่ข้าง ๆ เสมอ','รักนะ']],
['ความสัมพันธ์','ฉันคิดว่าอะไรสำคัญที่สุดในความสัมพันธ์?',['ความซื่อสัตย์','การสื่อสาร','การให้เวลา','การเข้าใจกัน']],
['ความสัมพันธ์','ถ้าเรามีวันครบรอบ ฉันอยากฉลองแบบไหน?',['กินร้านดี ๆ','ไปเที่ยว','อยู่ด้วยกันเงียบ ๆ','ทำอะไรเซอร์ไพรส์']],
['ความสัมพันธ์','ถ้าเธอไม่สบาย ฉันน่าจะทำอะไรเป็นอย่างแรก?',['ถามว่าเป็นอะไร','หาอาหาร/ยาให้','โทรหา','ไปหาเลย']],
['ความสัมพันธ์','ถ้าเราได้ถ่ายรูปคู่ 1 รูป ฉันอยากได้ฟีลไหน?',['หวาน ๆ','ธรรมชาติ','ตลก ๆ','เท่ ๆ']],
['ความสัมพันธ์','อะไรทำให้ฉันรู้สึกว่าเธอใส่ใจฉันที่สุด?',['จำรายละเอียดเล็ก ๆ ได้','ทักมาหา','ช่วยเวลามีปัญหา','หาเวลาให้']],
['นิสัย/ชีวิตประจำวัน','ตอนเช้าฉันเป็นคนแบบไหน?',['สดใสทันที','งัวเงียมาก','ต้องกินก่อน','ไม่อยากคุยกับใคร']],
['นิสัย/ชีวิตประจำวัน','ถ้าโทรศัพท์เหลือแบต 5% ฉันจะทำอะไรก่อน?',['เปิดโหมดประหยัด','หาที่ชาร์จ','ปิดแอป','ปล่อยเลย']],
['นิสัย/ชีวิตประจำวัน','ถ้าฉันต้องรอใครนาน ๆ ฉันมักจะ...',['ใจเย็น','เล่นมือถือ','เริ่มบ่น','หาอย่างอื่นทำ']],
['นิสัย/ชีวิตประจำวัน','เวลาจะซื้อของ ฉันมักจะ...',['ดูราคาก่อน','ดูรีวิว','ซื้อเลยถ้าชอบ','เทียบหลายร้าน']],
['นิสัย/ชีวิตประจำวัน','ถ้าฉันเหนื่อยจากงาน สิ่งที่ช่วยให้ดีขึ้นคืออะไร?',['นอน','กินของอร่อย','คุยกับเธอ','อยู่เงียบ ๆ']],
['นิสัย/ชีวิตประจำวัน','ฉันน่าจะใช้เงินกับอะไรเยอะที่สุด?',['อาหาร','ของใช้','รถ/อุปกรณ์','เที่ยว']],
['นิสัย/ชีวิตประจำวัน','ถ้าให้เลือกทำงานบ้านอย่างเดียว ฉันจะเลือกอะไร?',['กวาด/ถู','ล้างจาน','ซักผ้า','จัดของ']],
['นิสัย/ชีวิตประจำวัน','เวลามีเรื่องให้ตัดสินใจ ฉันมักจะ...',['คิดนาน','ถามคนอื่น','ใช้ความรู้สึก','เลือกเร็ว']],
['นิสัย/ชีวิตประจำวัน','ถ้าต้องออกจากบ้านใน 10 นาที ฉันจะ...',['พร้อมทันที','รีบมาก','ลืมของแน่นอน','ขออีก 10 นาที']],
['กวน ๆ / แอบปั่น','ถ้าฉันเป็นสัตว์ 1 วัน ฉันน่าจะเป็นอะไร?',['แมว','หมา','หมี','ลิง']],
['กวน ๆ / แอบปั่น','ถ้าเราติดอยู่บนเกาะ ฉันจะมีประโยชน์ที่สุดเรื่องอะไร?',['หาอาหาร','สร้างที่พัก','หาทางกลับ','ให้กำลังใจ']],
['กวน ๆ / แอบปั่น','ถ้าเธอให้ฉันเลือกกินของเดิม 1 อย่าง 7 วัน ฉันจะเลือกอะไร?',['หมูกระทะ','ชาบู','ไก่ทอด','กะเพรา']],
['กวน ๆ / แอบปั่น','ถ้าฉันมีพลังวิเศษ 1 อย่าง ฉันจะเลือกอะไร?',['หยุดเวลา','อ่านใจ','วาร์ป','เสกเงิน']],
['กวน ๆ / แอบปั่น','ถ้าเราเล่นเกมแล้วฉันแพ้ ฉันน่าจะทำอะไร?',['ยอมรับ','ขอแก้มือ','โทษดวง','โทษเธอ']],
['กวน ๆ / แอบปั่น','ถ้าฉันกลายเป็นคนดัง ฉันน่าจะดังจากอะไร?',['ความเก่ง','ความฮา','หน้าตา','เรื่องแปลก ๆ']],
['กวน ๆ / แอบปั่น','ถ้าฉันต้องเลือกคำหนึ่งคำแทนตัวเอง ฉันจะเลือกอะไร?',['ขี้เล่น','จริงจัง','ดื้อ','ใจดี']],
['กวน ๆ / แอบปั่น','ถ้าฉันมีเงินเหลือ 100 บาทตอนดึก ฉันจะเอาไปทำอะไร?',['สั่งของกิน','เก็บไว้','ซื้อของออนไลน์','เติมเกม/แอป']],
['เรื่องของเรา','ถ้าย้อนกลับไปวันแรกที่เราเจอกัน ฉันอยากทำอะไรต่างจากเดิม?',['กล้าคุยมากขึ้น','แต่งตัวให้ดีกว่านี้','พูดอะไรดี ๆ กว่านั้น','ไม่เปลี่ยนอะไรเลย']],
['เรื่องของเรา','ช่วงเวลาไหนของเราที่ฉันน่าจะจำได้ดีที่สุด?',['วันแรกที่เจอกัน','วันที่เริ่มคุย','ทริปแรก','ช่วงที่ผ่านเรื่องยาก ๆ ด้วยกัน']],
['เรื่องของเรา','ถ้าเราได้ไปเที่ยวด้วยกันพรุ่งนี้ ฉันอยากให้ทริปเป็นแบบไหน?',['ชิล ๆ','แน่นทุกกิจกรรม','เน้นกิน','เน้นถ่ายรูป']],
['เรื่องของเรา','ถ้าเรามีบ้านด้วยกัน ฉันอยากให้มีอะไรเป็นพิเศษ?',['มุมดูหนัง','ครัวใหญ่','โรงรถ/พื้นที่งานอดิเรก','สวน/พื้นที่นั่งเล่น']],
['เรื่องของเรา','สิ่งหนึ่งที่ฉันอยากทำกับเธอในอนาคตคืออะไร?',['เที่ยวหลายประเทศ','สร้างบ้าน/ชีวิตด้วยกัน','ทำธุรกิจด้วยกัน','เก็บความทรงจำเล็ก ๆ ไปเรื่อย ๆ']],
['เรื่องของเรา','ถ้าเราต้องเลือกเพลงประจำคู่ของเรา ฉันจะเลือกแบบไหน?',['หวาน ๆ','อบอุ่น','สนุก ๆ','ความหมายลึก ๆ']]
];
let peer=null,conn=null,isHost=false,room='',me='',other='',state=null,selectedRounds=20,selectedMode='alternate',timerId=null;
const q=[...questions];
function show(name){Object.values(screens).forEach(x=>x.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0)}
function protectPullToRefresh(){let sy=0;document.addEventListener('touchstart',e=>{sy=e.touches[0].clientY},{passive:true});document.addEventListener('touchmove',e=>{const y=e.touches[0].clientY;if(window.scrollY<=0&&y>sy)e.preventDefault()},{passive:false});document.addEventListener('touchend',()=>{sy=0},{passive:true});window.addEventListener('beforeunload',e=>{if(state&&(state.phase==='choose'||state.phase==='guess')){e.preventDefault();e.returnValue='';}})}
protectPullToRefresh();
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
function send(type,payload={}){if(conn&&conn.open)conn.send({type,...payload})}
function code(){const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const bytes=new Uint8Array(4);crypto.getRandomValues(bytes);return 'LD'+Array.from(bytes,b=>alphabet[b%alphabet.length]).join('')}
const peerOptions={host:'0.peerjs.com',port:443,path:'/',secure:true,debug:2,config:{iceServers:[{urls:'stun:stun.l.google.com:19302'}]}};
function destroyPeer(){try{if(conn)conn.close()}catch(e){}try{if(peer&&!peer.destroyed)peer.destroy()}catch(e){}conn=null;peer=null;}
function setConn(ok){$('#connection').textContent=ok?(conn?.open?'เชื่อมต่อแล้ว':'เซิร์ฟเวอร์พร้อม'):'ยังไม่เชื่อมต่อ';$('#connection').className='connection '+(ok?'online':'offline')}
function updateLobby(){
const ps=state?.players||[];
[['#p1',ps[0]],['#p2',ps[1]]].forEach(([id,p])=>{const e=$(id);e.querySelector('b').textContent=p?.name||'รอผู้เล่น';e.querySelector('small').textContent=p?.ready?'พร้อมแล้ว':'ยังไม่พร้อม';e.classList.toggle('ready',!!p?.ready)});
$('#roomCode').textContent=room;
const bothReady=ps.length===2&&ps.every(p=>p?.name&&p.ready);
$('#lobbyHint').textContent=isHost?(!ps[1]?.name?'ส่งรหัสห้องให้อีกคน แล้วรอให้เข้ามา':bothReady?'ทั้งคู่พร้อมแล้ว กดเริ่มเกมได้เลย':'กด “พร้อมเล่น” เมื่อพร้อม'):'รอเจ้าของห้องเริ่มเกม';
const myPlayer=ps.find(p=>p?.id===myRole());
$('#readyBtn').textContent=isHost&&!conn?.open?'รอผู้เล่น':isHost&&bothReady?'เริ่มเกม':'พร้อมเล่น';
$('#readyBtn').disabled=isHost?(!conn||!conn.open||!!myPlayer?.ready&&!bothReady):(!conn||!conn.open||!!myPlayer?.ready);
if(state){
document.querySelectorAll('#rounds button').forEach(b=>b.classList.toggle('selected',Number(b.dataset.value)===state.rounds));
document.querySelectorAll('#mode button').forEach(b=>b.classList.toggle('selected',b.dataset.value===state.mode));
}
}
function shuffledQuestionOrder(){const order=questions.map((_,i)=>i);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}return order}
function questionFor(index=state.index){return q[state.questionOrder?.[index]??(index%q.length)]}
function makeState(){return{players:[{id:'host',name:me,ready:false},{id:'guest',name:other,ready:false}],rounds:selectedRounds,mode:selectedMode,index:0,questionOrder:shuffledQuestionOrder(),chooser:null,chooserByRound:{},actual:null,guess:null,score:{host:0,guest:0},history:[],phase:'lobby'}}
function chooserFor(index){const mode=state?.mode||selectedMode;if(mode==='host')return'host';if(mode==='guest')return'guest';if(mode==='random'){if(state?.chooserByRound?.[index])return state.chooserByRound[index];const role=Math.random()<.5?'host':'guest';if(state){state.chooserByRound=state.chooserByRound||{};state.chooserByRound[index]=role}return role}return index%2===0?'host':'guest'}
function renderQuestion(){clearInterval(timerId);const item=questionFor();$('#qNo').textContent=(state.index+1)+' / '+state.rounds;$('#category').textContent=item[0];$('#question').textContent=item[1];$('#choices').innerHTML=item[2].map((t,i)=>'<button class="choice" data-n="'+(i+1)+'"><span class="num">'+(i+1)+'</span><span class="txt">'+t+'</span></button>').join('');state.chooser=chooserFor(state.index);state.actual=null;state.guess=null;state.phase='choose';$('#roleBanner').textContent=(state.chooser===myRole()?'คุณเป็นคนเลือกคำตอบแบบลับ · เลือกได้เลย':'อีกคนเป็นคนเลือกคำตอบแบบลับ · รอให้อีกคนเลือกก่อน');$('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');document.querySelectorAll('.choice').forEach(b=>{b.onclick=()=>pick(+b.dataset.n);b.disabled=state.chooser!==myRole()});updateScores()}
function myRole(){return isHost?'host':'guest'}
function lockChoices(){document.querySelectorAll('.choice').forEach(b=>{b.disabled=true;b.classList.add('locked')})}
function pick(n){
if(state.phase==='choose'&&state.chooser===myRole()){
state.actual=n;state.phase='guess';
$('#talk').classList.add('hidden');
const btn=document.querySelector('.choice[data-n="'+n+'"]');if(btn)btn.classList.add('selected');
lockChoices();send('ACTUAL',{n});
if(state.chooser!==myRole())return;
$('#roleBanner').textContent='เลือกคำตอบแล้ว · รอให้อีกคนทาย';
toast('เลือกคำตอบแล้ว ส่งให้อีกคนทายแบบลับแล้ว');
}else if(state.phase==='guess'&&state.chooser!==myRole()){
state.guess=n;lockChoices();clearInterval(timerId);$('#revealNowBtn').classList.remove('hidden');
$('#roleBanner').textContent='เลือกคำตอบแล้ว · กด “เฉลยเลย” ได้ทันที';
$('#talkPrompt').textContent='ตรวจคำตอบให้เรียบร้อย แล้วกด “เฉลยเลย”';
if(isHost)reveal();
}}
function startGuessTimer(){
clearInterval(timerId);state.phase='guess';$('#talk').classList.remove('hidden');$('#revealNowBtn').classList.add('hidden');$('#timer').textContent=60;$('#talkPrompt').textContent='เลือกคำตอบที่คิดว่าอีกคนเลือก ภายใน 60 วินาที';
const choices=document.querySelectorAll('.choice');choices.forEach(b=>{b.disabled=state.chooser===myRole();b.classList.toggle('locked',state.chooser===myRole())});
timerId=setInterval(()=>{const n=Number($('#timer').textContent)-1;$('#timer').textContent=n;if(n<=0){clearInterval(timerId);if(!Number.isInteger(state.guess)){state.guess=null;lockChoices();$('#roleBanner').textContent='หมดเวลา · ข้ามไปเฉลยคำตอบ';toast('หมดเวลา ระบบกำลังเฉลยคำตอบ');if(isHost)reveal();else send('GUESS',{n:null})}}},1000)
}
function maybeTalk(){startGuessTimer()}
function choiceText(value){const options=questionFor()[2];return Number.isInteger(value)&&value>=1&&value<=options.length?options[value-1]:'ไม่ได้ทาย'}
function renderReveal(actual,guess,ok){
const item=questionFor();
$('#actual').textContent=choiceText(actual);$('#guess').textContent=choiceText(guess);
$('#resultText').textContent=ok?'ทายถูก รู้ใจกันจริง ๆ':Number.isInteger(guess)?'พลาดข้อนี้ แต่ได้รู้จักกันมากขึ้น':'หมดเวลา รอบนี้ไม่มีคะแนน';
$('#resultText').className='result-text '+(ok?'ok':'miss');$('#talk').classList.add('hidden');$('#reveal').classList.remove('hidden');
if(!isHost)state.history.push({question:item[1],actual,guess,ok,chooser:state.chooser});
updateScores()
}
function reveal(){
clearInterval(timerId);
if(!isHost||state.phase==='reveal'||!Number.isInteger(state.actual))return;
const ok=state.actual===state.guess;const guesser=state.chooser==='host'?'guest':'host';if(ok)state.score[guesser]++;
const item=questionFor();state.history.push({question:item[1],actual:state.actual,guess:state.guess,ok,chooser:state.chooser});state.phase='reveal';
renderReveal(state.actual,state.guess,ok);send('REVEAL',{actual:state.actual,guess:state.guess,ok,score:state.score});
}
function updateScores(){$('#scoreMe').textContent=state.score[myRole()];$('#scoreOther').textContent=state.score[myRole()==='host'?'guest':'host']}
function finish(){clearInterval(timerId);show('result');const mine=state.score[myRole()],theirs=state.score[myRole()==='host'?'guest':'host'];const total=state.rounds;const pct=Math.round((state.history.filter(x=>x.ok).length/total)*100);$('#percent').textContent=pct+'%';$('#resultSummary').textContent=pct>=80?'รู้ใจกันสุด ๆ':'คะแนนไม่สำคัญเท่ากับได้คุยกัน';$('#finalMe').textContent=mine;$('#finalOther').textContent=theirs;$('#historyList').innerHTML=state.history.map((h,i)=>'<div class="history-row"><span class="q">'+(i+1)+'. '+h.question+'<small class="answer-detail">คำตอบจริง: '+choiceTextAt(h.question,h.actual)+' · ทาย: '+choiceTextAt(h.question,h.guess)+'</small></span><span class="badge '+(h.ok?'ok':'miss')+'">'+(h.ok?'ตรงกัน':'ไม่ตรง')+'</span></div>').join('')}
function choiceTextAt(question,answer){const item=questions.find(q=>q[1]===question);return item&&Number.isInteger(answer)&&answer>=1&&answer<=item[2].length?item[2][answer-1]:'ไม่ได้ทาย'}
function startGame(){if(!isHost||!conn?.open||state.phase!=='lobby'||!state.players.every(p=>p.name&&p.ready))return;state.phase='choose';state.index=0;state.score={host:0,guest:0};state.history=[];show('game');renderQuestion();send('START',{state})}
function next(){if(state.phase!=='reveal')return;if(!isHost){send('NEXT_REQUEST');return}if(state.index+1>=state.rounds){state.phase='finished';send('FINISH',{state});finish();return}state.index++;state.phase='choose';renderQuestion();send('NEXT',{index:state.index,mode:state.mode,chooserByRound:state.chooserByRound})}
function startRematch(){if(!isHost||!state.players[1].name||!conn?.open)return toast('อีกคนหลุดจากห้อง จึงเริ่มเกมซ้ำไม่ได้');state=makeState();other=state.players[1].name;show('lobby');updateLobby();send('LOBBY',{state})}
function setupHost(){if(!window.Peer)return toast('โหลดระบบออนไลน์ไม่สำเร็จ โปรดรีโหลดหน้าแล้วลองอีกครั้ง');isHost=true;document.querySelectorAll('#rounds button,#mode button').forEach(b=>b.disabled=false);room=code();me=$('#name').value.trim()||'ผู้เล่น 1';destroyPeer();peer=new Peer(room,peerOptions);peer.on('open',()=>{setConn(true);state=makeState();updateLobby();show('lobby');toast('สร้างห้องแล้ว ส่งรหัสให้แฟนได้เลย')});peer.on('connection',c=>{if(conn&&conn.open){c.close();return}conn=c;wire()});peer.on('disconnected',()=>{setConn(false);toast('การเชื่อมต่อเซิร์ฟเวอร์หลุด กำลังเชื่อมใหม่...');try{peer.reconnect()}catch(e){}});peer.on('error',e=>{setConn(false);if(e.type==='unavailable-id'){room=code();destroyPeer();toast('กำลังสร้างรหัสห้องใหม่...');setTimeout(setupHost,500)}else toast('ระบบเชื่อมต่อขัดข้อง: '+e.type)})}
function setupGuest(){room=$('#roomInput').value.trim().toUpperCase();me=$('#name').value.trim()||'ผู้เล่น 2';if(!room)return toast('กรอกรหัสห้องก่อน');if(!/^LD[A-Z0-9]{4}$/.test(room))return toast('รหัสห้องต้องเป็นรูปแบบ LDxxxx');if(!window.Peer)return toast('โหลดระบบออนไลน์ไม่สำเร็จ โปรดรีโหลดหน้าแล้วลองอีกครั้ง');isHost=false;document.querySelectorAll('#rounds button,#mode button').forEach(b=>b.disabled=true);destroyPeer();setConn(false);peer=new Peer(peerOptions);peer.on('open',()=>{connectGuest();show('lobby');updateLobby()});peer.on('disconnected',()=>{setConn(false);toast('สัญญาณเซิร์ฟเวอร์หลุด กำลังเชื่อมใหม่...');try{peer.reconnect()}catch(e){}});peer.on('error',e=>{setConn(false);toast(e.type==='peer-unavailable'?'ไม่พบห้องนี้: ตรวจรหัสอีกครั้ง':'เชื่อมต่อไม่สำเร็จ: '+e.type)})}
function connectGuest(attempt=0){if(!peer||peer.destroyed)return;if(conn&&conn.open)return;conn=peer.connect(room,{reliable:true,serialization:'json'});wire();setTimeout(()=>{if(!conn||!conn.open){if(attempt<2){toast('กำลังเชื่อมต่อห้อง...');try{if(conn)conn.close()}catch(e){}conn=null;setTimeout(()=>connectGuest(attempt+1),1200)}else toast('เชื่อมต่อไม่สำเร็จ ลองสร้างห้องใหม่แล้วเข้ารหัสใหม่อีกครั้ง')}},3500)}
function wire(){if(!conn)return;conn.on('open',()=>{setConn(true);toast(isHost?'แฟนเชื่อมต่อแล้ว':'เข้าห้องสำเร็จ');if(!isHost)send('JOIN',{name:me})});conn.on('close',()=>{setConn(false);toast('การเชื่อมต่อถูกตัด')});conn.on('error',e=>{setConn(false);toast('เชื่อมต่อไม่สำเร็จ: '+(e?.type||'ลองใหม่'))});conn.on('data',handle)}
function handle(m){
if(!m||typeof m.type!=='string'||(!state&&!(m.type==='LOBBY'&&!isHost)))return;
if(m.type==='JOIN'&&isHost){
if(!state.players[1].name){state.players[1]={id:'guest',name:String(m.name||'ผู้เล่น 2').trim().slice(0,18),ready:false};other=state.players[1].name}
send('LOBBY',{state});updateLobby();return
}
if(m.type==='LOBBY'&&!isHost&&m.state){state=m.state;other=state.players[0].name;show('lobby');updateLobby();return}
if(m.type==='READY'&&isHost&&m.role==='guest'&&state.phase==='lobby'){
const guest=state.players.find(p=>p.id==='guest');if(guest)guest.ready=true;updateLobby();send('LOBBY',{state});return
}
if(m.type==='START'&&!isHost&&m.state){state=m.state;show('game');renderQuestion();return}
if(m.type==='ACTUAL'&&Number.isInteger(m.n)&&m.n>=1&&m.n<=4){state.actual=m.n;state.phase='guess';if(state.chooser!==myRole()){document.querySelectorAll('.choice').forEach(b=>{b.disabled=false;b.classList.remove('locked')});$('#roleBanner').textContent='อีกคนเลือกแล้ว · ถึงตาคุณทายภายใน 60 วินาที';startGuessTimer();$('#revealNowBtn').classList.add('hidden');toast('อีกคนเลือกแล้ว เลือกคำตอบของคุณได้เลย')}else{$('#roleBanner').textContent='เลือกคำตอบแล้ว · รออีกคนทาย'}return}
if(m.type==='GUESS'&&isHost){state.guess=Number.isInteger(m.n)?m.n:null;reveal();return}
if(m.type==='REVEAL'&&!isHost){clearInterval(timerId);state.actual=m.actual;state.guess=Number.isInteger(m.guess)?m.guess:null;state.score=m.score;state.phase='reveal';renderReveal(state.actual,state.guess,!!m.ok);return}
if(m.type==='NEXT_REQUEST'&&isHost){next();return}
if(m.type==='NEXT'&&!isHost){state.index=m.index;state.mode=m.mode||state.mode;state.chooserByRound=m.chooserByRound||state.chooserByRound||{};state.phase='choose';renderQuestion();return}
if(m.type==='FINISH'&&!isHost&&m.state){state=m.state;finish()}
if(m.type==='REMATCH_REQUEST'&&isHost&&state.phase==='finished'){startRematch()}
}
$('#rounds').onclick=e=>{if(e.target.dataset.value){selectedRounds=+e.target.dataset.value;if(isHost&&state?.phase==='lobby'){state.rounds=selectedRounds;send('LOBBY',{state})}document.querySelectorAll('#rounds button').forEach(x=>x.classList.toggle('selected',x===e.target))}}
$('#mode').onclick=e=>{if(e.target.dataset.value){selectedMode=e.target.dataset.value;if(isHost&&state?.phase==='lobby'){state.mode=selectedMode;send('LOBBY',{state})}document.querySelectorAll('#mode button').forEach(x=>x.classList.toggle('selected',x===e.target))}}
$('#createBtn').onclick=()=>setupHost();$('#joinBtn').onclick=()=>setupGuest();
$('#copyRoom').onclick=async()=>{try{await navigator.clipboard.writeText(room);toast('คัดลอกรหัสห้องแล้ว')}catch(e){toast('คัดลอกไม่ได้ กรุณาจดรหัสห้องไว้')}};
$('#readyBtn').onclick=()=>{if(!state||!conn?.open)return;if(isHost&&state.players.every(p=>p.name&&p.ready)){startGame();return}const role=myRole(),player=state.players.find(p=>p.id===role);if(!player||player.ready)return;player.ready=true;updateLobby();send('READY',{role});if(isHost)send('LOBBY',{state})};
$('#revealNowBtn').onclick=()=>{if(state.phase==='guess'&&state.chooser!==myRole()&&Number.isInteger(state.guess)){send('GUESS',{n:state.guess});if(isHost)reveal();}};$('#nextBtn').onclick=next;
$('#playAgain').onclick=()=>{if(isHost)startRematch();else if(conn?.open){send('REMATCH_REQUEST');toast('ส่งคำขอเล่นอีกครั้งแล้ว')}else toast('การเชื่อมต่อขาดหาย กรุณาโหลดหน้าแล้วเข้าห้องใหม่')};
$('#homeBtn').onclick=()=>location.reload();
updateLobby();
