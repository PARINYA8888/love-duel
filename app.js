import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js';
import { forceLongPolling, getDatabase, onChildAdded, onDisconnect, onValue, get, push, ref, remove, serverTimestamp, set } from 'https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js';

const firebaseConfig={apiKey:'AIzaSyC2Dec248ieiO1PvAVqXZLQeXkmg7gjKY8',authDomain:'love-duel-55224.firebaseapp.com',databaseURL:'https://love-duel-55224-default-rtdb.asia-southeast1.firebasedatabase.app',projectId:'love-duel-55224',storageBucket:'love-duel-55224.firebasestorage.app',messagingSenderId:'592658217353',appId:'1:592658217353:web:fe3fbe12414573a5d54958'};
forceLongPolling();
const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const firebaseDb=getDatabase(firebaseApp,firebaseConfig.databaseURL);
let firebaseUser=null;
const firebaseAuthReady=signInAnonymously(firebaseAuth).then(credential=>{firebaseUser=credential.user;return firebaseUser});
firebaseAuthReady.catch(()=>{});

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
let conn=null,isHost=false,room='',me='',other='',state=null,selectedRounds=20,selectedMode='alternate',timerId=null;
let selectedAnswerMode='turns',resumePending=false,sessionToken='',savedSession=null,installPrompt=null;
let roomRef=null,partnerUid='',roomListeners=[],firebaseConnected=false,partnerConnected=false,joinSent=false,ownPresenceRef=null;
let coupleTheme={name:'คู่ของเรา',emoji:'♥',palette:'rose'};
const categoryNames=['ความทรงจำ','ความชอบ','อนาคต','ความสัมพันธ์','ชีวิตประจำวัน','กวน ๆ'];
const defaultCategories=['ความทรงจำ','ความชอบ','อนาคต'];
const roundOptions=[5,10,15,20,30,40];
const sessionKey='love-duel-session-v3';
const paletteMap={rose:['#ff5c7a','#ff8a65'],violet:['#a985ff','#ff7eaa'],ocean:['#55b8ff','#6ce0d5'],mint:['#51d6ad','#b7dd6a']};
const emojiChoices=['♥','💕','🐻','🐰','🌙','☀️'];
const defaultTheme={name:'คู่ของเรา',emoji:'♥',palette:'rose'};
let selectedCategories=[...defaultCategories];
savedSession=readSavedSession();
if(savedSession?.state?.coupleTheme)coupleTheme=normalizeTheme(savedSession.state.coupleTheme);
function show(name){Object.values(screens).forEach(screen=>screen.classList.remove('active'));screens[name].classList.add('active');window.scrollTo(0,0)}
function protectPullToRefresh(){let startY=0;document.addEventListener('touchstart',event=>{startY=event.touches[0].clientY},{passive:true});document.addEventListener('touchmove',event=>{const y=event.touches[0].clientY;if(window.scrollY<=0&&y>startY)event.preventDefault()},{passive:false});document.addEventListener('touchend',()=>{startY=0},{passive:true});window.addEventListener('beforeunload',event=>{saveSession();if(state&&['choose','guess','simultaneous'].includes(state.phase)){event.preventDefault();event.returnValue=''}})}
protectPullToRefresh();
function toast(message){const element=$('#toast');element.textContent=message;element.classList.add('show');setTimeout(()=>element.classList.remove('show'),2400)}
function code(){const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const bytes=new Uint8Array(6);crypto.getRandomValues(bytes);return'LD'+Array.from(bytes,byte=>alphabet[byte%alphabet.length]).join('')}
function questionsInCategories(categories=selectedCategories){return questions.filter(question=>categories.includes(question[0]))}
function shuffledQuestionOrder(categories=selectedCategories){const order=questions.map((question,index)=>categories.includes(question[0])?index:-1).filter(index=>index>=0);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}return order}
function questionFor(index=state.index){const questionIndex=state.questionOrder?.[index];return questions[Number.isInteger(questionIndex)?questionIndex:index%questions.length]}
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
$('#allCategoriesBtn').onclick=()=>{if(state&&!isHost)return;selectedCategories=[...categoryNames];if(state&&isHost)publishLobbySettings(true);else updateSettingControls()};
$('#rounds').onclick=e=>{const button=e.target.closest('[data-value]');if(!button||button.disabled)return;selectedRounds=Number(button.dataset.value);if(isHost&&state?.phase==='lobby')publishLobbySettings();else updateSettingControls()};
$('#mode').onclick=e=>{const button=e.target.closest('[data-value]');if(!button||button.disabled)return;selectedMode=button.dataset.value;if(isHost&&state?.phase==='lobby')publishLobbySettings();else updateSettingControls()};
$('#createBtn').onclick=()=>setupHost();$('#joinBtn').onclick=()=>setupGuest();
$('#copyRoom').onclick=async()=>{try{await navigator.clipboard.writeText(room);toast('คัดลอกรหัสห้องแล้ว')}catch(e){toast('คัดลอกไม่ได้ กรุณาจดรหัสห้องไว้')}};
$('#readyBtn').onclick=()=>{if(!state||!conn?.open)return;if(isHost&&state.players.every(p=>p.name&&p.ready)){startGame();return}const role=myRole(),player=state.players.find(p=>p.id===role);if(!player||player.ready)return;player.ready=true;updateLobby();send('READY',{role});if(isHost)send('LOBBY',{state})};
$('#nextBtn').onclick=next;
$('#playAgain').onclick=()=>{if(isHost)startRematch();else if(conn?.open){send('REMATCH_REQUEST');toast('ส่งคำขอเล่นอีกครั้งแล้ว')}else toast('การเชื่อมต่อขาดหาย กรุณาโหลดหน้าแล้วเข้าห้องใหม่')};
updateLobby();

