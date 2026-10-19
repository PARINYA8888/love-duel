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
let peer=null,conn=null,isHost=false,room='',me='',other='',state=null,selectedRounds=8,selectedMode='alternate',selectedGame='quiz',selectedMathDifficulty='medium',timerId=null,miniClockId=null,miniClockKey='',emojiDraft='';
const challengeGameTypes=['math','logic','word','code','pattern','odd','detective','algebra','probability','taboo'];
const isChallengeGame=type=>challengeGameTypes.includes(type);
let selectedAnswerMode='turns',resumePending=false,reconnectTimer=null,resumeAttempts=0,sessionToken='',savedSession=null,installPrompt=null,joinAttempts=0,joinRetryTimer=null,connectionTimer=null,hostCreateTimer=null,hostCreatePending=false;
const categoryNames=['ความทรงจำ','ความชอบ','อนาคต','ความสัมพันธ์','ชีวิตประจำวัน','กวน ๆ'];
const defaultCategories=['ความทรงจำ','ความชอบ','อนาคต','ความสัมพันธ์','ชีวิตประจำวัน','กวน ๆ'];
const roundOptions=[8,10,15,20,30,40];
const sessionKey='love-duel-session-v2';
const recentKey='love-duel-recent-v1';
const recentGameLabels={quiz:'เกมคำถาม',ox:'เกม OX',rps:'เป่ายิ้งฉุบ',sync:'ใจตรงกัน',target:'ทายเลขเป้าหมาย',split:'แบ่งหรือเก็บ',high:'เลขวงจร 5 ท่า',memory:'จับคู่ความจำ',emoji:'ถอดรหัสอีโมจิ',taboo:'คำต้องห้าม',math:'คิดเลขเร็ว',logic:'ลำดับปริศนา',word:'เรียงวลีปริศนา',code:'ถอดรหัส 4 หลัก',pattern:'จับรูปแบบ',risk:'ประมูลแต้ม',reaction:'วัดความไว',odd:'คำไหนต่าง',detective:'คดีคำให้การ',algebra:'สมการตัวแปร',probability:'คิดความน่าจะเป็น'};
let selectedCategories=[...defaultCategories];
savedSession=readSavedSession();
if(savedSession?.state&&!savedSession.state.gameType)savedSession.state.gameType='quiz';if(savedSession?.state&&!savedSession.state.mathDifficulty)savedSession.state.mathDifficulty='medium';
if(savedSession?.state?.gameType==='cannon'){savedSession.state.gameType='quiz';savedSession.state.phase='lobby';savedSession.state.score={host:0,guest:0};savedSession.state.history=[];delete savedSession.state.mini;(savedSession.state.players||[]).forEach(player=>player.ready=false)}
if(savedSession?.state){selectedGame=savedSession.state.gameType;selectedMathDifficulty=savedSession.state.mathDifficulty||'medium';}
function show(name){Object.values(screens).forEach(screen=>screen.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0)}
function protectPullToRefresh(){let startY=0;document.addEventListener('touchstart',event=>{startY=event.touches[0].clientY},{passive:true});document.addEventListener('touchmove',event=>{const y=event.touches[0].clientY;if(window.scrollY<=0&&y>startY)event.preventDefault()},{passive:false});document.addEventListener('touchend',()=>{startY=0},{passive:true});window.addEventListener('beforeunload',event=>{saveSession();if(state&&['choose','guess','simultaneous'].includes(state.phase)){event.preventDefault();event.returnValue=''}})}
protectPullToRefresh();
function toast(message){const element=$('#toast');element.textContent=message;element.classList.add('show');setTimeout(()=>element.classList.remove('show'),2400)}
function code(){const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const bytes=new Uint8Array(4);crypto.getRandomValues(bytes);return'LD'+Array.from(bytes,byte=>alphabet[byte%alphabet.length]).join('')}
const peerOptions={host:'0.peerjs.com',port:443,path:'/',secure:true,debug:2,config:{iceServers:[{urls:'stun:stun.l.google.com:19302'}]}};
function questionsInCategories(categories=selectedCategories){return questions.filter(question=>categories.includes(question[0]))}
function shuffledQuestionOrder(categories=selectedCategories){const eligible=questions.map((question,index)=>categories.includes(question[0])?index:-1).filter(index=>index>=0),recent=new Set(readRecentPlay().questions.filter(item=>item.type==='quiz').map(item=>item.key));let order=eligible.filter(index=>!recent.has('quiz:'+questions[index][1]));if(order.length<selectedRounds)order=eligible;for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}return order}
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
$('#mathDifficulty').onclick=e=>{const button=e.target.closest('[data-difficulty]');if(!button||button.disabled)return;selectedMathDifficulty=button.dataset.difficulty;if(isHost&&state?.phase==='lobby')publishLobbySettings();else updateSettingControls()};
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
displayRecentPlay();updateLobby();

// Keep a resumable session on this device, including the private room token.
function safeRead(key){try{return localStorage.getItem(key)}catch(e){return null}}
function safeWrite(key,value){try{localStorage.setItem(key,value);return true}catch(e){return false}}
function safeRemove(key){try{localStorage.removeItem(key)}catch(e){}}

