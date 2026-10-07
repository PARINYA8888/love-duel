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
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
function send(type,payload={}){if(conn&&conn.open)conn.send({type,...payload})}
function code(){return 'LD'+Math.random().toString(36).slice(2,6).toUpperCase()}
const peerOptions={host:'0.peerjs.com',port:443,path:'/',secure:true,debug:2,config:{iceServers:[{urls:'stun:stun.l.google.com:19302'}]}};
function destroyPeer(){try{if(conn)conn.close()}catch(e){}try{if(peer&&!peer.destroyed)peer.destroy()}catch(e){}conn=null;peer=null;}
function setConn(ok){$('#connection').textContent=ok?'เชื่อมต่อแล้ว':'ยังไม่เชื่อมต่อ';$('#connection').className='connection '+(ok?'online':'offline')}
function updateLobby(){const ps=state?.players||[];[['#p1',ps[0]],['#p2',ps[1]]].forEach(([id,p])=>{const e=$(id);e.querySelector('b').textContent=p?.name||'รอผู้เล่น';e.querySelector('small').textContent=p?.ready?'พร้อมแล้ว':'ยังไม่พร้อม';e.classList.toggle('ready',!!p?.ready)});$('#roomCode').textContent=room;$('#lobbyHint').textContent=isHost?(ps.length<2?'ส่งรหัสห้องให้อีกคน แล้วรอให้เข้ามา':ps.every(p=>p.ready)?'ทั้งคู่พร้อมแล้ว กดเริ่มเกมได้เลย':'กด “พร้อมเล่น” เมื่อพร้อม'):'รอเจ้าของห้องเริ่มเกม';$('#readyBtn').disabled=!isHost&&(!conn||!conn.open)}
function makeState(){return{players:[{id:'host',name:me,ready:false},{id:'guest',name:other,ready:false}],rounds:selectedRounds,mode:selectedMode,index:0,chooser:null,actual:null,guess:null,score:{host:0,guest:0},history:[],phase:'lobby'}}
function chooserFor(index){if(selectedMode==='host')return'host';if(selectedMode==='guest')return'guest';if(selectedMode==='random')return Math.random()<.5?'host':'guest';return index%2===0?'host':'guest'}
function renderQuestion(){const item=q[state.index%q.length];$('#qNo').textContent=(state.index+1)+' / '+state.rounds;$('#category').textContent=item[0];$('#question').textContent=item[1];$('#choices').innerHTML=item[2].map((t,i)=>'<button class="choice" data-n="'+(i+1)+'"><span class="num">'+(i+1)+'</span><span class="txt">'+t+'</span></button>').join('');state.chooser=chooserFor(state.index);state.actual=null;state.guess=null;state.phase='choose';$('#roleBanner').textContent=(state.chooser===myRole()?'คุณเป็นคนเลือกคำตอบแบบลับ':'อีกคนเป็นคนเลือกคำตอบแบบลับ')+' · '+(state.chooser===myRole()?'เลือกคำตอบของคุณ':'รอให้อีกคนเลือกคำตอบก่อน');$('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');document.querySelectorAll('.choice').forEach(b=>{b.onclick=()=>pick(+b.dataset.n);b.disabled=state.chooser!==myRole()});updateScores()}
function myRole(){return isHost?'host':'guest'}
function pick(n){if(state.phase==='choose'&&state.chooser===myRole()){state.actual=n;state.phase='talk';send('ACTUAL',{n});lockChoices();startTalk();toast('เลือกคำตอบแล้ว อีกคนกำลังคุยกัน 60 วินาที')}else if(state.phase==='guess'&&state.chooser!==myRole()){state.guess=n;lockChoices();send('GUESS',{n});if(isHost)reveal();}}
function lockChoices(){document.querySelectorAll('.choice').forEach(b=>b.classList.add('locked'))}
function startTalk(){clearInterval(timerId);state.phase='talk';$('#talk').classList.remove('hidden');$('#timer').textContent=60;document.querySelectorAll('.choice').forEach(b=>{b.disabled=true;b.classList.add('locked')});timerId=setInterval(()=>{const n=Number($('#timer').textContent)-1;$('#timer').textContent=n;if(n<=0){clearInterval(timerId);state.phase='guess';if(state.chooser!==myRole()){document.querySelectorAll('.choice').forEach(b=>{b.disabled=false;b.classList.remove('locked')});$('#roleBanner').textContent='หมดเวลาคุยแล้ว · ถึงตาคุณทายคำตอบ';toast('หมดเวลาคุยแล้ว ถึงตาคุณทายได้เลย')}else{$('#roleBanner').textContent='อีกคนกำลังทายคำตอบ';}}},1000)}
function maybeTalk(){startTalk()}
function reveal(){clearInterval(timerId);if(!state.actual||!state.guess)return;if(!isHost)returnconst ok=state.actual===state.guess;const guesser=state.chooser==='host'?'guest':'host';if(ok)state.score[guesser]++;const item=q[state.index%q.length];state.history.push({question:item[1],actual:state.actual,guess:state.guess,ok,chooser:state.chooser});state.phase='reveal';$('#actual').textContent=state.actual;$('#guess').textContent=state.guess;$('#resultText').textContent=ok?'ทายถูก รู้ใจกันจริง ๆ':'พลาดข้อนี้ แต่ได้รู้จักกันมากขึ้น';$('#resultText').className='result-text '+(ok?'ok':'miss');$('#talk').classList.add('hidden');$('#reveal').classList.remove('hidden');updateScores();send('REVEAL',{actual:state.actual,guess:state.guess,ok,score:state.score});}
function updateScores(){$('#scoreMe').textContent=state.score[myRole()];$('#scoreOther').textContent=state.score[myRole()==='host'?'guest':'host']}
function startGame(){state.phase='choose';state.index=0;state.score={host:0,guest:0};state.history=[];send('START',{state});show('game');renderQuestion()}
function finish(){clearInterval(timerId);show('result');const mine=state.score[myRole()],theirs=state.score[myRole()==='host'?'guest':'host'];const total=state.rounds;const pct=Math.round((state.history.filter(x=>x.ok).length/total)*100);$('#percent').textContent=pct+'%';$('#resultSummary').textContent=pct>=80?'รู้ใจกันสุด ๆ':'คะแนนไม่สำคัญเท่ากับได้คุยกัน';$('#finalMe').textContent=mine;$('#finalOther').textContent=theirs;$('#historyList').innerHTML=state.history.map((h,i)=>'<div class="history-row"><span class="q">'+(i+1)+'. '+h.question+'</span><span class="badge '+(h.ok?'ok':'miss')+'">'+(h.ok?'ตรงกัน':'ไม่ตรง')+'</span></div>').join('')}
function next(){if(state.index+1>=state.rounds){send('FINISH',{state});finish();return}state.index++;state.phase='choose';send('NEXT',{index:state.index});renderQuestion()}
function setupHost(){isHost=true;room=code();me=$('#name').value.trim()||'ผู้เล่น 1';destroyPeer();peer=new Peer(room,peerOptions);peer.on('open',()=>{setConn(true);state=makeState();updateLobby();show('lobby');toast('สร้างห้องแล้ว ส่งรหัสให้แฟนได้เลย')});peer.on('connection',c=>{if(conn&&conn.open){c.close();return}conn=c;wire()});peer.on('disconnected',()=>{setConn(false);toast('การเชื่อมต่อเซิร์ฟเวอร์หลุด กำลังเชื่อมใหม่...');try{peer.reconnect()}catch(e){}});peer.on('error',e=>{setConn(false);if(e.type==='unavailable-id'){room=code();destroyPeer();toast('กำลังสร้างรหัสห้องใหม่...');setTimeout(setupHost,500)}else toast('ระบบเชื่อมต่อขัดข้อง: '+e.type)})}
function setupGuest(){isHost=false;room=$('#roomInput').value.trim().toUpperCase();me=$('#name').value.trim()||'ผู้เล่น 2';if(!room)return toast('กรอกรหัสห้องก่อน');if(!/^LD[A-Z0-9]{4}$/.test(room))return toast('รหัสห้องต้องเป็นรูปแบบ LDxxxx');destroyPeer();setConn(false);peer=new Peer(peerOptions);peer.on('open',()=>{connectGuest();show('lobby');updateLobby()});peer.on('disconnected',()=>{setConn(false);toast('สัญญาณเซิร์ฟเวอร์หลุด กำลังเชื่อมใหม่...');try{peer.reconnect()}catch(e){}});peer.on('error',e=>{setConn(false);toast(e.type==='peer-unavailable'?'ไม่พบห้องนี้: ตรวจรหัสอีกครั้ง':'เชื่อมต่อไม่สำเร็จ: '+e.type)})}
function connectGuest(attempt=0){if(!peer||peer.destroyed)return;if(conn&&conn.open)return;conn=peer.connect(room,{reliable:true,serialization:'json'});wire();setTimeout(()=>{if(!conn||!conn.open){if(attempt<2){toast('กำลังเชื่อมต่อห้อง...');try{if(conn)conn.close()}catch(e){}conn=null;setTimeout(()=>connectGuest(attempt+1),1200)}else toast('เชื่อมต่อไม่สำเร็จ ลองสร้างห้องใหม่แล้วเข้ารหัสใหม่อีกครั้ง')}},3500)}
function wire(){if(!conn)return;conn.on('open',()=>{setConn(true);toast(isHost?'แฟนเชื่อมต่อแล้ว':'เข้าห้องสำเร็จ');if(!isHost)send('JOIN',{name:me})});conn.on('close',()=>{setConn(false);toast('การเชื่อมต่อถูกตัด')});conn.on('error',e=>{setConn(false);toast('เชื่อมต่อไม่สำเร็จ: '+(e?.type||'ลองใหม่'))});conn.on('data',handle)}
function handle(m){if(m.type==='JOIN'&&isHost){if(!state.players[1].name){state.players[1]={id:'guest',name:m.name,ready:false};other=m.name;send('LOBBY',{state});updateLobby()}}else if(m.type==='LOBBY'){state=m.state;other=state.players[0].name;updateLobby()}else if(m.type==='READY'){state.players.find(p=>p.id===m.role).ready=true;updateLobby();if(isHost)send('LOBBY',{state})}else if(m.type==='START'){state=m.state;show('game');renderQuestion()}else if(m.type==='ACTUAL'){state.actual=m.n;state.phase='talk';$('#roleBanner').textContent='อีกคนเลือกคำตอบแล้ว · คุยกัน 60 วินาที';startTalk();toast('อีกคนเลือกแล้ว คุยกันก่อน 60 วินาที')}else if(m.type==='GUESS'){state.guess=m.n;if(isHost)reveal()}else if(m.type==='REVEAL'){state.actual=m.actual;state.guess=m.guess;state.score=m.score;state.history.push({question:q[state.index%q.length][1],actual:m.actual,guess:m.guess,ok:m.ok,chooser:state.chooser});state.phase='reveal';$('#actual').textContent=m.actual;$('#guess').textContent=m.guess;$('#resultText').textContent=m.ok?'ทายถูก รู้ใจกันจริง ๆ':'พลาดข้อนี้ แต่ได้รู้จักกันมากขึ้น';$('#resultText').className='result-text '+(m.ok?'ok':'miss');$('#talk').classList.add('hidden');$('#reveal').classList.remove('hidden');updateScores()}else if(m.type==='NEXT'){state.index=m.index;state.phase='choose';renderQuestion()}else if(m.type==='FINISH'){state=m.state;finish()}}
$('#rounds').onclick=e=>{if(e.target.dataset.value){selectedRounds=+e.target.dataset.value;document.querySelectorAll('#rounds button').forEach(x=>x.classList.toggle('selected',x===e.target))}}
$('#mode').onclick=e=>{if(e.target.dataset.value){selectedMode=e.target.dataset.value;document.querySelectorAll('#mode button').forEach(x=>x.classList.toggle('selected',x===e.target))}}
$('#createBtn').onclick=()=>setupHost();$('#joinBtn').onclick=()=>setupGuest();
$('#copyRoom').onclick=()=>navigator.clipboard?.writeText(room).then(()=>toast('คัดลอกรหัสห้องแล้ว'));
$('#readyBtn').onclick=()=>{const role=myRole();state.players.find(p=>p.id===role).ready=true;updateLobby();send('READY',{role});if(isHost&&state.players.length===2&&state.players.every(p=>p.ready)){state.phase='choose';send('START',{state});startGame()}};
$('#revealBtn').onclick=()=>{toast('คุยกันให้ครบ 60 วินาทีก่อน แล้วคนทายจะเลือกคำตอบ');};$('#nextBtn').onclick=next;
$('#playAgain').onclick=()=>{if(isHost){state=makeState();other=state.players[1].name;show('lobby');updateLobby();send('LOBBY',{state})}else toast('ให้เจ้าของห้องกดเล่นอีกครั้ง')};
$('#homeBtn').onclick=()=>location.reload();
updateLobby();