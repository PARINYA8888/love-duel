const $=s=>document.querySelector(s);
const screens={home:$('#home'),lobby:$('#lobby'),game:$('#game'),result:$('#result')};
const questions=[
['ความชอบ','ถ้าให้เลือกไปเที่ยวด้วยกัน 1 ที่ ฉันจะเลือกที่ไหน?',['ทะเล','ภูเขา','คาเฟ่ในเมือง','ต่างประเทศ']],
['ความชอบ','ถ้าฉันมีวันหยุด 1 วัน ฉันอยากทำอะไรมากที่สุด?',['นอนอยู่บ้าน','ออกไปเที่ยว','ดูหนัง/ซีรีส์','ไปหาอะไรกิน']],
['ความชอบ','ถ้าฉันได้เงินก้อนใหญ่ ฉันน่าจะซื้ออะไรเป็นอย่างแรก?',['ของที่อยากได้','รถ/มอเตอร์ไซค์','เก็บหรือลงทุน','พาเธอไปเที่ยว']],
['ความชอบ','เวลาเครียด ฉันมักจะทำอะไร?',['เงียบและอยู่คนเดียว','นอน','หาอะไรทำให้ลืม','เล่าให้เธอฟัง']],
['ความชอบ','ถ้าฉันเลือกอาหารได้แค่อย่างเดียวทั้งวัน ฉันจะเลือกอะไร?',['ของหวาน','ของทอด','อาหารตามสั่ง','หมูกระทะ/ชาบู']],
['ความชอบ','ถ้าฉันตื่นสาย สิ่งแรกที่ฉันน่าจะทำคืออะไร?',['รีบอาบน้ำ','เช็กมือถือ','หาอะไรกิน','นอนต่อ']],
['ความชอบ','ของขวัญแบบไหนที่ทำให้ฉันดีใจที่สุด?',['ของที่ใช้ได้จริง','ของที่อยากได้มานาน','ของทำมือ','เซอร์ไพรส์พาไปเที่ยว']],
['ความชอบ','ถ้าเลือกดูหนังกับเธอ ฉันน่าจะเลือกแนวไหน?',['โรแมนติก','ตลก','แอ็กชัน','สยองขวัญ']],
['ความสัมพันธ์','สิ่งแรกที่ฉันชอบในตัวเธอคืออะไร?',['หน้าตา','นิสัย','รอยยิ้ม/แววตา','ความเป็นตัวเอง']],
['ความสัมพันธ์','เวลาเราทะเลาะกัน ฉันอยากให้เธอทำอะไรมากที่สุด?',['เข้ามาคุย','ให้เวลาฉันก่อน','กอดหรือปลอบ','พูดตรง ๆ ว่ารู้สึกยังไง']],
['ความสัมพันธ์','ถ้ามีเวลาอยู่ด้วยกันแค่ 2 ชั่วโมง ฉันอยากทำอะไร?',['กินข้าว','เดินเล่น','ดูหนัง','นั่งคุยกัน']],
['ความสัมพันธ์','คำพูดแบบไหนจากเธอที่ทำให้ฉันใจฟูที่สุด?',['คิดถึงนะ','เก่งมาก','อยู่ข้าง ๆ เสมอ','รักนะ']],
['ความสัมพันธ์','ฉันคิดว่าอะไรสำคัญที่สุดในความสัมพันธ์?',['ความซื่อสัตย์','การสื่อสาร','การให้เวลา','การเข้าใจกัน']],
['ความสัมพันธ์','ถ้าเรามีวันครบรอบ ฉันอยากฉลองแบบไหน?',['กินร้านดี ๆ','ไปเที่ยว','อยู่ด้วยกันเงียบ ๆ','ทำอะไรเซอร์ไพรส์']],
['ความสัมพันธ์','ถ้าเธอไม่สบาย ฉันน่าจะทำอะไรเป็นอย่างแรก?',['ถามว่าเป็นอะไร','หาอาหาร/ยาให้','โทรหา','ไปหาเลย']],
['ความสัมพันธ์','ถ้าเราได้ถ่ายรูปคู่ 1 รูป ฉันอยากได้ฟีลไหน?',['หวาน ๆ','ธรรมชาติ','ตลก ๆ','เท่ ๆ']],
['ความสัมพันธ์','อะไรทำให้ฉันรู้สึกว่าเธอใส่ใจฉันที่สุด?',['จำรายละเอียดเล็ก ๆ ได้','ทักมาหา','ช่วยเวลามีปัญหา','หาเวลาให้']],
['ชีวิตประจำวัน','ตอนเช้าฉันเป็นคนแบบไหน?',['สดใสทันที','งัวเงียมาก','ต้องกินก่อน','ไม่อยากคุยกับใคร']],
['ชีวิตประจำวัน','ถ้าโทรศัพท์เหลือแบต 5% ฉันจะทำอะไรก่อน?',['เปิดโหมดประหยัด','หาที่ชาร์จ','ปิดแอป','ปล่อยเลย']],
['ชีวิตประจำวัน','ถ้าฉันต้องรอใครนาน ๆ ฉันมักจะ...',['ใจเย็น','เล่นมือถือ','เริ่มบ่น','หาอย่างอื่นทำ']],
['ชีวิตประจำวัน','เวลาจะซื้อของ ฉันมักจะ...',['ดูราคาก่อน','ดูรีวิว','ซื้อเลยถ้าชอบ','เทียบหลายร้าน']],
['ชีวิตประจำวัน','ถ้าฉันเหนื่อยจากงาน สิ่งที่ช่วยให้ดีขึ้นคืออะไร?',['นอน','กินของอร่อย','คุยกับเธอ','อยู่เงียบ ๆ']],
['ชีวิตประจำวัน','ฉันน่าจะใช้เงินกับอะไรเยอะที่สุด?',['อาหาร','ของใช้','รถ/อุปกรณ์','เที่ยว']],
['ชีวิตประจำวัน','ถ้าให้เลือกทำงานบ้านอย่างเดียว ฉันจะเลือกอะไร?',['กวาด/ถู','ล้างจาน','ซักผ้า','จัดของ']],
['ชีวิตประจำวัน','เวลามีเรื่องให้ตัดสินใจ ฉันมักจะ...',['คิดนาน','ถามคนอื่น','ใช้ความรู้สึก','เลือกเร็ว']],
['ชีวิตประจำวัน','ถ้าต้องออกจากบ้านใน 10 นาที ฉันจะ...',['พร้อมทันที','รีบมาก','ลืมของแน่นอน','ขออีก 10 นาที']],
['กวน ๆ','ถ้าฉันเป็นสัตว์ 1 วัน ฉันน่าจะเป็นอะไร?',['แมว','หมา','หมี','ลิง']],
['กวน ๆ','ถ้าเราติดอยู่บนเกาะ ฉันจะมีประโยชน์ที่สุดเรื่องอะไร?',['หาอาหาร','สร้างที่พัก','หาทางกลับ','ให้กำลังใจ']],
['กวน ๆ','ถ้าเธอให้ฉันเลือกกินของเดิม 1 อย่าง 7 วัน ฉันจะเลือกอะไร?',['หมูกระทะ','ชาบู','ไก่ทอด','กะเพรา']],
['กวน ๆ','ถ้าฉันมีพลังวิเศษ 1 อย่าง ฉันจะเลือกอะไร?',['หยุดเวลา','อ่านใจ','วาร์ป','เสกเงิน']],
['กวน ๆ','ถ้าเราเล่นเกมแล้วฉันแพ้ ฉันน่าจะทำอะไร?',['ยอมรับ','ขอแก้มือ','โทษดวง','โทษเธอ']],
['กวน ๆ','ถ้าฉันกลายเป็นคนดัง ฉันน่าจะดังจากอะไร?',['ความเก่ง','ความฮา','หน้าตา','เรื่องแปลก ๆ']],
['กวน ๆ','ถ้าฉันต้องเลือกคำหนึ่งคำแทนตัวเอง ฉันจะเลือกอะไร?',['ขี้เล่น','จริงจัง','ดื้อ','ใจดี']],
['กวน ๆ','ถ้าฉันมีเงินเหลือ 100 บาทตอนดึก ฉันจะเอาไปทำอะไร?',['สั่งของกิน','เก็บไว้','ซื้อของออนไลน์','เติมเกม/แอป']],
['ความทรงจำ','ถ้าย้อนกลับไปวันแรกที่เราเจอกัน ฉันอยากทำอะไรต่างจากเดิม?',['กล้าคุยมากขึ้น','แต่งตัวให้ดีกว่านี้','พูดอะไรดี ๆ กว่านั้น','ไม่เปลี่ยนอะไรเลย']],
['ความทรงจำ','ช่วงเวลาไหนของเราที่ฉันน่าจะจำได้ดีที่สุด?',['วันแรกที่เจอกัน','วันที่เริ่มคุย','ทริปแรก','ช่วงที่ผ่านเรื่องยาก ๆ ด้วยกัน']],
['อนาคต','ถ้าเราได้ไปเที่ยวด้วยกันพรุ่งนี้ ฉันอยากให้ทริปเป็นแบบไหน?',['ชิล ๆ','แน่นทุกกิจกรรม','เน้นกิน','เน้นถ่ายรูป']],
['อนาคต','ถ้าเรามีบ้านด้วยกัน ฉันอยากให้มีอะไรเป็นพิเศษ?',['มุมดูหนัง','ครัวใหญ่','โรงรถ/พื้นที่งานอดิเรก','สวน/พื้นที่นั่งเล่น']],
['อนาคต','สิ่งหนึ่งที่ฉันอยากทำกับเธอในอนาคตคืออะไร?',['เที่ยวหลายประเทศ','สร้างบ้าน/ชีวิตด้วยกัน','ทำธุรกิจด้วยกัน','เก็บความทรงจำเล็ก ๆ ไปเรื่อย ๆ']],
['ความชอบ','ถ้าเราต้องเลือกเพลงประจำคู่ของเรา ฉันจะเลือกแบบไหน?',['หวาน ๆ','อบอุ่น','สนุก ๆ','ความหมายลึก ๆ']],
['ความทรงจำ','เดตครั้งแรกหรือครั้งที่ประทับใจ ฉันจำอะไรได้ชัดที่สุด?',['บทสนทนาของเรา','ร้านหรือสถานที่','บรรยากาศวันนั้น','ความรู้สึกตอนอยู่ด้วยกัน']],
['ความทรงจำ','เรื่องไหนที่เราพูดถึงทีไรก็มักจะยิ้มให้กัน?',['มุกที่เข้าใจกันสองคน','ทริปที่หลงทาง','มื้อพิเศษ','เหตุการณ์เปิ่น ๆ']],
['ความทรงจำ','ของชิ้นไหนที่ทำให้ฉันนึกถึงเธอได้ทันที?',['รูปถ่าย','ของขวัญ','ข้อความเก่า ๆ','ของใช้ชิ้นเล็ก ๆ']],
['ความทรงจำ','โมเมนต์ไหนที่ทำให้ฉันรู้สึกว่าเราเริ่มสนิทกัน?',['คุยกันได้ทุกเรื่อง','หัวเราะด้วยกัน','ช่วยกันในวันที่เหนื่อย','เริ่มมีคำเรียกพิเศษ']],
['ความทรงจำ','วันธรรมดาวันไหนของเราที่ฉันอยากย้อนกลับไปอีกครั้ง?',['วันที่ได้นั่งคุยนาน ๆ','วันที่ไปกินของอร่อย','วันที่เที่ยวแบบไม่วางแผน','วันที่อยู่ด้วยกันเฉย ๆ']],
['ความทรงจำ','รูปคู่แบบไหนที่ฉันชอบเปิดดูซ้ำ?',['รูปตอนเที่ยว','รูปตอนเผลอ','รูปที่ยิ้มให้กัน','รูปตลก ๆ']],
['ความทรงจำ','รายละเอียดเล็ก ๆ ที่เธอเคยทำและฉันยังจำได้คืออะไร?',['จำสิ่งที่ฉันชอบได้','ส่งข้อความมาให้กำลังใจ','แบ่งของอร่อยให้','อยู่ข้าง ๆ ในวันที่ยาก']],
['ความทรงจำ','ถ้าเก็บความทรงจำของเราไว้ได้หนึ่งอย่าง ฉันจะเลือกอะไร?',['เสียงหัวเราะ','คำพูดดี ๆ','ภาพวันสำคัญ','ช่วงเวลาธรรมดาที่มีเธอ']],
['ความชอบ','เดตวันหยุดในแบบที่ฉันชอบที่สุดคือแบบไหน?',['ออกไปเที่ยวทั้งวัน','คาเฟ่แล้วเดินเล่น','ดูหนังและกินของอร่อย','อยู่บ้านด้วยกัน']],
['ความชอบ','ถ้าให้เลือกของกินมาแบ่งกันตอนดูหนัง ฉันอยากได้อะไร?',['ป๊อปคอร์น','ของทอด','ขนมหวาน','ผลไม้หรือเครื่องดื่ม']],
['ความชอบ','การแสดงความรักแบบไหนที่ทำให้ฉันรู้สึกอบอุ่นที่สุด?',['คำพูดดี ๆ','ใช้เวลาด้วยกัน','ช่วยเหลือกัน','กอดหรือจับมือ']],
['ความชอบ','ถ้าจะเซอร์ไพรส์ฉันแบบเล็ก ๆ ฉันน่าจะชอบอะไร?',['ข้อความน่ารัก ๆ','ของกินที่ชอบ','ชวนไปที่ใหม่ ๆ','ทำอะไรให้สักอย่าง']],
['ความชอบ','บรรยากาศแบบไหนที่ฉันชอบเวลาเราอยู่ด้วยกัน?',['เงียบสงบ','คุยกันไม่หยุด','มีเพลงคลอ','ได้หัวเราะกัน']],
['ความชอบ','ถ้าเลือกกิจกรรมคู่กันหนึ่งอย่าง ฉันอยากทำอะไร?',['ทำอาหาร','เล่นเกม','ออกกำลังกาย','ถ่ายรูปหรือทำคลิป']],
['ความชอบ','คำชมแบบไหนที่ทำให้ฉันยิ้มได้นานที่สุด?',['ชมความตั้งใจ','ชมหน้าตาหรือรอยยิ้ม','บอกว่าภูมิใจในตัวฉัน','ขอบคุณที่อยู่ด้วยกัน']],
['ความชอบ','ถ้าเลือกทริปสั้น ๆ ฉันอยากไปแบบไหน?',['ทะเลชิล ๆ','ภูเขาอากาศเย็น','เมืองที่มีของกิน','ที่พักสบาย ๆ ไม่ต้องทำอะไร']],
['อนาคต','สถานที่แบบไหนที่ฉันอยากไปกับเธอสักครั้ง?',['ทะเลไกล ๆ','เมืองที่ไม่เคยไป','ธรรมชาติและภูเขา','ทริปกินของอร่อย']],
['อนาคต','สิ่งใหม่อะไรที่ฉันอยากลองทำกับเธอในปีนี้?',['เรียนทำอาหาร','ไปเที่ยวแบบไม่วางแผน','เริ่มงานอดิเรกด้วยกัน','ทำสิ่งดี ๆ ให้คนอื่น']],
['อนาคต','วันหยุดในอนาคตของเราน่าจะเป็นแบบไหน?',['เที่ยวสถานที่ใหม่','ทำอาหารกินที่บ้าน','ตื่นสายแล้วดูหนัง','ออกไปเดินเล่นใกล้ ๆ']],
['อนาคต','ถ้าเราวางแผนเก็บเงินด้วยกัน ฉันอยากเก็บไปเพื่ออะไร?',['ทริปพิเศษ','ของชิ้นใหญ่ที่อยากได้','ประสบการณ์ใหม่','ความมั่นคงของเรา']],
['อนาคต','มุมเล็ก ๆ ในบ้านที่ฉันอยากมีไว้ใช้ด้วยกันคืออะไร?',['มุมดูหนัง','โต๊ะกินข้าว','มุมปลูกต้นไม้','โซฟานั่งคุยกัน']],
['อนาคต','ทักษะอะไรที่ฉันอยากเรียนรู้ไปพร้อมกับเธอ?',['ทำอาหาร','ภาษาใหม่','ถ่ายรูป','เต้นหรือเล่นดนตรี']],
['อนาคต','ธรรมเนียมเล็ก ๆ ของคู่เราที่ฉันอยากให้มีต่อไปคืออะไร?',['เดตประจำเดือน','ส่งข้อความก่อนนอน','ฉลองเรื่องเล็ก ๆ','ถ่ายรูปเก็บทุกทริป']],
['อนาคต','ถ้าเราได้ทำโปรเจกต์สนุก ๆ ด้วยกัน ฉันเลือกอะไร?',['ทำอัลบั้มรูป','ปลูกต้นไม้','ทำคลิปเที่ยว','ลองขายของหรือทำงานฝีมือ']]
];
const expandedByCategory=Object.fromEntries(categoryNamesForBank().map(name=>[name,expandedLoveQuestions.filter(item=>item[0]===name)]));
function categoryNamesForBank(){return ['ความทรงจำ','ความชอบ','อนาคต','ความสัมพันธ์','ชีวิตประจำวัน','กวน ๆ']}
let extrasLeft=1000-questions.length,bankTurn=0;
while(extrasLeft>0){const category=categoryNamesForBank()[bankTurn%6],extra=expandedByCategory[category].shift();if(!extra){bankTurn++;if(bankTurn>6*200)break;continue}questions.push(extra);extrasLeft--;bankTurn++}
let peer=null,conn=null,isHost=false,room='',me='',other='',state=null,selectedRounds=8,selectedMode='alternate',selectedGame='quiz',timerId=null;
let selectedAnswerMode='turns',resumePending=false,reconnectTimer=null,resumeAttempts=0,sessionToken='',savedSession=null,installPrompt=null,joinAttempts=0,joinRetryTimer=null,connectionTimer=null;
const categoryNames=['ความทรงจำ','ความชอบ','อนาคต','ความสัมพันธ์','ชีวิตประจำวัน','กวน ๆ'];
const defaultCategories=['ความทรงจำ','ความชอบ','อนาคต','ความสัมพันธ์','ชีวิตประจำวัน','กวน ๆ'];
const roundOptions=[8,10,15,20,30,40];
const sessionKey='love-duel-session-v2';
let selectedCategories=[...defaultCategories];
savedSession=readSavedSession();
if(savedSession?.state&&!savedSession.state.gameType)savedSession.state.gameType='quiz';
if(savedSession?.state?.gameType==='cannon'){savedSession.state.gameType='quiz';savedSession.state.phase='lobby';savedSession.state.score={host:0,guest:0};savedSession.state.history=[];delete savedSession.state.mini;(savedSession.state.players||[]).forEach(player=>player.ready=false)}
if(savedSession?.state)selectedGame=savedSession.state.gameType;
function show(name){Object.values(screens).forEach(screen=>screen.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0)}
function protectPullToRefresh(){let startY=0;document.addEventListener('touchstart',event=>{startY=event.touches[0].clientY},{passive:true});document.addEventListener('touchmove',event=>{const y=event.touches[0].clientY;if(window.scrollY<=0&&y>startY)event.preventDefault()},{passive:false});document.addEventListener('touchend',()=>{startY=0},{passive:true});window.addEventListener('beforeunload',event=>{saveSession();if(state&&['choose','guess','simultaneous'].includes(state.phase)){event.preventDefault();event.returnValue=''}})}
protectPullToRefresh();
function toast(message){const element=$('#toast');element.textContent=message;element.classList.add('show');setTimeout(()=>element.classList.remove('show'),2400)}
function code(){const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const bytes=new Uint8Array(4);crypto.getRandomValues(bytes);return'LD'+Array.from(bytes,byte=>alphabet[byte%alphabet.length]).join('')}
const peerOptions={host:'0.peerjs.com',port:443,path:'/',secure:true,debug:2,config:{iceServers:[{urls:'stun:stun.l.google.com:19302'}]}};
function questionsInCategories(categories=selectedCategories){return questions.filter(question=>categories.includes(question[0]))}
function shuffledQuestionOrder(categories=selectedCategories){const order=questions.map((question,index)=>categories.includes(question[0])?index:-1).filter(index=>index>=0);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}return order}
function questionFor(index=state.index){const frozen=state.questionDeck?.[index];if(frozen)return frozen;const questionIndex=state.questionOrder?.[index];return questions[Number.isInteger(questionIndex)?questionIndex:index%questions.length]}
function chooserFor(index){const mode=state?.mode||selectedMode;if(mode==='host')return'host';if(mode==='guest')return'guest';if(mode==='random'){if(state?.chooserByRound?.[index])return state.chooserByRound[index];const role=Math.random()<.5?'host':'guest';if(state){state.chooserByRound=state.chooserByRound||{};state.chooserByRound[index]=role}return role}return index%2===0?'host':'guest'}
function myRole(){return isHost?'host':'guest'}
function lockChoices(){document.querySelectorAll('.choice').forEach(button=>{button.disabled=true;button.classList.add('locked')})}
function updateScores(){$('#scoreMe').textContent=state.score[myRole()];$('#scoreOther').textContent=state.score[myRole()==='host'?'guest':'host']}
$('#categories').onclick=e=>{
const button=e.target.closest('[data-category]');if(!button||button.disabled)return;
const category=button.dataset.category,hasCategory=selectedCategories.includes(category);
if(hasCategory&&selectedCategories.length===1)return toast('เลือกไว้อย่างน้อย 1 หมวดนะ');
selectedCategories=hasCategory?selectedCategories.filter(name=>name!==category):categoryNames.filter(name=>selectedCategories.includes(name)||name===category);
if(state&&isHost){
const available=questionsInCategories().length,validRounds=roundOptions.filter(round=>round<=available);
if(!validRounds.includes(selectedRounds))selectedRounds=validRounds.filter(round=>round<selectedRounds).pop()||validRounds[0]||5;
publishLobbySettings(true);
}else updateSettingControls();
};
$('#gameOptions').onclick=e=>{const button=e.target.closest('[data-game]');if(!button||button.disabled)return;selectedGame=button.dataset.game;if(isHost&&state?.phase==='lobby')publishLobbySettings();else updateSettingControls()};
$('#allCategoriesBtn').onclick=()=>{if(state&&!isHost)return;selectedCategories=[...categoryNames];if(state&&isHost)publishLobbySettings(true);else updateSettingControls()};
$('#rounds').onclick=e=>{const button=e.target.closest('[data-value]');if(!button||button.disabled)return;selectedRounds=Number(button.dataset.value);if(isHost&&state?.phase==='lobby')publishLobbySettings();else updateSettingControls()};
$('#mode').onclick=e=>{const button=e.target.closest('[data-value]');if(!button||button.disabled)return;selectedMode=button.dataset.value;if(isHost&&state?.phase==='lobby')publishLobbySettings();else updateSettingControls()};
$('#createBtn').onclick=()=>setupHost();$('#joinBtn').onclick=()=>setupGuest();
$('#copyRoom').onclick=async()=>{try{await navigator.clipboard.writeText(room);toast('คัดลอกรหัสห้องแล้ว')}catch(e){toast('คัดลอกไม่ได้ กรุณาจดรหัสห้องไว้')}};
$('#readyBtn').onclick=()=>{if(!state||!conn?.open)return;if(isHost&&state.players.every(p=>p.name&&p.ready)){startGame();return}const role=myRole(),player=state.players.find(p=>p.id===role);if(!player||player.ready)return;player.ready=true;updateLobby();send('READY',{role});if(isHost)send('LOBBY',{state})};
$('#revealNowBtn').onclick=()=>{if(state.phase==='guess'&&state.chooser!==myRole()&&Number.isInteger(state.guess)){send('GUESS',{n:state.guess});if(isHost)reveal();}};$('#nextBtn').onclick=next;
$('#playAgain').onclick=()=>{if(isHost)startRematch();else if(conn?.open){send('REMATCH_REQUEST');toast('ส่งคำขอเริ่มเกมใหม่แล้ว')}else toast('การเชื่อมต่อขาดหาย กรุณาโหลดหน้าแล้วเข้าห้องใหม่')};
$('#chooseGameBtn').onclick=()=>requestGameSelection();$('#selectGameBtn').onclick=()=>requestGameSelection();
$('#homeBtn').onclick=()=>{clearSavedSession();destroyPeer();state=null;room='';other='';show('home')};
$('#homeBtn').onclick=()=>location.reload();
updateLobby();