function readRecentPlay(){try{const value=JSON.parse(safeRead(recentKey)||'null');return{games:Array.isArray(value?.games)?value.games:[],questions:Array.isArray(value?.questions)?value.questions:[]}}catch(e){return{games:[],questions:[]}}}
function displayRecentPlay(){const panel=$('#recentPanel');if(!panel)return;const recent=readRecentPlay();panel.classList.toggle('hidden',!recent.games.length&&!recent.questions.length);$('#recentGames').textContent=recent.games.length?'เกมล่าสุด · '+recent.games.slice(0,3).map(item=>item.label).join(' → '):'ยังไม่มีประวัติเกม';const items=recent.questions.slice(0,3);$('#recentQuestions').innerHTML=items.length?'<small>โจทย์ที่เพิ่งเจอ</small>'+items.map(item=>'<p class="recent-question-item">'+(item.type==='emoji'?'🧩 ':'💞 ')+escapeHtml(item.text)+'</p>').join(''):''}
function saveRecentPlayEntry(play){if(!play?.id)return;const recent=readRecentPlay();if(!recent.games.some(item=>item.id===play.id))recent.games.unshift({id:play.id,type:play.type,label:play.label||recentGameLabels[play.type]||'เกม',at:play.at||Date.now()});for(const item of play.questions||[])if(item?.key&&!recent.questions.some(question=>question.key===item.key))recent.questions.unshift({key:item.key,type:item.type||'quiz',text:String(item.text||'')});recent.games=recent.games.slice(0,12);recent.questions=recent.questions.slice(0,100);safeWrite(recentKey,JSON.stringify(recent));displayRecentPlay()}
function rememberRecentPlay(type){if(!isHost||!state)return;const playedQuestions=[];if(type==='quiz')(state.questionDeck||[]).slice(0,state.rounds||8).forEach(question=>playedQuestions.push({key:'quiz:'+question[1],type:'quiz',text:question[1]}));if(type==='emoji'&&state.mini?.emojiOrder)state.mini.emojiOrder.slice(0,state.mini.maxRounds).forEach(index=>playedQuestions.push({key:'emoji:'+index,type:'emoji',text:emojiPuzzleBank[index]?.clue||'ปริศนาอีโมจิ'}));state.recentPlay={id:newToken(),type,label:recentGameLabels[type]||'เกม',at:Date.now(),questions:playedQuestions};saveRecentPlayEntry(state.recentPlay)}
function newToken(){return crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,'0')).join('')}
function readSavedSession(){try{const value=JSON.parse(safeRead(sessionKey)||'null');return value&&value.room&&value.state&&Date.now()-value.savedAt<7*24*60*60*1000?value:null}catch(e){return null}}
function displayResume(){const panel=$('#resumePanel');if(!panel)return;if(!savedSession){panel.classList.add('hidden');return}const s=savedSession.state,gameName={ox:'เกม OX',rps:'เป่ายิ้งฉุบ',sync:'ใจตรงกัน',target:'ทายเลขเป้าหมาย',split:'แบ่งหรือเก็บ',high:'เลขวงจร 5 ท่า',memory:'จับคู่ความจำ',emoji:'ถอดรหัสอีโมจิ',taboo:'คำต้องห้าม',math:'คิดเลขเร็ว',logic:'ลำดับปริศนา',word:'เรียงวลีปริศนา',code:'ถอดรหัส 4 หลัก',pattern:'จับรูปแบบ',risk:'ประมูลแต้ม',reaction:'วัดความไว'}[s.gameType];const phase=s.phase==='lobby'?'ห้องรอเริ่ม':s.phase==='finished'?'จบเกมแล้ว':gameName||'คำถามที่ '+Math.min((s.index||0)+1,s.rounds||1);$('#resumeSummary').textContent=phase+' · ห้อง '+savedSession.room;panel.classList.remove('hidden')}
function saveSession(){if(!room||!state)return;const record={room,isHost,name:me,other,token:sessionToken,state,savedAt:Date.now()};if(safeWrite(sessionKey,JSON.stringify(record)))savedSession=record;displayResume()}
function clearSavedSession(){safeRemove(sessionKey);savedSession=null;displayResume()}
function send(type,payload={}){saveSession();if(conn&&conn.open)conn.send({type,...payload})}
function destroyPeer(){if(reconnectTimer){clearTimeout(reconnectTimer);reconnectTimer=null}if(joinRetryTimer){clearTimeout(joinRetryTimer);joinRetryTimer=null}if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}const old=conn;conn=null;try{if(old)old.close()}catch(e){}try{if(peer&&!peer.destroyed)peer.destroy()}catch(e){}peer=null}
function setConn(ok){$('#connection').textContent=ok?(conn?.open?'เชื่อมต่อแล้ว':'เซิร์ฟเวอร์พร้อม'):resumePending?'กำลังกลับเข้าห้อง…':'ยังไม่เชื่อมต่อ';$('#connection').className='connection '+(ok?'online':'offline')}
function updateLobby(){
const ps=state?.players||[];
if(state){selectedCategories=categoryNames.filter(name=>(state.categories||defaultCategories).includes(name));if(!selectedCategories.length)selectedCategories=[...defaultCategories];selectedRounds=Number(state.rounds)||8;selectedMode=state.mode||'alternate';selectedAnswerMode=state.answerMode||'turns';selectedGame=state.gameType||'quiz';selectedMathDifficulty=state.mathDifficulty||'medium'}
[['#p1',ps[0]],['#p2',ps[1]]].forEach(([id,p])=>{const el=$(id);el.querySelector('b').textContent=p?.name||'รอผู้เล่น';el.querySelector('small').textContent=!p?.name?'ยังไม่พร้อม':p.ready?'พร้อมแล้ว':p.id==='guest'&&!conn?.open?'กำลังกลับมา…':'ยังไม่พร้อม';el.classList.toggle('ready',!!p?.ready)});
$('#roomCode').textContent=room;const bothReady=ps.length===2&&ps.every(p=>p?.name&&p.ready);
$('#lobbyHint').textContent=isHost?(!ps[1]?.name?'เลือกเกมที่อยากเล่น แล้วส่งรหัสห้องให้แฟน':!conn?.open?'รออีกคนกลับมาเชื่อมต่อ…':bothReady?'ทั้งคู่พร้อมแล้ว กดเริ่มเกมได้เลย':'เลือกเกมให้เรียบร้อย แล้วกด “พร้อมเล่น”'):'รอเจ้าของห้องเลือกเกมและเริ่มเกม';
const mePlayer=ps.find(p=>p?.id===myRole());$('#readyBtn').textContent=isHost&&!conn?.open?'รอผู้เล่น':isHost&&bothReady?'เริ่มเกม':'พร้อมเล่น';$('#readyBtn').disabled=isHost?(!conn||!conn.open||!!mePlayer?.ready&&!bothReady):(!conn||!conn.open||!!mePlayer?.ready);
updateSettingControls();saveSession()
}
function makeState(){const categories=[...selectedCategories],questionOrder=shuffledQuestionOrder(categories);return{players:[{id:'host',name:me,ready:false},{id:'guest',name:other,ready:false,token:null}],gameType:selectedGame,mathDifficulty:selectedMathDifficulty,categories,rounds:Math.min(selectedRounds,questionOrder.length),mode:selectedMode,answerMode:selectedAnswerMode,index:0,questionOrder,questionDeck:questionOrder.slice(0,Math.min(selectedRounds,questionOrder.length)).map(index=>questions[index]),chooser:null,chooserByRound:{},actual:null,guess:null,answers:{host:{self:null,guess:null},guest:{self:null,guess:null}},simSubmitted:{host:{self:false,guess:false},guest:{self:false,guess:false}},score:{host:0,guest:0},history:[],phase:'lobby'}}
function publishLobbySettings(shuffleQuestions=false){if(!isHost||!state||state.phase!=='lobby')return;state.gameType=selectedGame;state.mathDifficulty=selectedMathDifficulty;state.categories=[...selectedCategories];state.rounds=selectedRounds;state.mode=selectedMode;state.answerMode=selectedAnswerMode;if(shuffleQuestions||!state.questionDeck||state.questionDeck.length<state.rounds){state.questionOrder=shuffledQuestionOrder(selectedCategories);state.questionDeck=state.questionOrder.slice(0,Math.min(state.rounds,state.questionOrder.length)).map(index=>questions[index]);state.chooserByRound={}}updateLobby();send('LOBBY',{state})}
function updateSettingControls(){
 const available=questionsInCategories().length,validRounds=roundOptions.filter(n=>n<=available),locked=!!state&&(!isHost||state.phase!=='lobby');
 if(!validRounds.includes(selectedRounds))selectedRounds=validRounds.filter(n=>n<selectedRounds).pop()||validRounds[0]||5;
 $('#questionCount').textContent=state&&!isHost?'เจ้าของห้องเลือกหมวดคำถามให้ทั้งคู่':'มี '+available+' คำถาม จาก '+selectedCategories.length+' หมวดที่เลือก';
 document.querySelectorAll('#categories [data-category]').forEach(b=>{const selected=selectedCategories.includes(b.dataset.category);b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));b.querySelector('.category-copy small').textContent=questions.filter(q=>q[0]===b.dataset.category).length+' คำถาม';b.disabled=locked});
 document.querySelectorAll('#rounds button').forEach(b=>{const round=Number(b.dataset.value);b.classList.toggle('selected',round===selectedRounds);b.disabled=round>available||locked});
 document.querySelectorAll('#mode button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===selectedMode);b.disabled=selectedAnswerMode==='simultaneous'||locked});
 document.querySelectorAll('#answerMode button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===selectedAnswerMode);b.disabled=locked});
 document.querySelectorAll('#gameOptions [data-game]').forEach(b=>{const selected=b.dataset.game===selectedGame;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));b.disabled=locked});
 document.querySelectorAll('#mathDifficulty [data-difficulty]').forEach(b=>{b.classList.toggle('selected',b.dataset.difficulty===selectedMathDifficulty);b.disabled=locked});
 $('#mathDifficultyPanel').classList.toggle('hidden',selectedGame!=='math');
 const hints={easy:'โจทย์พื้นฐาน คิดไว เล่นสบาย ๆ',medium:'โจทย์หลายขั้น ระดับมัธยม',hard:'หลายเครื่องหมายและวงเล็บ ต้องคิดเป็นลำดับ',pro:'โจทย์ซับซ้อนขึ้น มีหารและคำนวณหลายขั้น'};
 $('#mathDifficultyHint').textContent=hints[selectedMathDifficulty]||hints.medium;
 $('#questionSettings').classList.toggle('hidden',selectedGame!=='quiz');$('.settings').classList.toggle('hidden',selectedGame!=='quiz');$('#chooserSettings').classList.toggle('hidden',selectedAnswerMode==='simultaneous');$('#allCategoriesBtn').disabled=locked
}
function quizDuration(){return state.answerMode==='simultaneous'?75:state.phase==='choose'?30:60}
function ensureQuizDeadline(){
 if(!state||state.gameType!=='quiz'||!['choose','guess','simultaneous'].includes(state.phase)){if(state){state.deadlineAt=null;state.deadlineKey=''}return}
 const key=state.index+':'+state.phase+':'+state.answerMode;
 if(isHost&&state.deadlineKey!==key){state.deadlineKey=key;state.deadlineAt=Date.now()+quizDuration()*1000}
 if(!Number.isFinite(state.deadlineAt))state.deadlineAt=Date.now()+quizDuration()*1000
}
function quizTimeout(){
 if(!isHost||state?.gameType!=='quiz')return;
 state.deadlineAt=null;
 if(state.answerMode==='simultaneous'&&state.phase==='simultaneous'){revealSimultaneous(true);return}
 if(state.phase==='choose'){const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'turns',actual:null,guess:null,ok:false,chooser:state.chooser,timeout:true};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);send('REVEAL',{index:state.index,actual:null,guess:null,ok:false,score:state.score});saveSession();return}
 if(state.phase==='guess'&&!Number.isInteger(state.guess)){state.guess=null;reveal()}
}
function startQuizTimer(){
 clearInterval(timerId);if(!state||state.gameType!=='quiz'||!['choose','guess','simultaneous'].includes(state.phase)){ $('#quizCountdown').classList.add('hidden');return }
 ensureQuizDeadline();$('#quizCountdown').classList.remove('hidden');
 const tick=()=>{if(!state||state.gameType!=='quiz'||!['choose','guess','simultaneous'].includes(state.phase)){clearInterval(timerId);return}const left=Math.max(0,Math.ceil((state.deadlineAt-Date.now())/1000));$('#quizTimer').textContent=left;$('#quizCountdown').classList.toggle('urgent',left<=10);if(state.phase==='guess')$('#timer').textContent=left;if(left<=0){clearInterval(timerId);if(isHost)quizTimeout()}};
 tick();timerId=setInterval(tick,250)
}
function blankAnswers(){return{host:{self:null,guess:null},guest:{self:null,guess:null}}}
function blankSubmitted(){return{host:{self:false,guess:false},guest:{self:false,guess:false}}}
function renderQuestion(resume=false){
 clearInterval(timerId);$('#quizPanel').classList.remove('hidden');$('#miniPanel').classList.add('hidden');const item=questionFor();$('#qNo').textContent=(state.index+1)+' / '+state.rounds;$('#category').textContent=item[0];$('#question').textContent=item[1];$('#choices').innerHTML=item[2].map((t,i)=>'<button class="choice" data-n="'+(i+1)+'"><span class="num">'+(i+1)+'</span><span class="txt">'+t+'</span></button>').join('');
 $('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');$('#classicReveal').classList.remove('hidden');$('#simReveal').classList.add('hidden');$('#simProgress').classList.add('hidden');
 if(!resume){state.actual=null;state.guess=null;state.answers=blankAnswers();state.simSubmitted=blankSubmitted();state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';state.chooser=state.answerMode==='simultaneous'?null:chooserFor(state.index);state.deadlineKey='';state.deadlineAt=null}
 else if(state.answerMode!=='simultaneous'&&!state.chooser)state.chooser=chooserFor(state.index);
 document.querySelectorAll('.choice').forEach(button=>button.onclick=()=>pick(+button.dataset.n));
 if(state.answerMode==='simultaneous')renderSimultaneous();else configureClassicPhase();updateScores();ensureQuizDeadline();startQuizTimer();saveSession()
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
function pick(n){if(!Number.isInteger(n)||n<1||n>4||!state)return;if(state.answerMode==='simultaneous'){pickSimultaneous(n);return}if(state.phase==='choose'&&state.chooser===myRole()){state.actual=n;state.phase='guess';state.deadlineKey='';ensureQuizDeadline();configureClassicPhase();send('ACTUAL',{n,role:myRole(),deadlineAt:state.deadlineAt});startQuizTimer();toast('เลือกคำตอบแล้ว ส่งให้อีกคนทายแบบลับแล้ว')}else if(state.phase==='guess'&&state.chooser!==myRole()){state.guess=n;lockChoices();clearInterval(timerId);$('#revealNowBtn').classList.add('hidden');$('#roleBanner').textContent='ส่งคำตอบแล้ว · กำลังเฉลย…';$('#talkPrompt').textContent='ส่งคำตอบแล้ว ระบบกำลังเปิดผล';saveSession();if(isHost)reveal();else send('GUESS',{n})}}
function pickSimultaneous(n){if(state.phase!=='simultaneous')return;state.answers=state.answers||blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();const role=myRole(),mine=state.answers[role],field=!Number.isInteger(mine.self)?'self':!Number.isInteger(mine.guess)?'guess':null;if(!field)return;mine[field]=n;state.simSubmitted[role][field]=true;saveSession();renderSimultaneous();if(isHost){publishSimProgress();if(state.phase==='simultaneous')toast(field==='self'?'บันทึกข้อ 1/2 แล้ว · เลือกอีกครั้งเพื่อเดาแฟน':'ส่งครบแล้ว · รอแฟนตอบ')}else{send('SIM_ANSWER',{index:state.index,field,n});toast(field==='self'?'บันทึกข้อ 1/2 แล้ว · แตะอีกครั้งเพื่อเดาแฟน':'ส่งครบแล้ว · รอแฟนตอบ')}}
function simAnswersComplete(){return['host','guest'].every(role=>['self','guess'].every(field=>Number.isInteger(state.answers?.[role]?.[field])))}
function publishSimProgress(){if(!isHost||state.phase!=='simultaneous')return;if(simAnswersComplete()){revealSimultaneous();return}send('SIM_PROGRESS',{index:state.index,submitted:state.simSubmitted})}
function revealSimultaneous(allowMissing=false){
 if(!isHost||state.phase!=='simultaneous'||(!allowMissing&&!simAnswersComplete()))return;
 const answers=JSON.parse(JSON.stringify(state.answers)),correct={host:Number.isInteger(answers.host.guess)&&Number.isInteger(answers.guest.self)&&answers.host.guess===answers.guest.self,guest:Number.isInteger(answers.guest.guess)&&Number.isInteger(answers.host.self)&&answers.guest.guess===answers.host.self};
 state.score.host+=Number(correct.host);state.score.guest+=Number(correct.guest);const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'simultaneous',answers,correct,timeout:allowMissing};state.history[state.index]=entry;state.deadlineAt=null;state.phase='reveal';renderReveal(entry);send('SIM_REVEAL',{index:state.index,answers,correct,score:state.score});saveSession()
}
function choiceText(value){const options=questionFor()[2];return Number.isInteger(value)&&value>=1&&value<=options.length?options[value-1]:'ไม่ได้ตอบ'}
function choiceTextAt(question,answer,choices){const options=Array.isArray(choices)?choices:questions.find(q=>q[1]===question)?.[2];return options&&Number.isInteger(answer)&&answer>=1&&answer<=options.length?options[answer-1]:'ไม่ได้ตอบ'}
function renderReveal(entry){
if(!entry)return;clearInterval(timerId);$('#quizCountdown').classList.add('hidden');lockChoices();$('#talk').classList.add('hidden');$('#simProgress').classList.add('hidden');$('#reveal').classList.remove('hidden');
if(entry.answerMode==='simultaneous'){$('#classicReveal').classList.add('hidden');const box=$('#simReveal');box.replaceChildren();box.classList.remove('hidden');const hostName=state.players?.[0]?.name||'คนที่ 1',guestName=state.players?.[1]?.name||'คนที่ 2';const addCard=(title,answer,guessLabel,guess,ok)=>{const card=document.createElement('div');card.className='sim-answer-card '+(ok?'correct':'miss');const heading=document.createElement('small');heading.textContent=title;const actual=document.createElement('strong');actual.textContent=choiceText(answer);const detail=document.createElement('span');detail.textContent=guessLabel+': '+choiceText(guess)+(ok?' · ตรงกัน':' · ยังไม่ตรง');card.append(heading,actual,detail);box.append(card)};addCard(hostName+' ตอบ',entry.answers.host.self,guestName+' ทาย',entry.answers.guest.guess,!!entry.correct.guest);addCard(guestName+' ตอบ',entry.answers.guest.self,hostName+' ทาย',entry.answers.host.guess,!!entry.correct.host);const count=Number(!!entry.correct.host)+Number(!!entry.correct.guest);$('#resultText').textContent=count===2?'ทายใจกันถูกทั้งคู่!':count===1?'ทายใจตรงกัน 1 คน · ได้รู้จักกันมากขึ้น':'คำตอบต่างกัน · ชวนกันคุยต่อได้เลย';$('#resultText').className='result-text '+(count?'ok':'miss')}
else{$('#classicReveal').classList.remove('hidden');$('#simReveal').classList.add('hidden');$('#actual').textContent=choiceText(entry.actual);$('#guess').textContent=choiceText(entry.guess);$('#resultText').textContent=entry.ok?'ทายถูก รู้ใจกันจริง ๆ':Number.isInteger(entry.guess)?'พลาดข้อนี้ แต่ได้รู้จักกันมากขึ้น':'หมดเวลา รอบนี้ไม่มีคะแนน';$('#resultText').className='result-text '+(entry.ok?'ok':'miss')}
updateScores();saveSession()
}
function reveal(){clearInterval(timerId);if(!isHost||state.phase==='reveal'||!Number.isInteger(state.actual))return;state.deadlineAt=null;const ok=state.actual===state.guess,guesser=state.chooser==='host'?'guest':'host';if(ok)state.score[guesser]++;const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'turns',actual:state.actual,guess:state.guess,ok,chooser:state.chooser};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);send('REVEAL',{index:state.index,actual:state.actual,guess:state.guess,ok,score:state.score});saveSession()}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function historyMarkup(h,i){
if(h.kind==='mini')return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">'+escapeHtml(h.detail||'')+'</small></span><span class="badge '+(h.ok?'ok':'miss')+'">'+escapeHtml(h.badge||'จบเกม')+'</span></div>';
const choices=h.choices||questions.find(q=>q[1]===h.question)?.[2];
if(h.answerMode==='simultaneous'){const count=Number(!!h.correct?.host)+Number(!!h.correct?.guest);return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">'+escapeHtml(state.players[0].name)+': '+escapeHtml(choiceTextAt(h.question,h.answers.host.self,choices))+' · '+escapeHtml(state.players[1].name)+' ทาย '+escapeHtml(choiceTextAt(h.question,h.answers.guest.guess,choices))+'</small><small class="answer-detail">'+escapeHtml(state.players[1].name)+': '+escapeHtml(choiceTextAt(h.question,h.answers.guest.self,choices))+' · '+escapeHtml(state.players[0].name)+' ทาย '+escapeHtml(choiceTextAt(h.question,h.answers.host.guess,choices))+'</small></span><span class="badge '+(count?'ok':'miss')+'">'+count+'/2</span></div>'}
return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">คำตอบจริง: '+escapeHtml(choiceTextAt(h.question,h.actual,choices))+' · ทาย: '+escapeHtml(choiceTextAt(h.question,h.guess,choices))+'</small></span><span class="badge '+(h.ok?'ok':'miss')+'">'+(h.ok?'ตรงกัน':'ไม่ตรง')+'</span></div>'
}
function finish(){
clearInterval(timerId);clearInterval(miniClockId);$('#quizCountdown').classList.add('hidden');$('#miniCountdown').classList.add('hidden');show('result');
const role=myRole(),otherRole=role==='host'?'guest':'host',mine=state.score?.[role]||0,theirs=state.score?.[otherRole]||0;
const winner=mine===theirs?null:mine>theirs?role:otherRole,players=state.players||[];
const mineName=players[role==='host'?0:1]?.name||'คุณ',theirName=players[otherRole==='host'?0:1]?.name||'อีกคน';
const multiScore=['sync','split','emoji',...challengeGameTypes].includes(state.gameType),max=state.gameType==='quiz'?state.rounds*(state.answerMode==='simultaneous'?2:1):(state.mini?.maxRounds||8)*(state.gameType==='risk'?4:state.gameType==='taboo'?1:multiScore?2:1);
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
 if(type==='reaction')return{...base,status:'ready'};
 if(type==='target')return{...base,target:Math.floor(Math.random()*10)+1};
 if(type==='memory'){const faces=['🍓','🍋','🍇','🍒','🥝','🍊','🫐','🍉'];return{...base,status:'play',cards:shuffledValues([...faces,...faces]),revealed:[],matched:[],turn:'host'}}
 if(type==='emoji'){const all=emojiPuzzleBank.map((_,index)=>index),recent=new Set(readRecentPlay().questions.filter(item=>item.type==='emoji').map(item=>item.key.slice(6))),fresh=all.filter(index=>!recent.has(String(index))),emojiOrder=shuffledValues(fresh.length>=rounds?fresh:all);return{...base,emojiOrder,emojiQuestion:emojiOrder[0]}}
 if(isChallengeGame(type)){const usedChallenges=[],challenge=createUniqueChallenge(type,usedChallenges);usedChallenges.push(challenge.id);return{...base,challenge,usedChallenges,...(type==='taboo'?{tabooGiver:'host'}:{})}}
 return base
}
function shuffledValues(values){const result=[...values];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}return result}
function miniInfo(){
 const info={
 ox:{title:'OX Duel',icon:'⭕',description:'แข่งวางหมาก 8 กระดาน · แต่ละตาใช้เวลา 20 วินาที'},rps:{title:'เป่ายิ้งฉุบ',icon:'✊',description:'เลือกพร้อมกันแบบลับ · หมดเวลาแล้วคนที่ตอบได้เปรียบ'},sync:{title:'ใจตรงกัน',icon:'🧲',description:'เลือกคำตอบพร้อมกัน · ถ้าตรงกันได้คนละ 1 แต้ม'},target:{title:'ทายเลขเป้าหมาย',icon:'🎯',description:'เดาเลข 1–10 แบบลับ · ใครใกล้กว่าได้แต้ม'},split:{title:'แบ่งหรือเก็บ',icon:'💎',description:'ตัดสินใจพร้อมกัน · คิดให้ดีก่อนหมดเวลา'},high:{title:'เลขวงจร 5 ท่า',icon:'🔢',description:'วงจร 1→2→3→4→5→1 · แต่ละเลขชนะ 2 ตัวก่อนหน้า'},memory:{title:'จับคู่ความจำ',icon:'🃏',description:'ผลัดกันพลิกไพ่ · จับคู่ให้ทันก่อนหมดเวลา'},emoji:{title:'ถอดรหัสอีโมจิ',icon:'🧩',description:'เลือกสำนวนที่ใกล้เคียงกัน 5 ตัวเลือก · สุ่มไม่ซ้ำ'},taboo:{title:'คำต้องห้าม',icon:'🤫',description:'ผลัดกันใบ้และทาย · ห้ามพูดคำที่กำหนด'},math:{title:'คิดเลขเร็ว',icon:'🧠',description:'ระดับ '+({easy:'ง่าย',medium:'ปานกลาง',hard:'ยาก',pro:'โปร'}[state.mathDifficulty||'medium'])+' · ตอบถูกและเร็วกว่าได้แต้ม'},logic:{title:'ลำดับปริศนา',icon:'🔍',description:'แกะแพตเทิร์นตัวเลขระดับยาก · ตอบให้ทันเวลา'},word:{title:'เรียงวลีปริศนา',icon:'📝',description:'วิเคราะห์คำแล้วเรียงวลี · แข่งตอบพร้อมกัน'},code:{title:'ถอดรหัส 4 หลัก',icon:'🔐',description:'ใช้เงื่อนไขผลรวมและคู่เลขหาเลขลับ'},pattern:{title:'จับรูปแบบ',icon:'🔷',description:'อ่านลำดับสัญลักษณ์แล้วทายตัวถัดไป'},risk:{title:'ประมูลแต้ม',icon:'🎲',description:'เดิมพันเลข 1–5 · เลขสูงชนะ แต่ได้แต้มลดลง'},reaction:{title:'วัดความไว',icon:'⚡',description:'ตั้งท่า รอสัญญาณเดียวกัน แล้วแตะให้ไว'},odd:{title:'คำไหนต่าง',icon:'🕵️',description:'จับหมวดหมู่แล้วเลือกตัวแปลก · ต้องใช้เหตุผล'},detective:{title:'คดีคำให้การ',icon:'🔎',description:'มีคำให้การจริงเพียงข้อเดียว · วิเคราะห์หาคนร้าย'},algebra:{title:'สมการตัวแปร',icon:'📐',description:'ย้ายพจน์สองฝั่งแล้วแก้ค่า x'},probability:{title:'คิดความน่าจะเป็น',icon:'🎲',description:'คำนวณโอกาสจากลูกเต๋า เหรียญ และไพ่'}
 };
 return info[state.gameType]||{title:'เกมคำถาม',icon:'💞',description:'คลังคำถามสำหรับคู่รัก'}
}
function updateMiniScores(){const role=myRole();$('#miniScoreMe').textContent=state.score[role]||0;$('#miniScoreOther').textContent=state.score[role==='host'?'guest':'host']||0}
let miniTimerKey="",miniStartedAt=0,reactionTimerKey="",reactionTimeoutId=null,reactionVisible=false,reactionStartedAt=0;
function miniDuration(){
 const type=state.gameType,mini=state.mini;
 if(type==='ox')return 20;if(type==='memory')return mini.status==='miss'?12:35;
 if(type==='reaction')return mini.status==='ready'?35:8;
 if(type==='emoji')return 75;if(type==='taboo')return 45;if(type==='math')return({easy:18,medium:28,hard:40,pro:55}[state.mathDifficulty||'medium']);
 return({rps:20,sync:25,target:20,split:20,high:20,logic:45,word:40,code:90,pattern:30,risk:18,odd:35,detective:60,algebra:45,probability:40}[type]||30)
}
function ensureMiniDeadline(){
 const mini=state?.mini;if(!mini||state.phase!=='mini'||mini.status==='reveal'){if(mini){mini.deadlineAt=null;mini.deadlineKey=''}return}
 const key=[state.gameType,mini.round,mini.status,mini.turn||''].join(':');
 if(isHost&&mini.deadlineKey!==key){mini.deadlineKey=key;mini.deadlineAt=Date.now()+miniDuration()*1000}
 if(!Number.isFinite(mini.deadlineAt))mini.deadlineAt=Date.now()+miniDuration()*1000
}
function startMiniClock(){
 clearInterval(miniClockId);const mini=state?.mini;if(!mini||state.phase!=='mini'||mini.status==='reveal'){ $('#miniCountdown').classList.add('hidden');return }
 ensureMiniDeadline();$('#miniCountdown').classList.remove('hidden');
 const tick=()=>{if(!state?.mini||state.phase!=='mini'||state.mini.status==='reveal'){clearInterval(miniClockId);$('#miniCountdown').classList.add('hidden');return}const left=Math.max(0,Math.ceil((state.mini.deadlineAt-Date.now())/1000));$('#miniTimer').textContent=left;$('#miniCountdown').classList.toggle('urgent',left<=8);if(left<=0){clearInterval(miniClockId);if(isHost)setTimeout(handleMiniTimeout,0)}};
 tick();miniClockId=setInterval(tick,250)
}
function handleMiniTimeout(){
 if(!isHost||!state?.mini||state.phase!=='mini'||state.mini.status==='reveal')return;
 const mini=state.mini,role=mini.turn||null;mini.deadlineAt=null;
 if(state.gameType==='ox'){
   if(!role)return;const winner=role==='host'?'O':'X',winnerRole=role==='host'?'guest':'host';mini.status='reveal';mini.winner=winner;mini.last={winner,timeout:true};state.score[winnerRole]++;
   state.history.push({kind:'mini',question:'เกม OX · กระดาน '+mini.round,detail:'หมดเวลาตาของ '+state.players[role==='host'?0:1].name+' · '+state.players[winnerRole==='host'?0:1].name+' ได้แต้ม',badge:'ชนะเพราะหมดเวลา',ok:true});miniStateChanged();return
 }
 if(state.gameType==='memory'){
   const turn=mini.turn;mini.revealed=[];mini.turn=turn==='host'?'guest':'host';mini.status='play';state.history.push({kind:'mini',question:'จับคู่ความจำ · หมดเวลา',detail:state.players[turn==='host'?0:1].name+' ใช้เวลาเกินกำหนด',badge:'ส่งตา',ok:false});miniStateChanged();return
 }
 if(state.gameType==='taboo'){const guesser=mini.tabooGiver==='host'?'guest':'host';if(!mini.submitted[guesser])submitBlindChoice(guesser,TIMEOUT_CHOICE);return}
 if(state.gameType==='reaction'&&mini.status==='ready'){
   mini.submitted=mini.submitted||{host:false,guest:false};mini.last={host:mini.submitted.host?'พร้อม':'หมดเวลา',guest:mini.submitted.guest?'พร้อม':'หมดเวลา',winner:null,points:{host:0,guest:0}};mini.status='reveal';state.history.push({kind:'mini',question:'วัดความไว · รอบ '+mini.round,detail:'หมดเวลาเตรียมตัวก่อนเริ่มรอบ',badge:'หมดเวลา',ok:false});miniStateChanged();return
 }
 const timeoutRole=mini.submitted.host?'guest':'host';
 if(state.gameType==='rps'){
   mini.submissions=mini.submissions||{host:null,guest:null};mini.submitted=mini.submitted||{host:false,guest:false};
   for(const role of ['host','guest'])if(!mini.submitted[role]){mini.submissions[role]=TIMEOUT_CHOICE;mini.submitted[role]=true}
   if(mini.submitted.host&&mini.submitted.guest){const a=mini.submissions.host,b=mini.submissions.guest,winner=a===TIMEOUT_CHOICE&&b===TIMEOUT_CHOICE?null:a===TIMEOUT_CHOICE?'guest':b===TIMEOUT_CHOICE?'host':null;if(winner)state.score[winner]++;mini.last={host:a,guest:b,winner};mini.status='reveal';state.history.push({kind:'mini',question:'เป่ายิ้งฉุบ · รอบ '+mini.round,detail:state.players[0].name+': '+(a===TIMEOUT_CHOICE?'หมดเวลา':a)+' · '+state.players[1].name+': '+(b===TIMEOUT_CHOICE?'หมดเวลา':b),badge:winner?state.players[winner==='host'?0:1].name+' ชนะเพราะอีกคนหมดเวลา':'หมดเวลาทั้งคู่',ok:!!winner});miniStateChanged()}else publishMiniProgress();return
 }
 for(const role of ['host','guest'])if(!mini.submitted[role])submitBlindChoice(role,TIMEOUT_CHOICE)
}
const TIMEOUT_CHOICE='__timeout__';
function renderMiniGame(){
if(!state?.mini)return;
if(state.gameType==='math'&&state.mini.status==='choose'){const key=state.gameType+':'+state.mini.round;if(key!==miniTimerKey){miniTimerKey=key;miniStartedAt=performance.now()}}
if(state.gameType==='reaction'&&state.mini.status==='go'){const key=state.gameType+':'+state.mini.round;if(key!==reactionTimerKey){clearTimeout(reactionTimeoutId);reactionTimerKey=key;reactionVisible=false;reactionStartedAt=0;const round=state.mini.round;const cueAt=Number(state.mini.reactionCueAt)||Date.now()+1800;reactionTimeoutId=setTimeout(()=>{if(!state?.mini||state.gameType!=='reaction'||state.mini.status!=='go'||state.mini.round!==round)return;reactionVisible=true;reactionStartedAt=performance.now();renderMiniGame()},Math.max(0,cueAt-Date.now()))}}
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
    const outcome=mini.last.timeout?escapeHtml(state.players[winner==='X'?0:1].name)+' ชนะเพราะอีกคนหมดเวลา':winner==='draw'?'กระดานนี้เสมอกัน':escapeHtml(state.players[winner==='X'?0:1].name)+' ชนะกระดานนี้';
    html='<div class="ttt-board" role="group" aria-label="กระดาน OX">'+mini.board.map(cell=>'<div class="ttt-cell '+(cell?'occupied':'')+' '+(cell==='X'?'mark-x':'mark-o')+'">'+escapeHtml(cell)+'</div>').join('')+tttOverlayMarkup(mini.board)+'</div><p class="mini-note">'+outcome+'</p><button type="button" class="primary mini-next" data-mini-next>'+(mini.round>=mini.maxRounds?'ดูผลการแข่งขัน':'กระดานถัดไป')+'</button>'
  }else{
    $('#miniBanner').textContent=mini.turn===role?'ถึงตาคุณวาง '+mark:'รอ '+(mini.turn==='host'?'X':'O')+' · '+turnName+' เลือกช่อง';
    html='<div class="ttt-board" role="group" aria-label="กระดาน OX">'+mini.board.map((cell,index)=>'<button type="button" class="ttt-cell '+(cell?'occupied':'')+' '+(cell==='X'?'mark-x':'mark-o')+'" data-ttt="'+index+'" aria-label="ช่อง '+(index+1)+(cell?' '+cell:' ว่าง')+'" '+(cell||mini.turn!==role||!conn?.open?'disabled':'')+'>'+escapeHtml(cell)+'</button>').join('')+'</div><p class="mini-note">X · '+hostName+' &nbsp; O · '+guestName+'</p>'
  }
}
if(state.gameType==='rps'){
  const submitted=mini.submitted||{};$('#miniBanner').textContent=mini.status==='reveal'?'เฉลยรอบนี้แล้ว':mine?'ส่งคำตอบลับแล้ว · รออีกคนเลือก':'เลือกพร้อมกันโดยไม่เห็นคำตอบของอีกคน';
  if(mini.status==='reveal'&&mini.last){
    const labels={rock:'ค้อน',paper:'กระดาษ',scissors:'กรรไกร'},winner=mini.last.winner,aLabel=mini.last.host===TIMEOUT_CHOICE?'หมดเวลา':labels[mini.last.host],bLabel=mini.last.guest===TIMEOUT_CHOICE?'หมดเวลา':labels[mini.last.guest];
    html='<div class="mini-reveal-box"><div class="secret-picks"><div><small>'+hostName+'</small><strong>'+aLabel+'</strong></div><span>VS</span><div><small>'+guestName+'</small><strong>'+bLabel+'</strong></div></div><p class="mini-outcome">'+(winner?escapeHtml(state.players[winner==='host'?0:1].name)+' ชนะรอบนี้':'เสมอกันรอบนี้')+'</p><button type="button" class="primary mini-next" data-mini-next>'+(mini.round>=mini.maxRounds?'ดูผลการแข่งขัน':'รอบถัดไป')+'</button></div>'
  }else html='<div class="rps-choices">'+[['rock','✊','ค้อน'],['paper','✋','กระดาษ'],['scissors','✌️','กรรไกร']].map(([value,icon,label])=>'<button type="button" class="rps-choice" data-rps="'+value+'" '+(mine||!conn?.open?'disabled':'')+'><span>'+icon+'</span><strong>'+label+'</strong></button>').join('')+'</div><p class="mini-progress">'+hostName+' '+(submitted.host?'✓ ส่งแล้ว':'กำลังเลือก')+' · '+guestName+' '+(submitted.guest?'✓ ส่งแล้ว':'กำลังเลือก')+'</p>'
}

