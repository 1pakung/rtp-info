function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function toggleDetail(unitId) {
  const detail = document.getElementById(unitId);
  if (detail) {
    detail.classList.toggle('active');
  }
}

function initSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  document.querySelectorAll('.nav-links > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const dropdown = link.nextElementSibling;
      if (dropdown && dropdown.classList.contains('dropdown-menu')) {
      }
    });
  });

  render();
  initSlider();
});

const orgs = [
  {
    id: "peb",
    name: "กองบัญชาการศึกษา",
    short: "ฝึกพลเรือนเข้ามาเป็นตำรวจใหม่",
    region: "https://discord.gg/GzhNr7ndks",
    tel: "https://rblx.social/34342838",
    founded: "๒๒ พฤษภาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-27ee36b38684c9ad0be96f06581861ae/150/150/Image/Webp/noFilter"
  },
  {
    id: "rpg",
    name: "ตำรวจราชองครักษ์",
    short: "ดูแลใกล้ชิดพระมหากษัตริย์ พระบรมราชินี พระราชวงศ์",
    region: "https://discord.gg/nkeNjVz7Py",
    tel: "https://rblx.social/34410609",
    founded: "๖ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-e76c940686c216a7c5c5c1520e87ed3d/150/150/Image/Webp/noFilter"
  },
  {
    id: "csd",
    name: "กองปราบปราม",
    short: "ปราบปรามอาชญากรรม",
    region: "https://discord.gg/rhEpFaEeTV",
    tel: "https://rblx.social/34420714",
    founded: "๖ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-9a448757ff1835983e2165c31102b20c/150/150/Image/Webp/noFilter"
  },
  {
    id: "nsou261",
    name: "นเรศวร ๒๖๑",
    short: "ปกป้องเอกราชและความมั่นคงของชาติ",
    region: "https://discord.gg/6caaBE2cgD",
    tel: "https://rblx.social/34430872",
    founded: "๙ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-74b7d9734e727a255615164ba7f52add/150/150/Image/Webp/noFilter"
  },
  {
    id: "art26",
    name: "อรินทราช ๒๖",
    short: "ปราบปรามการก่อการร้าย",
    region: "https://discord.gg/A9VzTKH2ve",
    tel: "https://rblx.social/34437515",
    founded: "๑๑ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-7fc1bad53403635118858384532608d9/150/150/Image/Webp/noFilter"
  },
  {
    id: "idmb",
    name: "สืบนครบาล",
    short: "ตามล่าผู้กระทำผิด",
    region: "https://discord.gg/sThDYsEppF",
    tel: "https://rblx.social/34446011",
    founded: "๑๓ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-505d6eb960a5b81e42765d72cfee5c08/150/150/Image/Webp/noFilter"
  },
  {
    id: "ssd",
    name: "คอมมานโด",
    short: "ปราบปรามอาชญากรรม",
    region: "https://discord.gg/N2j322JhmA",
    tel: "https://rblx.social/34455909",
    founded: "๑๕ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-40d5d455c0b6f818e435cada5968d7f4/150/150/Image/Webp/noFilter"
  },
  {
    id: "ootig",
    name: "สำนักงานจเรตำรวจ",
    short: "สอบสวนการกระทำผิดของนายตำรวจชั้นประทวน",
    region: "https://discord.gg/qCwM6fW2Cq",
    tel: "https://rblx.social/34459748",
    founded: "๑๕ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-8070572fdd6c7427e63bd49cf80059ae/150/150/Image/Webp/noFilter"
  },
  {
    id: "rpca",
    name: "โรงเรียนนายร้อยตำรวจ",
    short: "ให้การศึกษา อบรม และฝึกฝน นักเรียนนายร้อยตำรวจ",
    region: "https://discord.gg/9VPptBb8aa",
    tel: "https://rblx.social/34459869",
    founded: "๑๕ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-dd64d3f89ad1c55c81ac235dccbfe9b6/150/150/Image/Webp/noFilter"
  },
  {
    id: "doc",
    name: "กรมราชทัณฑ์",
    short: "ฟื้นฟูและแก้ไขพฤติกรรมผู้ต้องขัง",
    region: "https://discord.gg/tpWgfxDrs4",
    tel: "https://rblx.social/34522127",
    founded: "๒๘ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-7b13edfe573857a3f7f73b7c24eb9d9e/150/150/Image/Webp/noFilter"
  },
  {
    id: "pgh",
    name: "โรงพยาบาลตำรวจ",
    short: "ดูแลสุขภาพ และการบาดเจ็บจากการปฏิบัติหน้าที่",
    region: "https://discord.gg/ZgupQtQsdd",
    tel: "https://rblx.social/34537842",
    founded: "๓๐ มิถุนายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-2889932e0a4805b1d3964c5e49406902/150/150/Image/Webp/noFilter"
  },
  {
    id: "sod",
    name: "หน่วยปฏิบัติการพิเศษ",
    short: "ปราบปรามอาชญากรรม",
    region: "https://discord.gg/qHBrted97f",
    tel: "https://rblx.social/34617516",
    founded: "๑๔ กรกฎาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-74bde388531f4bfd8f0867c62175a6fd/150/150/Image/Webp/noFilter"
  },
  {
    id: "han",
    name: "หน่วยหนุมาน",
    short: "ปราบปรามอาชญากรรม",
    region: "https://discord.gg/2rjN399CGv",
    tel: "https://rblx.social/34619336",
    founded: "๑๕ กรกฎาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-915f3612c36addde84f35eb542e76a6b/150/150/Image/Webp/noFilter"
  },
  {
    id: "tfd",
    name: "ตำรวจจราจร",
    short: "ดูแลความปลอดภัยบนถนน",
    region: "https://discord.gg/QaD2uBFxMZ",
    tel: "https://rblx.social/34656687",
    founded: "๒๑ กรกฎาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-cbe6f436f3903eae3b3ba6bcaa70c0b4/150/150/Image/Webp/noFilter"
  },
  {
    id: "pasod",
    name: "ตำรวจสายตรวจ",
    short: "ออกตรวจตามพื้นที่",
    region: "https://discord.gg/3UxfwBkAjw",
    tel: "https://rblx.social/34656828",
    founded: "๒๑ กรกฎาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-e9726178c10447d34be22072c0d635e9/150/150/Image/Webp/noFilter"
  },
  {
    id: "nsb",
    name: "ตำรวจปราบปรามยาเสพติด",
    short: "ปราบปรามการเสพติด เพื่อความสงบสุขของประชาชน",
    region: "https://discord.gg/reS7kRZUVR",
    tel: "https://rblx.social/34680140",
    founded: "๒๖ กรกฎาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-0462797a9b741e88ba82ab1862a8833e/150/150/Image/Webp/noFilter"
  },
  {
    id: "ccib",
    name: "ตำรวจไซเบอร์",
    short: "ปราบปรามอาชญากรรมออนไลน์",
    region: "https://discord.gg/hvgnuXqsWz",
    tel: "https://rblx.social/34708426",
    founded: "๓๐ กรกฎาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-d186462f5fe7d347382589cbbe7a0bb2/150/150/Image/Webp/noFilter"
  },
  {
    id: "tph",
    name: "ตำรวจท่องเที่ยว",
    short: "ให้คำแนะนำในการท่องเที่ยว",
    region: "https://discord.gg/rfmxFmDQy",
    tel: "https://rblx.social/34732163",
    founded: "๔ สิงหาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-abdde96268e02ed8d9f4579f4bce18e0/150/150/Image/Webp/noFilter"
  },
  {
    id: "iapo",
    name: "สำนักงานตรวจสอบภายใน",
    short: "ประเมินการทำงานของหน่วยงาน",
    region: "https://discord.gg/DJY5ZCbDaU",
    tel: "https://rblx.social/34732209",
    founded: "๔ สิงหาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-731c6a27d540926b45dc69353b5076bb/150/150/Image/Webp/noFilter"
  },
  {
    id: "bpph",
    name: "ตำรวจตระเวนชายแดน",
    short: "การลาดตระเวน",
    region: "https://discord.gg/hWRnUKEGUA",
    tel: "https://rblx.social/34767268",
    founded: "๑๐ สิงหาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-e3f08df42bb68b0a8ea7e77478545708/150/150/Image/Webp/noFilter"
  },
  {
    id: "cib",
    name: "ตำรวจสอบสวนกลาง",
    short: "สืบสวนสอบสวนคดีสำคัญ",
    region: "https://discord.gg/88HDMRTcKJ",
    tel: "https://rblx.social/34789513",
    founded: "๑๔ สิงหาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-dbe44cd59b2b141314e849288cdeb233/150/150/Image/Webp/noFilter"
  },
  {
    id: "dp",
    name: "กองวินัยตำรวจ",
    short: "ควบคุมความเรียบร้อยของตำรวจ",
    region: "https://discord.gg/gmkQJ7jy2q",
    tel: "https://rblx.social/34789859",
    founded: "๑๔ สิงหาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-b4b1705de63c41b7b0798d0c012c23a2/150/150/Image/Webp/noFilter"
  },
  {
    id: "paccd",
    name: "กองควบคุมฝูงชน",
    short: "อารักขาบุคคลสำคัญและสถานที่สำคัญ",
    region: "https://discord.gg/ckjxaRESQa",
    tel: "https://rblx.social/34840505",
    founded: "๒๔ สิงหาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-072f9545be10fe549b30dfae5b81dad9/150/150/Image/Webp/noFilter"
  },
  {
    id: "dosi",
    name: "กรมสอบสวนคดีพิเศษ",
    short: "สืบสวนสอบสวนคดีพิเศษ",
    region: "https://discord.gg/qZU59eM2q4",
    tel: "https://rblx.social/34886408",
    founded: "๑ กันยายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-69f1f91fdff2684de33103c235bf130c/150/150/Image/Webp/noFilter"
  },
  {
    id: "ib",
    name: "สำนักงานตรวจคนเข้าเมือง",
    short: "ตรวจคนเข้าเมือง",
    region: "https://discord.gg/WdQ2Yy3PWM",
    tel: "https://rblx.social/34908716",
    founded: "๖ กันยายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-4ae276b519eecece1c8f351341c77444/150/150/Image/Webp/noFilter"
  },
  {
    id: "nraecsd",
    name: "ตำรวจป่าไม้",
    short: "ปราบปรามการกระทำผิดเกี่ยวกับป่าไม้, คุ้มครองสัตว์ป่าและพันธุ์พืช",
    region: "https://discord.gg/JqrkJuHfXH",
    tel: "https://rblx.social/34952530",
    founded: "๑๕ กันยายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-33a70fecd69826fdd7caca6d1a3219b3/150/150/Image/Webp/noFilter"
  },
  {
    id: "pc",
    name: "ศาลยุติธรรม",
    short: "พิจารณาคดี/ตัดสินโทษ",
    region: "https://discord.gg/nnV8sRJs6F",
    tel: "https://rblx.social/34995590",
    founded: "๒๖ กันยายน ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-5095120eb4ef4c9adcea4421f25624cf/150/150/Image/Webp/noFilter"
  },
  {
    id: "pfs",
    name: "พิสูจน์หลักฐานตำรวจ",
    short: "ตรวจสอบหลักฐาน",
    region: "https://discord.gg/nAPwdpQ9Tu",
    tel: "https://rblx.social/35319402",
    founded: "๑๔ ธันวาคม ๒๕๖๗",
    pic: "https://tr.rbxcdn.com/180DAY-f3c0cbc8a655d11c5417b70c4cd6a624/150/150/Image/Webp/noFilter"
  },
  {
    id: "pid",
    name: "กองสารนิเทศ",
    short: "ประกาศข่าวสาร, ผลิตสื่อ",
    region: "https://discord.gg/YHTAPjugU3",
    tel: "https://rblx.social/35536901",
    founded: "๒๕ มกราคม ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-5d7e405d192cf5c4599721ee496d59c1/150/150/Image/Webp/noFilter"
  },
  {
    id: "botb",
    name: "สำนักงานงบประมาณการเงิน",
    short: "บริหารการเงิน",
    region: "https://discord.gg/adHa7rR3Ey",
    tel: "https://rblx.social/35546546",
    founded: "๒๖ มกราคม ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-f32a89cfb2412aecdb730f924d3a0ca4/150/150/Image/Webp/noFilter"
  },
  {
    id: "pad",
    name: "กองบินตำรวจ",
    short: "ลาดตระเวนทางอากาศ",
    region: "https://discord.gg/8AabRwD76v",
    tel: "https://rblx.social/34636249",
    founded: "๑๘ กุมภาพันธ์ ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-695f80d82a6af0aeab8b079f448bcae5/150/150/Image/Webp/noFilter"
  },
  {
    id: "sbb",
    name: "ตำรวจสันติบาล",
    short: "รักษาความมั่นคง, ปกป้องบุคคลสำคัญ",
    region: "https://discord.gg/ec83cTX4ny",
    tel: "https://rblx.social/34702595",
    founded: "๒๙ กรกฎาคม ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-f7b1c2fcda6bfd0817f8d2416a732849/150/150/Image/Webp/noFilter"
  },
  {
    id: "mp",
    name: "ตำรวจน้ำ",
    short: "ดูแลแม่น้ำ",
    region: "https://discord.gg/qw8wSwcnwS",
    tel: "https://rblx.social/34874052",
    founded: "๓๐ สิงหาคม ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-b1c212feafc1b7ddc6c78804daa705a6/150/150/Image/Webp/noFilter"
  },
  {
    id: "mp2",
    name: "ตำรวจม้า",
    short: "รักษาความปลอดภัยบริเวณพระราชวัง",
    region: "https://discord.gg/mGmX4Sa6Cy",
    tel: "https://rblx.social/710174566",
    founded: "๒๕ ตุลาคม ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-8f7b5c24c4e2197cd555da71df4c3ae7/150/150/Image/Webp/noFilter"
  },
  {
    id: "hpd",
    name: "ตำรวจทางหลวง",
    short: "การรักษาความปลอดภัยบนทางหลวง",
    region: "https://discord.gg/2dAPmweAC7",
    tel: "https://rblx.social/34617423",
    founded: "๑ พฤศจิกายน ๒๕๖๘",
    pic: "https://tr.rbxcdn.com/180DAY-724b86b257d97e5ecf8146ff33262326/150/150/Image/Webp/noFilter"
  }
];

