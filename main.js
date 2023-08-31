function main() {
  return `
    <div id="main">
    <div id="home">
      <h3><a href="aug.html">home</a></h3>
      <div>
      <div id="container">
        <h3><a href="user.html" >user</a></h3>
        <h3><a href="post.html" >post</a></h3>
        <h3><a href="">register</a></h3>
        <h3><a href="">log </a></h3>
        </div>
        </div>`;
}
//   document.querySelector("body").innerHTML = main()
// let a = document.body.innerHTML=main()
// console.log(a)
function sonu(){
  let a=document.createElement("h1")
a.innerText="my name is sonu"
let body=document.querySelector("body")
body.append(a)
}

export {main,sonu}