if(state.gameType==='reaction'&&mini.status!=='reveal'){
  const submitted=mini.submitted||{};
  if(mini.status==='ready'){
    $('#miniBanner').textContent=mine?'พร้อมแล้ว · รออีกคน':'ทั้งคู่กดพร้อม แล้วรอสัญญาณ';
    html='<div class="reaction-stage"><div><p class="reaction-message">กดพร้อมเมื่อทั้งคู่ตั้งท่าแล้ว · รอบนี้ห้ามแตะก่อนสัญญาณสีเขียว</p><button type="button" class="reaction-pad ready" data-choice="ready" '+(mine||!conn?.open?'disabled':'')+'>'+(mine?'✓ พร้อมแล้ว':'ฉันพร้อม')+'</button></div><p class="mini-progress">'+hostName+' '+(submitted.host?'✓ พร้อม':'กำลังเตรียม')+' · '+guestName+' '+(submitted.guest?'✓ พร้อม':'กำลังเตรียม')+'</p></div>';
  }else{
    $('#miniBanner').textContent=mine?'แตะแล้ว · รออีกคน':'ตั้งใจดูหน้าจอ แล้วแตะทันทีเมื่อขึ้นสีเขียว';
    html='<div class="reaction-stage"><div><p class="reaction-message">'+(reactionVisible?'แตะเลย!':'รอสัญญาณ...')+'</p><button type="button" class="reaction-pad '+(reactionVisible?'go':'')+'" data-choice="tap" '+(!reactionVisible||mine||!conn?.open?'disabled':'')+'>'+(reactionVisible?'แตะเลย!':'รอไฟเขียว')+'</button></div><p class="mini-progress">'+hostName+' '+(submitted.host?'✓ แตะแล้ว':'กำลังรอ')+' · '+guestName+' '+(submitted.guest?'✓ แตะแล้ว':'กำลังรอ')+'</p></div>';
  }
}