function cardHTML(o) {

  return `
    <article class="card" data-id="${o.id}">
      <div class="logo">
        ${o.pic ? `<img src="${o.pic}" alt="${o.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : o.name.slice(0,2)}
      </div>

      <div>
        <h4>${o.name}</h4>
      </div>

      <div class="meta">
        <div style="margin: 2px;">
          <a href="#" 
            style="background-color: var(--accent-color);
            color: var(--dark-text);
            padding: 5px;
            text-decoration: none;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;"
            onclick="view('${o.id}'); return false"
          >ดูรายละเอียด</a>
        </div>
      </div>
    </article>
  `;
}

function render(){
  const q = document.getElementById('q').value.trim().toLowerCase();

  let list = orgs.filter(o=>{
    if(!q) return true;
    return (o.name + ' ' + o.short + ' ' + o.tel).toLowerCase().includes(q);
  });

  const grid = document.getElementById('grid');
  grid.innerHTML = list.map(cardHTML).join('');
  document.getElementById('empty').style.display = list.length ? 'none' : 'block';
}

  function resetFilters(){
    document.getElementById('q').value = '';
    document.getElementById('region').value = 'all';
    document.getElementById('sort').value = 'name';
    document.querySelectorAll('#cats button').forEach(b=>b.classList.remove('active'));
    document.querySelector('#cats button[data-cat="all"]').classList.add('active');
    activeCat = 'all';
    render();
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    render();
  });
function view(id){
  const o = orgs.find(x => x.id === id);
  if(!o) return alert('ไม่พบข้อมูล');

  const body = `
    <h3>${o.name}</h3>
    ${o.short ? `<p><b>หน้าที่:</b> ${o.short}</p>` : ''}
    ${o.founded ? `<p><b>ก่อตั้ง:</b> ${o.founded}</p>` : ''}
    ${o.region ? `<p><b>ลิงก์ดิส:</b> <a href="${o.region}" target="_blank">${o.region}</a></p>` : ''}
    ${o.tel ? `<p><b>ลิงก์กลุ่ม:</b> <a href="${o.tel}" target="_blank">${o.tel}</a></p>` : ''}
  `;

  document.getElementById('detailBody').innerHTML = body;
  document.getElementById('detailModal').style.display = 'block';
}

function closeModal(){
  document.getElementById('detailModal').style.display = 'none';
}

window.onclick = function(event){
  const modal = document.getElementById('detailModal');
  if(event.target === modal){
    modal.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const announcements = [
    {
      text: "🤍 ประกาศสำนักพระราชวัง สมเด็จพระบรมราชชนนีพันปีหลวง สวรรคต ทีมคณะกรรมการบริหารและพัฒนา และ สมาชิกผู้เล่น ทำงานในรั้วตำรวจไทย น้อมส่งเสด็จสู่สวรรคาลัย ถวายความอาลัย สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง ทีมงานทำงานในรั้วตำรวจไทย ขอถวายความอาลัยอย่างสุดซึ้ง ด้วยความจงรักภักดี และสำนึกในพระมหากรุณาธิคุณอันหาที่สุดมิได้ ข้าพเจ้าทีมงานคณะกรรมการบริหารและพัฒนาแมพทำงานในรั้วตำรวจไทย 🖤",
      img: "https://img.pptvhd36.com/thumbor/2025/10/25/news-5df345a.jpg "
    },
        {
      text: "✅ ระบบเว็บไซต์ 'ทำงานในรั้วตำรวจไทย' พร้อมใช้งานแล้ว!",
      img: "https://media.discordapp.net/attachments/1401474079776702551/1444765672512159904/jhgpojh_1.png?ex=692de662&is=692c94e2&hm=010be42eed603777a20e15ccf8f78889caab2471ba1b847d5b53b5ba5877f79d&=&format=webp&quality=lossless&width=1570&height=813"
    },
    {
      text: "🎖️ ขอบคุณผู้เล่นทุกท่านที่สนับสนุนเรานะครับ!",
      img: "https://media.discordapp.net/attachments/1401474079776702551/1444763787927228466/Screenshot_2025-12-01_015507.png?ex=692de4a1&is=692c9321&hm=d7846d38d4bedf69931158a25a4dddde9a0840a2ee586a37c2f06b3325b2a77f&=&format=webp&quality=lossless&width=1031&height=943"
    }
  ];

  let currentIndex = 0;
  const container = document.getElementById("announcementContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let autoSlide;

  if (!container) return;

  function showAnnouncement(index) {
    const item = announcements[index];
    container.style.opacity = 0;

    setTimeout(() => {
      container.innerHTML = `
        <div class="announcement-item">
          ${item.img ? `<img src="${item.img}" alt="announcement image" class="announcement-img">` : ""}
          <p class="announcement-text">${item.text}</p>
        </div>
      `;
      container.style.opacity = 1;

      const currentItem = container.querySelector('.announcement-item');
      addHoverEffect(currentItem);
    }, 200);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % announcements.length;
      showAnnouncement(currentIndex);
    }, 9000);
  }

  function stopAutoSlide() {
    if (autoSlide) clearInterval(autoSlide);
  }

  function addHoverEffect(item) {
    if (!item) return;
    item.addEventListener('mouseenter', stopAutoSlide);
    item.addEventListener('mouseleave', startAutoSlide);
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  }

  showAnnouncement(currentIndex);
  startAutoSlide();

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + announcements.length) % announcements.length;
      showAnnouncement(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % announcements.length;
      showAnnouncement(currentIndex);
    });
  }
});
