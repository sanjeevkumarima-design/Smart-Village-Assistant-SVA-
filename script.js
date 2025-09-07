// Demo crop and scheme data
const crops = [
  {name:"Wheat",soil:"Loamy",season:"Rabi"},
  {name:"Rice",soil:"Clayey",season:"Kharif"},
  {name:"Bajra",soil:"Sandy",season:"Kharif"},
  {name:"Barley",soil:"Loamy",season:"Rabi"},
];
const schemes = [
  {name:"PM-KISAN",type:"small",states:["Uttar Pradesh","Bihar"],desc:"₹6000/year support."},
  {name:"Soil Health Card",type:"all",states:["Maharashtra","Rajasthan"],desc:"Free soil tests."},
  {name:"Agri Infra Fund",type:"large",states:["All"],desc:"Low-interest loans."}
];

// Crop Advisor
function getCropSuggestions(){
  const soil=document.getElementById("soilSelect").value;
  const season=document.getElementById("seasonSelect").value;
  const results=crops.filter(c=>(soil==="All"||c.soil===soil)&&(season==="All"||c.season===season));
  document.getElementById("cropResults").innerHTML=
    results.map(c=>`<div>🌱 ${c.name} (${c.soil}, ${c.season})</div>`).join('')||"No suggestions.";
}

// Mandi Prices
const mandi=["Wheat","Rice","Bajra","Barley"];
function updatePrices(){
  document.getElementById("marketPrices").innerHTML=
    mandi.map(m=>`<div>${m}: ₹${(Math.random()*2000+1000).toFixed(0)}/quintal</div>`).join('');
}
setInterval(updatePrices,3000);updatePrices();

// Pest Analyzer
function analyzePest(){
  const file=document.getElementById("pestImg").files[0];
  if(!file){alert("Please upload an image.");return;}
  document.getElementById("pestResult").innerText="Analyzing "+file.name+" ... (demo)";
  setTimeout(()=>{document.getElementById("pestResult").innerText="No major disease detected (demo).";},2000);
}

// Schemes
function findSchemes(){
  const type=document.getElementById("farmerType").value;
  const state=document.getElementById("stateSelect").value;
  const results=schemes.filter(s=>(s.type==="all"||s.type===type)&&(s.states.includes("All")||s.states.includes(state)));
  document.getElementById("schemeResults").innerHTML=
    results.map(s=>`<div>📜 <b>${s.name}</b>: ${s.desc}</div>`).join('')||"No schemes found.";
}

// Telemedicine
function bookAppointment(){
  const n=document.getElementById("patName").value;
  const v=document.getElementById("patVillage").value;
  if(!n||!v){alert("Fill details");return;}
  document.getElementById("bookMsg").innerText=`✅ Appointment booked for ${n} from ${v} (demo).`;
}

// Vaccination reminders
let reminders=[];
function addReminder(){
  const n=document.getElementById("childName").value;
  const d=document.getElementById("dueDate").value;
  if(!n||!d)return;
  reminders.push({n,d});
  renderRem();
}
function renderRem(){
  document.getElementById("remList").innerHTML=reminders.map(r=>`🔔 ${r.n} due on ${r.d}`).join('<br>');
}

// Community chat
let msgs=[];
function postMsg(){
  const u=document.getElementById("chatUser").value;
  const m=document.getElementById("chatMsg").value;
  if(!u||!m)return;
  msgs.push({u,m});
  document.getElementById("chatMsg").value="";
  renderChat();
}
function renderChat(){
  document.getElementById("chatBox").innerHTML=msgs.map(x=>`<div><b>${x.u}:</b> ${x.m}</div>`).join('');
}

// Scroll
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}

// Download site data
function downloadSite(){
  const blob=new Blob([JSON.stringify({crops,schemes,msgs,reminders},null,2)],{type:'application/json'});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="sva-demo-data.json";
  a.click();
}

// Resources
const resources = {
  water: {title:"💧 Clean Water & Sanitation",text:"Awareness about safe drinking water, hygiene practices, and sanitation."},
  energy: {title:"⚡ Renewable Energy",text:"Promoting solar power, wind energy, and biogas for sustainability."},
  digital: {title:"🌐 Digital Connectivity",text:"Internet access, e-governance, and digital payment systems."},
  transport: {title:"🚌 Smart Transport",text:"Eco-friendly mobility, better road networks, and shared transport."},
  waste: {title:"♻️ Waste Management",text:"Proper disposal, recycling, composting, and reducing plastic."},
  environment: {title:"🌳 Environment & Sustainability",text:"Tree plantation, climate care, water conservation, and green living."}
};

// Modal
function openModal(type) {
  document.getElementById("modalTitle").innerText = resources[type].title;
  document.getElementById("modalText").innerText = resources[type].text;
  document.getElementById("infoModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}




