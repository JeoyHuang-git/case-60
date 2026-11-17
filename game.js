/* CASE//60 · 原创离线侦探小游戏，无第三方 JS 依赖 */
'use strict';
const CASES = [
  {
    title:'消失的蓝宝石', sub:'午夜宴会 / 珠宝失窃', icon:'◇',
    scene:'晚上 21:00，蓝宝石从展柜中消失。监控显示，21:00 至 21:10 展厅无人出入，展柜玻璃没有破损。',
    clues:[
      ['展柜记录','电子锁日志显示：21:05 曾用管理员卡正常开启展柜。'],
      ['地毯纤维','展柜边缘发现一根灰色毛线，暂时无法确认来源。'],
      ['窗台雨水','展厅窗台有几滴雨水，但窗户从内部锁死。']
    ],
    suspects:[
      ['展厅主管 · 林岚','我 20:50 就把管理员卡锁进办公室保险柜，直到报警都没动过它。'],
      ['调酒师 · 顾一鸣','我一直在一楼吧台，根本没有碰过展柜。'],
      ['摄影师 · 陈禾','我在宴会厅拍摄，没进入珠宝展厅。']
    ], answer:0, evidence:0,
    explanation:'关键证据是电子锁日志：21:05 使用管理员卡开启展柜。林岚声称 20:50 起管理员卡一直被锁好，与日志直接矛盾。其他线索无法锁定嫌疑人。'
  },
  {
    title:'不可能的外卖', sub:'雨夜公寓 / 药品调包', icon:'☂',
    scene:'晚上 20:20，有人偷偷把住户门口的药盒调包。公寓 20:00 开始暴雨，20:10 楼道监控恰好断电。',
    clues:[
      ['雨伞状态','20:25 物业拍下门口雨伞架，所有伞都湿透，只有一把深绿伞是干的。'],
      ['配送时间','外卖平台显示：外卖员 19:42 已完成配送。'],
      ['楼道脚印','地面留下几道鞋印，但没有清晰的花纹。']
    ],
    suspects:[
      ['外卖员 · 罗森','我 19:42 送完就走，再也没返回。'],
      ['邻居 · 许琴','我 20:15 从室外冒雨回家，一直撑着我的深绿伞。'],
      ['保安 · 赵正','我 20:00 到 20:30 都在地下车库巡逻。']
    ], answer:1, evidence:0,
    explanation:'20:25 拍摄时深绿伞完全干燥，与许琴自称 20:15 刚冒雨撑伞回家的说法直接冲突。她对自己的行踪撒了谎。'
  },
  {
    title:'午夜钢琴声', sub:'旧剧院 / 乐谱被毁', icon:'♫',
    scene:'深夜 23:40，珍贵手稿在剧院排练厅被撕毁。三名工作人员都说自己当时没有进入排练厅。',
    clues:[
      ['琴键录音','自动录音系统记录：23:37 有人在排练厅弹奏了四个音符。'],
      ['电闸时间','剧院走廊的照明直到午夜才关闭。'],
      ['纸张碎屑','地上有数张乐谱碎片，无法区分是谁撕的。']
    ],
    suspects:[
      ['钢琴师 · 季然','我整晚没弹过琴，23:30 就离开剧院了。'],
      ['灯光师 · 方宁','我留在控制室检查设备，没有接近排练厅。'],
      ['清洁员 · 吴叔','我在大厅擦地板，没听见任何声音。']
    ], answer:0, evidence:0,
    explanation:'排练厅的自动录音留下 23:37 的弹奏记录，直接驳斥了季然“23:30 离开且整晚没弹琴”的说法。'
  },
  {
    title:'封存的信', sub:'档案馆 / 密信泄露', icon:'✉',
    scene:'馆内一封密信内容在 15:00 被泄露。信封的封蜡在 14:30 仍完好，但 15:10 被发现已拆开。',
    clues:[
      ['复印机记录','档案室复印机日志：14:52 复印了一张编号为 D-17 的密信。'],
      ['咖啡杯','桌上有一杯冷咖啡，杯口未留下清晰指纹。'],
      ['值班表','当天共有三个人获准进入档案室。']
    ],
    suspects:[
      ['管理员 · 齐悦','我 14:45 就关闭了档案室复印机电源，此后没人能使用。'],
      ['研究员 · 贺凡','我 14:30 查阅了普通报刊，没有拿密信。'],
      ['馆长 · 柳明','我整个下午都在办公室参加视频会议。']
    ], answer:0, evidence:0,
    explanation:'14:52 的复印机日志直接与齐悦“14:45 已断电”的证词冲突。她至少隐瞒了机器仍被使用这一关键事实。'
  },
  {
    title:'雪地中的脚印', sub:'山顶旅馆 / 钥匙被盗', icon:'❄',
    scene:'早晨 07:00，旅馆备用钥匙不翼而飞。昨夜 22:00 开始下雪，后门外只有一串清晰的脚印。',
    clues:[
      ['后门感应器','感应器显示：凌晨 01:12 后门被人打开。'],
      ['失物清单','备用钥匙、一个旧打火机和两枚硬币失踪。'],
      ['围巾碎线','门把手挂着一缕蓝色围巾纤维。']
    ],
    suspects:[
      ['前台 · 白真','我 23:00 就睡了，整晚没有打开后门。'],
      ['厨师 · 丁亮','我凌晨两点在厨房准备早餐。'],
      ['客人 · 范立','我一直待在房间，早晨才下楼。']
    ], answer:0, evidence:0,
    explanation:'后门感应器凌晨 01:12 的开门记录，与负责保管后门的白真声称“整晚没有打开后门”矛盾。注意感应器只能说明有人开门，因此这是本案预设的关键异常，而非独立的刑事证明。'
  },
  {
    title:'被换掉的画', sub:'私人画廊 / 名画调包', icon:'▣',
    scene:'上午 10:00 画廊开门时，馆藏名画已被换成仿品。更换发生在 08:00 至 09:30 之间。',
    clues:[
      ['温控记录','画库恒温系统记录 08:40 被手动调至 25°C。'],
      ['鞋底颜料','走廊里有少量蓝色油画颜料，还未确认来源。'],
      ['展签','仿品使用了原画相同的展签和挂钩。']
    ],
    suspects:[
      ['修复师 · 蔡文','我当天没碰过画库温控器，设置始终是 19°C。'],
      ['保洁 · 刘珊','我早上只打扫了前厅，没有进画库。'],
      ['策展人 · 江辰','我 09:20 才到画廊，先去办公室开会。']
    ], answer:0, evidence:0,
    explanation:'温控器在 08:40 被手动改到 25°C，直接推翻了修复师蔡文“设置始终为 19°C”的断言。'
  },
  {
    title:'最后一班电梯', sub:'写字楼 / 文件失窃', icon:'↟',
    scene:'22:00 至 22:30，24 楼一份合同被窃。监控暂时无法识别走廊中的人脸。',
    clues:[
      ['电梯刷卡','系统记录 22:13 一张尾号 088 的工卡刷到了 24 楼。'],
      ['保温杯','茶水间留有一只银色保温杯，没有明确身份信息。'],
      ['打印清单','当晚 21:50 打印过六页文档，与失窃合同无关。']
    ],
    suspects:[
      ['助理 · 关遥','我的工卡尾号 088，但我 21:00 下班后再没使用过它。'],
      ['设计师 · 乔墨','我一直在 16 楼加班。'],
      ['保安 · 韩斌','我只在一楼大厅值守。']
    ], answer:0, evidence:0,
    explanation:'尾号 088 的卡在 22:13 登上 24 楼，与关遥声称“21:00 后工卡从未使用”相冲突。工卡可能被借用，因此准确地说，她的证词被推翻了。'
  },
  {
    title:'熄灭的灯塔', sub:'海港 / 航标破坏', icon:'◈',
    scene:'凌晨 02:00，海港灯塔照明突然中断，导致数艘渔船折返。有人故意切换了备用开关。',
    clues:[
      ['备用电源日志','01:58 有人用值班员密码关闭了备用电源。'],
      ['海风记录','凌晨海风达六级，海边气温明显下降。'],
      ['油漆刮痕','楼梯栏杆有新的白色划痕。']
    ],
    suspects:[
      ['值班员 · 程浩','我从来没把值班密码告诉别人，整夜没操作过备用电源。'],
      ['维修工 · 唐叔','我 01:30 就乘船离开港口了。'],
      ['游客 · 小纪','我只在港口拍照，从没上过灯塔。']
    ], answer:0, evidence:0,
    explanation:'备用电源在 01:58 被值班员密码关闭。程浩声称密码只掌握在自己手里、且自己没有操作，这两句话不可能同时为真。'
  },
  {
    title:'玻璃温室', sub:'植物园 / 稀有种子被盗', icon:'✿',
    scene:'06:00 园丁发现恒温温室里的稀有种子被盗。温室 00:00 至 05:00 期间对外关闭。',
    clues:[
      ['门禁开门记录','03:16 使用了编号 06 的园艺师门禁卡。'],
      ['泥土样本','花盆旁出现深色泥点，但园区其他地方也有相同泥土。'],
      ['喷水定时器','定时喷水系统在 04:00 正常运作。']
    ],
    suspects:[
      ['园艺师 · 沈晴','编号 06 是我的卡，我昨晚 22:00 后就把它放在家里。'],
      ['实习生 · 林季','我 05:30 才进入园区，没带走任何东西。'],
      ['摄影师 · 阿洛','我只在大门外拍了日出。']
    ], answer:0, evidence:0,
    explanation:'03:16 号卡被用于打开温室，与沈晴声称“22:00 后卡一直在家”不符。她至少对门禁卡的下落说了谎。'
  },
  {
    title:'错位的钟声', sub:'钟表店 / 古董表失窃', icon:'◷',
    scene:'钟表店 18:00 打烊，19:00 店主发现一枚古董怀表消失，后门锁没有撬动痕迹。',
    clues:[
      ['电子报警日志','18:24 有人使用售货员密码解除后门报警。'],
      ['钟摆方向','墙上老钟停在 18:17，可能只是机械故障。'],
      ['橱窗痕迹','展示橱窗上有一枚模糊指纹。']
    ],
    suspects:[
      ['售货员 · 米露','我的解除报警密码没人知道，而且我 18:00 后没有再解除报警。'],
      ['修表师 · 严泽','我 17:50 就离开了店铺。'],
      ['快递员 · 丁凯','我下午送过一个包裹，从没进后门。']
    ], answer:0, evidence:0,
    explanation:'18:24 发生售货员密码解除报警的记录，与米露关于密码保密及未操作的陈述冲突。'
  },
  {
    title:'停电的实验室', sub:'科研楼 / 样本被调换', icon:'⌬',
    scene:'14:15，研究员发现冷冻柜样本标签被换。实验室从 13:40 到 14:00 曾短暂停电。',
    clues:[
      ['备用系统日志','13:51 应急电源被人工启动，操作终端账号为 LAB-3。'],
      ['玻璃烧杯','台面上有空烧杯，没人能确定何时使用。'],
      ['冰箱温度','冷冻柜温度短暂升高两度，但样本未损坏。']
    ],
    suspects:[
      ['博士生 · 余舟','LAB-3 是我的个人账号，但我整个下午没登录过系统。'],
      ['实验员 · 方若','我 13:30 离开了实验室。'],
      ['设备员 · 杜凯','我只负责二楼设备，不知道样本的事。']
    ], answer:0, evidence:0,
    explanation:'LAB-3 账号在 13:51 操作了应急电源，直接推翻余舟“整个下午没有登录过系统”的陈述。'
  },
  {
    title:'屋顶花园', sub:'酒店顶层 / 戒指失踪', icon:'♢',
    scene:'婚宴后，一枚戒指在顶楼花园失踪。21:00 后花园入口已经上锁，只有酒店员工能刷卡进入。',
    clues:[
      ['门禁报告','21:26 员工卡 K-12 刷开花园侧门。'],
      ['花瓣散落','栏杆附近有散落玫瑰花瓣，婚宴时到处都有。'],
      ['遗落手套','角落找到一只白色手套，尺寸普通。']
    ],
    suspects:[
      ['领班 · 陆可','K-12 是我的员工卡，21:00 后它一直在我口袋里，没人刷过。'],
      ['宾客 · 江梨','我 20:40 已经离开酒店了。'],
      ['花艺师 · 宋然','我在宴会厅收花，没有去过顶楼。']
    ], answer:0, evidence:0,
    explanation:'K-12 员工卡于 21:26 刷开了花园侧门，与陆可“21:00 后没人刷过”的说法矛盾。'
  }
];