// Keep a resumable session on this device, including the private room token.
function safeRead(key){try{return localStorage.getItem(key)}catch(e){return null}}
function safeWrite(key,value){try{localStorage.setItem(key,value);return true}catch(e){return false}}
function safeRemove(key){try{localStorage.removeItem(key)}catch(e){}}
function newToken(){return crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,'0')).join('')}
function readSavedSession(){try{const value=JSON.parse(safeRead(sessionKey)||'null');return value&&value.room&&value.state&&Date.now()-value.savedAt<7*24*60*60*1000?value:null}catch(e){return null}}
function displayResume(){const panel=$('#resumePanel');if(!panel)return;if(!savedSession){panel.classList.add('hidden');return}const s=savedSession.state,gameName={ox:'เกม OX',rps:'เป่ายิ้งฉุบ',sync:'ใจตรงกัน',target:'ทายเลขเป้าหมาย',split:'แบ่งหรือเก็บ',high:'เลขวงจร 5 ท่า',memory:'จับคู่ความจำ',emoji:'ถอดรหัสอีโมจิ',math:'คิดเลขเร็ว',logic:'ลำดับปริศนา',word:'เรียงวลีปริศนา',code:'ถอดรหัส 3 หลัก',pattern:'จับรูปแบบ',risk:'ประมูลแต้ม'}[s.gameType];const phase=s.phase==='lobby'?'ห้องรอเริ่ม':s.phase==='finished'?'จบเกมแล้ว':gameName||'คำถามที่ '+Math.min((s.index||0)+1,s.rounds||1);$('#resumeSummary').textContent=phase+' · ห้อง '+savedSession.room;panel.classList.remove('hidden')}
function saveSession(){if(!room||!state)return;const record={room,isHost,name:me,other,token:sessionToken,state,savedAt:Date.now()};if(safeWrite(sessionKey,JSON.stringify(record)))savedSession=record;displayResume()}
function clearSavedSession(){safeRemove(sessionKey);savedSession=null;displayResume()}
function send(type,payload={}){saveSession();if(conn&&conn.open)conn.send({type,...payload})}
function destroyPeer(){if(reconnectTimer){clearTimeout(reconnectTimer);reconnectTimer=null}if(joinRetryTimer){clearTimeout(joinRetryTimer);joinRetryTimer=null}if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}const old=conn;conn=null;try{if(old)old.close()}catch(e){}try{if(peer&&!peer.destroyed)peer.destroy()}catch(e){}peer=null}
function setConn(ok){$('#connection').textContent=ok?(conn?.open?'เชื่อมต่อแล้ว':'เซิร์ฟเวอร์พร้อม'):resumePending?'กำลังกลับเข้าห้อง…':'ยังไม่เชื่อมต่อ';$('#connection').className='connection '+(ok?'online':'offline')}
function updateLobby(){
const ps=state?.players||[];
if(state){selectedCategories=categoryNames.filter(name=>(state.categories||defaultCategories).includes(name));if(!selectedCategories.length)selectedCategories=[...defaultCategories];selectedRounds=Number(state.rounds)||8;selectedMode=state.mode||'alternate';selectedAnswerMode=state.answerMode||'turns';selectedGame=state.gameType||'quiz'}
[['#p1',ps[0]],['#p2',ps[1]]].forEach(([id,p])=>{const el=$(id);el.querySelector('b').textContent=p?.name||'รอผู้เล่น';el.querySelector('small').textContent=!p?.name?'ยังไม่พร้อม':p.ready?'พร้อมแล้ว':p.id==='guest'&&!conn?.open?'กำลังกลับมา…':'ยังไม่พร้อม';el.classList.toggle('ready',!!p?.ready)});
$('#roomCode').textContent=room;const bothReady=ps.length===2&&ps.every(p=>p?.name&&p.ready);
$('#lobbyHint').textContent=isHost?(!ps[1]?.name?'เลือกเกมที่อยากเล่น แล้วส่งรหัสห้องให้แฟน':!conn?.open?'รออีกคนกลับมาเชื่อมต่อ…':bothReady?'ทั้งคู่พร้อมแล้ว กดเริ่มเกมได้เลย':'เลือกเกมให้เรียบร้อย แล้วกด “พร้อมเล่น”'):'รอเจ้าของห้องเลือกเกมและเริ่มเกม';
const mePlayer=ps.find(p=>p?.id===myRole());$('#readyBtn').textContent=isHost&&!conn?.open?'รอผู้เล่น':isHost&&bothReady?'เริ่มเกม':'พร้อมเล่น';$('#readyBtn').disabled=isHost?(!conn||!conn.open||!!mePlayer?.ready&&!bothReady):(!conn||!conn.open||!!mePlayer?.ready);
updateSettingControls();saveSession()
}
function makeState(){const categories=[...selectedCategories],questionOrder=shuffledQuestionOrder(categories);return{players:[{id:'host',name:me,ready:false},{id:'guest',name:other,ready:false,token:null}],gameType:selectedGame,categories,rounds:Math.min(selectedRounds,questionOrder.length),mode:selectedMode,answerMode:selectedAnswerMode,index:0,questionOrder,questionDeck:questionOrder.slice(0,Math.min(selectedRounds,questionOrder.length)).map(index=>questions[index]),chooser:null,chooserByRound:{},actual:null,guess:null,answers:{host:{self:null,guess:null},guest:{self:null,guess:null}},simSubmitted:{host:{self:false,guess:false},guest:{self:false,guess:false}},score:{host:0,guest:0},history:[],phase:'lobby'}}
function publishLobbySettings(shuffleQuestions=false){if(!isHost||!state||state.phase!=='lobby')return;state.gameType=selectedGame;state.categories=[...selectedCategories];state.rounds=selectedRounds;state.mode=selectedMode;state.answerMode=selectedAnswerMode;if(shuffleQuestions||!state.questionDeck||state.questionDeck.length<state.rounds){state.questionOrder=shuffledQuestionOrder(selectedCategories);state.questionDeck=state.questionOrder.slice(0,Math.min(state.rounds,state.questionOrder.length)).map(index=>questions[index]);state.chooserByRound={}}updateLobby();send('LOBBY',{state})}
function updateSettingControls(){const available=questionsInCategories().length,validRounds=roundOptions.filter(n=>n<=available),locked=!!state&&(!isHost||state.phase!=='lobby');if(!validRounds.includes(selectedRounds))selectedRounds=validRounds.filter(n=>n<selectedRounds).pop()||validRounds[0]||5;$('#questionCount').textContent=state&&!isHost?'เจ้าของห้องเลือกหมวดคำถามให้ทั้งคู่':'มี '+available+' คำถาม จาก '+selectedCategories.length+' หมวดที่เลือก';document.querySelectorAll('#categories [data-category]').forEach(b=>{const selected=selectedCategories.includes(b.dataset.category);b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));b.querySelector('.category-copy small').textContent=questions.filter(q=>q[0]===b.dataset.category).length+' คำถาม';b.disabled=locked});document.querySelectorAll('#rounds button').forEach(b=>{const round=Number(b.dataset.value);b.classList.toggle('selected',round===selectedRounds);b.disabled=round>available||locked});document.querySelectorAll('#mode button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===selectedMode);b.disabled=selectedAnswerMode==='simultaneous'||locked});document.querySelectorAll('#answerMode button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===selectedAnswerMode);b.disabled=locked});document.querySelectorAll('#gameOptions [data-game]').forEach(b=>{const selected=b.dataset.game===selectedGame;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));b.disabled=locked});$('#questionSettings').classList.toggle('hidden',selectedGame!=='quiz');$('.settings').classList.toggle('hidden',selectedGame!=='quiz');$('#chooserSettings').classList.toggle('hidden',selectedAnswerMode==='simultaneous');$('#allCategoriesBtn').disabled=locked}
function startGuessTimer(){clearInterval(timerId);if(state.phase!=='guess'||Number.isInteger(state.guess))return;$('#talk').classList.remove('hidden');$('#timer').textContent=60;timerId=setInterval(()=>{const n=Number($('#timer').textContent)-1;$('#timer').textContent=n;if(n<=0){clearInterval(timerId);if(!Number.isInteger(state.guess)){state.guess=null;lockChoices();$('#roleBanner').textContent='หมดเวลา · กำลังเฉลยคำตอบ';toast('หมดเวลา ระบบกำลังเฉลยคำตอบ');if(isHost)reveal();else send('GUESS',{n:null})}}},1000)}
function blankAnswers(){return{host:{self:null,guess:null},guest:{self:null,guess:null}}}
function blankSubmitted(){return{host:{self:false,guess:false},guest:{self:false,guess:false}}}
function renderQuestion(resume=false){
clearInterval(timerId);$('#quizPanel').classList.remove('hidden');$('#miniPanel').classList.add('hidden');const item=questionFor();$('#qNo').textContent=(state.index+1)+' / '+state.rounds;$('#category').textContent=item[0];$('#question').textContent=item[1];$('#choices').innerHTML=item[2].map((t,i)=>'<button class="choice" data-n="'+(i+1)+'"><span class="num">'+(i+1)+'</span><span class="txt">'+t+'</span></button>').join('');
$('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');$('#classicReveal').classList.remove('hidden');$('#simReveal').classList.add('hidden');$('#simProgress').classList.add('hidden');
if(!resume){state.actual=null;state.guess=null;state.answers=blankAnswers();state.simSubmitted=blankSubmitted();state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';state.chooser=state.answerMode==='simultaneous'?null:chooserFor(state.index)}
else if(state.answerMode!=='simultaneous'&&!state.chooser)state.chooser=chooserFor(state.index);
document.querySelectorAll('.choice').forEach(button=>button.onclick=()=>pick(+button.dataset.n));
if(state.answerMode==='simultaneous')renderSimultaneous();else configureClassicPhase();updateScores();saveSession()
}
function configureClassicPhase(){
if(state.phase==='reveal'){const entry=state.history?.[state.index];if(entry)renderReveal(entry);return}
$('#simProgress').classList.add('hidden');$('#talk').classList.toggle('hidden',state.phase!=='guess');$('#reveal').classList.add('hidden');const chooserHere=state.chooser===myRole();
if(state.phase==='choose'){$('#roleBanner').textContent=chooserHere?'คุณเลือกคำตอบแบบลับ · เลือกได้เลย':'อีกคนกำลังเลือกคำตอบแบบลับ · รอสักครู่';document.querySelectorAll('.choice').forEach(button=>{button.disabled=!chooserHere;button.classList.toggle('locked',!chooserHere)});return}
if(state.phase==='guess'){$('#roleBanner').textContent=chooserHere?'อีกคนกำลังทายคำตอบของคุณ':'เลือกคำตอบที่คิดว่าอีกคนเลือก';$('#talkPrompt').textContent=Number.isInteger(state.guess)?'เลือกแล้ว · กด “เฉลยเลย” เมื่อพร้อม':'เลือกคำตอบที่คิดว่าอีกคนเลือก ภายใน 60 วินาที';document.querySelectorAll('.choice').forEach(button=>{button.disabled=chooserHere||Number.isInteger(state.guess);button.classList.toggle('locked',chooserHere||Number.isInteger(state.guess))});$('#revealNowBtn').classList.add('hidden')}
}
function simCount(role){const submitted=state.simSubmitted?.[role]||{};return Number(!!submitted.self)+Number(!!submitted.guess)}
function updateSimProgress(){const hostName=state.players?.[0]?.name||'คนที่ 1',guestName=state.players?.[1]?.name||'คนที่ 2';$('#simProgress').textContent=hostName+' '+simCount('host')+'/2 · '+guestName+' '+simCount('guest')+'/2'}
function renderSimultaneous(){
if(state.phase==='reveal'){const entry=state.history?.[state.index];if(entry)renderReveal(entry);return}
state.answers=state.answers||blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();const role=myRole(),mine=state.answers[role]||{self:null,guess:null};const step=!Number.isInteger(mine.self)?'self':!Number.isInteger(mine.guess)?'guess':null;
$('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');$('#simProgress').classList.remove('hidden');updateSimProgress();$('#roleBanner').textContent=step==='self'?'ข้อ 1/2 · เลือกคำตอบของคุณแบบลับ':step==='guess'?'ข้อ 2/2 · เดาคำตอบที่แฟนจะเลือกแบบลับ': 'ส่งครบ 2/2 แล้ว · รอแฟนตอบให้ครบ';
document.querySelectorAll('.choice').forEach(button=>{button.disabled=state.phase!=='simultaneous'||!step;button.classList.toggle('locked',!step)});saveSession()
}
function pick(n){if(!Number.isInteger(n)||n<1||n>4||!state)return;if(state.answerMode==='simultaneous'){pickSimultaneous(n);return}if(state.phase==='choose'&&state.chooser===myRole()){state.actual=n;state.phase='guess';configureClassicPhase();send('ACTUAL',{n,role:myRole()});toast('เลือกคำตอบแล้ว ส่งให้อีกคนทายแบบลับแล้ว')}else if(state.phase==='guess'&&state.chooser!==myRole()){state.guess=n;lockChoices();clearInterval(timerId);$('#revealNowBtn').classList.add('hidden');$('#roleBanner').textContent='ส่งคำตอบแล้ว · กำลังเฉลย…';$('#talkPrompt').textContent='ส่งคำตอบแล้ว ระบบกำลังเปิดผล';saveSession();if(isHost)reveal();else send('GUESS',{n})}}
function pickSimultaneous(n){if(state.phase!=='simultaneous')return;state.answers=state.answers||blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();const role=myRole(),mine=state.answers[role],field=!Number.isInteger(mine.self)?'self':!Number.isInteger(mine.guess)?'guess':null;if(!field)return;mine[field]=n;state.simSubmitted[role][field]=true;saveSession();renderSimultaneous();if(isHost){publishSimProgress();if(state.phase==='simultaneous')toast(field==='self'?'บันทึกข้อ 1/2 แล้ว · เลือกอีกครั้งเพื่อเดาแฟน':'ส่งครบแล้ว · รอแฟนตอบ')}else{send('SIM_ANSWER',{index:state.index,field,n});toast(field==='self'?'บันทึกข้อ 1/2 แล้ว · แตะอีกครั้งเพื่อเดาแฟน':'ส่งครบแล้ว · รอแฟนตอบ')}}
function simAnswersComplete(){return['host','guest'].every(role=>['self','guess'].every(field=>Number.isInteger(state.answers?.[role]?.[field])))}
function publishSimProgress(){if(!isHost||state.phase!=='simultaneous')return;if(simAnswersComplete()){revealSimultaneous();return}send('SIM_PROGRESS',{index:state.index,submitted:state.simSubmitted})}
function revealSimultaneous(){if(!isHost||state.phase!=='simultaneous'||!simAnswersComplete())return;const answers=JSON.parse(JSON.stringify(state.answers)),correct={host:answers.host.guess===answers.guest.self,guest:answers.guest.guess===answers.host.self};state.score.host+=Number(correct.host);state.score.guest+=Number(correct.guest);const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'simultaneous',answers,correct};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);send('SIM_REVEAL',{index:state.index,answers,correct,score:state.score});saveSession()}
function choiceText(value){const options=questionFor()[2];return Number.isInteger(value)&&value>=1&&value<=options.length?options[value-1]:'ไม่ได้ตอบ'}
function choiceTextAt(question,answer,choices){const options=Array.isArray(choices)?choices:questions.find(q=>q[1]===question)?.[2];return options&&Number.isInteger(answer)&&answer>=1&&answer<=options.length?options[answer-1]:'ไม่ได้ตอบ'}
function renderReveal(entry){
if(!entry)return;clearInterval(timerId);lockChoices();$('#talk').classList.add('hidden');$('#simProgress').classList.add('hidden');$('#reveal').classList.remove('hidden');
if(entry.answerMode==='simultaneous'){$('#classicReveal').classList.add('hidden');const box=$('#simReveal');box.replaceChildren();box.classList.remove('hidden');const hostName=state.players?.[0]?.name||'คนที่ 1',guestName=state.players?.[1]?.name||'คนที่ 2';const addCard=(title,answer,guessLabel,guess,ok)=>{const card=document.createElement('div');card.className='sim-answer-card '+(ok?'correct':'miss');const heading=document.createElement('small');heading.textContent=title;const actual=document.createElement('strong');actual.textContent=choiceText(answer);const detail=document.createElement('span');detail.textContent=guessLabel+': '+choiceText(guess)+(ok?' · ตรงกัน':' · ยังไม่ตรง');card.append(heading,actual,detail);box.append(card)};addCard(hostName+' ตอบ',entry.answers.host.self,guestName+' ทาย',entry.answers.guest.guess,!!entry.correct.guest);addCard(guestName+' ตอบ',entry.answers.guest.self,hostName+' ทาย',entry.answers.host.guess,!!entry.correct.host);const count=Number(!!entry.correct.host)+Number(!!entry.correct.guest);$('#resultText').textContent=count===2?'ทายใจกันถูกทั้งคู่!':count===1?'ทายใจตรงกัน 1 คน · ได้รู้จักกันมากขึ้น':'คำตอบต่างกัน · ชวนกันคุยต่อได้เลย';$('#resultText').className='result-text '+(count?'ok':'miss')}
else{$('#classicReveal').classList.remove('hidden');$('#simReveal').classList.add('hidden');$('#actual').textContent=choiceText(entry.actual);$('#guess').textContent=choiceText(entry.guess);$('#resultText').textContent=entry.ok?'ทายถูก รู้ใจกันจริง ๆ':Number.isInteger(entry.guess)?'พลาดข้อนี้ แต่ได้รู้จักกันมากขึ้น':'หมดเวลา รอบนี้ไม่มีคะแนน';$('#resultText').className='result-text '+(entry.ok?'ok':'miss')}
updateScores();saveSession()
}
function reveal(){clearInterval(timerId);if(!isHost||state.phase==='reveal'||!Number.isInteger(state.actual))return;const ok=state.actual===state.guess,guesser=state.chooser==='host'?'guest':'host';if(ok)state.score[guesser]++;const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'turns',actual:state.actual,guess:state.guess,ok,chooser:state.chooser};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);send('REVEAL',{index:state.index,actual:state.actual,guess:state.guess,ok,score:state.score});saveSession()}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function historyMarkup(h,i){
if(h.kind==='mini')return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">'+escapeHtml(h.detail||'')+'</small></span><span class="badge '+(h.ok?'ok':'miss')+'">'+escapeHtml(h.badge||'จบเกม')+'</span></div>';
const choices=h.choices||questions.find(q=>q[1]===h.question)?.[2];
if(h.answerMode==='simultaneous'){const count=Number(!!h.correct?.host)+Number(!!h.correct?.guest);return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">'+escapeHtml(state.players[0].name)+': '+escapeHtml(choiceTextAt(h.question,h.answers.host.self,choices))+' · '+escapeHtml(state.players[1].name)+' ทาย '+escapeHtml(choiceTextAt(h.question,h.answers.guest.guess,choices))+'</small><small class="answer-detail">'+escapeHtml(state.players[1].name)+': '+escapeHtml(choiceTextAt(h.question,h.answers.guest.self,choices))+' · '+escapeHtml(state.players[0].name)+' ทาย '+escapeHtml(choiceTextAt(h.question,h.answers.host.guess,choices))+'</small></span><span class="badge '+(count?'ok':'miss')+'">'+count+'/2</span></div>'}
return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">คำตอบจริง: '+escapeHtml(choiceTextAt(h.question,h.actual,choices))+' · ทาย: '+escapeHtml(choiceTextAt(h.question,h.guess,choices))+'</small></span><span class="badge '+(h.ok?'ok':'miss')+'">'+(h.ok?'ตรงกัน':'ไม่ตรง')+'</span></div>'
}
function finish(){
clearInterval(timerId);show('result');
const role=myRole(),otherRole=role==='host'?'guest':'host',mine=state.score?.[role]||0,theirs=state.score?.[otherRole]||0;
const winner=mine===theirs?null:mine>theirs?role:otherRole,players=state.players||[];
const mineName=players[role==='host'?0:1]?.name||'คุณ',theirName=players[otherRole==='host'?0:1]?.name||'อีกคน';
const multiScore=['sync','split','emoji','math','logic','word','code','pattern'].includes(state.gameType),max=state.gameType==='quiz'?state.rounds*(state.answerMode==='simultaneous'?2:1):(state.mini?.maxRounds||8)*(state.gameType==='risk'?4:multiScore?2:1);
const correct=state.gameType==='quiz'?state.history.reduce((total,h)=>total+(h.answerMode==='simultaneous'?Number(!!h.correct?.host)+Number(!!h.correct?.guest):Number(!!h.ok)),0):mine+theirs;
const pct=Math.min(100,Math.round(correct/Math.max(max,1)*100));
$('#percent').textContent=pct+'%';
$('#resultTitle').textContent=winner?'🏆 '+(winner===role?mineName:theirName)+' ชนะ!':'🤝 คะแนนเสมอกัน';
$('#resultSummary').textContent=state.gameType==='quiz'?'ทายตรงกัน '+correct+' จาก '+max+' ครั้ง · เล่นทั้งหมด '+state.rounds+' ข้อ':(miniInfo().title+' · แข่ง '+(state.mini?.maxRounds||8)+' รอบ · '+(winner?'ผู้ชนะคือ '+(winner===role?mineName:theirName):'เสมอกัน'));
$('#finalMe').textContent=mine;$('#finalOther').textContent=theirs;
$('.history h3').textContent=state.gameType==='quiz'?'สรุปคำถาม':'สรุปเกม';
$('#historyList').innerHTML=(state.history||[]).map(historyMarkup).join('');saveSession()
}
function createMiniState(type){
const rounds=8,base={round:1,maxRounds:rounds,submissions:{host:null,guest:null},submitted:{host:false,guest:false},answerTimes:{host:null,guest:null},status:'choose',last:null,syncQuestion:Math.floor(Math.random()*syncPromptBank.length)};
if(type==='ox')return{...base,board:Array(9).fill(''),turn:'host',winner:null,status:'play'};
if(type==='rps')return{...base,status:'choose'};
if(type==='target')return{...base,target:Math.floor(Math.random()*10)+1};
if(type==='memory'){const faces=['🍓','🍋','🍇','🍒','🥝','🍊','🫐','🍉'];return{...base,status:'play',cards:shuffledValues([...faces,...faces]),revealed:[],matched:[],turn:'host'}}
if(type==='emoji'){const emojiOrder=shuffledValues(emojiPuzzleBank.map((_,index)=>index));return{...base,emojiOrder,emojiQuestion:emojiOrder[0]}}
if(['math','logic','word','code','pattern'].includes(type)){const usedChallenges=[],challenge=createUniqueChallenge(type,usedChallenges);usedChallenges.push(challenge.id);return{...base,challenge,usedChallenges}}
return base
}
function shuffledValues(values){const result=[...values];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}return result}
function miniInfo(){
return({
ox:{title:'OX Duel',icon:'⭕',description:'แข่งวางหมาก 8 กระดาน ใครเรียงครบ 3 ช่องได้แต้ม'},
rps:{title:'เป่ายิ้งฉุบ',icon:'✊',description:'เลือกพร้อมกันแบบลับ แข่งทั้งหมด 8 รอบ'},
sync:{title:'ใจตรงกัน',icon:'🧲',description:'เลือกคำตอบพร้อมกัน ถ้าเลือกเหมือนกันทั้งคู่ได้คนละ 1 แต้ม'},
target:{title:'ทายเลขเป้าหมาย',icon:'🎯',description:'เดาเลข 1–10 แบบลับ ใครใกล้เลขเป้าหมายกว่าได้แต้ม'},
split:{title:'แบ่งหรือเก็บ',icon:'💎',description:'แบ่งพร้อมกันได้คนละ 1 · ถ้าอีกคนแบ่ง คนเก็บได้ 2'},
high:{title:'เลขวงจร 5 ท่า',icon:'🔢',description:'วงจร 1→2→3→4→5→1 · แต่ละเลขชนะ 2 ตัวก่อนหน้า'},
memory:{title:'จับคู่ความจำ',icon:'🃏',description:'ผลัดกันพลิกไพ่หาคู่ ใครจับคู่ได้มากกว่าชนะ'},
emoji:{title:'ถอดรหัสอีโมจิ',icon:'🧩',description:'ถอดสำนวนไทยจากอีโมจิ 500 ปริศนา · สุ่มไม่ซ้ำ'},
math:{title:'คิดเลขเร็ว',icon:'🧠',description:'โจทย์คณิตระดับมัธยม · 5 ตัวเลือก · ตอบพร้อมกัน'},
logic:{title:'ลำดับปริศนา',icon:'🔍',description:'หาเลขถัดไปจากรูปแบบที่ซ่อนอยู่ · 5 ตัวเลือก'},
word:{title:'เรียงวลีปริศนา',icon:'📝',description:'จัดคำให้เป็นวลีที่มีความหมาย · แข่งตอบพร้อมกัน'},
code:{title:'ถอดรหัส 3 หลัก',icon:'🔐',description:'ใช้เงื่อนไขคัดรหัสลับให้เหลือคำตอบเดียว'},
pattern:{title:'จับรูปแบบ',icon:'🔷',description:'อ่านลำดับสัญลักษณ์แล้วทายตัวถัดไป'},
risk:{title:'ประมูลแต้ม',icon:'🎲',description:'เดิมพันเลข 1–5 · เลขสูงชนะ แต่ได้แต้มลดลง'}
})[state.gameType]||{title:'เกมคำถาม',icon:'💞',description:'คลังคำถามสำหรับคู่รัก'}
}
function updateMiniScores(){const role=myRole();$('#miniScoreMe').textContent=state.score[role]||0;$('#miniScoreOther').textContent=state.score[role==='host'?'guest':'host']||0}
let miniTimerKey="",miniStartedAt=0;
function renderMiniGame(){
if(!state?.mini)return;
if(state.gameType==='math'&&state.mini.status==='choose'){const key=state.gameType+':'+state.mini.round;if(key!==miniTimerKey){miniTimerKey=key;miniStartedAt=performance.now()}}
$('#quizPanel').classList.add('hidden');$('#miniPanel').classList.remove('hidden');
const info=miniInfo(),mini=state.mini,role=myRole(),mine=!!mini.submitted?.[role];
$('#miniIcon').textContent=info.icon;$('#miniTitle').textContent=info.title;$('#miniDescription').textContent=info.description;
 $('#miniRoundLabel').textContent=state.gameType==='ox'?'กระดานที่':state.gameType==='memory'?'คู่ที่':'รอบที่';
$('#miniRound').textContent=mini.round+' / '+mini.maxRounds;updateMiniScores();
const hostName=escapeHtml(state.players?.[0]?.name||'คนที่ 1'),guestName=escapeHtml(state.players?.[1]?.name||'คนที่ 2');
let html='';
if(state.gameType==='memory'){
 const revealed=mini.revealed||[],matched=mini.matched||[],turnName=mini.turn==='host'?hostName:guestName;
 $('#miniBanner').textContent=mini.status==='miss'?'คู่นี้ไม่ตรงกัน · ดูไพ่แล้วส่งตา':mini.turn===role?'ถึงตาคุณพลิกไพ่สองใบ':'รอ '+turnName+' พลิกไพ่';
 html='<div class="memory-grid" role="group" aria-label="เกมจับคู่ความจำ">'+mini.cards.map((face,index)=>{const faceUp=revealed.includes(index)||matched.includes(index),isMatched=matched.includes(index);return'<button type="button" class="memory-card '+(faceUp?'face-up ':'')+(isMatched?'matched':'')+'" data-memory="'+index+'" aria-label="ไพ่ที่ '+(index+1)+(faceUp?' '+face:' คว่ำ')+'" '+(isMatched||faceUp||mini.turn!==role||mini.status!=='play'||!conn?.open?'disabled':'')+'>'+(faceUp?face:'♥')+'</button>'}).join('')+'</div><p class="mini-note">จับคู่ได้ '+Math.floor(matched.length/2)+' จาก 8 คู่ · '+hostName+' '+(state.score.host||0)+' : '+(state.score.guest||0)+' '+guestName+'</p>'+(mini.status==='miss'?'<button type="button" class="secondary memory-pass" data-memory-pass '+(mini.turn!==role||!conn?.open?'disabled':'')+'>ส่งตาให้อีกคน</button>':'');
}
if(state.gameType==='ox'){
  const mark=role==='host'?'X':'O',turnName=mini.turn==='host'?hostName:guestName;
  if(mini.status==='reveal'&&mini.last){
    $('#miniBanner').textContent='จบกระดานที่ '+mini.round;
    const winner=mini.last.winner;
    const outcome=winner==='draw'?'กระดานนี้เสมอกัน':escapeHtml(state.players[winner==='X'?0:1].name)+' ชนะกระดานนี้';
    html='<div class="ttt-board" role="group" aria-label="กระดาน OX">'+mini.board.map(cell=>'<div class="ttt-cell '+(cell?'occupied':'')+' '+(cell==='X'?'mark-x':'mark-o')+'">'+escapeHtml(cell)+'</div>').join('')+tttOverlayMarkup(mini.board)+'</div><p class="mini-note">'+outcome+'</p><button type="button" class="primary mini-next" data-mini-next>'+(mini.round>=mini.maxRounds?'ดูผลการแข่งขัน':'กระดานถัดไป')+'</button>'
  }else{
    $('#miniBanner').textContent=mini.turn===role?'ถึงตาคุณวาง '+mark:'รอ '+(mini.turn==='host'?'X':'O')+' · '+turnName+' เลือกช่อง';
    html='<div class="ttt-board" role="group" aria-label="กระดาน OX">'+mini.board.map((cell,index)=>'<button type="button" class="ttt-cell '+(cell?'occupied':'')+' '+(cell==='X'?'mark-x':'mark-o')+'" data-ttt="'+index+'" aria-label="ช่อง '+(index+1)+(cell?' '+cell:' ว่าง')+'" '+(cell||mini.turn!==role||!conn?.open?'disabled':'')+'>'+escapeHtml(cell)+'</button>').join('')+'</div><p class="mini-note">X · '+hostName+' &nbsp; O · '+guestName+'</p>'
  }
}
if(state.gameType==='rps'){
  const submitted=mini.submitted||{};$('#miniBanner').textContent=mini.status==='reveal'?'เฉลยรอบนี้แล้ว':mine?'ส่งคำตอบลับแล้ว · รออีกคนเลือก':'เลือกพร้อมกันโดยไม่เห็นคำตอบของอีกคน';
  if(mini.status==='reveal'&&mini.last){
    const labels={rock:'ค้อน',paper:'กระดาษ',scissors:'กรรไกร'},winner=mini.last.winner;
    html='<div class="mini-reveal-box"><div class="secret-picks"><div><small>'+hostName+'</small><strong>'+labels[mini.last.host]+'</strong></div><span>VS</span><div><small>'+guestName+'</small><strong>'+labels[mini.last.guest]+'</strong></div></div><p class="mini-outcome">'+(winner?escapeHtml(state.players[winner==='host'?0:1].name)+' ชนะรอบนี้':'เสมอกันรอบนี้')+'</p><button type="button" class="primary mini-next" data-mini-next>'+(mini.round>=mini.maxRounds?'ดูผลการแข่งขัน':'รอบถัดไป')+'</button></div>'
  }else html='<div class="rps-choices">'+[['rock','✊','ค้อน'],['paper','✋','กระดาษ'],['scissors','✌️','กรรไกร']].map(([value,icon,label])=>'<button type="button" class="rps-choice" data-rps="'+value+'" '+(mine||!conn?.open?'disabled':'')+'><span>'+icon+'</span><strong>'+label+'</strong></button>').join('')+'</div><p class="mini-progress">'+hostName+' '+(submitted.host?'✓ ส่งแล้ว':'กำลังเลือก')+' · '+guestName+' '+(submitted.guest?'✓ ส่งแล้ว':'กำลังเลือก')+'</p>'
}

if(['sync','target','split','high','emoji','math','logic','word','code','pattern','risk'].includes(state.gameType)){
  const choices=miniOptions(state.gameType),submitted=mini.submitted||{},syncPrompt=state.gameType==='sync'?syncPromptBank[mini.syncQuestion??0]:null,emojiPuzzle=state.gameType==='emoji'?emojiPuzzleBank[mini.emojiQuestion??0]:null,challenge=mini.challenge||null;
  $('#miniBanner').textContent=mini.status==='reveal'?'เปิดผลรอบนี้แล้ว':mine?'ส่งคำตอบลับแล้ว · รออีกคนเลือก':'เลือกคำตอบของคุณแบบลับ';
  if(mini.status==='reveal'&&mini.last){
    const labels=Object.fromEntries(choices),a=labels[String(mini.last.host)]||mini.last.host,b=labels[String(mini.last.guest)]||mini.last.guest,points=mini.last.points||{host:0,guest:0};
    let outcome='เสมอกันรอบนี้';
    if(state.gameType==='sync')outcome=mini.last.host===mini.last.guest?'ใจตรงกัน! ได้คนละ 1 แต้ม':'คำตอบไม่เหมือนกัน รอบนี้ไม่มีคะแนน';
    else if(state.gameType==='split')outcome=a==='🤝 แบ่งกัน'&&b==='🤝 แบ่งกัน'?'แบ่งกันคนละ 1 แต้ม':a==='💎 เก็บไว้'&&b==='💎 เก็บไว้'?'ทั้งคู่เก็บไว้ · ไม่มีใครได้แต้ม':(a==='💎 เก็บไว้'?hostName:guestName)+' เก็บได้ 2 แต้ม · '+(a==='🤝 แบ่งกัน'?hostName:guestName)+' ได้ 0 แต้ม';
    else if(state.gameType==='emoji'||['math','logic','word','code','pattern'].includes(state.gameType))outcome=points.host&&points.guest?'ถูกทั้งคู่ · ได้คนละ 1 แต้ม':points.host?hostName+' ตอบถูก · ได้ 1 แต้ม':points.guest?guestName+' ตอบถูก · ได้ 1 แต้ม':'รอบนี้ยังไม่มีใครตอบถูก';
    else if(state.gameType==='risk')outcome=mini.last.winner?escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ชนะการประมูล · ได้ '+points[mini.last.winner]+' แต้ม':a===b?'เดิมพันเลขซ้ำ · ไม่มีใครได้แต้ม':'ไม่มีผู้ชนะ';
    else if(mini.last.winner)outcome=escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ชนะรอบนี้';
    const promptHtml=syncPrompt?'<p class="mini-note">'+escapeHtml(syncPrompt.question)+'</p>':emojiPuzzle?'<div class="emoji-riddle">'+escapeHtml(emojiPuzzle.clue)+'</div>':challenge?'<p class="challenge-prompt">'+escapeHtml(challenge.prompt)+'</p>':'';
    if(state.gameType==='math')outcome=points.host&&points.guest?'ตอบถูกใกล้เคียงกัน · คนละ 1 แต้ม':mini.last.winner?escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ตอบถูกเร็วกว่า · ได้ 1 แต้ม':'ไม่มีใครตอบถูก';
    const hostElapsed=mini.answerTimes?.host,guestElapsed=mini.answerTimes?.guest,hostPoints='+'+(points.host||0)+(state.gameType==='math'&&Number.isFinite(hostElapsed)?' · '+(hostElapsed/1000).toFixed(1)+' วิ':''),guestPoints='+'+(points.guest||0)+(state.gameType==='math'&&Number.isFinite(guestElapsed)?' · '+(guestElapsed/1000).toFixed(1)+' วิ':'');
    const answerHtml=emojiPuzzle?'<p class="mini-note">คำตอบ: '+escapeHtml(mini.last.answer)+'<br>'+escapeHtml(mini.last.hint)+'</p>':challenge?'<p class="mini-note">เฉลย: '+escapeHtml(challenge.options[challenge.answer])+(challenge.explanation?' · '+escapeHtml(challenge.explanation):'')+'</p>':'';
    html=promptHtml+'<div class="mini-reveal-box"><div class="secret-picks"><div><small>'+hostName+'</small><strong>'+escapeHtml(String(a))+'</strong><em>'+hostPoints+'</em></div><span>VS</span><div><small>'+guestName+'</small><strong>'+escapeHtml(String(b))+'</strong><em>'+guestPoints+'</em></div></div>'+(state.gameType==='target'?'<p class="mini-note">เลขเป้าหมายคือ '+mini.target+'</p>':'')+answerHtml+'<p class="mini-outcome">'+outcome+'</p><button type="button" class="primary mini-next" data-mini-next>'+(mini.round>=mini.maxRounds?'ดูผลการแข่งขัน':'รอบถัดไป')+'</button></div>';
  }else{
    const promptHtml=syncPrompt?'<p class="mini-note">'+escapeHtml(syncPrompt.question)+'</p>':emojiPuzzle?'<div class="emoji-riddle" aria-label="โจทย์อีโมจิ">'+escapeHtml(emojiPuzzle.clue)+'</div><p class="mini-note">ถอดสำนวนจากภาพ · '+escapeHtml(emojiPuzzle.hint)+'</p>':challenge?'<p class="challenge-prompt">'+escapeHtml(challenge.prompt)+'</p>':'';
    const gridClass=state.gameType==='target'||state.gameType==='high'||state.gameType==='risk'?'number-choices':challenge?'challenge-choices':'';
    let help='เลือกคำตอบแบบลับ';
    if(state.gameType==='target')help='เป้าหมายลับอยู่ระหว่าง 1–10 · เลือกเลขที่คิดว่าใกล้ที่สุด';
    if(state.gameType==='high')help='เลขแต่ละตัวชนะ 2 ตัวถัดไปในวงจร และแพ้ 2 ตัวก่อนหน้า';
    if(state.gameType==='split')help='แบ่ง/แบ่ง = คนละ 1 · เก็บ/แบ่ง = คนเก็บได้ 2 · เก็บ/เก็บ = 0 ทั้งคู่';
    if(state.gameType==='risk')help='เลือกเดิมพัน 1–5 · เลขสูงกว่าชนะ แต่ได้แต้ม 1–4 ตามเลขที่ใช้ · เลขซ้ำได้ 0';
    if(state.gameType==='emoji')help='มีสำนวนไทย 500 ข้อ · สุ่มไม่ซ้ำในเกมนี้';
    if(challenge)help=state.gameType==='math'?'คิดให้ไว · ตอบถูกและเร็วกว่าได้แต้ม · ถ้าความเร็วใกล้กันได้คนละ 1':'เลือกคำตอบแบบลับ · ตอบถูกได้ 1 แต้ม';
    html=promptHtml+'<div class="blind-choices '+gridClass+'">'+choices.map(([value,label])=>'<button type="button" class="blind-choice" data-choice="'+value+'" '+(mine||!conn?.open?'disabled':'')+'><strong>'+escapeHtml(label)+'</strong></button>').join('')+'</div><p class="mini-note">'+help+'</p><p class="mini-progress">'+hostName+' '+(submitted.host?'✓ ส่งแล้ว':'กำลังเลือก')+' · '+guestName+' '+(submitted.guest?'✓ ส่งแล้ว':'กำลังเลือก')+'</p>';
  }
}
$('#miniContent').innerHTML=html;saveSession()
}

