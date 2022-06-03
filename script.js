let posts = [
    {
        'userName': 'Mr.wOwwy',
        'userPic': 'images/story1.PNG',
        'image': 'images/1.webp',
        'description': 'Die Kommission hat einen Kompromiss vorgelegt. Demnach soll der Importstopp für russisches Öl zunächst nur für Lieferungen per Tankschiff gelten, Pipelines bleiben ausgenommen. Und das ist nicht das einzige heikle Thema beim EU-Gipfel an diesem Montag.',
        'likes': 54682,
        'comments': [],

    },
    {
        'userName': 'sAsy.Queen',
        'userPic': 'images/story2.PNG',
        'image': 'images/2.webp',
        'description': 'Die Summe wirkt gigantisch, dürfte aber schnell ausgegeben sein - so sehr wurde die Bundeswehr bisher vernachlässigt. Wie es weitergeht, wenn das Sondervermögen aufgebraucht ist? Da bleiben Ampel und Union leider wolkig.',
        'likes': 67892,
        'comments': [],
    },
    {
        'userName': 'Rot-HeaDd',
        'userPic': 'images/story3.PNG',
        'image': 'images/3.webp',
        'description': 'Eigentlich sollte das Finanzsystem nach dem Lehman-Kollaps stabiler werden. Mit den Börsenturbulenzen in diesem Jahr allerdings offenbart sich: Die Risiken sind bloß unsichtbar geworden.',
        'likes': 12125,
        'comments': [],
    },
    {
        'userName': 'DaReDeViL!21s',
        'userPic': 'images/profilePic.jpg',
        'image': 'images/4.webp',
        'description': 'Seit mehr als 200 Jahren kämpfen Australiens Ureinwohner um Anerkennung. Nun hat die neue Regierung versprochen, diese in der Verfassung festzuschreiben. Doch Richie Allan, Kämpfer für die Kultur der Aborigines, sagt: "Sie reden, um zu reden."',
        'likes': 987812354,
        'comments': [],
    },

];


function render() {
    let instapost = document.getElementById('postContainer')
    instapost.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        instapost.innerHTML +=
            `
    
                    <div class="postHeader">
                        <div class="user">
                            <div class="userIcon">
                                <img src="${post['userPic']}" alt="">
                                <div class="userName">${post['userName']}</div>
                            </div>
                        </div>
                        <div class="threeDots">
                            <img src="images/threeDots.PNG" alt="">
                        </div>
                    </div>
                    <div class="postPicture">
                        <img src="${post['image']}" alt="">
                    </div>
                    <div class="postInterraction">
                        <div id="likeSymbol${i}" onclick="likingPost(${i})" class="postInterraction2">
                            <img id="imageSymbolHeart${i}" src="images/emptyLikeSymbol.PNG" alt="">
                            <img src="images/forwardSymbol.PNG" alt="">
                            <img src="images/messageSymbol.PNG" alt="">
                        </div>
                        <div class="postInterraction3">
                            <img class="postIcon" src="images/postSymbol.PNG" alt="">
                        </div>
                    </div>
                    <div class="postDescription">
                        ${post['description']}
                    </div>
                    <div id="like${i}" class="likes">
                        gefällt ${post['likes']} Mal
                    </div>
                    <div id="commentedComments${i}" class="postedComments">
                        posted comments
                        
                    </div>
                    <div class="commentingOnPost">
                        <div class="smiley"><img src="images/smiley.PNG" alt="">
                            <input id="inputField${i}" type="text">
                        </div>
                        
                        <div class="postinButton">
                            <button onclick="postIt(${i})">post it</button>
                        </div>
                    </div>
                
    `
    }
}

// let likeSymbol = document.getElementById("likeSymbol");
// if (likeSymbol.getAttribute('src') == 'emptyLikeSymbol.PNG') {
//     image.src = "LikeSymbol.PNG"
// } else {
//     image.src = "emptyLikeSymbol.PNG";
// }
//           meine Version
// function likingPost(y) {
// let reaktionSymbol = document.getElementById('imageSymbolHeart' + y);
// if (reaktionSymbol.src = 'images/emptyLikeSymbol.PNG') {
//     reaktionSymbol.src = 'images/LikeSymbol.PNG';
//     posts[y].likes++;
//     document.getElementById('like' + y).innerHTML = posts[y].likes
// } else {
//     reaktionSymbol.src = 'images/emptyLikeSymbol.PNG';
//     posts[y].likes--;
//     document.getElementById('like' + y).innerHTML = posts[y].likes;
// }
// }
// von w3 school
// function likingPost(i) {
//     let reaktionSymbol = document.getElementById("imageSymbolHeart" + i);
//     if (reaktionSymbol.src.match("images/emptyLikeSymbol.PNG")) {
//         image.src = 'images/LikeSymbol.PNG';
//         posts[i].likes++;
//         document.getElementById('like' + i).innerHTML = posts[i].likes;

//     } else {
//         image.src = "images/emptyLikeSymbol.PNG";
//         posts[i].likes++;
//         document.getElementById('like' + i).innerHTML = posts[i].likes;
//     }

// }

let emptyHeart = true;

function likingPost(y) {
    let reaktionSymbol = document.getElementById('imageSymbolHeart' + y);
    if (emptyHeart) {
        reaktionSymbol.src = 'images/LikeSymbol.PNG';
        posts[y].likes++;
        emptyHeart = false;

    } else {
        reaktionSymbol.src = 'images/emptyLikeSymbol.PNG';
        posts[y].likes--;
        emptyHeart = true;
    }


}


// http://127.0.0.1:5500/JS/Modul7/Instagram/images/emptyLikeSymbol.PNG

function postIt(i) {
    let addedComment = document.getElementById('inputField' + i);
    posts[i]['comments'].push(addedComment.value);
    render();
    renderCommentedComments(i);
}


function renderCommentedComments(i) {
    let comment = document.getElementById('commentedComments' + i);
    comment.innerHTML = ``;
    let postedComment = posts[i];
    for (let j = 0; j < postedComment['comments'].length; j++) {

        comment.innerHTML += `
        <div class="postedComments">
                        DaReDeViL!21s
                        <h5> ${posts[i]['comments'][j]} </h5> 
                        
                    </div>
        `;
    }
}