if(['sync','target','split','high','emoji','risk','reaction',...challengeGameTypes].includes(state.gameType)&&(state.gameType!=='reaction'||mini.status==='reveal')){
  const choices=miniOptions(state.gameType),submitted=mini.submitted||{},syncPrompt=state.gameType==='sync'?syncPromptBank[mini.syncQuestion??0]:null,emojiPuzzle=state.gameType==='emoji'?emojiPuzzleBank[mini.emojiQuestion??0]:null,challenge=mini.challenge||null;
  $('#miniBanner').textContent=mini.status==='reveal'?'เปิดผลรอบนี้แล้ว':mine?'ส่งคำตอบลับแล้ว · รออีกคนเลือก':'เลือกคำตอบของคุณแบบลับ';
  if(mini.status==='reveal'&&mini.last){
    const labels=Object.fromEntries(choices),a=labels[String(mini.last.host)]||mini.last.host,b=labels[String(mini.last.guest)]||mini.last.guest,points=mini.last.points||{host:0,guest:0};
    let outcome='เสมอกันรอบนี้';
    if(state.gameType==='sync')outcome=mini.last.host===mini.last.guest?'ใจตรงกัน! ได้คนละ 1 แต้ม':'คำตอบไม่เหมือนกัน รอบนี้ไม่มีคะแนน';
    else if(state.gameType==='split')outcome=a==='🤝 แบ่งกัน'&&b==='🤝 แบ่งกัน'?'แบ่งกันคนละ 1 แต้ม':a==='💎 เก็บไว้'&&b==='💎 เก็บไว้'?'ทั้งคู่เก็บไว้ · ไม่มีใครได้แต้ม':(a==='💎 เก็บไว้'?hostName:guestName)+' เก็บได้ 2 แต้ม · '+(a==='🤝 แบ่งกัน'?hostName:guestName)+' ได้ 0 แต้ม';
    else if(state.gameType==='emoji'||isChallengeGame(state.gameType))outcome=points.host&&points.guest?'ถูกทั้งคู่ · ได้คนละ 1 แต้ม':points.host?hostName+' ตอบถูก · ได้ 1 แต้ม':points.guest?guestName+' ตอบถูก · ได้ 1 แต้ม':'รอบนี้ยังไม่มีใครตอบถูก';
    else if(state.gameType==='risk')outcome=mini.last.winner?escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ชนะการประมูล · ได้ '+points[mini.last.winner]+' แต้ม':a===b?'เดิมพันเลขซ้ำ · ไม่มีใครได้แต้ม':'ไม่มีผู้ชนะ';
    else if(state.gameType==='reaction')outcome=mini.last.winner?escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ไวกว่า · ได้ 1 แต้ม':'แตะพร้อมกันมาก · เสมอกันรอบนี้';
    else if(mini.last.winner)outcome=escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ชนะรอบนี้';
    const promptHtml=syncPrompt?'<p class="mini-note">'+escapeHtml(syncPrompt.question)+'</p>':emojiPuzzle?'<div class="emoji-riddle">'+escapeHtml(emojiPuzzle.clue)+'</div>':challenge?'<p class="challenge-prompt">'+escapeHtml(challenge.prompt)+'</p>':'';
    if(state.gameType==='math')outcome=points.host&&points.guest?'ตอบถูกใกล้เคียงกัน · คนละ 1 แต้ม':mini.last.winner?escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' ตอบถูกเร็วกว่า · ได้ 1 แต้ม':mini.last.host===TIMEOUT_CHOICE||mini.last.guest===TIMEOUT_CHOICE?'หมดเวลา · คนที่ยังไม่ตอบแพ้รอบนี้':'ไม่มีใครตอบถูก';
    if(state.gameType==='taboo')outcome=mini.last.winner?escapeHtml(state.players[mini.last.winner==='host'?0:1].name)+' เดาถูก · ได้ 1 แต้ม':mini.last.timeout?'หมดเวลา · ผู้ทายแพ้รอบนี้':'ทายไม่ถูก · ไม่มีคะแนน';
    const hostElapsed=mini.answerTimes?.host,guestElapsed=mini.answerTimes?.guest,hostPoints='+'+(points.host||0)+(['math','reaction'].includes(state.gameType)&&Number.isFinite(hostElapsed)?' · '+(hostElapsed/1000).toFixed(2)+' วิ':''),guestPoints='+'+(points.guest||0)+(['math','reaction'].includes(state.gameType)&&Number.isFinite(guestElapsed)?' · '+(guestElapsed/1000).toFixed(2)+' วิ':'');
    const answerHtml=emojiPuzzle?'<p class="mini-note">คำตอบ: '+escapeHtml(mini.last.answer)+'<br>'+escapeHtml(mini.last.hint)+'</p>':state.gameType==='taboo'?'<p class="mini-note">คำเป้าหมาย: '+escapeHtml(mini.last.answer)+'<br>คำต้องห้าม: '+escapeHtml((mini.last.forbidden||[]).join(' · '))+'</p>':challenge?'<p class="mini-note">เฉลย: '+escapeHtml(challenge.options[challenge.answer])+(challenge.explanation?' · '+escapeHtml(challenge.explanation):'')+'</p>':'';
    html=promptHtml+'<div class="mini-reveal-box"><div class="secret-picks"><div><small>'+hostName+'</small><strong>'+escapeHtml(String(a))+'</strong><em>'+hostPoints+'</em></div><span>VS</span><div><small>'+guestName+'</small><strong>'+escapeHtml(String(b))+'</strong><em>'+guestPoints+'</em></div></div>'+(state.gameType==='target'?'<p class="mini-note">เลขเป้าหมายคือ '+mini.target+'</p>':'')+answerHtml+'<p class="mini-outcome">'+outcome+'</p><button type="button" class="primary mini-next" data-mini-next>'+(mini.round>=mini.maxRounds?'ดูผลการแข่งขัน':'รอบถัดไป')+'</button></div>';
  }else{
    const promptHtml=syncPrompt?'<p class="mini-note">'+escapeHtml(syncPrompt.question)+'</p>':emojiPuzzle?'<div class="emoji-riddle" aria-label="โจทย์อีโมจิ">'+escapeHtml(emojiPuzzle.clue)+'</div><p class="mini-note">ถอดสำนวนจากภาพ · '+escapeHtml(emojiPuzzle.hint)+'</p>':challenge?'<p class="challenge-prompt">'+escapeHtml(state.gameType==='taboo'?(role===(mini.tabooGiver||'host')?'อธิบายคำเป้าหมายโดยห้ามใช้คำต้องห้าม':'ฟังคำใบ้ แล้วเลือกคำเป้าหมาย'):challenge.prompt)+'</p>':'';
    const gridClass=state.gameType==='target'||state.gameType==='high'||state.gameType==='risk'?'number-choices':challenge?'challenge-choices':'';
    let help='เลือกคำตอบแบบลับ';
    if(state.gameType==='target')help='เป้าหมายลับอยู่ระหว่าง 1–10 · เลือกเลขที่คิดว่าใกล้ที่สุด';
    if(state.gameType==='high')help='เลขแต่ละตัวชนะ 2 ตัวถัดไปในวงจร และแพ้ 2 ตัวก่อนหน้า';
    if(state.gameType==='split')help='แบ่ง/แบ่ง = คนละ 1 · เก็บ/แบ่ง = คนเก็บได้ 2 · เก็บ/เก็บ = 0 ทั้งคู่';
    if(state.gameType==='risk')help='เลือกเดิมพัน 1–5 · เลขสูงกว่าชนะ แต่ได้แต้ม 1–4 ตามเลขที่ใช้ · เลขซ้ำได้ 0';
    if(state.gameType==='emoji')help='เลือกสำนวนที่ตรงที่สุดจากตัวเลือกใกล้เคียงกัน · มีเวลารอบละ 75 วินาที';
    if(state.gameType==='taboo')help='คนใบ้ห้ามพูดคำที่กำหนด · คนทายมีเวลา 45 วินาที';
    if(challenge&&state.gameType!=='taboo')help=state.gameType==='math'?'คิดให้ไว · ตอบถูกและเร็วกว่าได้แต้ม · หมดเวลาแพ้รอบนี้':'เลือกคำตอบแบบลับ · ตอบถูกได้ 1 แต้ม';
     const giver=mini.tabooGiver||'host',guesser=giver==='host'?'guest':'host',isTabooGiver=state.gameType==='taboo'&&role===giver;
     let answerControl;if(isTabooGiver){$('#miniBanner').textContent='ใบ้คำให้ '+(guesser==='host'?hostName:guestName);answerControl='<div class="taboo-card"><small>คำเป้าหมาย</small><strong>'+escapeHtml(challenge.target||'คำเป้าหมาย')+'</strong><p>ห้ามพูดคำเหล่านี้</p><div class="taboo-forbidden">'+(challenge.forbidden||[]).map(word=>'<span>'+escapeHtml(word)+'</span>').join('')+'</div><small class="taboo-instruction">อธิบายคำนี้ด้วยเสียง โดยห้ามพูดคำด้านบน · รอให้อีกคนเลือกคำตอบ</small></div>'}else{if(state.gameType==='taboo')$('#miniBanner').textContent=mine?'ส่งคำตอบแล้ว · รอเฉลย':'ฟังคำใบ้ แล้วเลือกคำเป้าหมาย';answerControl='<div class="blind-choices '+gridClass+'">'+choices.map(([value,label])=>'<button type="button" class="blind-choice" data-choice="'+value+'" '+(mine||!conn?.open?'disabled':'')+'><strong>'+escapeHtml(label)+'</strong></button>').join('')+'</div>'}
     const progress=state.gameType==='taboo'?'<p class="mini-progress">'+(giver==='host'?hostName:guestName)+' กำลังใบ้ · '+(guesser==='host'?hostName:guestName)+' '+(submitted[guesser]?'✓ ตอบแล้ว':'กำลังฟังคำใบ้')+'</p>':'<p class="mini-progress">'+hostName+' '+(submitted.host?'✓ ส่งแล้ว':'กำลังเลือก')+' · '+guestName+' '+(submitted.guest?'✓ ส่งแล้ว':'กำลังเลือก')+'</p>';
     html=promptHtml+answerControl+'<p class="mini-note">'+help+'</p>'+progress;
  }
}
$('#miniContent').innerHTML=html;startMiniClock();saveSession()
}