function publishMiniProgress(){if(!isHost||!state?.mini)return;send('MINI_PROGRESS',{gameType:state.gameType,round:state.mini.round,submitted:state.mini.submitted});renderMiniGame()}
function miniStateChanged(){if(state.phase==='finished'){finish();return}send('MINI_STATE',{state});renderMiniGame()}
function finishMini(){if(!isHost||state.phase==='finished')return;state.phase='finished';send('FINISH',{state});finish()}
function tttWinningLine(board){const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];return lines.find(([a,b,c])=>board[a]&&board[a]===board[b]&&board[a]===board[c])||null}
function tttWinner(board){const line=tttWinningLine(board);return line?board[line[0]]:board.every(Boolean)?'draw':null}
function tttOverlayMarkup(board){const line=tttWinningLine(board);if(!line)return'';const[first,,last]=line,x1=(first%3)*100+50,y1=Math.floor(first/3)*100+50,x2=(last%3)*100+50,y2=Math.floor(last/3)*100+50;return'<svg class="ttt-win-overlay" viewBox="0 0 300 300" aria-hidden="true"><line class="win-'+board[first]+'" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"></line></svg>'}

function handleMemoryFlip(role,index){
if(!isHost||state.gameType!=='memory'||state.phase!=='mini'||state.mini.status!=='play'||state.mini.turn!==role||!Number.isInteger(index)||index<0||index>=state.mini.cards.length||state.mini.matched.includes(index)||state.mini.revealed.includes(index))return;
state.mini.revealed.push(index);
if(state.mini.revealed.length===2){
 const [first,second]=state.mini.revealed;
 if(state.mini.cards[first]===state.mini.cards[second]){
  state.mini.matched.push(first,second);state.mini.revealed=[];state.score[role]++;state.mini.round=Math.floor(state.mini.matched.length/2)+1;
  const name=state.players[role==='host'?0:1].name;state.history.push({kind:'mini',question:'จับคู่ความจำ · คู่ '+(state.mini.round-1),detail:name+' จับคู่ '+state.mini.cards[first]+' ได้',badge:name+' ได้ 1 แต้ม',ok:true});
  if(state.mini.matched.length===state.mini.cards.length){finishMini();return}
 }else state.mini.status='miss'
}
miniStateChanged()
}
function handleMemoryPass(role){
if(!isHost||state.gameType!=='memory'||state.phase!=='mini'||state.mini.status!=='miss'||state.mini.turn!==role)return;
state.mini.revealed=[];state.mini.turn=role==='host'?'guest':'host';state.mini.status='play';miniStateChanged()
}
function handleTttMove(role,index){
if(!isHost||state.gameType!=='ox'||state.phase!=='mini'||state.mini.status==='reveal'||state.mini.turn!==role||!Number.isInteger(index)||index<0||index>8||state.mini.board[index])return;
const mark=role==='host'?'X':'O';state.mini.board[index]=mark;const winner=tttWinner(state.mini.board);
if(winner){
  state.mini.winner=winner;state.mini.status='reveal';state.mini.last={winner};
  if(winner==='draw')state.history.push({kind:'mini',question:'เกม OX · กระดาน '+state.mini.round,detail:'กระดานเต็มแล้ว ไม่มีใครเรียงครบ 3 ช่อง',badge:'เสมอ',ok:false});
  else{const winnerRole=winner==='X'?'host':'guest';state.score[winnerRole]++;state.history.push({kind:'mini',question:'เกม OX · กระดาน '+state.mini.round,detail:'ผู้ชนะ: '+state.players[winnerRole==='host'?0:1].name,badge:'ชนะ',ok:true})}
  miniStateChanged();return
}
state.mini.turn=role==='host'?'guest':'host';send('MINI_STATE',{state});renderMiniGame()
}
function submitMiniChoice(role,choice){
if(!isHost||state.gameType!=='rps'||state.phase!=='mini'||state.mini.status!=='choose'||state.mini.submitted[role]||!['rock','paper','scissors'].includes(choice))return;
state.mini.submissions[role]=choice;state.mini.submitted[role]=true;
if(state.mini.submitted.host&&state.mini.submitted.guest){
  const a=state.mini.submissions.host,b=state.mini.submissions.guest,beats={rock:'scissors',paper:'rock',scissors:'paper'},winner=a===b?null:beats[a]===b?'host':'guest';
  if(winner)state.score[winner]++;state.mini.last={host:a,guest:b,winner};state.mini.status='reveal';
  const label={rock:'ค้อน',paper:'กระดาษ',scissors:'กรรไกร'};
  state.history.push({kind:'mini',question:'เป่ายิ้งฉุบ · รอบ '+state.mini.round,detail:state.players[0].name+': '+label[a]+' · '+state.players[1].name+': '+label[b],badge:winner?state.players[winner==='host'?0:1].name+' ชนะ':'เสมอ',ok:!!winner});miniStateChanged();return
}
publishMiniProgress()
}
const syncPromptBank=[
{question:'วันหยุดด้วยกัน อยากไปไหน?',options:[['beach','🌊 ทะเล'],['mountain','🏔️ ภูเขา'],['cafe','☕ คาเฟ่'],['home','🏠 อยู่บ้าน']]},
{question:'มื้อพิเศษวันนี้ เลือกกินอะไร?',options:[['bbq','🥓 หมูกระทะ'],['sushi','🍣 ซูชิ'],['hotpot','🍲 ชาบู'],['dessert','🍰 ของหวาน']]},
{question:'ถ้าได้เที่ยวทันที อยากไปแบบไหน?',options:[['sea','🏝️ เกาะ'],['city','🌆 เมืองใหญ่'],['forest','🌲 ธรรมชาติ'],['roadtrip','🚗 ขับรถเที่ยว']]},
{question:'ของขวัญแบบไหนทำให้ยิ้มที่สุด?',options:[['flowers','💐 ดอกไม้'],['food','🍪 ของกิน'],['useful','🎁 ของใช้'],['trip','✈️ ทริปเที่ยว']]},
{question:'คืนนี้อยากใช้เวลาด้วยกันแบบไหน?',options:[['movie','🎬 ดูหนัง'],['talk','💬 คุยกัน'],['game','🎮 เล่นเกม'],['sleep','🛌 พักผ่อน']]},
{question:'เลือกเดตวันฝนตก?',options:[['cooking','🍳 ทำอาหาร'],['series','📺 ดูซีรีส์'],['cafe','☕ คาเฟ่'],['boardgame','🧩 เล่นเกมโต๊ะ']]},
{question:'ถ้าได้วันว่างเพิ่มหนึ่งวัน?',options:[['travel','🧳 ไปเที่ยว'],['rest','😴 นอนพัก'],['food','🍜 ตะลุยกิน'],['photos','📸 ถ่ายรูป']]},
{question:'อยากเก็บความทรงจำแบบไหนเพิ่ม?',options:[['album','📔 อัลบั้มรูป'],['video','🎥 คลิปด้วยกัน'],['letters','💌 จดหมาย'],['trip','🗺️ ทริปใหม่']]}
];
function miniOptions(type){
if(type==='sync')return syncPromptBank[state.mini.syncQuestion??0].options;
if(type==='emoji')return emojiPuzzleBank[state.mini.emojiQuestion??0].options.map((label,index)=>[String(index),label]);
if(type==='split')return[['share','🤝 แบ่งกัน'],['keep','💎 เก็บไว้']];
if(type==='high'||type==='risk')return Array.from({length:5},(_,i)=>[String(i+1),type==='risk'?(i+1)+' แต้ม':String(i+1)]);
if(type==='target')return Array.from({length:10},(_,i)=>[String(i+1),String(i+1)]);
if(['math','logic','word','code','pattern'].includes(type))return(state.mini.challenge?.options||[]).map((label,index)=>[String(index),label]);
return[]
}
function submitBlindChoice(role,choice,timeMs=0){
if(!isHost||!['sync','target','split','high','emoji','math','logic','word','code','pattern','risk'].includes(state.gameType)||state.phase!=='mini'||state.mini.status!=='choose'||state.mini.submitted[role])return;
const allowed=miniOptions(state.gameType).map(([value])=>String(value));if(!allowed.includes(String(choice)))return;
choice=['sync','split'].includes(state.gameType)?String(choice):Number(choice);state.mini.submissions[role]=choice;state.mini.submitted[role]=true;if(state.gameType==='math'){state.mini.answerTimes=state.mini.answerTimes||{host:null,guest:null};state.mini.answerTimes[role]=Math.max(0,Number(timeMs)||0)}
if(!state.mini.submitted.host||!state.mini.submitted.guest){publishMiniProgress();return}
const a=state.mini.submissions.host,b=state.mini.submissions.guest;let winner=null,points={host:0,guest:0};
if(state.gameType==='sync'){if(a===b)points={host:1,guest:1}}
if(state.gameType==='target'){const da=Math.abs(a-state.mini.target),db=Math.abs(b-state.mini.target);winner=da===db?null:da