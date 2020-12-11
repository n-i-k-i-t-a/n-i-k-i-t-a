
let coin = document.getElementById("coin");

progress = {
	coins: 0,
	click: 1000,
	time: 1,
};

function click_event(){
	progress.coins += progress.click;
	coin.innerHTML = progress.coins/1000;
}

function time_event(){
	progress.coins += progress.time;
	coin.innerHTML = progress.coins/1000;
}

setInterval(time_event, 100);