var scenetrue=document.querySelector("#scenetrue"),scene=document.querySelector("#scene");scenetrue.addEventListener("change",function(){(scene=document.querySelector("#scene")).style.display="flex"});var player=document.querySelector("#player"),playeronline1=document.querySelector("#playeronline1"),playeronline2=document.querySelector("#playeronline2"),abcls=0,abclsss=document.querySelector("#abclsss"),abccs32=0,abccs232=0,socket=io(),form=document.querySelector("form"),asa=0,abc=0,btncolor=document.querySelector("#btncolor"),btnck=document.querySelector("#btnck"),input=document.querySelector("#message"),text=0,posit=0,posit2=0,abccs=0,abccs2=0,abccs3=0,abxx=0;function ab12(){btncolor=document.querySelector("#btncolor"),abc="abc12",btncolor.style.backgroundColor="red"}function ab24(){btncolor=document.querySelector("#btncolor"),abc="abc24",btncolor.style.backgroundColor="blue"}function btncktrue(){(btnck=document.querySelector("#btnck")).checked=!0,1==btnck.checked&&starrt(),input=document.querySelector("#message"),posit=player.getAttribute("position"),posit2=posit.x+" "+posit.y+" "+posit.z,input.value=posit2}function starrt(){input=document.querySelector("#message"),text=input.value,"abc12"==abc&&(abc="a1b2c"),"abc24"==abc&&(abc="a2b4c"),text=abc+text,socket.emit("message",text,function(){}),input.value="",socket.on("message",function(e){if(e){var c=document.querySelector("section"),t=document.createElement("abc");if(t.innerText=e,c.appendChild(t),"a1b2c"==abc){playeronline1=document.querySelector("#playeronline1"),abcls=document.querySelectorAll("abc"),abccs=abcls.length;let e=(abccs2=abcls[abccs-1].textContent)[0]+abccs2[1]+abccs2[2]+abccs2[3]+abccs2[4];"a1b2c"==e||"a2b4c"==e&&(abccs3=abccs2.replace("a2b4c",""),function(){let e=document.createAttribute("position");e.value=abccs3,playeronline1.setAttributeNode(e),abclsss=document.querySelector("#abclsss")}())}if("a2b4c"==abc){playeronline1=document.querySelector("#playeronline2"),abcls=document.querySelectorAll("abc"),abccs=abcls.length;let e=(abccs2=abcls[abccs-1].textContent)[0]+abccs2[1]+abccs2[2]+abccs2[3]+abccs2[4];"a1b2c"==e&&(abccs3=abccs2.replace("a1b2c",""),function(){let e=document.createAttribute("position");e.value=abccs3,playeronline2.setAttributeNode(e),abclsss=document.querySelector("#abclsss")}())}}})}setInterval(()=>{btncktrue()},100),setInterval(()=>{(abcls=document.querySelectorAll("abc")).forEach(e=>e.remove())},15);