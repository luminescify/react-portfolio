(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/cover-image.9ecd412b.jpg"},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){var n={"./day-planner.jpg":14,"./harry-potter-quiz-challenge.jpg":15,"./reel-cinema.jpg":16,"./take-a-hike.jpg":17,"./weather-dashboard.jpg":18};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=13},function(e,a,t){e.exports=t.p+"static/media/day-planner.ddc08c6a.jpg"},function(e,a,t){e.exports=t.p+"static/media/harry-potter-quiz-challenge.46eb3d89.jpg"},function(e,a,t){e.exports=t.p+"static/media/reel-cinema.db6a436e.jpg"},function(e,a,t){e.exports=t.p+"static/media/take-a-hike.d8c428e7.jpg"},function(e,a,t){e.exports=t.p+"static/media/weather-dashboard.b639bf40.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),i=(t(12),t(1)),o=t(6),m=t.n(o);var u=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"Leah Davis"),r.a.createElement("img",{src:m.a,alt:"gentle waves"}),e.children)};function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var h=function(e){var a=e.pages,t=void 0===a?[]:a,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=s(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},t.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},s(e.name)))}))))},d=function(e){return r.a.createElement("div",null,e.children)};var f=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"profile-img my-5"},r.a.createElement("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})),r.a.createElement("p",null,"Hiya! I'm Leah. Welcome to my corner of the internet."),r.a.createElement("p",null,"I received my BFA in Graphic Design at DePaul University and graduated in June of 2019. I enjoy all aspects of design and am constantly looking for new ways to make beautiful things - the newest thing for me is studying full stack development."),r.a.createElement("p",null,"When I'm not designing, you can find me loving on my pets at home, having a Harry Potter or Lord of the Rings marathon on my couch, or curled up with a good book."),r.a.createElement("p",null,"Feel free to reach out on my contact page if you enjoy my work!")))};var E=function(e){var a=e.project,n=a.name,l=a.repo,c=a.link,i=a.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:t(13)("./".concat(n,".jpg")),alt:p(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c,target:"_blank"},p(n))," ",r.a.createElement("a",{href:l,target:"_blank"},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,i)))};var g=function(){var e=Object(n.useState)([{name:"reel-cinema",description:"Reel Cinema",link:"https://intense-lake-77911.herokuapp.com/",repo:"https://github.com/AWSMProdigy/Theater-website"},{name:"harry-potter-quiz-challenge",description:"Harry Potter Quiz Challenge",link:"https://luminescify.github.io/code-quiz/",repo:"https://github.com/luminescify/code-quiz"},{name:"take-a-hike",description:"Take A Hike",link:"https://faithelizagreen.github.io/take-a-hike/index.html",repo:"https://github.com/faithelizagreen/take-a-hike"},{name:"day-planner",description:"Day Planner",link:"https://luminescify.github.io/day-planner/",repo:"https://github.com/luminescify/day-planner"},{name:"weather-dashboard",description:"Weather Dashboard",link:"https://luminescify.github.io/weather-dashboard/",repo:"https://github.com/luminescify/weather-dashboard"}]),a=Object(i.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},a.map((function(e,a){return r.a.createElement(E,{project:e,key:"project"+a})}))))},b=t(2),v=t(3);var y=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],u=o[1],s=t.name,p=t.email,h=t.message,d=function(e){if("email"===e.target.name){var a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(a?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));m||(l(Object(v.a)(Object(v.a)({},t),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",t))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||console.log("Submit Form",t)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:s,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:d})),m&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},m)),r.a.createElement("button",{type:"submit"},"Submit")))};var k=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:"https://www.linkedin.com/in/leahdavis96",target:"_blank"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"Responsive Design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var w=function(e){var a=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,s(a.name)),r.a.createElement(d,null,function(){switch(a.name){case"about me":return r.a.createElement(f,null);case"portfolio":return r.a.createElement(g,null);case"contact":return r.a.createElement(y,null);case"resume":return r.a.createElement(k,null);default:return r.a.createElement(f,null)}}()))};var j=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/luminescify"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/leahdavis96"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/16556767/leah-davis"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var N=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),a=Object(i.a)(e,1)[0],t=Object(n.useState)(a[0]),l=Object(i.a)(t,2),c=l[0],o=l[1];return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(h,{pages:a,setCurrentPage:o,currentPage:c})),r.a.createElement("main",null,r.a.createElement(w,{currentPage:c})),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.de913818.chunk.js.map