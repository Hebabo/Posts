// console.log("anyy")
let postsContaner=document.querySelector("main")
let tagsContaner=document.querySelector("aside")

function getPosts(url){
    let response= new XMLHttpRequest();
    response.onload=function(){
        if(response.readyState==4 && response.status==200){
            postsContaner.innerHTML="";
            let data=JSON.parse(response.responseText);
            let posts= data.posts;
            // console.log(data);
            // console.log(posts);
            posts.forEach(e => {
                let tag = e.tags.map((t)=>`<span class="tag">#${t}</span>`);
                
                postsContaner.innerHTML+=`
                <div class="post-card">
                    <h2>${e.title}</h2>
                    <p>${e.body}</p>
                    <p class="post-tag">${tag.join(" ")}</p>
                    <div class="reacts">
                        <span class="eye"><i class="fa-solid fa-eye"></i>${e.views}</span>
                        <span class="heart"><i class="fa-solid fa-heart"></i>${e.reactions.likes}</span>
                        <span class="thumbs-down"><i class="fa-solid fa-thumbs-down"></i>${e.reactions.dislikes}</span></div>
                </div>
                `
            });
    }else{
        console.log("error 404");
    }
    }
    response.open("GET",url,true);
    response.send();
}
function gettags(url){
    let response= new XMLHttpRequest();
    response.onload=function(){
        if(response.readyState==4 && response.status==200){
            tagsContaner.innerHTML="";
            let tags=JSON.parse(response.responseText);
            //console.log(tags);
            tags.forEach(e => {                
                tagsContaner.innerHTML+=`
                <button class="tag-button" onclick="hashTag('${e.slug}')">#${e.slug}</button>
                `
            });
    }else{
        console.log("error 404");
    }
    }
    response.open("GET",url,true);
    response.send();
}

let baseLink = "https://dummyjson.com/posts";
let tagLink="https://dummyjson.com/posts/tags"
getPosts(baseLink);
gettags(tagLink)
//--------------------------------

//--------------------------------
let search=document.querySelector(".search")

search.addEventListener("input",()=>{
let newLink=`https://dummyjson.com/posts/search?q=${search.value}`
    getPosts(newLink);
})

function hashTag(e){
    let newLink=`https://dummyjson.com/posts/tag/${e}`
    getPosts(newLink);
}


// // --------------------------------------------------------
