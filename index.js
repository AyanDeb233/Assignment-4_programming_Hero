let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobCount = document.getElementById("job-count");

const allCards = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filter");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const cardcounting = document.getElementById("cardCount");
const oftexting = document.getElementById("ofText");
const totalcounting = document.getElementById("totaljobCount");

function calculateCounts() {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCounts();

function displayCount() {
 let totalJobsCount = allCards.children.length;
  const totalCountingdisplay = interviewList.length + rejectedList.length;
  
  if (totalCountingdisplay === 0) {
    cardcounting.innerText = totalJobsCount;
    oftexting.classList.add('hidden'); 
  } else {
    cardcounting.innerText = totalCountingdisplay;
    oftexting.classList.remove('hidden'); 
    totalcounting.innerText = totalJobsCount;
  }
}
displayCount();

function toggling(id){
 
    currentStatus = id;

    if(id == "interview-filter-btn"){
        allCards.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterview();
    }
    else if(id == "all-filter-btn"){
        allCards.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }
    else if(id == "rejected-filter-btn"){
        allCards.classList.add("hidden");
        filterSection.classList.remove("hidden");

        renderRejected();
    }
    displayCount();
}

mainContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("interview-btn")) {

        let parentNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parentNode.querySelector(".company").innerText;
        const jobPosition = parentNode.querySelector(".job-position").innerText;
        const aboutJob = parentNode.querySelector(".about-job").innerText;
        const statusDiv = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        const statusOption = parentNode.querySelector(".status");

        statusOption.innerText = "INTERVIEW";
        statusOption.className ="status w-[113px] h-[36px] text-[14px] font-semibold bg-green-100 text-center text-green-600 mb-[8px] p-3 rounded-[5px]";

    const cardinfo = {
        companyName,
        jobPosition,
        aboutJob,
        statusDiv: "INTERVIEW",
        notes
    }
    const interview = interviewList.find(item => item.companyName == cardinfo.companyName);
    if(!interview){
        interviewList.push(cardinfo);
    }
    rejectedList = rejectedList.filter(item => item.companyName != cardinfo.companyName)

    if(currentStatus == "rejected-filter-btn"){
        renderRejected();
    }

    calculateCounts();
    displayCount();
    }

    else if (event.target.classList.contains("rejected-btn")) {

    let parentNode = event.target.parentNode.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const aboutJob = parentNode.querySelector(".about-job").innerText;
    const statusDiv = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    const statusOption = parentNode.querySelector(".status");

    statusOption.innerText = "REJECTED";
    statusOption.className = "status w-[113px] h-[36px] text-[14px] font-semibold bg-red-100 text-center text-red-600 mb-[8px] p-3 rounded-[5px]";

    const cardinfo = {
        companyName,
        jobPosition,
        aboutJob,
        statusDiv: "REJECTED",
        notes
    }
    const rejected = rejectedList.find(item => item.companyName == cardinfo.companyName);
    if(!rejected){
        rejectedList.push(cardinfo);
    }

    interviewList = interviewList.filter(item => item.companyName != cardinfo.companyName)

    if(currentStatus == "interview-filter-btn"){
        renderInterview();
    }

    calculateCounts();
    displayCount();

    }
    else if(event.target.classList.contains("fa-trash-can")){
        let parentNode = event.target.parentNode.parentNode.parentNode.parentNode;
        const CompanyName = parentNode.querySelector(".company");

        parentNode.remove();

        const companyNaming = CompanyName.innerText;
        interviewList = interviewList.filter(item => item.companyName != companyNaming);
        rejectedList = rejectedList.filter(item => item.companyName != companyNaming);
        calculateCounts();
        displayCount();
    }

})

