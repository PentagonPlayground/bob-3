import{T as B,j as p}from"./index-eb36a09c.js";import{r as D}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o=({children:r,className:_,onClick:b,href:c})=>{var l;const n=D.useContext(B),i=`${(l=n==null?void 0:n.Button)==null?void 0:l.wrapper} ${_||""}`;return c?p("a",{href:c,className:i,children:r}):p("button",{"data-testid":"button",className:i,onClick:b,children:r})};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The contents of the button, could be text or components",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional className used for themeing in the consuming application",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"URL to pass if this button needs to act as a link",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler if this button needs to act as a button",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const V={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{onClick:{control:!1}},parameters:{docs:{description:{component:"A simple button component that can exist as an Anchor or a Button."}}}},e={args:{children:"Click here"}},a={args:{...e.args,className:"w-[300px]"}},t={args:{...e.args,onClick:()=>alert("clicked!")}},s={args:{...e.args,href:"https://pentagonplay.co.uk"}};var u,d,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Click here'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    className: 'w-[300px]'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,A,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => alert('clicked!')
  }
}`,...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var N,x,y;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    href: 'https://pentagonplay.co.uk'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const w=["Default","WithAnAdditionalClassname","AsAButton","AsALink"];export{t as AsAButton,s as AsALink,e as Default,a as WithAnAdditionalClassname,w as __namedExportsOrder,V as default};
