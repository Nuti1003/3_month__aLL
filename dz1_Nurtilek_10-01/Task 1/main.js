let patternPhone = /^\+996 \d{3}\s\d{2}-\d{2}-\d{2}/
let patternPhonRu = /^\+7/
let patternPhonKG = /^\+996/

const phoneInput = document.querySelector('#phone');
const img_flag = document.getElementById('img_flag')

const button = document.querySelector('button');

button.onclick = () => {
    if(patternPhone.test(phoneInput)){
        console.log( ' <=test')
    } else {
        console.log('<= error')
    }

    console.log(phoneInput.value, '<= test');
}

phoneInput.addEventListener('input', e => {
	if (patternPhonRu.test(e.target.value)) {
        img_flag.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/a/a2/Flag_of_Russia_%28Kremlin.ru%29.svg')
	} else if(patternPhonKG.test(e.target.value)){
		img_flag.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/2560px-Flag_of_Kyrgyzstan.svg.png')
	}
});