function renderInterview(){
    filterSection.innerHTML = "";
    if(interviewList.length === 0){
        filterSection.innerHTML = `<div id="default-part" class="default-part w-full h-[400px] bg-white shadow-md rounded-[8px] flex flex-col justify-center items-center p-10 mt-[20px] mb-[50px]">
            <div> <img src="./photo/jobs.png" alt=""></div>
            <h1 class="text-[24px] text-[#002c5c] font-bold mt-[10px]">No Jobs Available</h1>
            <p class="text-[16px] text-gray-600">Check back soon for new job opportunities</p>
        </div>`
        return;
    } 

    for (let interview of interviewList){
        let div = document.createElement("div");
        div.className = "card1 w-full bg-white shadow-md rounded-[8px] mt-[20px]";
        div.innerHTML = `
                <div class="card-full flex flex-row justify-between p-5">
                    <div class="card-left">
                        <p class="company text-[20px] text-[#002c5c] font-semibold">${interview.companyName}</p>
                        <p class="job-position text-[18px] text-[#64748b]">${interview.jobPosition}</p>
                        <p class="about-job text-[16px] my-[20px] text-[#64748b] tracking-wider">${interview.aboutJob}</p>
                        <div
                            class="status w-[113px] h-[36px] text-[14px] text-[#002c5c] font-semibold bg-[#eef4ff] mb-[8px] p-3 text-nowrap rounded-[5px]">
                            ${interview.statusDiv}</div>
                        <p class="notes text-[16px] mt-[8px] text-[#313a49]">${interview.notes}</p>
                        <div class="full-btn flex gap-2 mt-[20px] mb-[20px]">
                            <div class="interview-btn btn text-green-600 border-green-600">INTERVIEW</div>
                            <div class="rejected-btn btn text-red-600 border-red-600">REJECTED</div>
                        </div>

                    </div>
                    <div class="delete-btn card-right border-gray-300 p-2 cursor-pointer">
                        <div class="border border-gray-300 rounded-[50%] p-2">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                </div>`
        filterSection.appendChild(div);
    }
}

function renderRejected(){
    filterSection.innerHTML = "";
    if(rejectedList.length === 0){
        filterSection.innerHTML = `<div id="default-part" class="default-part w-full h-[400px] bg-white shadow-md rounded-[8px] flex flex-col justify-center items-center p-10 mt-[20px] mb-[60px]">
            <img src="./photo/jobs.png" alt="">
            <h1 class="text-[24px] text-[#002c5c] font-bold mt-[10px]">No Jobs Available</h1>
            <p class="text-[16px] text-gray-600">Check back soon for new job opportunities</p>
        </div>`
        return;
    } 
    for (let rejected of rejectedList){
        let div = document.createElement("div");
        div.className = "card1 w-full bg-white shadow-md rounded-[8px] mt-[20px]";
        div.innerHTML = `
                <div class="card-full flex flex-row justify-between p-5">
                    <div class="card-left">
                        <p class="company text-[20px] text-[#002c5c] font-semibold">${rejected.companyName}</p>
                        <p class="job-position text-[18px] text-[#64748b]">${rejected.jobPosition}</p>
                        <p class="about-job text-[16px] my-[20px] text-[#64748b] tracking-wider">${rejected.aboutJob}</p>
                        <div
                            class="status w-[113px] h-[36px] text-[14px] text-[#002c5c] font-semibold bg-[#eef4ff] mb-[8px] p-3 text-nowrap rounded-[5px]">
                            ${rejected.statusDiv}</div>
                        <p class="notes text-[16px] mt-[8px] text-[#313a49]">${rejected.notes}</p>
                        <div class="full-btn flex gap-2 mt-[20px] mb-[20px]">
                            <div class="interview-btn btn text-green-600 border-green-600">INTERVIEW</div>
                            <div class="rejected-btn btn text-red-600 border-red-600">REJECTED</div>
                        </div>

                    </div>
                    <div class="delete-btn card-right border-gray-300 p-2 cursor-pointer">
                        <div class="border border-gray-300 rounded-[50%] p-2">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                </div>`
        filterSection.appendChild(div);
    }
}