// 每案 3 条证据、3 名嫌疑人。正确证据和嫌疑人内部顺序每次独立随机打乱，避免位置猜题。
const $ = id => document.getElementById(id);
const TOTAL_ROUNDS = 6;
const BEST_KEY = 'case60_best_v1';
const state = {screen:'start',list:[],round:0,score:0,solved:0,streak:0,maxStreak:0,chosenClue:null,chosenSuspect:null,deadline:0,remaining:60,running:false,roundResolved:false,quiet:false,soundOn:true,audio:null,raf:0,toastTimer:0};

function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function getBest(){try{return Number(localStorage.getItem(BEST_KEY))||0;}catch{return 0;}}
function saveBest(value){try{localStorage.setItem(BEST_KEY,String(value));}catch{}}
function fmt(num){return Math.max(0,Math.floor(num)).toString().padStart(5,'0');}
function show(screen){state.screen=screen;for(const n of ['start','game','end'])$(n+'Screen').classList.toggle('hidden',n!==screen);$('resultOverlay').classList.add('hidden');}
function toast(message){$('toast').textContent=message;$('toast').classList.remove('hidden');clearTimeout(state.toastTimer);state.toastTimer=setTimeout(()=>$('toast').classList.add('hidden'),2200);}

// 依赖用户首次点击/按键初始化 Web Audio，兼容手机自动播放限制。
function audio(){if(!state.soundOn)return null;try{if(!state.audio){const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;state.audio=new A();}if(state.audio.state==='suspended')state.audio.resume();return state.audio;}catch{return null;}}
function tone(freq,duration=.09,type='sine',volume=.06,delay=0){const ctx=audio();if(!ctx)return;const start=ctx.currentTime+delay;const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type;osc.frequency.setValueAtTime(freq,start);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);osc.connect(gain).connect(ctx.destination);osc.start(start);osc.stop(start+duration+.01);}
function sound(kind){if(kind==='click')tone(460,.055,'triangle',.025);if(kind==='select'){tone(510,.07,'sine',.04);tone(740,.09,'sine',.028,.075);}if(kind==='wrong'){tone(215,.20,'sawtooth',.035);tone(155,.28,'sawtooth',.024,.13);}if(kind==='win'){[480,640,800,1080].forEach((f,i)=>tone(f,.19,'triangle',.055,i*.12));}if(kind==='tick')tone(820,.05,'square',.012);if(kind==='end'){tone(510,.18,'triangle',.04);tone(345,.30,'triangle',.04,.18);}}
function updateSound(){$('soundLabel').textContent=state.soundOn?'ON':'OFF';$('soundBtn').setAttribute('aria-label',state.soundOn?'关闭音效':'开启音效');}
function toggleSound(){state.soundOn=!state.soundOn;updateSound();if(state.soundOn)sound('select');}

