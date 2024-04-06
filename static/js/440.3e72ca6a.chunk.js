"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[440],{1993:(n,e,r)=>{r.d(e,{A:()=>j});var a,o,i,t,s,l=r(5043),c=r(7528),p=r(197);const d=p.Ay.div(a||(a=(0,c.A)(["\n  margin-bottom: 32px;\n  .filterText {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 129%;\n    color: var(--secondary-color-grey);\n    margin-bottom: 8px;\n  }\n"]))),m=p.Ay.div(o||(o=(0,c.A)(["\n  position: relative;\n"]))),h=p.Ay.button(i||(i=(0,c.A)(["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 14px;\n  padding: 14px 18px;\n  background-color: var(--primary-color-green);\n  width: 226px;\n  height: 48px;\n  font-family: var(--font-family);\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 111%;\n  color: var(--primary-color-white);\n  outline: none;\n  cursor: pointer;\n"]))),x=p.Ay.ul(t||(t=(0,c.A)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  top: 56px;\n  left: 0;\n  z-index: 1;\n  box-sizing: border-box;\n  border-radius: 14px;\n  padding: 14px 18px;\n  width: 226px;\n  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);\n  background: var(--primary-color-white);\n  list-style-type: none;\n  font-family: var(--font-family);\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 111%;\n  color: rgba(17, 16, 28, 0.3);\n  border: 1px solid black;\n"]))),u=p.Ay.li(s||(s=(0,c.A)(["\n  cursor: pointer;\n  &:hover {\n    color: var(--primary-color-black);\n  }\n"])));var g=r(4872),f=r(9456),y=r(374),b=r(5374),v=r(579);const j=()=>{const n=(0,f.d4)(y.Un),[e,r]=(0,l.useState)(!1),a=(0,f.wA)(),o=[{label:"A to Z",value:"AtoZ"},{label:"Z to A",value:"ZtoA"},{label:"$10 or less",value:"LessThan10"},{label:"$10 or more",value:"GreaterThan10"},{label:"Popular",value:"Popular"},{label:"Not Popular",value:"NotPopular"},{label:"Show All",value:"ShowAll"}];return(0,v.jsxs)(d,{children:[(0,v.jsx)("p",{className:"filterText",children:"Filters"}),(0,v.jsxs)(m,{children:[(0,v.jsxs)(h,{onClick:()=>r(!e),children:[n?o.find((e=>e.value===n)).label:"A to Z",(0,v.jsx)("svg",{className:"filterIcon",width:"20",height:"20",children:(0,v.jsx)("use",{href:e?g.A+"#icon-arrow-up":g.A+"#icon-arrow-down"})})]}),e&&(0,v.jsx)(x,{children:o.map((n=>(0,v.jsx)(u,{onClick:()=>{return e=n.value,a((0,b.$u)(e)),void r(!1);var e},children:n.label},n.value)))})]})]})}},4728:(n,e,r)=>{r.d(e,{A:()=>w});var a,o=r(5043),i=r(7528),t=r(197);const s=t.Ay.div(a||(a=(0,i.A)(["\n  .nannyList {\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n    font-family: var(--font-family);\n    color: var(--primary-color-black);\n  }\n  .nannyListItem {\n    display: flex;\n    gap: 24px;\n    background: var(--primary-color-white);\n    border-radius: 24px;\n    padding: 36px;\n  }\n  .nannyImgWrapper {\n    align-self: flex-start;\n    flex-shrink: 0;\n    display: flex;\n    border: 2px solid rgba(16, 57, 49, 0.2);\n    border-radius: 30px;\n    padding: 12px;\n  }\n  .nannyImg {\n    overflow: hidden;\n    border-radius: 15px;\n    width: 96px;\n    height: 96px;\n  }\n  .nannyInfo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    margin-bottom: 8px;\n  }\n  .profession {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--secondary-color-grey);\n  }\n  .nannySectionWrapper {\n    display: flex;\n    gap: 32px;\n  }\n  .nannyLocation {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  .locationIco {\n    fill: transparent;\n    stroke: var(--primary-color-black);\n  }\n  .nannyRating {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  .ratingIco {\n  }\n  .nannyPrice {\n  }\n  .favoriteNannyBtn {\n    background-color: transparent;\n    .iconHeart {\n      fill: transparent;\n      stroke: var(--primary-color-black);\n      transition: all 0.3s;\n    }\n    .iconHeart:hover {\n      stroke: red;\n    }\n    .active {\n      fill: red;\n      stroke: red;\n      transition: all 0.3s;\n    }\n  }\n\n  .nannyStyledPrice {\n    color: var(--price-color-green);\n  }\n  .nannyName {\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 100%;\n    margin-bottom: 24px;\n  }\n  .nannyBio {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    margin-bottom: 24px;\n  }\n  .nannyBio p {\n    border-radius: 24px;\n    padding: 8px 16px;\n    background-color: var(--primary-color-grey);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--secondary-color-grey);\n  }\n  .nannyAge {\n  }\n  .nannyExperience {\n  }\n  .nannyKidsAge {\n  }\n  .nannyCharakters {\n  }\n  .nannyEducation {\n  }\n  .styledSpan {\n    color: var(--primary-color-black);\n    &.age {\n      text-decoration: underline;\n      text-decoration-skip-ink: none;\n    }\n  }\n  .nannyAbout {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 125%;\n    color: rgba(17, 16, 28, 0.5);\n    margin-bottom: 14px;\n  }\n  .readMoreBtn {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    text-decoration: underline;\n    text-decoration-skip-ink: none;\n    color: var(--primary-color-black);\n    background-color: transparent;\n  }\n  .nannyCommentSection {\n  }\n  .reviewsList {\n    margin-bottom: 48px;\n  }\n  .rewiewsListItem {\n    margin-bottom: 25px;\n  }\n  .iconUser {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 100px;\n    width: 44px;\n    height: 44px;\n    background-color: rgba(16, 57, 49, 0.2);\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 100%;\n  }\n  .userWrapper {\n    display: flex;\n    gap: 12px;\n  }\n  .userName {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    margin-bottom: 18px;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 125%;\n  }\n  .userRating {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 14px;\n    line-height: 129%;\n  }\n  .commentText {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 125%;\n    color: rgba(17, 16, 28, 0.5);\n  }\n  .appointmentBtn {\n    font-family: var(--font-family);\n    border-radius: 30px;\n    padding: 14px 28px;\n    background-color: var(--primary-color-green);\n    color: var(--primary-color-white);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 125%;\n    letter-spacing: -0.01em;\n  }\n"])));var l,c,p=r(4872),d=r(6996),m=r(9456),h=r(1036),x=r(374),u=r(5374),g=r(3892),f=r(899);const y=t.Ay.div(l||(l=(0,i.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 3;\n  overflow-y: auto;\n"]))),b=t.Ay.form(c||(c=(0,i.A)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  box-sizing: border-box;\n  top: 50%;\n  left: 50%;\n  margin-top: 5vh;\n  transform: translate(-50%, -50%);\n  width: 566px;\n  padding: 64px;\n  border-radius: 30px;\n  background-color: var(--primary-color-white);\n  .formTitle {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 40px;\n    line-height: 120%;\n    letter-spacing: -0.02em;\n    color: var(--primary-color-black);\n    margin-bottom: 20px;\n  }\n  .formText {\n    font-family: var(--font-family);\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 125%;\n    color: rgba(17, 16, 28, 0.5);\n    margin-bottom: 40px;\n  }\n  .inputForm {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-bottom: 40px;\n  }\n  .inputWrapper {\n    &.time {\n      position: relative;\n    }\n    .timeBtn {\n      position: absolute;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 18px;\n      background-color: transparent;\n    }\n\n    .timeIcon {\n      stroke: var(--primary-color-black);\n      fill: transparent;\n    }\n  }\n  .appointmentInput {\n    border: 1px solid rgba(17, 16, 28, 0.1);\n    border-radius: 12px;\n    padding: 16px;\n    width: 100%;\n    box-sizing: border-box;\n    outline: none;\n  }\n  .signAuth.pass {\n    position: relative;\n  }\n\n  .appointmentModalBtn {\n    border-radius: 30px;\n    padding: 16px;\n    align-items: center;\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 125%;\n    letter-spacing: -0.01em;\n    color: var(--primary-color-white);\n    background-color: var(--primary-color-green);\n  }\n  .icon-wrapper {\n    position: absolute;\n    right: 18px;\n    top: 16px;\n    background-color: transparent;\n  }\n  .icon-eye {\n    fill: transparent;\n    stroke: var(--primary-color-black);\n  }\n  .closeBtn {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    background-color: transparent;\n  }\n  .closeBtnImage {\n    stroke: var(--primary-color-black);\n    transition: all 0.3s;\n    &:hover {\n      stroke: red;\n    }\n  }\n  .commentInput {\n    border: 1px solid rgba(17, 16, 28, 0.1);\n    border-radius: 12px;\n    padding: 16px 18px;\n    resize: none;\n    width: 100%;\n    height: 116px;\n    box-sizing: border-box;\n    font-family: var(--font-family);\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 125%;\n    color: var(--primary-color-black);\n    outline: none;\n  }\n  .wrapper {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .nannyInfoModal {\n    display: flex;\n    gap: 14px;\n    margin-bottom: 40px;\n    box-sizing: border-box;\n  }\n\n  .nannyImg {\n    border-radius: 15px;\n    width: 44px;\n    height: 44px;\n  }\n\n  .textWrapper {\n    font-family: var(--font-family);\n    font-weight: 500;\n  }\n\n  .nannyTextModal {\n    font-size: 12px;\n    line-height: 133%;\n    color: rgba(17, 16, 28, 0.5);\n    margin-bottom: 4px;\n  }\n\n  .nannyNameModal {\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--primary-color-black);\n  }\n"])));var v=r(5748),j=r(579);const N=n=>{let{nanny:e,onClose:r}=n;(0,o.useEffect)((()=>{const n=n=>"Escape"===n.key&&r();return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[r]);const a=f.Ik({address:f.Yj().required("Address is required"),phone:f.Yj().matches(/^\+380\d{9}$/,"Phone number is invalid").required("Phone is required"),age:f.ai().required("Age is required"),email:f.Yj().required("Email is required").email("Invalid email address"),time:f.Yj().required("Time is required"),parentsName:f.Yj().required("Name is required"),comment:f.Yj()}),i=(0,g.Wx)({initialValues:{address:"",phone:"+380",age:"",time:"",email:"",parentsName:"",comment:""},onSubmit:async()=>{h.oR.success("Thank you! Have a nice day!"),i.resetForm(),r()},validationSchema:a});return(0,j.jsx)(y,{onClick:n=>{n.currentTarget===n.target&&r()},children:(0,j.jsxs)(b,{onSubmit:i.handleSubmit,children:[(0,j.jsx)("h3",{className:"formTitle",children:"Make an appointment with a babysitter"}),(0,j.jsx)("p",{className:"formText",children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),(0,j.jsxs)("div",{className:"nannyInfoModal",children:[(0,j.jsx)("img",{className:"nannyImg",src:e.avatar_url,alt:"nanny_photo"}),(0,j.jsxs)("div",{className:"textWrapper",children:[(0,j.jsx)("p",{className:"nannyTextModal",children:"Your nanny"}),(0,j.jsx)("p",{className:"nannyNameModal",children:e.name})]})]}),(0,j.jsxs)("div",{className:"inputForm",children:[(0,j.jsxs)("div",{className:"wrapper",children:[(0,j.jsxs)("div",{className:"inputWrapper",children:[(0,j.jsx)("div",{className:"signAuth",style:{borderColor:i.errors.address&&i.touched.address?"#ef5050":"#9ebbff",color:"#ef5050"},children:(0,j.jsx)("input",{className:"appointmentInput",type:"text",placeholder:"Address",name:"address",value:i.values.address,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.name&&i.touched.name?"#ef5050":"#103931"}})}),(0,j.jsx)("span",{children:i.errors.address&&i.touched.address&&i.errors.address})]}),(0,j.jsxs)("div",{className:"inputWrapper",children:[(0,j.jsx)("div",{className:"signAuth",style:{borderColor:i.errors.phone&&i.touched.phone?"#ef5050":"#9ebbff",color:"#ef5050"},children:(0,j.jsx)("input",{className:"appointmentInput",type:"tel",name:"phone",value:i.values.phone,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.phone&&i.touched.phone?"#ef5050":"#103931"}})}),(0,j.jsx)("span",{children:i.errors.phone&&i.touched.phone&&i.errors.phone})]}),(0,j.jsxs)("div",{className:"inputWrapper",children:[(0,j.jsx)("div",{className:"signAuth pass",style:{borderColor:i.errors.age&&i.touched.age?"#ef5050":"#103931",color:"#ef5050"},children:(0,j.jsx)("input",{className:"appointmentInput",placeholder:"Age",name:"age",value:i.values.age,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.age&&i.touched.age?"#ef5050":"#103931"}})}),(0,j.jsx)("span",{children:i.errors.age&&i.touched.age&&i.errors.age})]}),(0,j.jsxs)("div",{className:"inputWrapper time",children:[(0,j.jsxs)("div",{className:"signAuth pass",style:{borderColor:i.errors.time&&i.touched.time?"#ef5050":"#103931",color:"#ef5050"},children:[(0,j.jsx)("input",{className:"appointmentInput",placeholder:"00:00",name:"time",value:i.values.time,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.time&&i.touched.time?"#ef5050":"#103931"}}),(0,j.jsx)("div",{className:"timeBtn",children:(0,j.jsx)(v.A,{selectedTime:i.values.time,onChange:n=>{i.setFieldValue("time",n)}})})]}),(0,j.jsx)("span",{children:i.errors.time&&i.touched.time&&i.errors.time})]})]}),(0,j.jsxs)("div",{className:"inputWrapper",children:[(0,j.jsx)("div",{className:"signAuth",style:{borderColor:i.errors.email&&i.touched.email?"#ef5050":"#9ebbff",color:"#ef5050"},children:(0,j.jsx)("input",{className:"appointmentInput",type:"email",placeholder:"E-mail",name:"email",value:i.values.email,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.email&&i.touched.email?"#ef5050":"#103931"}})}),(0,j.jsx)("span",{children:i.errors.email&&i.touched.email&&i.errors.email})]}),(0,j.jsxs)("div",{className:"inputWrapper",children:[(0,j.jsx)("div",{className:"signAuth pass",style:{borderColor:i.errors.parentsName&&i.touched.parentsName?"#ef5050":"#103931",color:"#ef5050"},children:(0,j.jsx)("input",{className:"appointmentInput",placeholder:"Father's or mother's name",name:"parentsName",value:i.values.parentsName,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.parentsName&&i.touched.parentsName?"#ef5050":"#103931"}})}),(0,j.jsx)("span",{children:i.errors.parentsName&&i.touched.parentsName&&i.errors.parentsName})]}),(0,j.jsxs)("div",{className:"inputWrapper",children:[(0,j.jsx)("div",{className:"signAuth pass",style:{borderColor:i.errors.comment&&i.touched.comment?"#ef5050":"#103931",color:"#ef5050"},children:(0,j.jsx)("textarea",{className:"commentInput",placeholder:"Comment",name:"comment",value:i.values.comment,onChange:i.handleChange,onBlur:i.handleBlur,style:{color:i.errors.comment&&i.touched.comment?"#ef5050":"#103931"}})}),(0,j.jsx)("span",{children:i.errors.comment&&i.touched.comment&&i.errors.comment})]})]}),(0,j.jsx)("button",{type:"submit",className:"appointmentModalBtn",children:"Send"}),(0,j.jsx)("button",{className:"closeBtn",onClick:r,children:(0,j.jsx)("svg",{className:"closeBtnImage",width:"32",height:"32",children:(0,j.jsx)("use",{href:p.A+"#icon-close"})})})]})})},w=n=>{let{nannies:e,appointmentModal:r,handleOpenAppointmentModal:a,handleCloseAppointmentModal:i}=n;const[t,l]=(0,o.useState)(null),c=(0,m.d4)(x.Un),g=(0,m.d4)(d.Ah),f=(0,m.d4)(x.Vf),y=(0,m.wA)(),b=((n,e)=>{if(!n)return null;switch(e){case"AtoZ":return n.slice().sort(((n,e)=>n.name.localeCompare(e.name)));case"ZtoA":return n.slice().sort(((n,e)=>e.name.localeCompare(n.name)));case"LessThan10":return n.slice().filter((n=>n.price_per_hour<=10)).sort(((n,e)=>e.price_per_hour-n.price_per_hour));case"GreaterThan10":return n.slice().filter((n=>n.price_per_hour>10)).sort(((n,e)=>n.price_per_hour-e.price_per_hour));case"Popular":return n.slice().sort(((n,e)=>e.rating-n.rating));case"NotPopular":return n.slice().sort(((n,e)=>n.rating-e.rating));default:return n}})(e,c),v=n=>{const e=new Date(n),r=new Date,a=new Date(r-e);return Math.abs(a.getUTCFullYear()-1970)};return(0,j.jsx)(s,{children:(0,j.jsx)("ul",{className:"nannyList",children:null!==b&&b.map((n=>(0,j.jsxs)("li",{className:"nannyListItem",children:[(0,j.jsx)("div",{className:"nannyImgWrapper",children:(0,j.jsx)("img",{className:"nannyImg",src:n.avatar_url,alt:""})}),(0,j.jsxs)("div",{className:"wrapper",children:[(0,j.jsxs)("div",{className:"nannyInfo",children:[(0,j.jsx)("p",{className:"profession",children:"Nanny"}),(0,j.jsxs)("div",{className:"nannySectionWrapper",children:[(0,j.jsxs)("p",{className:"nannyLocation",children:[(0,j.jsx)("svg",{className:"locationIco",width:"16",height:"16",children:(0,j.jsx)("use",{href:p.A+"#icon-map"})}),n.location]}),(0,j.jsxs)("p",{className:"nannyRating",children:[(0,j.jsx)("svg",{className:"ratingIco",width:"16",height:"16",children:(0,j.jsx)("use",{href:p.A+"#icon-star"})})," ","Rating:\xa0",n.rating]}),(0,j.jsxs)("p",{className:"nannyPrice",children:["Price/1 hour:\xa0",(0,j.jsx)("span",{className:"nannyStyledPrice",children:"".concat(n.price_per_hour,"$")})]}),(0,j.jsx)("button",{className:"favoriteNannyBtn",onClick:()=>{(n=>{if(!g)return h.oR.error("You must be authorized");f.some((e=>e.id===n.id))?y((0,u.bc)(n)):y((0,u.B8)(n))})(n)},children:(0,j.jsx)("svg",{className:f.some((e=>e.id===n.id))?"active":"iconHeart",width:"26",height:"26",children:(0,j.jsx)("use",{href:p.A+"#icon-heart"})})})]})]}),(0,j.jsx)("p",{className:"nannyName",children:n.name}),(0,j.jsxs)("div",{className:"nannyBio",children:[(0,j.jsxs)("p",{className:"nannyAge",children:["Age:\xa0",(0,j.jsx)("span",{className:"styledSpan age",children:v(n.birthday)})]}),(0,j.jsxs)("p",{className:"nannyExperience",children:["Experience:\xa0",(0,j.jsx)("span",{className:"styledSpan",children:n.experience})]}),(0,j.jsxs)("p",{className:"nannyKidsAge",children:["Kids Age:\xa0",(0,j.jsx)("span",{className:"styledSpan",children:n.kids_age})]}),(0,j.jsxs)("p",{className:"nannyCharakters",children:["Charakters:\xa0",(0,j.jsx)("span",{className:"styledSpan",children:n.characters.map((n=>n.charAt(0).toUpperCase()+n.slice(1))).join(", ")})]}),(0,j.jsxs)("p",{className:"nannyEducation",children:["Education:\xa0",(0,j.jsx)("span",{className:"styledSpan",children:n.education})]})]}),(0,j.jsx)("p",{className:"nannyAbout",children:n.about}),t!==n.id&&(0,j.jsx)("button",{className:"readMoreBtn",onClick:()=>l(t===n.id?null:n.id),children:"Read More"}),r&&t===n.id&&(0,j.jsx)(N,{nanny:n,onClose:i}),t===n.id&&(0,j.jsxs)("div",{className:"nannyCommentSection",children:[(0,j.jsx)("ul",{className:"reviewsList",children:0!==n.reviews.length&&n.reviews.map(((n,e)=>{let{reviewer:r,rating:a,comment:o}=n;return(0,j.jsxs)("li",{className:"rewiewsListItem",children:[(0,j.jsxs)("div",{className:"userWrapper",children:[(0,j.jsx)("div",{className:"iconUser",children:(0,j.jsx)("p",{children:r[0]})}),(0,j.jsxs)("p",{className:"userName",children:[r,(0,j.jsxs)("span",{className:"userRating",children:[(0,j.jsx)("svg",{className:"",width:"16",height:"16",children:(0,j.jsx)("use",{href:p.A+"#icon-star"})}),a]})]})]}),(0,j.jsx)("p",{className:"commentText",children:o})]},e)}))}),(0,j.jsx)("button",{onClick:a,className:"appointmentBtn",children:"Make an appointment"})]})]})]},n.id)))})})}},5748:(n,e,r)=>{r.d(e,{A:()=>c});var a=r(5043),o=r(5865),i=r(9350),t=r(6910),s=r(4872),l=r(579);const c=n=>{let{selectedTime:e,onChange:r}=n;const[c,p]=(0,a.useState)(null),d=()=>{p(null)},m=Boolean(c),h=m?"time-popover":void 0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{"aria-describedby":h,variant:"contained",onClick:n=>{p(n.currentTarget)},style:{minWidth:"unset",padding:0,backgroundColor:"transparent",boxShadow:"none"},children:(0,l.jsx)("svg",{className:"timeIcon",width:"16",height:"16 ",children:(0,l.jsx)("use",{href:s.A+"#icon-clock"})})}),(0,l.jsxs)(t.Ay,{id:h,open:m,anchorEl:c,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"12px",backgroundColor:"#fff",boxShadow:"0 20px 69px 0 rgba(0, 0, 0, 0.07)",height:"180px",width:"151px",fontFamily:"var(--font-family)",fontWeight:500,fontSize:"16px",lineHeight:"150%",color:"#11101c",padding:"10px",overflow:"auto","&::-webkit-scrollbar":{width:"0px"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent "},"&::-webkit-scrollbar-thumb":{backgroundColor:"transparent "}}},children:[(0,l.jsx)(o.A,{variant:"body1",sx:{padding:"10px"},children:"Meeting time"}),(0,l.jsx)("div",{children:(()=>{const n=[];for(let e=0;e<24;e++)for(let r=0;r<60;r+=30){const a=e.toString().padStart(2,"0"),o=r.toString().padStart(2,"0");n.push("".concat(a,":").concat(o))}return n.map((n=>(0,l.jsx)(o.A,{sx:{cursor:"pointer",padding:1,fontFamily:"var(--font-family)",fontWeight:"500",fontSize:"16px",lineHeight:"125%",color:"rgba(17, 16, 28, 0.3)","&:hover":{color:"#000"}},onClick:()=>(n=>{r(n),d()})(n),children:n},n)))})()})]})]})}},374:(n,e,r)=>{r.d(e,{Un:()=>l,Vf:()=>s,Zk:()=>t,i4:()=>i});var a=r(192);const o=n=>n.nanny,i=(0,a.Mz)(o,(n=>n.nannies)),t=(0,a.Mz)(o,(n=>n.isLoading)),s=(0,a.Mz)(o,(n=>n.favorites)),l=(0,a.Mz)(o,(n=>n.selectedFilter))}}]);
//# sourceMappingURL=440.3e72ca6a.chunk.js.map