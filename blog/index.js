let posts = [];
const getData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    posts.push(...data);
}

let container = document.getElementById("blog")
const renderData = () => {
    const data = posts
    container.innerHTML = null;
    data.forEach(el => {
        let badacontainer=document.createElement('div')
        badacontainer.classList.add('badacontainer')
        let div = document.createElement("div")
        div.classList.add("blogdata")
        let p1 = document.createElement("p")
        p1.innerText = el.body
        p1.classList.add('body')
        let p = document.createElement("p")
        p.innerText = el.title
        p.classList.add('title')
        div.appendChild(p1, p)
        let buttondiv=document.createElement('button')
        buttondiv.classList.add('buttondiv')
        let removeblog=document.createElement('button')
        removeblog.innerText="Remove Blog"
        removeblog.classList.add("removeblog")
        removeblog.addEventListener("click",function(index){
            data.splice(index,1)
            renderData()
        })
        buttondiv.append(removeblog)
        badacontainer.append(div,buttondiv)
        container.append(badacontainer)
        
    });
}

async function main() {
    await getData();
    renderData();
}

main()
let buttonblog=document.getElementById("button")
buttonblog.addEventListener('click',function(){
    let el=document.getElementById('blogs').value

    const blog = {
        title: el,
        body: el
    }

    posts.push(blog);
    renderData();
    
})