function publishMiniProgress(){if(!isHost||!state?.mini)return;send('MINI_PROGRESS',{gameType:state.gameType,round:state.mini.round,submitted:state.mini.submitted});renderMiniGame()}
function miniStateChanged(){if(state.phase==='finished'){finish();return}ensureMiniDeadline();send('MINI_STATE',{state:guestSnapshot()});renderMiniGame()}
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
state.mini.turn=role==='host'?'guest':'host';ensureMiniDeadline();send('MINI_STATE',{state:guestSnapshot()});renderMiniGame()
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
 if(type==='reaction')return state.mini.status==='ready'?[['ready','พร้อม']]:[['tap','แตะ']];
 if(type==='emoji'){const puzzle=emojiPuzzleBank[state.mini.emojiQuestion??0];return(puzzle?.options||[]).map((label,index)=>[String(index),label])}
 if(type==='split')return[['share','🤝 แบ่งกัน'],['keep','💎 เก็บไว้']];
 if(type==='high'||type==='risk')return Array.from({length:5},(_,i)=>[String(i+1),type==='risk'?(i+1)+' แต้ม':String(i+1)]);
 if(type==='target')return Array.from({length:10},(_,i)=>[String(i+1),String(i+1)]);
 if(isChallengeGame(type))return(state.mini.challenge?.options||[]).map((label,index)=>[String(index),label]);
 return[]
}
function submitBlindChoice(role,choice,timeMs=0){
 const reaction=state.gameType==='reaction',type=state.gameType,timeout=choice===TIMEOUT_CHOICE;
 if(!isHost||!['sync','target','split','high','emoji','risk','reaction',...challengeGameTypes].includes(type)||state.phase!=='mini'||(reaction?!['ready','go'].includes(state.mini.status):state.mini.status!=='choose')||state.mini.submitted[role])return;
 if(!timeout&&Number.isFinite(state.mini.deadlineAt)&&Date.now()>=state.mini.deadlineAt){handleMiniTimeout();return}
 const allowed=miniOptions(type).map(([value])=>String(value));
 if(timeout){if(!isHost)return}else if(!allowed.includes(String(choice)))return;
 if(type==='taboo'&&role!==(state.mini.tabooGiver==='host'?'guest':'host')&&!timeout)return;
 choice=timeout?TIMEOUT_CHOICE:['sync','split','reaction'].includes(type)?String(choice):Number(choice);
 state.mini.submissions[role]=choice;state.mini.submitted[role]=true;
 if(type==='math'||(reaction&&choice==='tap')){state.mini.answerTimes=state.mini.answerTimes||{host:null,guest:null};state.mini.answerTimes[role]=timeout?null:Math.max(0,Number(timeMs)||0)}
 if(reaction&&state.mini.status==='ready'){
   if(state.mini.submitted.host&&state.mini.submitted.guest){
     if(state.mini.submissions.host===TIMEOUT_CHOICE||state.mini.submissions.guest===TIMEOUT_CHOICE){const a=state.mini.submissions.host,b=state.mini.submissions.guest;state.mini.last={host:a,guest:b,winner:null,points:{host:0,guest:0}};state.mini.status='reveal';state.history.push({kind:'mini',question:'วัดความไว · รอบ '+state.mini.round,detail:state.players[0].name+': '+(a===TIMEOUT_CHOICE?'หมดเวลา':'พร้อม')+' · '+state.players[1].name+': '+(b===TIMEOUT_CHOICE?'หมดเวลา':'พร้อม'),badge:'หมดเวลาเตรียมตัว',ok:false});miniStateChanged()}
     else{state.mini.status='go';state.mini.reactionCueAt=Date.now()+1400+Math.random()*2200;state.mini.submissions={host:null,guest:null};state.mini.submitted={host:false,guest:false};state.mini.answerTimes={host:null,guest:null};state.mini.deadlineKey='';state.mini.deadlineAt=null;miniStateChanged()}
   }else publishMiniProgress();return
 }
 if(type==='taboo'){const giver=state.mini.tabooGiver||'host',guesser=giver==='host'?'guest':'host',target=state.mini.challenge.target,correct=!timeout&&choice===state.mini.challenge.answer,points={host:0,guest:0};if(correct)points[guesser]=1;state.score.host+=points.host;state.score.guest+=points.guest;const chosen=timeout?'หมดเวลา':state.mini.challenge.options[choice];state.mini.last={host:giver==='host'?'ใบ้คำ':choice,guest:giver==='guest'?'ใบ้คำ':choice,points,winner:correct?guesser:null,answer:target,forbidden:[...(state.mini.challenge.forbidden||[])],timeout};state.mini.status='reveal';state.mini.deadlineAt=null;const guesserName=state.players[guesser==='host'?0:1].name,giverName=state.players[giver==='host'?0:1].name;state.history.push({kind:'mini',question:'คำต้องห้าม · '+target+' · รอบ '+state.mini.round,detail:giverName+' ใบ้คำ · '+guesserName+' ตอบ '+chosen,badge:correct?guesserName+' ทายถูก · ได้ 1 แต้ม':timeout?'หมดเวลา · ผู้ทายแพ้รอบนี้':'ทายไม่ถูก · ไม่มีคะแนน',ok:correct});miniStateChanged();return}
 if(!state.mini.submitted.host||!state.mini.submitted.guest){publishMiniProgress();return}
 const a=state.mini.submissions.host,b=state.mini.submissions.guest;let winner=null,points={host:0,guest:0};
 if(type==='sync'){if(a!==TIMEOUT_CHOICE&&b!==TIMEOUT_CHOICE&&a===b)points={host:1,guest:1}}
 if(type==='target'){const da=Number.isFinite(a)?Math.abs(a-state.mini.target):Infinity,db=Number.isFinite(b)?Math.abs(b-state.mini.target):Infinity;winner=da===db?null:da<db?'host':'guest';if(winner&&Number.isFinite(winner==='host'?a:b))points[winner]=1}
 if(type==='emoji'){const correct=emojiPuzzleBank[state.mini.emojiQuestion].answerIndex;points={host:Number(a!==TIMEOUT_CHOICE&&a===correct),guest:Number(b!==TIMEOUT_CHOICE&&b===correct)}}
 if(type==='math'){const correct=state.mini.challenge.answer,hostCorrect=a!==TIMEOUT_CHOICE&&a===correct,guestCorrect=b!==TIMEOUT_CHOICE&&b===correct,times=state.mini.answerTimes||{host:null,guest:null};if(hostCorrect&&guestCorrect){if(Math.abs(times.host-times.guest)<=250)points={host:1,guest:1};else{winner=times.host<times.guest?'host':'guest';points[winner]=1}}else if(hostCorrect){winner='host';points.host=1}else if(guestCorrect){winner='guest';points.guest=1}}
 if(isChallengeGame(type)&&type!=='math'){const correct=state.mini.challenge.answer;points={host:Number(a!==TIMEOUT_CHOICE&&a===correct),guest:Number(b!==TIMEOUT_CHOICE&&b===correct)}}
 if(type==='high'&&Number.isFinite(a)&&Number.isFinite(b)){const difference=(a-b+5)%5;if(difference===1||difference===2){winner='host';points.host=1}else if(difference===3||difference===4){winner='guest';points.guest=1}}
 if(type==='risk'&&Number.isFinite(a)&&Number.isFinite(b)&&a!==b){winner=a>b?'host':'guest';points[winner]=6-Math.max(a,b)}
 if(reaction){const times=state.mini.answerTimes||{},hostTap=Number.isFinite(times.host),guestTap=Number.isFinite(times.guest);if(hostTap&&!guestTap){winner='host';points.host=1}else if(guestTap&&!hostTap){winner='guest';points.guest=1}else if(hostTap&&guestTap&&Math.abs(times.host-times.guest)>25){winner=times.host<times.guest?'host':'guest';points[winner]=1}}
 if(type==='split'&&a!==TIMEOUT_CHOICE&&b!==TIMEOUT_CHOICE){if(a==='share'&&b==='share')points={host:1,guest:1};else if(a==='keep'&&b==='share')points={host:2,guest:0};else if(a==='share'&&b==='keep')points={host:0,guest:2}}
 state.score.host+=points.host;state.score.guest+=points.guest;
 state.mini.last={host:a,guest:b,winner,points,...(type==='emoji'?{answer:emojiPuzzleBank[state.mini.emojiQuestion].answer,hint:emojiPuzzleBank[state.mini.emojiQuestion].hint}:{})};state.mini.status='reveal';state.mini.deadlineAt=null;
 const labels=Object.fromEntries(miniOptions(type)),label=value=>value===TIMEOUT_CHOICE?'หมดเวลา':labels[String(value)]||String(value);
 let badge=winner?state.players[winner==='host'?0:1].name+' ชนะ':points.host||points.guest?'ได้คะแนน':'เสมอ';if(type==='sync')badge=a===b&&a!==TIMEOUT_CHOICE?'ใจตรงกัน':'คำตอบต่างกัน';if(type==='split')badge='+'+points.host+' : +'+points.guest;if(type==='emoji'||isChallengeGame(type))badge=points.host&&points.guest?'ถูกทั้งคู่':points.host?state.players[0].name+' ตอบถูก':points.guest?state.players[1].name+' ตอบถูก':'ยังไม่มีใครตอบถูก';if(type==='math'&&winner)badge=state.players[winner==='host'?0:1].name+' ตอบถูกเร็วกว่า';if(type==='risk')badge=winner?state.players[winner==='host'?0:1].name+' ได้ '+points[winner]+' แต้ม':a===b?'เดิมพันซ้ำ':'ไม่มีผู้ชนะ';if(reaction&&!winner)badge=points.host||points.guest?'มีคนแตะทันเวลา':'หมดเวลา · ไม่มีคะแนน';
 const reactionTimes=state.mini.answerTimes||{};state.history.push({kind:'mini',question:miniInfo().title+(type==='sync'?' · '+syncPromptBank[state.mini.syncQuestion??0].question:type==='emoji'?' · '+emojiPuzzleBank[state.mini.emojiQuestion??0].clue:state.mini.challenge?' · '+state.mini.challenge.prompt:'')+' · รอบ '+state.mini.round,detail:state.players[0].name+': '+label(a)+(reaction&&Number.isFinite(reactionTimes.host)?' ('+(reactionTimes.host/1000).toFixed(2)+' วิ)':'')+' · '+state.players[1].name+': '+label(b)+(reaction&&Number.isFinite(reactionTimes.guest)?' ('+(reactionTimes.guest/1000).toFixed(2)+' วิ':''),badge,ok:!!winner||!!(points.host||points.guest)});miniStateChanged()
}
function advanceMini(){
if(!isHost||state.phase!=='mini'||state.mini.status!=='reveal')return;
if(state.mini.round>=state.mini.maxRounds){finishMini();return}
state.mini.round++;state.mini.submissions={host:null,guest:null};state.mini.submitted={host:false,guest:false};state.mini.answerTimes={host:null,guest:null};state.mini.status=state.gameType==='ox'?'play':state.gameType==='reaction'?'ready':'choose';state.mini.last=null;if(state.gameType==='sync'){const old=state.mini.syncQuestion??0;let next=Math.floor(Math.random()*(syncPromptBank.length-1));if(next>=old)next++;state.mini.syncQuestion=next}
if(state.gameType==='emoji')state.mini.emojiQuestion=state.mini.emojiOrder[state.mini.round-1];
if(state.gameType==='taboo')state.mini.tabooGiver=state.mini.tabooGiver==='host'?'guest':'host';
if(state.gameType==='ox'){state.mini.board=Array(9).fill('');state.mini.winner=null;state.mini.turn=state.mini.round%2===0?'guest':'host'}
if(state.gameType==='target')state.mini.target=Math.floor(Math.random()*10)+1;
if(isChallengeGame(state.gameType)){const challenge=createUniqueChallenge(state.gameType,state.mini.usedChallenges||[]);state.mini.usedChallenges=state.mini.usedChallenges||[];state.mini.usedChallenges.push(challenge.id);state.mini.challenge=challenge}
ensureMiniDeadline();send('MINI_STATE',{state:guestSnapshot()});renderMiniGame()
}
$('#miniContent').addEventListener('click',event=>{
const ttt=event.target.closest('[data-ttt]'),memory=event.target.closest('[data-memory]'),memoryPass=event.target.closest('[data-memory-pass]'),rps=event.target.closest('[data-rps]'),choice=event.target.closest('[data-choice]');
if(memory){const index=Number(memory.dataset.memory);if(isHost)handleMemoryFlip('host',index);else send('MINI_ACTION',{gameType:'memory',index});return}
if(memoryPass){if(isHost)handleMemoryPass('host');else send('MINI_ACTION',{gameType:'memory',action:'pass'});return}
if(ttt){const index=Number(ttt.dataset.ttt);if(isHost)handleTttMove('host',index);else send('MINI_ACTION',{gameType:'ox',index});return}
if(rps){const value=rps.dataset.rps;if(isHost)submitMiniChoice('host',value);else{if(state.mini.status!=='choose'||state.mini.submitted.guest)return;state.mini.submissions.guest=value;state.mini.submitted.guest=true;send('MINI_SUBMIT',{gameType:'rps',round:state.mini.round,choice:value});renderMiniGame()}return}
if(choice){const value=choice.dataset.choice,timeMs=state.gameType==='math'?Math.max(0,Math.round(performance.now()-miniStartedAt)):state.gameType==='reaction'&&value==='tap'?Math.max(0,Math.round(performance.now()-reactionStartedAt)):0;if(isHost)submitBlindChoice('host',value,timeMs);else{const canSubmit=state.gameType==='reaction'?(value==='ready'?state.mini.status==='ready':state.mini.status==='go'&&reactionVisible):state.mini.status==='choose'&&(state.gameType!=='taboo'||myRole()!==(state.mini.tabooGiver||'host'));if(!canSubmit||state.mini.submitted.guest)return;state.mini.submissions.guest=['sync','split','reaction'].includes(state.gameType)?value:Number(value);state.mini.submitted.guest=true;if(state.gameType==='math'||(state.gameType==='reaction'&&value==='tap')){state.mini.answerTimes=state.mini.answerTimes||{host:null,guest:null};state.mini.answerTimes.guest=timeMs}send('MINI_SUBMIT',{gameType:state.gameType,round:state.mini.round,choice:value,timeMs});renderMiniGame()}return}

if(event.target.closest('[data-mini-next]')){if(isHost)advanceMini();else send('MINI_NEXT_REQUEST',{round:state.mini.round})}
});

