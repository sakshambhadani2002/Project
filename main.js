const translations = {
    en:{
        selct : "Login to Job & Japan"
    },
    jp:{
        selct : "ジョブ&ジャパンにログイン"
    }   
}

const languageSelectop = document.querySelector("select");
let statement = document.getElementById("intro");

languageSelectop.addEventListener("change", (event)=>{
    setLanguage(event.target.value)   
});

const setLanguage = (language) =>{
    if(language == "jp"){
        statement.innerText = translations.jp.selct;

    }else if(language == "en"){
        statement.innerText = translations.en.selct;
    }
}