function init(){
  $('homeBest').textContent=fmt(getBest());
  $('startBtn').addEventListener('click',start);
  $('replayBtn').addEventListener('click',start);
  $('submitBtn').addEventListener('click',submit);
  $('nextBtn').addEventListener('click',next);
  $('soundBtn').addEventListener('click',toggleSound);
  $('quitBtn').addEventListener('click',()=>{if(confirm('退出当前挑战？本轮进度将丢失。')){state.running=false;cancelAnimationFrame(state.raf);$('homeBest').textContent=fmt(getBest());show('start');}});
  $('homeLink').addEventListener('click',e=>{e.preventDefault();if(state.screen==='game'){if(!confirm('返回首页会放弃本轮成绩，确定吗？'))return;}state.running=false;cancelAnimationFrame(state.raf);$('homeBest').textContent=fmt(getBest());show('start');});
  $('shareBtn').addEventListener('click',shareScore);
  window.addEventListener('keydown',keyControls);
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.running){state.remaining=Math.max(0,(state.deadline-performance.now())/1000);state.running=false;cancelAnimationFrame(state.raf);state.quiet=true;}else if(!document.hidden&&state.quiet&&state.screen==='game'&&!state.roundResolved){state.deadline=performance.now()+state.remaining*1000;state.running=true;state.quiet=false;state.raf=requestAnimationFrame(tick);}});
  updateSound();
}
function start(){sound('select');state.list=shuffle(CASES).slice(0,TOTAL_ROUNDS).map(c=>{
  const clues=shuffle(c.clues.map((entry,id)=>({...{title:entry[0],body:entry[1]},id})));
  const suspects=shuffle(c.suspects.map((entry,id)=>({name:entry[0],statement:entry[1],id})));
  return {...c,clues,suspects};
});state.round=0;state.score=0;state.solved=0;state.streak=0;state.maxStreak=0;show('game');renderCase();}
function renderCase(){
  const c=state.list[state.round];state.chosenClue=null;state.chosenSuspect=null;state.roundResolved=false;state.remaining=60;state.quiet=false;
  $('roundNum').textContent=String(state.round+1).padStart(2,'0');$('caseTitle').textContent=c.title;$('caseSubtitle').textContent=c.sub;$('sceneIcon').textContent=c.icon;$('sceneText').textContent=c.scene;
  $('score').textContent=fmt(state.score);$('streakText').textContent=`连破记录 × ${state.streak}`;
  $('progressFill').style.width=(state.round/TOTAL_ROUNDS*100)+'%';
  const clues=$('clueList');clues.replaceChildren();
  c.clues.forEach((item,i)=>{const btn=document.createElement('button');btn.type='button';btn.className='clue-card';btn.setAttribute('aria-pressed','false');btn.innerHTML=`<span class="card-index">${String.fromCharCode(65+i)}</span><span class="card-copy"><strong></strong><span></span></span><span class="select-indicator">○</span>`;btn.querySelector('strong').textContent=item.title;btn.querySelector('.card-copy span').textContent=item.body;btn.addEventListener('click',()=>chooseClue(i));clues.appendChild(btn);});
  const suspects=$('suspectList');suspects.replaceChildren();
  c.suspects.forEach((item,i)=>{const btn=document.createElement('button');btn.type='button';btn.className='suspect-card';btn.setAttribute('aria-pressed','false');btn.innerHTML=`<span class="suspect-avatar">${['◉','◈','◌'][i]}</span><span class="card-copy"><span class="suspect-meta">SUSPECT 0${i+1}</span><strong></strong><span></span></span><span class="select-indicator">○</span>`;btn.querySelector('strong').textContent=item.name;btn.querySelector('.card-copy>span:last-child').textContent='“'+item.statement+'”';btn.addEventListener('click',()=>chooseSuspect(i));suspects.appendChild(btn);});
  updateChoices();state.deadline=performance.now()+60000;state.running=true;cancelAnimationFrame(state.raf);state.raf=requestAnimationFrame(tick);
}
function chooseClue(index){if(state.screen!=='game'||state.roundResolved)return;state.chosenClue=index;updateChoices();sound('click');}
function chooseSuspect(index){if(state.screen!=='game'||state.roundResolved)return;state.chosenSuspect=index;updateChoices();sound('click');}
function updateChoices(){
  [...$('clueList').children].forEach((b,i)=>{const yes=state.chosenClue===i;b.classList.toggle('selected',yes);b.setAttribute('aria-pressed',String(yes));b.querySelector('.select-indicator').textContent=yes?'●':'○';});
  [...$('suspectList').children].forEach((b,i)=>{const yes=state.chosenSuspect===i;b.classList.toggle('selected',yes);b.setAttribute('aria-pressed',String(yes));b.querySelector('.select-indicator').textContent=yes?'●':'○';});
  const c=state.list[state.round];
  $('clueStatus').textContent=state.chosenClue===null?'证据：尚未锁定':'证据：'+c.clues[state.chosenClue].title;
  $('suspectStatus').textContent=state.chosenSuspect===null?'嫌疑人：尚未锁定':'嫌疑人：'+c.suspects[state.chosenSuspect].name.split(' · ').pop();
  $('submitBtn').disabled=state.chosenClue===null||state.chosenSuspect===null;
}
function tick(){if(!state.running)return;state.remaining=Math.max(0,(state.deadline-performance.now())/1000);const remaining=Math.ceil(state.remaining);$('timer').textContent=remaining;$('timerRing').style.setProperty('--progress',(state.remaining/60*100).toFixed(2));$('timerBox').classList.toggle('danger',remaining<=10);if(remaining<=10&&remaining>0&&Math.ceil((state.deadline-(performance.now()-16))/1000)!==remaining)sound('tick');if(state.remaining<=0){resolve(false,true);return;}state.raf=requestAnimationFrame(tick);}
function submit(){if(state.screen!=='game'||state.roundResolved||state.chosenClue===null||state.chosenSuspect===null)return;const c=state.list[state.round];const correct=c.clues[state.chosenClue].id===c.evidence&&c.suspects[state.chosenSuspect].id===c.answer;if(correct){resolve(true,false);}else{state.streak=0;state.remaining=Math.max(0,state.remaining-10);state.deadline=performance.now()+state.remaining*1000;state.score=Math.max(0,state.score-60);$('score').textContent=fmt(state.score);$('streakText').textContent='连破记录 × 0';state.chosenClue=null;state.chosenSuspect=null;updateChoices();sound('wrong');if(state.remaining<=0){resolve(false,true);}else{toast('证据与嫌疑人未能对应！扣 60 分、10 秒，请重新推理。');}}}
function resolve(success,timedOut){if(state.roundResolved)return;state.roundResolved=true;state.running=false;cancelAnimationFrame(state.raf);const c=state.list[state.round];let reward=0;if(success){state.solved++;state.streak++;state.maxStreak=Math.max(state.maxStreak,state.streak);reward=120+Math.floor(state.remaining)*6+(state.streak-1)*45;state.score+=reward;sound('win');}else{state.streak=0;sound('end');}
  $('resultBadge').textContent=success?'CASE SOLVED / 破案成功':'CASE CLOSED / 调查失败';$('resultBadge').classList.toggle('fail',!success);
  $('resultSymbol').textContent=success?'✓':'×';$('resultSymbol').classList.toggle('fail',!success);
  $('resultHeading').textContent=success?'漂亮的推理！':timedOut?'时间已到':'调查失败';
  $('resultExplain').textContent=success?c.explanation:`本案关键人物：${c.suspects.find(s=>s.id===c.answer).name}。\n关键物证：${c.clues.find(s=>s.id===c.evidence).title}。\n${c.explanation}`;
  $('reward').textContent=(reward>0?'+':'')+reward;$('nextLabel').textContent=state.round===TOTAL_ROUNDS-1?'查看最终成绩':'调查下一起案件';$('resultOverlay').classList.remove('hidden');$('nextBtn').focus();}
