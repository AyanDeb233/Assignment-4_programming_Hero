let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobCount = document.getElementById("job-count");

const allCards = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");

function calculateCounts() {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    jobCount.innerText = allCards.children.length;
}
calculateCounts();

