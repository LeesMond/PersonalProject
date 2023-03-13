/**
 * 
 */
var clocktarget = document.getElementById("clock");

function clock(){
	var date = new Date();
	var month = date.getMonth();
	var clicktarget = date.getDate();
	var day = date.getDay();
	var week = ['일','월','화','수','목','금','토'];
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	clocktarget.innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일` +
	`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
}

function init(){
	clock();
	
	setInterval(clock, 1000);
}
init();