function next(){sound('click');$('resultOverlay').classList.add('hidden');if(state.round===TOTAL_ROUNDS-1){finish();}else{state.round++;renderCase();}}
function finish(){state.running=false;cancelAnimationFrame(state.raf);const oldBest=getBest();const isBest=state.score>oldBest;if(isBest)saveBest(state.score);$('finalScore').textContent=fmt(state.score);$('solvedCount').textContent=state.solved+' / '+TOTAL_ROUNDS;$('maxStreak').textContent=state.maxStreak;$('endBest').textContent=fmt(getBest());$('newRecord').classList.toggle('hidden',!isBest);$('endTitle').textContent=state.solved===TOTAL_ROUNDS?'传奇侦探':state.solved>=4?'金牌调查员':'调查已结案';$('endSubtitle').textContent=state.solved===TOTAL_ROUNDS?'六案全破。没有谎言逃得过你的眼睛。':`你在六起案件中破解了 ${state.solved} 起。下轮案件将重新随机抽取。`;show('end');}
async function shareScore(){const shareText=`🔎 我在「60秒破案挑战」中破了 ${state.solved}/6 起案件，获得 ${state.score} 分！你敢来挑战吗？\n${location.href}`;try{if(navigator.share){await navigator.share({title:'60秒破案挑战',text:shareText});return;}if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(shareText);toast('成绩文案与链接已复制，可以发给朋友啦！');return;}}catch(e){if(e.name==='AbortError')return;}window.prompt('复制成绩和链接分享给朋友：',shareText);}
function keyControls(e){if(e.key.toLowerCase()==='m'&&!e.repeat){toggleSound();return;}if(state.screen==='game'&&!state.roundResolved){const key=e.key.toLowerCase();const clueIndex={q:0,w:1,e:2}[key];if(clueIndex!==undefined){chooseClue(clueIndex);return;}if(['1','2','3'].includes(key)){chooseSuspect(Number(key)-1);return;}if(key==='enter'){e.preventDefault();submit();return;}}if(!$('resultOverlay').classList.contains('hidden')&&(e.key===' '||e.key==='Enter')&&document.activeElement!==$('nextBtn')){e.preventDefault();next();}}
init();
