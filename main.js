let header=document.querySelector(".hedear")
let a="true"
function menu(){
    if(a==="true"){
    
    header.style.transform="translateX(0) "
    a="false"
    }else if(a==="false"){
        header.style.transform="translateX(-100%)"
        a="true"
    }
    
    // header.classList.remove("hedear")
}

let myName=document.querySelector(".home .info h1 span")
window.onload=function(){
    let a=["E","b","r","a","h","i","m"," ","E","l","b","a","r","o","d","y"]
    
        setTimeout(()=>{    
            myName.innerHTML=a[0]
            setTimeout(()=>{    
                myName.innerHTML=(myName.textContent+a[1])
                setTimeout(()=>{    
                    myName.innerHTML=(myName.textContent+a[2])
                    setTimeout(()=>{    
                        myName.innerHTML=(myName.textContent+a[3])
                        setTimeout(()=>{    
                            myName.innerHTML=(myName.textContent+a[4])
                            setTimeout(()=>{    
                                myName.innerHTML=(myName.textContent+a[5])
                                setTimeout(()=>{    
                                    myName.innerHTML=(myName.textContent+a[6])
                                    setTimeout(()=>{    
                                        myName.innerHTML=(myName.textContent+a[7])
                                        setTimeout(()=>{    
                                            myName.innerHTML=(myName.textContent+a[8])
                                            setTimeout(()=>{    
                                                myName.innerHTML=(myName.textContent+a[9])
                                                setTimeout(()=>{    
                                                    myName.innerHTML=(myName.textContent+a[10])
                                                    setTimeout(()=>{    
                                                        myName.innerHTML=(myName.textContent+a[11])
                                                        setTimeout(()=>{    
                                                            myName.innerHTML=(myName.textContent+a[12])
                                                            setTimeout(()=>{    
                                                                myName.innerHTML=(myName.textContent+a[13])
                                                                setTimeout(()=>{    
                                                                    myName.innerHTML=(myName.textContent+a[14])
                                                                    setTimeout(()=>{    
                                                                        myName.innerHTML=(myName.textContent+a[15])
                                                                },100)
                                                            },100)
                                                        },100)
                                                    },100)
                                                },100)
                                            },100)
                                        },100)
                                    },100)
                                },100)
                            },100)
                        },100)
                    },100)
                },100)
            },100)
        },100)
    },100)
    

    
    }




//     for(let i=0;i<a.length;i++){
//         setInterval(()=>{
            
            
//             myName.innerHTML=a[i]
// },100)
// } 


// about score


let score=document.querySelectorAll(".about .skilles-content .score-bar span")
let mySkilles=document.querySelector(".about .skilles-content")

window.onscroll=function(){
    if(window.scrollY>=mySkilles.offsetTop - 400){
        score.forEach((e)=>{
            e.style.width=e.dataset.width
            
        })
    }
}