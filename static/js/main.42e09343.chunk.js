(this.webpackJsonpchatgpt=this.webpackJsonpchatgpt||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/chatgptLogo.c6d23a6f.svg"},,,function(e,t,a){e.exports=a.p+"static/media/chatgpt.9ec8d507.svg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nO3byUoDQRRA0ezirP/g9HkOIILDQvDrVNw4G8FPMIIuw5U2DQ5E7YaOlXp9D2STTV5f3qIDVZ2OJEmSpPCAaWAq9RwhAUvAMfDIhwfgCFhMPV8IwPq3wN8VwddSz5k1YA7o8bc7YDb1vNkCdqluJ/W82QLOa4Q+Sz1vtoDXGqFfUs+bLWpKPW+2MLShQ8GNNnQouNGGDgU32tCh4EYbOhTcaEOHghtt6FBwow0dCm60oUPBjTZ0KLjRhg6Ftm50cb4N2C5OBQHPtE+/fPatsZ31K05sAtepn3SCXAEr4zjVaeTRp1ibO58NHI74EQ0dNBm6OOyt0XpNRe4Cgx9+RLy36Ro6l9DlVle53tBWvUYil6EPUj/NBNtr+vWueG/UV7fAQmOhy9grxv7iAlhuNPKn2DPAJnBa/h1tmz5wAmwULTpRUFPqebOFoQ0dCm60oUPBjTZ0KLjRhg4FN9rQoeBGGzoU3GhDh4IbbehQcKMNHQputKFDwY02dCi40f8Wul+j9dM/jRUPw4s5VZ2knjdbDG+AVbWRet7cr9tdVYh8GeosXArAKnDzS+TrsZ3qbBtgHtgvbx4Mys99+d186vlCYnh5qZk7I5IkSZI6k+wNJgs9CuOiKBgAAAAASUVORK5CYII="},function(e,t,a){e.exports=a.p+"static/media/message.b0838a20.svg"},function(e,t,a){e.exports=a.p+"static/media/home.0386b5ea.svg"},function(e,t,a){e.exports=a.p+"static/media/bookmark.d65495b5.svg"},function(e,t,a){e.exports=a.p+"static/media/rocket.a0e88180.svg"},function(e,t,a){e.exports=a.p+"static/media/send.c2b096c8.svg"},function(e,t,a){e.exports=a.p+"static/media/trash.192b0541.svg"},function(e,t,a){e.exports=a.p+"static/media/user-icon.b8c31a02.png"},function(e,t,a){e.exports=a(22)},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(3),l=a.n(n),r=(a(21),a(4)),m=a.n(r),i=a(5),o=a.n(i),g=a(6),p=a.n(g),d=a(7),u=a.n(d),E=a(8),N=a.n(E),h=a(9),A=a.n(h),v=a(10),b=a.n(v),f=a(11),S=a.n(f),C=a(12),I=a.n(C),O=a(1),w=a.n(O);var k=function(){const[e,t]=Object(s.useState)(""),[a,n]=Object(s.useState)([]),[l,r]=Object(s.useState)([]),[i,g]=Object(s.useState)(null),[d,E]=Object(s.useState)(!0),[h,v]=Object(s.useState)(!1),f=Object(s.useRef)(null);Object(s.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("chatSessions"));e&&r(e)},[]),Object(s.useEffect)(()=>{l.length>0&&localStorage.setItem("chatSessions",JSON.stringify(l))},[l]),Object(s.useEffect)(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[a]);const C=()=>{if(""===e.trim())return;const s={sender:"user",message:e},c={sender:"gpt",message:e};if(n(e=>[...e,s,c]),t(""),E(!1),!h){const t=e.split(" ").slice(0,5).join(" ")||"New Chat";r(e=>[...e,{name:t,messages:[...a,s,c]}]),v(!0)}};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"sideBar"},c.a.createElement("div",{className:"upperSide"},c.a.createElement("div",{className:"upperSideTop"},c.a.createElement("img",{src:m.a,alt:"Logo",className:"logo"}),c.a.createElement("span",{className:"brand"},"ChatGPT Clone")),c.a.createElement("button",{className:"midBtn",onClick:()=>{n([]),g(null),E(!0),v(!1)}},c.a.createElement("img",{src:o.a,alt:"new chat",className:"addBtn"}),"New Chat"),c.a.createElement("div",{className:"upperSideBottom"},l.map((e,t)=>{return c.a.createElement("div",{key:t,className:"queryWrapper"},c.a.createElement("button",{className:"query "+(i===t?"active":""),onClick:()=>(e=>{g(e),n(l[e].messages),E(!1)})(t)},c.a.createElement("img",{src:p.a,alt:"Query"}),(a=e.name).length>20?a.substring(0,20)+"...":a,c.a.createElement("img",{src:S.a,alt:"Delete",className:"trashIcon",onClick:e=>{e.stopPropagation(),(e=>{const t=l.filter((t,a)=>a!==e);r(t),n([]),g(null),localStorage.setItem("chatSessions",JSON.stringify(t)),E(!0)})(t)}})));var a}))),c.a.createElement("div",{className:"lowerSide"},c.a.createElement("div",{className:"listItems"},c.a.createElement("img",{src:u.a,alt:"Home",className:"listItemsImg"}),"Home"),c.a.createElement("div",{className:"listItems"},c.a.createElement("img",{src:N.a,alt:"Saved",className:"listItemsImg"}),"Saved"),c.a.createElement("div",{className:"listItems"},c.a.createElement("img",{src:A.a,alt:"Upgrade",className:"listItemsImg"}),"Upgrade to Pro"))),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"chats",ref:f}," ",d?c.a.createElement("div",{className:"initialScreen"},c.a.createElement("img",{src:w.a,alt:"ChatGPT Logo",className:"initialLogo"}),c.a.createElement("h2",null,"ChatGPT Clone")):a.map((e,t)=>c.a.createElement("div",{key:t,className:"chat "+("gpt"===e.sender?"bot":"")},c.a.createElement("img",{className:"chatImg",src:"user"===e.sender?I.a:w.a,alt:""}),c.a.createElement("p",{className:"txt"},e.message)))),c.a.createElement("div",{className:"chatFooter"},c.a.createElement("div",{className:"inp"},c.a.createElement("input",{type:"text",placeholder:"Message ChatGPT",value:e,onChange:e=>{t(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&C()}}),c.a.createElement("button",{className:"send",onClick:C},c.a.createElement("img",{src:b.a,alt:"Send"}))),c.a.createElement("p",null,"ChatGPT can make mistakes. Check important info."))))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)))}],[[13,1,2]]]);
//# sourceMappingURL=main.42e09343.chunk.js.map