function startGame(){if(!isHost||!conn?.open||state.phase!=='lobby'||!state.players.every(p=>p.name&&p.ready))return;miniTimerKey='';miniClockKey='';clearInterval(miniClockId);emojiDraft='';reactionTimerKey='';clearTimeout(reactionTimeoutId);reactionVisible=false;state.index=0;state.score={host:0,guest:0};state.history=[];if(state.gameType==='quiz'){state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';show('game');renderQuestion()}else{state.phase='mini';state.mini=createMiniState(state.gameType);show('game');renderMiniGame()}rememberRecentPlay(state.gameType);send('START',{state:guestSnapshot()})}
function next(){if(state.phase!=='reveal')return;if(!isHost){send('NEXT_REQUEST');return}if(state.index+1>=state.rounds){state.phase='finished';send('FINISH',{state});finish();return}state.index++;state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';renderQuestion();send('NEXT',{state})}
function startRematch(){
if(!isHost||!state?.players?.[1]?.name||!conn?.open)return toast('อีกคนหลุดจากห้อง จึงเริ่มเกมใหม่ไม่ได้');
const guest=state.players[1],guestToken=guest.token;selectedGame=state.gameType||selectedGame;selectedCategories=[...(state.categories||selectedCategories)];selectedRounds=state.rounds||8;selectedMode=state.mode||selectedMode;selectedAnswerMode=state.answerMode||selectedAnswerMode;selectedMathDifficulty=state.mathDifficulty||selectedMathDifficulty;
other=guest.name;state=makeState();state.players[1].token=guestToken;state.players.forEach(player=>player.ready=true);state.phase='lobby';startGame();toast('เริ่มเกมใหม่แล้ว · คะแนนเริ่มจากศูนย์')
}
function returnToLobby(){
if(!isHost||!state?.players?.[1]?.name||!conn?.open)return toast('ต้องเชื่อมต่อกับอีกคนก่อนจึงจะเลือกเกมใหม่ได้');
const guest=state.players[1],guestToken=guest.token;selectedGame=state.gameType||selectedGame;selectedCategories=[...(state.categories||selectedCategories)];selectedRounds=state.rounds||8;selectedMode=state.mode||selectedMode;selectedAnswerMode=state.answerMode||selectedAnswerMode;selectedMathDifficulty=state.mathDifficulty||selectedMathDifficulty;
other=guest.name;state=makeState();state.players[1].token=guestToken;show('lobby');updateLobby();send('LOBBY',{state});toast('กลับไปเลือกเกมได้เลย')
}
function requestGameSelection(){if(!state||state.phase==='lobby')return;if(isHost)returnToLobby();else if(conn?.open){send('GAME_SELECT_REQUEST');toast('ส่งคำขอกลับไปเลือกเกมแล้ว')}else toast('การเชื่อมต่อขาดหาย กรุณากลับเข้าห้องใหม่')
}
function restoreSavedView(){if(!state)return;if(state.phase==='lobby'){show('lobby');updateLobby();return}if(state.phase==='finished'){finish();return}show('game');if(state.gameType&&state.gameType!=='quiz'){renderMiniGame();return}renderQuestion(true);if(state.phase==='guess'&&state.chooser!==myRole()&&!Number.isInteger(state.guess))startQuizTimer()}
function setCreatePending(pending){hostCreatePending=pending;const button=$('#createBtn');if(!button)return;button.disabled=pending;button.setAttribute('aria-busy',String(pending));button.textContent=pending?'กำลังสร้างห้อง…':'＋ สร้างห้อง'}
function failHostCreate(message){if(hostCreateTimer){clearTimeout(hostCreateTimer);hostCreateTimer=null}setCreatePending(false);destroyPeer();setConn(false);show('home');toast(message)}
function setupHost(resume=false){
if(!window.Peer)return toast('โหลดระบบออนไลน์ไม่สำเร็จ โปรดรีโหลดหน้าแล้วลองอีกครั้ง');resumePending=resume;resumeAttempts=0;
if(resume){if(!savedSession)return toast('ไม่พบห้องที่บันทึกไว้');room=savedSession.room;me=savedSession.name;other=savedSession.other;sessionToken=savedSession.token||newToken();state=savedSession.state;if(state.players?.[1]?.name&&!state.players[1].token)state.players[1].token=sessionToken}
else{clearSavedSession();room=code();me=$('#name').value.trim()||'ผู้เล่น 1';other='';sessionToken=newToken();state=null;setCreatePending(true);toast('กำลังเชื่อมต่อเพื่อสร้างห้อง…');if(hostCreateTimer)clearTimeout(hostCreateTimer);hostCreateTimer=setTimeout(()=>{if(hostCreatePending&&isHost)failHostCreate('สร้างห้องไม่สำเร็จ · ตรวจอินเทอร์เน็ตแล้วลองอีกครั้ง')},20000)}
isHost=true;destroyPeer();setConn(false);createHostPeer(resume)
}
function createHostPeer(resume){if(!window.Peer){if(!resume)failHostCreate('โหลดระบบออนไลน์ไม่สำเร็จ โปรดรีโหลดหน้าแล้วลองอีกครั้ง');return}destroyPeer();try{peer=new Peer(room,peerOptions)}catch(error){if(!resume)failHostCreate('สร้างห้องไม่สำเร็จ · โปรดลองรีโหลดหน้าแล้วกดอีกครั้ง');else toast('กลับเข้าห้องไม่สำเร็จ · โปรดลองใหม่');return}peer.on('open',()=>{if(hostCreateTimer){clearTimeout(hostCreateTimer);hostCreateTimer=null}if(!resume)setCreatePending(false);setConn(true);if(!resume){state=makeState();show('lobby')}else restoreSavedView();updateLobby();if(resume)toast('กลับเข้าห้องเดิมแล้ว · รออีกคนเชื่อมต่อ');else toast('สร้างห้องแล้ว ส่งรหัสให้แฟนได้เลย');saveSession()});peer.on('connection',candidate=>{if(conn?.open){candidate.close();return}if(conn)try{conn.close()}catch(e){}conn=candidate;wire(candidate)});peer.on('disconnected',()=>{setConn(false);toast('สัญญาณเซิร์ฟเวอร์หลุด กำลังเชื่อมใหม่…');try{peer.reconnect()}catch(e){}});peer.on('error',e=>{setConn(false);if(e.type==='unavailable-id'&&resume&&resumeAttempts<6){resumeAttempts++;destroyPeer();setTimeout(()=>createHostPeer(true),1200);return}if(e.type==='unavailable-id'&&!resume){room=code();destroyPeer();toast('กำลังสร้างรหัสห้องใหม่…');setTimeout(()=>createHostPeer(false),500);return}if(!resume){failHostCreate('สร้างห้องไม่สำเร็จ ('+e.type+') · ตรวจอินเทอร์เน็ตแล้วลองอีกครั้ง');return}toast('ระบบเชื่อมต่อขัดข้อง: '+e.type)})}
function setupGuest(resume=false){
if(resume){if(!savedSession)return toast('ไม่พบห้องที่บันทึกไว้');room=savedSession.room;me=savedSession.name;other=savedSession.other;sessionToken=savedSession.token||newToken();state=savedSession.state}
else{room=$('#roomInput').value.trim().toUpperCase();me=$('#name').value.trim()||'ผู้เล่น 2';if(!room)return toast('กรอกรหัสห้องก่อน');if(!/^LD[A-Z0-9]{4}$/.test(room))return toast('รหัสห้องต้องเป็นรูปแบบ LDxxxx');clearSavedSession();sessionToken=newToken();state=null;other=''}
if(!window.Peer)return toast('โหลดระบบออนไลน์ไม่สำเร็จ โปรดรีโหลดหน้าแล้วลองอีกครั้ง');isHost=false;resumePending=resume;if(!resume)joinAttempts=0;destroyPeer();setConn(false);peer=new Peer(peerOptions);peer.on('open',()=>{if(resume){restoreSavedView();toast('กำลังกลับเข้าห้องเดิม…');connectGuest(0,true)}else{show('lobby');updateLobby();connectGuest()}});peer.on('disconnected',()=>{setConn(false);toast('สัญญาณเซิร์ฟเวอร์หลุด กำลังเชื่อมใหม่…');try{peer.reconnect()}catch(e){}if(state)scheduleGuestReconnect()});peer.on('error',e=>{setConn(false);if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}if(e.type==='peer-unavailable'&&resumePending){scheduleGuestReconnect();return}if(e.type==='peer-unavailable'&&!resumePending&&retryInitialJoin())return;toast(e.type==='peer-unavailable'?'ไม่พบผู้เล่น: ให้เจ้าของห้องเปิดหน้าห้องค้างไว้และตรวจรหัส':'เชื่อมต่อไม่สำเร็จ: '+e.type)})
}
function retryInitialJoin(){if(isHost||resumePending)return false;if(joinRetryTimer)return true;if(joinAttempts>=3)return false;const delays=[1200,2400,4000];joinAttempts++;toast('กำลังค้นหาห้องอีกครั้ง ('+joinAttempts+'/3)…');joinRetryTimer=setTimeout(()=>{joinRetryTimer=null;if(!isHost&&peer&&!peer.destroyed&&!conn?.open)connectGuest(0,false)},delays[joinAttempts-1]);return true}
function scheduleGuestReconnect(){if(isHost||!peer||peer.destroyed||reconnectTimer)return;resumePending=true;reconnectTimer=setTimeout(()=>{reconnectTimer=null;connectGuest(0,true)},1800);setConn(false)}
function connectGuest(attempt=0,persistent=resumePending){if(!peer||peer.destroyed||conn?.open)return;if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}if(conn)try{conn.close()}catch(e){}conn=peer.connect(room,{reliable:true,serialization:'json'});const current=conn;wire(current);connectionTimer=setTimeout(()=>{connectionTimer=null;if(conn!==current||current.open)return;try{current.close()}catch(e){}if(persistent||attempt<2){if(persistent)scheduleGuestReconnect();else setTimeout(()=>connectGuest(attempt+1,false),1200)}else toast('เชื่อมต่อไม่สำเร็จ ลองตรวจรหัสห้องหรือสัญญาณอินเทอร์เน็ต')},15000)}
function wire(channel=conn){if(!channel)return;channel.on('open',()=>{if(conn!==channel)return;if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}if(joinRetryTimer){clearTimeout(joinRetryTimer);joinRetryTimer=null}joinAttempts=0;setConn(true);toast(isHost?'แฟนเชื่อมต่อแล้ว':'เข้าห้องสำเร็จ');if(!isHost)send('JOIN',{name:me,token:sessionToken})});channel.on('close',()=>{if(conn!==channel)return;if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}conn=null;setConn(false);clearInterval(timerId);if(isHost)toast('อีกคนหลุดชั่วคราว · รอให้กลับมาเชื่อมต่อ');else if(state){toast('หลุดชั่วคราว · กำลังกลับเข้าห้อง');scheduleGuestReconnect()}else toast('การเชื่อมต่อถูกตัด')});channel.on('error',e=>{if(conn!==channel)return;if(connectionTimer){clearTimeout(connectionTimer);connectionTimer=null}setConn(false);if(!isHost&&!state&&!resumePending&&retryInitialJoin())return;if(!isHost&&state)scheduleGuestReconnect();else toast('เชื่อมต่อไม่สำเร็จ: '+(e?.type||'ลองใหม่'))});channel.on('data',handle)}
function guestSnapshot(){const copy=JSON.parse(JSON.stringify(state));if(copy.answerMode==='simultaneous'&&copy.phase!=='reveal'&&copy.phase!=='finished')copy.answers=blankAnswers();if(copy.gameType&&copy.gameType!=='quiz'&&copy.gameType!=='ox'&&copy.phase==='mini'&&copy.mini?.status!=='reveal')copy.mini.submissions={host:null,guest:null};if(copy.gameType==='target'&&copy.phase==='mini'&&copy.mini?.status!=='reveal')copy.mini.target=null;if(copy.gameType==='taboo'&&copy.phase==='mini'&&copy.mini?.status!=='reveal'&&copy.mini?.challenge){if(copy.mini.tabooGiver==='host'){copy.mini.challenge.target=null;copy.mini.challenge.forbidden=[]}else copy.mini.challenge.options=[]}if(copy.phase==='mini'&&copy.mini?.status!=='reveal'&&copy.mini?.challenge)copy.mini.challenge.answer=null;if(copy.phase==='mini'&&copy.mini?.status!=='reveal'&&copy.mini?.answerTimes)copy.mini.answerTimes={host:null,guest:null};return copy}
function resumeFromSnapshot(snapshot){
const local=state,localAnswers=local?.index===snapshot.index?local.answers?.guest:null,localGuess=local?.index===snapshot.index&&local.phase==='guess'?local.guess:null,localMiniSecret=local?.gameType===snapshot.gameType&&local?.mini?.round===snapshot.mini?.round?local.mini.submissions?.guest:null,localMiniTime=local?.gameType===snapshot.gameType&&local?.mini?.round===snapshot.mini?.round?local.mini.answerTimes?.guest:null;
state=snapshot;
if(state.answerMode==='simultaneous'&&state.phase!=='reveal'&&state.phase!=='finished'){
state.answers=blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();
if(localAnswers){state.answers.guest={self:localAnswers.self??null,guess:localAnswers.guess??null};for(const field of ['self','guess'])if(Number.isInteger(localAnswers[field])){state.simSubmitted.guest[field]=true;if(!snapshot.simSubmitted?.guest?.[field])send('SIM_ANSWER',{index:state.index,field,n:localAnswers[field]})}}
}else if(state.phase==='guess'&&!Number.isInteger(state.guess)&&Number.isInteger(localGuess))state.guess=localGuess;
if(!isHost&&state.phase==='mini'&&localMiniSecret!==null&&localMiniSecret!==undefined&&state.mini?.status!=='reveal'){state.mini.submissions.guest=localMiniSecret;state.mini.submitted.guest=true;if(state.gameType==='rps')send('MINI_SUBMIT',{gameType:'rps',round:state.mini.round,choice:localMiniSecret});if(['sync','target','split','high','emoji','risk','reaction',...challengeGameTypes].includes(state.gameType))send('MINI_SUBMIT',{gameType:state.gameType,round:state.mini.round,choice:localMiniSecret,timeMs:localMiniTime})}
other=state.players?.[0]?.name||other;resumePending=false;if(reconnectTimer){clearTimeout(reconnectTimer);reconnectTimer=null}restoreSavedView();saveSession()
}
function handle(message){
if(!message||typeof message.type!=='string')return;
if(message.type==='JOIN'&&isHost&&state){const guest=state.players[1];if(!guest.name){guest.id='guest';guest.name=String(message.name||'ผู้เล่น 2').trim().slice(0,18)||'ผู้เล่น 2';guest.token=String(message.token||'');guest.ready=false;other=guest.name}else if(!guest.token||guest.token!==message.token){send('ROOM_FULL');setTimeout(()=>{try{conn?.close()}catch(e){}},50);return}send('SYNC',{state:guestSnapshot()});if(state.phase==='lobby')updateLobby();saveSession();return}
if(message.type==='ROOM_FULL'&&!isHost){toast('ห้องนี้มีผู้เล่นอื่นอยู่แล้ว');resumePending=false;clearSavedSession();state=null;destroyPeer();show('home');return}
if(message.type==='SYNC'&&!isHost&&message.state){resumeFromSnapshot(message.state);return}
if(message.type==='LOBBY'&&!isHost&&message.state){state=message.state;other=state.players[0].name;show('lobby');updateLobby();saveSession();return}
if(message.type==='READY'&&isHost&&message.role==='guest'&&state.phase==='lobby'){const guest=state.players.find(p=>p.id==='guest');if(guest)guest.ready=true;updateLobby();send('LOBBY',{state});return}
if(message.type==='START'&&!isHost&&message.state){state=message.state;saveRecentPlayEntry(state.recentPlay);show('game');if(state.gameType&&state.gameType!=='quiz')renderMiniGame();else renderQuestion(true);return}
if(message.type==='ACTUAL'&&Number.isInteger(message.n)&&message.n>=1&&message.n<=4&&state.answerMode!=='simultaneous'&&state.phase==='choose'&&message.role===state.chooser){state.actual=message.n;state.phase='guess';state.deadlineAt=Number(message.deadlineAt)||Date.now()+60000;state.deadlineKey=state.index+':guess:'+state.answerMode;configureClassicPhase();startQuizTimer();if(state.chooser!==myRole()){toast('อีกคนเลือกแล้ว · ถึงตาคุณทาย')}saveSession();return}
if(message.type==='GUESS'&&isHost&&state.phase==='guess'){state.guess=Number.isInteger(message.n)?message.n:null;reveal();return}
if(message.type==='REVEAL'&&!isHost){clearInterval(timerId);state.deadlineAt=null;state.actual=message.actual;state.guess=Number.isInteger(message.guess)?message.guess:null;state.score=message.score;state.phase='reveal';const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'turns',actual:message.actual,guess:message.guess,ok:!!message.ok,chooser:state.chooser};state.history[state.index]=entry;renderReveal(entry);saveSession();return}
if(message.type==='SIM_ANSWER'&&isHost&&state.answerMode==='simultaneous'&&state.phase==='simultaneous'&&message.index===state.index&&['self','guess'].includes(message.field)&&Number.isInteger(message.n)&&message.n>=1&&message.n<=4){if(!Number.isInteger(state.answers.guest[message.field])){state.answers.guest[message.field]=message.n;state.simSubmitted.guest[message.field]=true;publishSimProgress()}return}
if(message.type==='SIM_PROGRESS'&&!isHost&&state.answerMode==='simultaneous'&&message.index===state.index){state.simSubmitted=message.submitted||state.simSubmitted;renderSimultaneous();saveSession();return}
if(message.type==='SIM_REVEAL'&&!isHost&&message.index===state.index){clearInterval(timerId);state.deadlineAt=null;state.answers=message.answers;state.simSubmitted={host:{self:true,guess:true},guest:{self:true,guess:true}};state.score=message.score;const entry={question:questionFor()[1],choices:[...questionFor()[2]],answerMode:'simultaneous',answers:message.answers,correct:message.correct};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);saveSession();return}
if(message.type==='MINI_ACTION'&&isHost&&state.gameType==='ox'&&message.gameType==='ox'){handleTttMove('guest',Number(message.index));return}
if(message.type==='MINI_ACTION'&&isHost&&state.gameType==='memory'&&message.gameType==='memory'){if(message.action==='pass')handleMemoryPass('guest');else handleMemoryFlip('guest',Number(message.index));return}
if(message.type==='MINI_SUBMIT'&&isHost&&message.gameType===state.gameType&&Number(message.round)===state.mini?.round){if(message.gameType==='rps')submitMiniChoice('guest',message.choice);if(['sync','target','split','high','emoji','risk','reaction',...challengeGameTypes].includes(message.gameType))submitBlindChoice('guest',message.choice,message.timeMs);return}
if(message.type==='MINI_PROGRESS'&&!isHost&&message.gameType===state.gameType&&Number(message.round)===state.mini?.round){state.mini.submitted=message.submitted||state.mini.submitted;renderMiniGame();return}
if(message.type==='MINI_STATE'&&!isHost&&message.state){if(state?.mini?.round!==message.state.mini?.round)emojiDraft='';state=message.state;if(state.phase==='finished')finish();else{renderMiniGame()}return}
if(message.type==='MINI_NEXT_REQUEST'&&isHost&&state.phase==='mini'&&Number(message.round)===state.mini?.round){advanceMini();return}
if(message.type==='NEXT_REQUEST'&&isHost){next();return}
if(message.type==='NEXT'&&!isHost&&message.state){state=message.state;renderQuestion(true);return}
if(message.type==='FINISH'&&!isHost&&message.state){state=message.state;finish();return}
if(message.type==='REMATCH_REQUEST'&&isHost&&state.phase==='finished')startRematch();if(message.type==='GAME_SELECT_REQUEST'&&isHost&&state.phase!=='lobby')returnToLobby()
}
function renderSavedView(){if(!state)return;if(state.phase==='lobby'){show('lobby');updateLobby();return}if(state.phase==='finished'){finish();return}show('game');if(state.gameType&&state.gameType!=='quiz'){renderMiniGame();return}renderQuestion(true);if(state.phase==='guess'&&state.chooser!==myRole()&&!Number.isInteger(state.guess))startQuizTimer()}
$('#answerMode').onclick=e=>{const button=e.target.closest('[data-value]');if(!button||button.disabled)return;selectedAnswerMode=button.dataset.value;updateSettingControls();if(isHost&&state?.phase==='lobby')publishLobbySettings()};
$('#resumeBtn').onclick=()=>savedSession?.isHost?setupHost(true):setupGuest(true);
$('#forgetSessionBtn').onclick=()=>{clearSavedSession();toast('ล้างห้องที่จำไว้แล้ว')};
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;$('#installBtn').classList.remove('hidden')});
window.addEventListener('appinstalled',()=>{$('#installBtn').classList.add('hidden');installPrompt=null;toast('เพิ่ม LOVE DUEL บนหน้าจอแล้ว')});
$('#installBtn').onclick=async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#installBtn').classList.add('hidden')};
$('#revealNowBtn').onclick=()=>{if(state.phase==='guess'&&state.chooser!==myRole()&&Number.isInteger(state.guess)){if(isHost)reveal();else{send('GUESS',{n:state.guess});$('#revealNowBtn').disabled=true;$('#revealNowBtn').textContent='รอเฉลย…';$('#roleBanner').textContent='ส่งคำตอบแล้ว · รอเจ้าของห้องเฉลย';saveSession()}}};
displayResume();updateLobby();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