// Keep a resumable session on this device, including the private room token.
function safeRead(key){try{return localStorage.getItem(key)}catch(e){return null}}
function safeWrite(key,value){try{localStorage.setItem(key,value);return true}catch(e){return false}}
function safeRemove(key){try{localStorage.removeItem(key)}catch(e){}}
function newToken(){return crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,'0')).join('')}
function normalizeTheme(theme={}){return{name:String(theme.name||defaultTheme.name).trim().slice(0,24)||defaultTheme.name,emoji:emojiChoices.includes(theme.emoji)?theme.emoji:defaultTheme.emoji,palette:Object.prototype.hasOwnProperty.call(paletteMap,theme.palette)?theme.palette:defaultTheme.palette}}
function readSavedSession(){try{const value=JSON.parse(safeRead(sessionKey)||'null');return value&&value.room&&value.state&&Date.now()-value.savedAt<7*24*60*60*1000?value:null}catch(e){return null}}
function displayResume(){const panel=$('#resumePanel');if(!panel)return;if(!savedSession){panel.classList.add('hidden');return}const s=savedSession.state,t=normalizeTheme(s.coupleTheme);const phase=s.phase==='lobby'?'ห้องรอเริ่ม':s.phase==='finished'?'จบเกมแล้ว':'คำถามที่ '+Math.min((s.index||0)+1,s.rounds||1);$('#resumeSummary').textContent=t.emoji+' '+t.name+' · '+phase+' · ห้อง '+savedSession.room;panel.classList.remove('hidden')}
function saveSession(){if(!room||!state)return;const record={room,isHost,name:me,other,token:sessionToken,state,savedAt:Date.now()};if(safeWrite(sessionKey,JSON.stringify(record)))savedSession=record;displayResume()}
function clearSavedSession(){safeRemove(sessionKey);savedSession=null;displayResume()}
function applyTheme(theme=coupleTheme){coupleTheme=normalizeTheme(theme);const colors=paletteMap[coupleTheme.palette];document.documentElement.style.setProperty('--accent',colors[0]);document.documentElement.style.setProperty('--accent2',colors[1]);document.querySelector('meta[name="theme-color"]').content=colors[0];$('.brand-mark').textContent=coupleTheme.emoji;$('.brand small').textContent=coupleTheme.name;$('#themePreview').textContent=coupleTheme.emoji;$('#resultTitle').textContent=coupleTheme.emoji+' '+coupleTheme.name;$('#coupleName').value=coupleTheme.name;document.querySelectorAll('[data-emoji]').forEach(b=>b.classList.toggle('selected',b.dataset.emoji===coupleTheme.emoji));document.querySelectorAll('[data-theme]').forEach(b=>b.classList.toggle('selected',b.dataset.theme===coupleTheme.palette))}
function updateThemeControls(){const locked=!!state&&(!isHost||state.phase!=='lobby');$('#coupleName').disabled=locked;document.querySelectorAll('#themeOptions button').forEach(b=>b.disabled=locked);applyTheme(state?.coupleTheme||coupleTheme)}
function send(type,payload={}){saveSession();if(!firebaseUser||!room||!partnerUid)return;const envelope={type,...payload};if(envelope.state)envelope.state=guestSnapshot(envelope.state);void sendRoomMessage(envelope)}
function updateConnection(){const wasOpen=!!conn?.open;const open=!!(firebaseConnected&&partnerConnected&&partnerUid);if(!conn)conn={open:false};conn.open=open;$('#connection').textContent=open?'เชื่อมต่อแล้ว':resumePending?'กำลังกลับเข้าห้อง…':'กำลังเชื่อมต่อ…';$('#connection').className='connection '+(open?'online':'offline');if(open&&!wasOpen){if(!isHost)toast('เชื่อมต่อห้องแล้ว');else if(state?.players?.[1]?.name)toast('แฟนเชื่อมต่อแล้ว');updateLobby();if(isHost&&state?.players?.[1]?.name)send('SYNC',{state:guestSnapshot()});resendPendingActions()}}
function listen(refValue,callback,error){const unsubscribe=onValue(refValue,callback,error||(()=>toast('เชื่อมต่อฐานข้อมูลไม่สำเร็จ · กำลังลองใหม่')));roomListeners.push(unsubscribe);return unsubscribe}
function clearRoomListeners(){roomListeners.splice(0).forEach(unsubscribe=>{try{unsubscribe()}catch(e){}})}
function disconnectFirebaseRoom(){clearInterval(timerId);clearRoomListeners();if(ownPresenceRef)remove(ownPresenceRef).catch(()=>{});ownPresenceRef=null;conn=null;roomRef=null;partnerUid='';firebaseConnected=false;partnerConnected=false;joinSent=false}
function updateLobby(){
const ps=state?.players||[];
if(state){selectedCategories=categoryNames.filter(name=>(state.categories||defaultCategories).includes(name));if(!selectedCategories.length)selectedCategories=[...defaultCategories];selectedRounds=Number(state.rounds)||20;selectedMode=state.mode||'alternate';selectedAnswerMode=state.answerMode||'turns';coupleTheme=normalizeTheme(state.coupleTheme||coupleTheme)}
[['#p1',ps[0]],['#p2',ps[1]]].forEach(([id,p])=>{const el=$(id);el.querySelector('b').textContent=p?.name||'รอผู้เล่น';el.querySelector('small').textContent=!p?.name?'ยังไม่พร้อม':p.ready?'พร้อมแล้ว':p.id==='guest'&&!conn?.open?'กำลังกลับมา…':'ยังไม่พร้อม';el.classList.toggle('ready',!!p?.ready)});
$('#roomCode').textContent=room;const bothReady=ps.length===2&&ps.every(p=>p?.name&&p.ready);
$('#lobbyHint').textContent=isHost?(!ps[1]?.name?'ส่งรหัสห้องให้อีกคน แล้วรอให้เข้ามา':!conn?.open?'รออีกคนกลับมาเชื่อมต่อ…':bothReady?'ทั้งคู่พร้อมแล้ว กดเริ่มเกมได้เลย':'กด “พร้อมเล่น” เมื่อพร้อม'):'รอเจ้าของห้องเริ่มเกม';
const mePlayer=ps.find(p=>p?.id===myRole());$('#readyBtn').textContent=isHost&&!conn?.open?'รอผู้เล่น':isHost&&bothReady?'เริ่มเกม':'พร้อมเล่น';$('#readyBtn').disabled=isHost?(!conn||!conn.open||!!mePlayer?.ready&&!bothReady):(!conn||!conn.open||!!mePlayer?.ready);
updateSettingControls();updateThemeControls();saveSession()
}
function makeState(){const categories=[...selectedCategories],questionOrder=shuffledQuestionOrder(categories);return{players:[{id:'host',name:me,ready:false},{id:'guest',name:other,ready:false,token:null}],categories,rounds:Math.min(selectedRounds,questionOrder.length),mode:selectedMode,answerMode:selectedAnswerMode,coupleTheme:normalizeTheme(coupleTheme),index:0,questionOrder,chooser:null,chooserByRound:{},actual:null,guess:null,guessSubmitted:false,answers:{host:{self:null,guess:null},guest:{self:null,guess:null}},simSubmitted:{host:{self:false,guess:false},guest:{self:false,guess:false}},score:{host:0,guest:0},history:[],phase:'lobby'}}
function publishLobbySettings(shuffleQuestions=false){if(!isHost||!state||state.phase!=='lobby')return;state.categories=[...selectedCategories];state.rounds=selectedRounds;state.mode=selectedMode;state.answerMode=selectedAnswerMode;state.coupleTheme=normalizeTheme(coupleTheme);if(shuffleQuestions){state.questionOrder=shuffledQuestionOrder(selectedCategories);state.chooserByRound={}}updateLobby();send('LOBBY',{state})}
function updateSettingControls(){const available=questionsInCategories().length,validRounds=roundOptions.filter(n=>n<=available);if(!validRounds.includes(selectedRounds))selectedRounds=validRounds.filter(n=>n<selectedRounds).pop()||validRounds[0]||5;$('#questionCount').textContent=state&&!isHost?'เจ้าของห้องเลือกหมวดคำถามให้ทั้งคู่':'มี '+available+' คำถาม จาก '+selectedCategories.length+' หมวดที่เลือก';document.querySelectorAll('#categories [data-category]').forEach(b=>{const selected=selectedCategories.includes(b.dataset.category);b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));b.disabled=!!state&&(!isHost||state.phase!=='lobby')});document.querySelectorAll('#rounds button').forEach(b=>{const round=Number(b.dataset.value);b.classList.toggle('selected',round===selectedRounds);b.disabled=round>available||(!!state&&(!isHost||state.phase!=='lobby'))});document.querySelectorAll('#mode button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===selectedMode);b.disabled=selectedAnswerMode==='simultaneous'||!!state&&(!isHost||state.phase!=='lobby')});document.querySelectorAll('#answerMode button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===selectedAnswerMode);b.disabled=!!state&&(!isHost||state.phase!=='lobby')});$('#chooserSettings').classList.toggle('hidden',selectedAnswerMode==='simultaneous');$('#allCategoriesBtn').disabled=!!state&&(!isHost||state.phase!=='lobby')}
function startGuessTimer(){clearInterval(timerId);if(state.phase!=='guess'||state.guessSubmitted)return;$('#talk').classList.remove('hidden');$('#timer').textContent=60;timerId=setInterval(()=>{const n=Number($('#timer').textContent)-1;$('#timer').textContent=n;if(n<=0){clearInterval(timerId);if(!state.guessSubmitted){state.guess=null;state.guessSubmitted=true;lockChoices();$('#roleBanner').textContent='หมดเวลา · กำลังเฉลยคำตอบ';toast('หมดเวลา ระบบกำลังเฉลยคำตอบ');send('GUESS',{index:state.index,n:null})}}},1000)}
function blankAnswers(){return{host:{self:null,guess:null},guest:{self:null,guess:null}}}
function blankSubmitted(){return{host:{self:false,guess:false},guest:{self:false,guess:false}}}
function renderQuestion(resume=false){
clearInterval(timerId);const item=questionFor();$('#qNo').textContent=(state.index+1)+' / '+state.rounds;$('#category').textContent=item[0];$('#question').textContent=item[1];$('#choices').innerHTML=item[2].map((t,i)=>'<button class="choice" data-n="'+(i+1)+'"><span class="num">'+(i+1)+'</span><span class="txt">'+t+'</span></button>').join('');
$('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');$('#classicReveal').classList.remove('hidden');$('#simReveal').classList.add('hidden');$('#simProgress').classList.add('hidden');
if(!resume){state.actual=null;state.guess=null;state.guessSubmitted=false;state.answers=blankAnswers();state.simSubmitted=blankSubmitted();state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';state.chooser=state.answerMode==='simultaneous'?null:chooserFor(state.index)}
else if(state.answerMode!=='simultaneous'&&!state.chooser)state.chooser=chooserFor(state.index);
document.querySelectorAll('.choice').forEach(button=>button.onclick=()=>pick(+button.dataset.n));
if(state.answerMode==='simultaneous')renderSimultaneous();else configureClassicPhase();updateScores();saveSession()
}
function configureClassicPhase(){
if(state.phase==='reveal'){const entry=state.history?.[state.index];if(entry)renderReveal(entry);return}
$('#simProgress').classList.add('hidden');$('#talk').classList.toggle('hidden',state.phase!=='guess');$('#reveal').classList.add('hidden');const chooserHere=state.chooser===myRole();
if(state.phase==='choose'){$('#roleBanner').textContent=chooserHere?'คุณเลือกคำตอบแบบลับ · เลือกได้เลย':'อีกคนกำลังเลือกคำตอบแบบลับ · รอสักครู่';document.querySelectorAll('.choice').forEach(button=>{button.disabled=!chooserHere;button.classList.toggle('locked',!chooserHere)});return}
if(state.phase==='guess'){const submitted=!!state.guessSubmitted;$('#roleBanner').textContent=chooserHere?'อีกคนกำลังทายคำตอบของคุณ':submitted?'ส่งคำตอบแล้ว · รอเฉลย':'เลือกคำตอบที่คิดว่าอีกคนเลือก';$('#talkPrompt').textContent=submitted?'ส่งแล้ว · กำลังรอเฉลย':'เลือกคำตอบที่คิดว่าอีกคนเลือก ภายใน 60 วินาที';document.querySelectorAll('.choice').forEach(button=>{button.disabled=chooserHere||submitted;button.classList.toggle('locked',chooserHere||submitted)});$('#revealNowBtn').classList.add('hidden')}
}
function simCount(role){const submitted=state.simSubmitted?.[role]||{};return Number(!!submitted.self)+Number(!!submitted.guess)}
function updateSimProgress(){const hostName=state.players?.[0]?.name||'คนที่ 1',guestName=state.players?.[1]?.name||'คนที่ 2';$('#simProgress').textContent=hostName+' '+simCount('host')+'/2 · '+guestName+' '+simCount('guest')+'/2'}
function renderSimultaneous(){
if(state.phase==='reveal'){const entry=state.history?.[state.index];if(entry)renderReveal(entry);return}
state.answers=state.answers||blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();const role=myRole(),mine=state.answers[role]||{self:null,guess:null};const step=!Number.isInteger(mine.self)?'self':!Number.isInteger(mine.guess)?'guess':null;
$('#talk').classList.add('hidden');$('#reveal').classList.add('hidden');$('#simProgress').classList.remove('hidden');updateSimProgress();$('#roleBanner').textContent=step==='self'?'ข้อ 1/2 · เลือกคำตอบของคุณแบบลับ':step==='guess'?'ข้อ 2/2 · เดาคำตอบที่แฟนจะเลือกแบบลับ': 'ส่งครบ 2/2 แล้ว · รอแฟนตอบให้ครบ';
document.querySelectorAll('.choice').forEach(button=>{button.disabled=state.phase!=='simultaneous'||!step;button.classList.toggle('locked',!step)});saveSession()
}
function pick(n){if(!Number.isInteger(n)||n<1||n>4||!state)return;if(state.answerMode==='simultaneous'){pickSimultaneous(n);return}if(state.phase==='choose'&&state.chooser===myRole()){state.actual=n;state.phase='guess';configureClassicPhase();send('ACTUAL_READY',{index:state.index,role:myRole()});toast('เลือกคำตอบแล้ว · อีกคนกำลังทายแบบลับ')}else if(state.phase==='guess'&&state.chooser!==myRole()){state.guess=n;state.guessSubmitted=true;lockChoices();clearInterval(timerId);$('#revealNowBtn').classList.add('hidden');$('#roleBanner').textContent='ส่งคำตอบแล้ว · รอเฉลย…';$('#talkPrompt').textContent='ส่งคำตอบแล้ว · กำลังรอเฉลย';send('GUESS',{index:state.index,n});saveSession()}}
function pickSimultaneous(n){if(state.phase!=='simultaneous')return;state.answers=state.answers||blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();const role=myRole(),mine=state.answers[role],field=!Number.isInteger(mine.self)?'self':!Number.isInteger(mine.guess)?'guess':null;if(!field)return;mine[field]=n;state.simSubmitted[role][field]=true;saveSession();renderSimultaneous();if(isHost)publishSimProgress();else if(field==='self')send('SIM_SUBMITTED',{index:state.index,field});else send('SIM_ANSWER',{index:state.index,answers:{...mine}});toast(field==='self'?'บันทึกข้อ 1/2 แล้ว · แตะอีกครั้งเพื่อเดาแฟน':'ส่งครบแล้ว · รอแฟนตอบ')}
function simAnswersComplete(){return['host','guest'].every(role=>['self','guess'].every(field=>Number.isInteger(state.answers?.[role]?.[field])))}
function publishSimProgress(){if(!isHost||state.phase!=='simultaneous')return;if(simAnswersComplete()){revealSimultaneous();return}send('SIM_PROGRESS',{index:state.index,submitted:state.simSubmitted})}
function revealSimultaneous(){if(!isHost||state.phase!=='simultaneous'||!simAnswersComplete())return;const answers=JSON.parse(JSON.stringify(state.answers)),correct={host:answers.host.guess===answers.guest.self,guest:answers.guest.guess===answers.host.self};state.score.host+=Number(correct.host);state.score.guest+=Number(correct.guest);const entry={question:questionFor()[1],answerMode:'simultaneous',answers,correct};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);send('SIM_REVEAL',{index:state.index,answers,correct,score:state.score});saveSession()}
function choiceText(value){const options=questionFor()[2];return Number.isInteger(value)&&value>=1&&value<=options.length?options[value-1]:'ไม่ได้ตอบ'}
function choiceTextAt(question,answer){const item=questions.find(q=>q[1]===question);return item&&Number.isInteger(answer)&&answer>=1&&answer<=item[2].length?item[2][answer-1]:'ไม่ได้ตอบ'}
function renderReveal(entry){
if(!entry)return;clearInterval(timerId);lockChoices();$('#talk').classList.add('hidden');$('#simProgress').classList.add('hidden');$('#reveal').classList.remove('hidden');
if(entry.answerMode==='simultaneous'){$('#classicReveal').classList.add('hidden');const box=$('#simReveal');box.replaceChildren();box.classList.remove('hidden');const hostName=state.players?.[0]?.name||'คนที่ 1',guestName=state.players?.[1]?.name||'คนที่ 2';const addCard=(title,answer,guessLabel,guess,ok)=>{const card=document.createElement('div');card.className='sim-answer-card '+(ok?'correct':'miss');const heading=document.createElement('small');heading.textContent=title;const actual=document.createElement('strong');actual.textContent=choiceText(answer);const detail=document.createElement('span');detail.textContent=guessLabel+': '+choiceText(guess)+(ok?' · ตรงกัน':' · ยังไม่ตรง');card.append(heading,actual,detail);box.append(card)};addCard(hostName+' ตอบ',entry.answers.host.self,guestName+' ทาย',entry.answers.guest.guess,!!entry.correct.guest);addCard(guestName+' ตอบ',entry.answers.guest.self,hostName+' ทาย',entry.answers.host.guess,!!entry.correct.host);const count=Number(!!entry.correct.host)+Number(!!entry.correct.guest);$('#resultText').textContent=count===2?'ทายใจกันถูกทั้งคู่!':count===1?'ทายใจตรงกัน 1 คน · ได้รู้จักกันมากขึ้น':'คำตอบต่างกัน · ชวนกันคุยต่อได้เลย';$('#resultText').className='result-text '+(count?'ok':'miss')}
else{$('#classicReveal').classList.remove('hidden');$('#simReveal').classList.add('hidden');$('#actual').textContent=choiceText(entry.actual);$('#guess').textContent=choiceText(entry.guess);$('#resultText').textContent=entry.ok?'ทายถูก รู้ใจกันจริง ๆ':Number.isInteger(entry.guess)?'พลาดข้อนี้ แต่ได้รู้จักกันมากขึ้น':'หมดเวลา รอบนี้ไม่มีคะแนน';$('#resultText').className='result-text '+(entry.ok?'ok':'miss')}
updateScores();saveSession()
}
function reveal(){clearInterval(timerId);if(!state||state.chooser!==myRole()||state.phase==='reveal'||!Number.isInteger(state.actual))return;const ok=state.actual===state.guess,guesser=state.chooser==='host'?'guest':'host';if(ok)state.score[guesser]++;const entry={question:questionFor()[1],answerMode:'turns',actual:state.actual,guess:state.guess,ok,chooser:state.chooser};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);send('REVEAL',{index:state.index,actual:state.actual,guess:state.guess,ok,score:state.score});saveSession()}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function historyMarkup(h,i){if(h.answerMode==='simultaneous'){const count=Number(!!h.correct?.host)+Number(!!h.correct?.guest);return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">'+escapeHtml(state.players[0].name)+': '+escapeHtml(choiceTextAt(h.question,h.answers.host.self))+' · '+escapeHtml(state.players[1].name)+' ทาย '+escapeHtml(choiceTextAt(h.question,h.answers.guest.guess))+'</small><small class="answer-detail">'+escapeHtml(state.players[1].name)+': '+escapeHtml(choiceTextAt(h.question,h.answers.guest.self))+' · '+escapeHtml(state.players[0].name)+' ทาย '+escapeHtml(choiceTextAt(h.question,h.answers.host.guess))+'</small></span><span class="badge '+(count?'ok':'miss')+'">'+count+'/2</span></div>'}return'<div class="history-row"><span class="q">'+(i+1)+'. '+escapeHtml(h.question)+'<small class="answer-detail">คำตอบจริง: '+escapeHtml(choiceTextAt(h.question,h.actual))+' · ทาย: '+escapeHtml(choiceTextAt(h.question,h.guess))+'</small></span><span class="badge '+(h.ok?'ok':'miss')+'">'+(h.ok?'ตรงกัน':'ไม่ตรง')+'</span></div>'}
function finish(){clearInterval(timerId);show('result');applyTheme(state.coupleTheme);const mine=state.score[myRole()],theirs=state.score[myRole()==='host'?'guest':'host'],max=state.rounds*(state.answerMode==='simultaneous'?2:1);const correct=state.history.reduce((total,h)=>total+(h.answerMode==='simultaneous'?Number(!!h.correct?.host)+Number(!!h.correct?.guest):Number(!!h.ok)),0);const pct=Math.round(correct/Math.max(max,1)*100);$('#percent').textContent=pct+'%';$('#resultSummary').textContent=pct>=80?'รู้ใจกันสุด ๆ':pct>=50?'เริ่มรู้ใจกันมากขึ้นแล้ว':'คะแนนไม่สำคัญเท่ากับได้คุยกัน';$('#finalMe').textContent=mine;$('#finalOther').textContent=theirs;$('#historyList').innerHTML=state.history.map(historyMarkup).join('');saveSession()}
function startGame(){if(!isHost||!conn?.open||state.phase!=='lobby'||!state.players.every(p=>p.name&&p.ready))return;state.index=0;state.score={host:0,guest:0};state.history=[];state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';show('game');renderQuestion();send('START',{state})}
function next(){if(state.phase!=='reveal')return;if(!isHost){send('NEXT_REQUEST');return}if(state.index+1>=state.rounds){state.phase='finished';send('FINISH',{state});finish();return}state.index++;state.phase=state.answerMode==='simultaneous'?'simultaneous':'choose';renderQuestion();send('NEXT',{state})}
function startRematch(){if(!isHost||!state.players[1].name||!conn?.open)return toast('อีกคนหลุดจากห้อง จึงเริ่มเกมซ้ำไม่ได้');const token=state.players[1].token;state=makeState();state.players[1].token=token;other=state.players[1].name;show('lobby');updateLobby();send('LOBBY',{state})}
function restoreSavedView(){if(!state)return;if(state.coupleTheme)applyTheme(state.coupleTheme);if(state.phase==='lobby'){show('lobby');updateLobby();return}if(state.phase==='finished'){finish();return}show('game');renderQuestion(true);if(state.phase==='guess'&&state.chooser!==myRole()&&!state.guessSubmitted)startGuessTimer()}
function beginPresence(){
  ownPresenceRef=ref(firebaseDb,`rooms/${room}/presence/${firebaseUser.uid}`);
  const infoRef=ref(firebaseDb,'.info/connected');
  const unsubscribe=onValue(infoRef,snapshot=>{
    firebaseConnected=snapshot.val()===true;
    if(firebaseConnected&&ownPresenceRef){onDisconnect(ownPresenceRef).remove().then(()=>set(ownPresenceRef,{online:true,updatedAt:serverTimestamp()})).catch(()=>{});}
    else if(!firebaseConnected){partnerConnected=false;clearInterval(timerId);}
    updateConnection();
  },()=>{firebaseConnected=false;updateConnection()});
  roomListeners.push(unsubscribe);
}
function watchInbox(){
  const inboxRef=ref(firebaseDb,`rooms/${room}/inbox/${firebaseUser.uid}`);
  const unsubscribe=onChildAdded(inboxRef,snapshot=>{
    const envelope=snapshot.val();
    if(envelope?.fromUid===partnerUid&&envelope.message)handle(envelope.message);
    remove(snapshot.ref).catch(()=>{});
  },()=>toast('รับข้อความจากอีกคนไม่สำเร็จ · กำลังเชื่อมใหม่'));
  roomListeners.push(unsubscribe);
}
function watchPartner(uid){
  if(!uid||uid===firebaseUser.uid)return;
  if(partnerUid===uid)return;
  partnerUid=uid;partnerConnected=false;watchInbox();
  const presenceRef=ref(firebaseDb,`rooms/${room}/presence/${uid}`);
  listen(presenceRef,snapshot=>{partnerConnected=snapshot.exists()&&snapshot.val()?.online===true;updateConnection();if(!partnerConnected)clearInterval(timerId)});
  updateConnection();
}
async function sendRoomMessage(message){
  if(!partnerUid||!firebaseUser)return;
  try{await push(ref(firebaseDb,`rooms/${room}/inbox/${partnerUid}`),{fromUid:firebaseUser.uid,message,sentAt:serverTimestamp()})}
  catch(error){console.error('Firebase message failed',error);toast('ส่งข้อมูลไม่สำเร็จ · ตรวจอินเทอร์เน็ตแล้วลองอีกครั้ง')}
}
function resendPendingActions(){
  if(!state||!partnerUid)return;
  if(state.phase==='guess'&&state.chooser!==myRole()&&state.guessSubmitted)send('GUESS',{index:state.index,n:state.guess});
  if(!isHost&&state.answerMode==='simultaneous'&&state.phase==='simultaneous'){
    const mine=state.answers?.guest||{};
    for(const field of ['self','guess'])if(Number.isInteger(mine[field]))send('SIM_SUBMITTED',{index:state.index,field});
    if(Number.isInteger(mine.self)&&Number.isInteger(mine.guess))send('SIM_ANSWER',{index:state.index,answers:{...mine}});
  }
}
async function acceptJoin(uid,request){
  if(!isHost||!uid||!request||uid===firebaseUser.uid)return;
  try{
    const guestUidRef=ref(firebaseDb,`rooms/${room}/guestUid`);
    const current=(await get(guestUidRef)).val();
    if(current&&current!==uid)return;
    if(!current)await set(guestUidRef,uid);
    watchPartner(uid);
    handle({type:'JOIN',name:request.name,token:request.token});
  }catch(error){console.error('Firebase join failed',error);toast('รับผู้เล่นไม่สำเร็จ · ลองใหม่อีกครั้ง')}
}
async function setupHost(resume=false){
  if(resume&&!savedSession)return toast('ไม่พบห้องที่บันทึกไว้');
  disconnectFirebaseRoom();resumePending=resume;show('lobby');conn={open:false};updateConnection();
  try{await firebaseAuthReady;}catch(error){console.error('Firebase authentication failed',error);return toast('เข้าใช้ระบบออนไลน์ไม่ได้ · ลองรีโหลดหน้าอีกครั้ง')}
  if(resume){room=savedSession.room;me=savedSession.name;other=savedSession.other;sessionToken=savedSession.token||newToken();state=savedSession.state;coupleTheme=normalizeTheme(state.coupleTheme);if(state.players?.[1]?.name&&!state.players[1].token)state.players[1].token=sessionToken}
  else{clearSavedSession();room=code();me=$('#name').value.trim()||'ผู้เล่น 1';other='';sessionToken=newToken();coupleTheme=normalizeTheme({name:$('#coupleName').value||defaultTheme.name,emoji:coupleTheme.emoji,palette:coupleTheme.palette});isHost=true;state=makeState()}
  isHost=true;roomRef=ref(firebaseDb,`rooms/${room}`);conn={open:false};
  try{
    const hostUidRef=ref(firebaseDb,`rooms/${room}/hostUid`);
    if(resume){if((await get(hostUidRef)).val()!==firebaseUser.uid)throw new Error('resume-owner-mismatch')}
    else{
      let created=false;
      for(let attempt=0;attempt<5&&!created;attempt++){
        try{await set(roomRef,{hostUid:firebaseUser.uid,createdAt:serverTimestamp()});created=true}
        catch(error){if(error?.code==='PERMISSION_DENIED'&&attempt<4){room=code();roomRef=ref(firebaseDb,`rooms/${room}`)}else throw error}
      }
      if(!created)throw new Error('room-create-failed');
    }
    beginPresence();
    const joinsRef=ref(firebaseDb,`rooms/${room}/joinRequests`);
    const stopJoins=onChildAdded(joinsRef,snapshot=>void acceptJoin(snapshot.key,snapshot.val()),error=>{console.error(error);toast('อ่านคำขอเข้าห้องไม่สำเร็จ')});roomListeners.push(stopJoins);
    const existingGuest=(await get(ref(firebaseDb,`rooms/${room}/guestUid`))).val();
    if(existingGuest){watchPartner(existingGuest);if(state.players?.[1]?.name)send('SYNC',{state:guestSnapshot()})}
    updateLobby();
    if(resume){restoreSavedView();toast('กลับเข้าห้องเดิมแล้ว · กำลังรออีกคนเชื่อมต่อ')}
    else toast('สร้างห้องแล้ว · ส่งรหัสให้แฟนได้เลย');
    saveSession();
  }catch(error){console.error('Firebase room setup failed',error);disconnectFirebaseRoom();show('home');toast(error?.message==='resume-owner-mismatch'?'ห้องนี้ไม่ได้อยู่ในบัญชีอุปกรณ์นี้ · สร้างห้องใหม่ได้เลย':'สร้างห้องไม่สำเร็จ · ตรวจการตั้งค่า Firebase แล้วลองอีกครั้ง')}
}
async function setupGuest(resume=false){
  if(resume&&!savedSession)return toast('ไม่พบห้องที่บันทึกไว้');
  disconnectFirebaseRoom();resumePending=resume;
  if(resume){room=savedSession.room;me=savedSession.name;other=savedSession.other;sessionToken=savedSession.token||newToken();state=savedSession.state;coupleTheme=normalizeTheme(state.coupleTheme)}
  else{room=$('#roomInput').value.trim().toUpperCase();me=$('#name').value.trim()||'ผู้เล่น 2';if(!room)return toast('กรอกรหัสห้องก่อน');if(!/^LD[A-HJ-NP-Z2-9]{6}$/.test(room))return toast('รหัสห้องต้องมี 8 ตัวและขึ้นต้นด้วย LD');clearSavedSession();sessionToken=newToken();state=null;other=''}
  isHost=false;conn={open:false};roomRef=ref(firebaseDb,`rooms/${room}`);show('lobby');updateLobby();
  try{await firebaseAuthReady;
    const requestRef=ref(firebaseDb,`rooms/${room}/joinRequests/${firebaseUser.uid}`);
    await set(requestRef,{name:me.slice(0,18),token:sessionToken,requestedAt:serverTimestamp()});
    const guestUidRef=ref(firebaseDb,`rooms/${room}/guestUid`);
    listen(guestUidRef,async snapshot=>{
      if(snapshot.val()!==firebaseUser.uid||joinSent)return;
      joinSent=true;
      try{const hostUid=(await get(ref(firebaseDb,`rooms/${room}/hostUid`))).val();if(!hostUid)throw new Error('room-not-found');beginPresence();watchPartner(hostUid);if(resume)restoreSavedView();toast(resume?'กำลังกลับเข้าห้องเดิม…':'ส่งคำขอแล้ว · กำลังเข้าห้อง')}
      catch(error){console.error(error);toast('เข้าห้องไม่สำเร็จ · ลองตรวจรหัสอีกครั้ง')}
    },error=>{console.error(error);toast('ไม่พบห้องหรือห้องเต็มแล้ว · ตรวจรหัสแล้วลองใหม่')});
  }catch(error){console.error('Firebase join request failed',error);disconnectFirebaseRoom();show('home');toast(error?.code==='PERMISSION_DENIED'?'ไม่พบห้องหรือห้องเต็มแล้ว · ตรวจรหัสแล้วลองใหม่':'เชื่อมต่อไม่ได้ · ตรวจอินเทอร์เน็ตแล้วลองอีกครั้ง')}
}
function guestSnapshot(snapshot=state){const copy=JSON.parse(JSON.stringify(snapshot));if(!['reveal','finished'].includes(copy.phase)){copy.actual=null;copy.guess=null;copy.guessSubmitted=false;if(copy.answerMode==='simultaneous')copy.answers=blankAnswers()}return copy}
function resumeFromSnapshot(snapshot){
const local=state,localAnswers=local?.index===snapshot.index?local.answers?.guest:null,localGuess=local?.index===snapshot.index&&local.phase==='guess'?local.guess:null,localGuessSubmitted=local?.index===snapshot.index&&local.phase==='guess'&&local.guessSubmitted,localActual=local?.index===snapshot.index&&local.phase==='guess'&&local.chooser==='guest'?local.actual:null;
state=snapshot;
if(state.answerMode==='simultaneous'&&state.phase!=='reveal'&&state.phase!=='finished'){
state.answers=blankAnswers();state.simSubmitted=state.simSubmitted||blankSubmitted();
if(localAnswers){state.answers.guest={self:localAnswers.self??null,guess:localAnswers.guess??null};for(const field of ['self','guess'])if(Number.isInteger(localAnswers[field])){state.simSubmitted.guest[field]=true;send('SIM_SUBMITTED',{index:state.index,field})}if(Number.isInteger(localAnswers.self)&&Number.isInteger(localAnswers.guess))send('SIM_ANSWER',{index:state.index,answers:{...state.answers.guest}})}
}else if(state.phase==='guess'){if(!state.guessSubmitted&&localGuessSubmitted){state.guess=localGuess;state.guessSubmitted=true}if(state.chooser==='guest'&&!Number.isInteger(state.actual)&&Number.isInteger(localActual))state.actual=localActual}
other=state.players?.[0]?.name||other;coupleTheme=normalizeTheme(state.coupleTheme);resumePending=false;restoreSavedView();saveSession();resendPendingActions()
}
function handle(message){
if(!message||typeof message.type!=='string')return;
if(message.type==='JOIN'&&isHost&&state){const guest=state.players[1];if(!guest.name){guest.id='guest';guest.name=String(message.name||'ผู้เล่น 2').trim().slice(0,18)||'ผู้เล่น 2';guest.token=String(message.token||'');guest.ready=false;other=guest.name}else if(!guest.token||guest.token!==message.token){send('ROOM_FULL');setTimeout(()=>{try{conn?.close()}catch(e){}},50);return}send('SYNC',{state:guestSnapshot()});if(state.phase==='lobby')updateLobby();saveSession();return}
if(message.type==='ROOM_FULL'&&!isHost){toast('ห้องนี้มีผู้เล่นอื่นอยู่แล้ว');resumePending=false;clearSavedSession();state=null;disconnectFirebaseRoom();show('home');return}
if(message.type==='SYNC'&&!isHost&&message.state){resumeFromSnapshot(message.state);return}
if(message.type==='LOBBY'&&!isHost&&message.state){state=message.state;other=state.players[0].name;coupleTheme=normalizeTheme(state.coupleTheme);show('lobby');updateLobby();saveSession();return}
if(message.type==='READY'&&isHost&&message.role==='guest'&&state.phase==='lobby'){const guest=state.players.find(p=>p.id==='guest');if(guest)guest.ready=true;updateLobby();send('LOBBY',{state});return}
if(message.type==='START'&&!isHost&&message.state){state=message.state;show('game');renderQuestion();return}
if(message.type==='ACTUAL_READY'&&state.answerMode!=='simultaneous'&&state.phase==='choose'&&message.index===state.index&&message.role===state.chooser){state.phase='guess';configureClassicPhase();if(state.chooser!==myRole()){startGuessTimer();toast('อีกคนเลือกแล้ว · ถึงตาคุณทาย')}saveSession();return}
if(message.type==='GUESS'&&state.chooser===myRole()&&state.phase==='guess'&&message.index===state.index){state.guess=Number.isInteger(message.n)&&message.n>=1&&message.n<=4?message.n:null;state.guessSubmitted=true;reveal();return}
if(message.type==='REVEAL'&&state.chooser!==myRole()&&state.phase==='guess'&&message.index===state.index){clearInterval(timerId);state.actual=message.actual;state.guess=Number.isInteger(message.guess)?message.guess:null;state.guessSubmitted=true;state.score=message.score;state.phase='reveal';const entry={question:questionFor()[1],answerMode:'turns',actual:message.actual,guess:message.guess,ok:!!message.ok,chooser:state.chooser};state.history[state.index]=entry;renderReveal(entry);saveSession();return}
if(message.type==='SIM_SUBMITTED'&&isHost&&state.answerMode==='simultaneous'&&state.phase==='simultaneous'&&message.index===state.index&&['self','guess'].includes(message.field)){state.simSubmitted.guest[message.field]=true;publishSimProgress();return}
if(message.type==='SIM_ANSWER'&&isHost&&state.answerMode==='simultaneous'&&state.phase==='simultaneous'&&message.index===state.index&&['self','guess'].every(field=>Number.isInteger(message.answers?.[field])&&message.answers[field]>=1&&message.answers[field]<=4)){state.answers.guest={self:message.answers.self,guess:message.answers.guess};state.simSubmitted.guest={self:true,guess:true};publishSimProgress();return}
if(message.type==='SIM_PROGRESS'&&!isHost&&state.answerMode==='simultaneous'&&message.index===state.index){state.simSubmitted=message.submitted||state.simSubmitted;renderSimultaneous();saveSession();return}
if(message.type==='SIM_REVEAL'&&!isHost&&message.index===state.index){state.answers=message.answers;state.simSubmitted={host:{self:true,guess:true},guest:{self:true,guess:true}};state.score=message.score;const entry={question:questionFor()[1],answerMode:'simultaneous',answers:message.answers,correct:message.correct};state.history[state.index]=entry;state.phase='reveal';renderReveal(entry);saveSession();return}
if(message.type==='NEXT_REQUEST'&&isHost){next();return}
if(message.type==='NEXT'&&!isHost&&message.state){state=message.state;renderQuestion();return}
if(message.type==='FINISH'&&!isHost&&message.state){state=message.state;finish();return}
if(message.type==='REMATCH_REQUEST'&&isHost&&state.phase==='finished')startRematch()
}
function renderSavedView(){if(!state)return;if(state.phase==='lobby'){show('lobby');updateLobby();return}if(state.phase==='finished'){finish();return}show('game');renderQuestion(true);if(state.phase==='guess'&&state.chooser!==myRole()&&!state.guessSubmitted)startGuessTimer()}
$('#answerMode').onclick=e=>{const button=e.target.closest('[data-value]');if(!button||button.disabled)return;selectedAnswerMode=button.dataset.value;updateSettingControls();if(isHost&&state?.phase==='lobby')publishLobbySettings()};
$('#themeOptions').onclick=e=>{const button=e.target.closest('[data-emoji],[data-theme]');if(!button||button.disabled)return;if(button.dataset.emoji)coupleTheme.emoji=button.dataset.emoji;if(button.dataset.theme)coupleTheme.palette=button.dataset.theme;coupleTheme=normalizeTheme(coupleTheme);applyTheme(coupleTheme);if(isHost&&state?.phase==='lobby')publishLobbySettings()};
$('#coupleName').oninput=e=>{coupleTheme.name=e.target.value.slice(0,24);applyTheme(coupleTheme)};
$('#coupleName').onchange=()=>{coupleTheme=normalizeTheme(coupleTheme);applyTheme(coupleTheme);if(isHost&&state?.phase==='lobby')publishLobbySettings()};
$('#resumeBtn').onclick=()=>savedSession?.isHost?setupHost(true):setupGuest(true);
$('#forgetSessionBtn').onclick=()=>{clearSavedSession();toast('ล้างห้องที่จำไว้แล้ว')};
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;$('#installBtn').classList.remove('hidden')});
window.addEventListener('appinstalled',()=>{$('#installBtn').classList.add('hidden');installPrompt=null;toast('เพิ่ม LOVE DUEL บนหน้าจอแล้ว')});
$('#installBtn').onclick=async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#installBtn').classList.add('hidden')};
$('#homeBtn').onclick=()=>{clearSavedSession();disconnectFirebaseRoom();location.reload()};
$('#revealNowBtn').onclick=()=>{if(state?.phase==='guess'&&state.chooser!==myRole()&&Number.isInteger(state.guess)){send('GUESS',{index:state.index,n:state.guess});$('#revealNowBtn').disabled=true;$('#revealNowBtn').textContent='รอเฉลย…';$('#roleBanner').textContent='ส่งคำตอบแล้ว · รออีกคนเฉลย';saveSession()}};
$('#playAgain').onclick=()=>{if(isHost)startRematch();else if(conn?.open){send('REMATCH_REQUEST');toast('ส่งคำขอเล่นอีกครั้งแล้ว')}else toast('กลับเข้าห้องเดิมก่อน แล้วค่อยเล่นซ้ำ')};
applyTheme(coupleTheme);displayResume();updateLobby();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));

