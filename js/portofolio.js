const firebaseConfig = {
  apiKey: "AIzaSyA5qblBFzcCDLRhJDfPH_ee--vUzPMMB64",
  authDomain: "jiajing-s-drawings-web-2680e.firebaseapp.com",
  projectId: "jiajing-s-drawings-web-2680e",
  storageBucket: "jiajing-s-drawings-web-2680e.appspot.com",
  messagingSenderId: "291894580586",
  appId: "1:291894580586:web:86adc92e4706713d510113",
  measurementId: "G-1PJPD09DB4"
};
firebase.initializeApp(firebaseConfig);
let igPic = document.querySelector("#igPic");
let igPicDaily = document.querySelector("#igPicDaily");
let loading = document.querySelector("#loading");
let db = firebase.firestore();
let docRef = db.collection("ig");
docRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let igToken = doc.data().igToken;
      (function show_pic(){
        // 2022/2/8 ~ 60天
        // if (!clickOne){
        //   clickOne = true;
        //   get_show_pic();
        // }
          const getUserId = 'https://graph.instagram.com/me?access_token=';
          axios.get(getUserId+igToken)
          .then(
            response=>{
              // console.log(response.data.id)
              const userId = response.data.id;
              const getMediaIds = `https://graph.instagram.com/${userId}?fields=media&access_token=`;
              axios.get(getMediaIds+igToken)
              .then(response=>{
                // console.log(response.data.media.data);
                const mediaIds = response.data.media.data;
                // 取得每個貼文的各別id
                for (let i=0 ; i<mediaIds.length ; i++) {
                  // console.log(mediaIds[i])
                  // const mediaId = mediaIds[i].id
                  // console.log(mediaId)
                  // 將個別Id放入變數
                  const getPicInfo = `https://graph.instagram.com/${mediaIds[i].id}?fields=media_url,permalink,media_type,caption&access_token=`;
                  axios.get(getPicInfo+igToken)
                  .then(response=>{
                    // console.log(response.data);
        //             console.log(igPic)
        //             把每個media_url放進去
                    if(response.data.caption.includes('日常系列')){
                      igPicDaily.innerHTML += `
                      <div style='background-image:url(${response.data.media_url});' class='igPic'></div>
                      `}
                    else if(response.data.media_type === "VIDEO"){
                      igPic.innerHTML += `
                    <video class='igPic' autoplay loop muted >
                      <source src=${response.data.media_url} type="video/mp4">
                    </video>`}
                    else{
                    igPic.innerHTML += `
                    <img src='${response.data.media_url}' class='igPic'>
                    `}
                  resetHeight();
                  loading.style.display="none";
                  })
                }
              })
            }
          )
      })();
    });
})
// 螢幕縮放時讓igPicOuterWraper高度一起隨著照片縮放
let igPicOuterWraper = document.querySelector(".igPicOuterWraper");
let igPicOuter = document.querySelector(".igPicOuter");
let igPicDailyOuterWraper = document.querySelector(".igPicDailyOuterWraper");
let igPicDailyOuter = document.querySelector(".igPicDailyOuter")
window.addEventListener('resize', resetHeight);
function resetHeight(){
  igPicOuterWraper.style.height = (igPicOuter.offsetHeight+110)+"px";
  igPicDailyOuterWraper.style.height = igPicDailyOuter.offsetHeight+"px";
//   console.log(typeof igPicOuter.offsetHeight);
};
