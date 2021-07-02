import React, {useEffect} from 'react'

function Slide__show() {
   
    let idx =2;
    useEffect(()=>{

        document.getElementById("img-1").style.display = "flex";
        setInterval(function(){
            
            switch(idx){
                case 1:{
                    document.getElementById("img-1").style.display = "flex";
                    document.getElementById("img-2").style.display = "None";
                    document.getElementById("img-3").style.display = "None";
                    idx=2;
                    break;
                }
                case 2:{
                    document.getElementById("img-1").style.display = "None";
                    document.getElementById("img-2").style.display = "flex";
                    document.getElementById("img-3").style.display = "None";
                    idx=3;
                    break;
                }
                case 3:{
                    document.getElementById("img-1").style.display = "None";
                    document.getElementById("img-2").style.display = "None";
                    document.getElementById("img-3").style.display = "flex";
                    idx=1;
                    break;
                }
            }
        } , 5000);

        

    },[])




    return (
        <>
        <span className="material-icons text-white z-50 absolute transform -translate-x-0  -translate-y-1/2 top-1/2 left-0 text-6xl pl-16">
                        arrow_back_ios
                </span>
                <span class="material-icons text-white z-50 absolute transform -translate-x-full  -translate-y-1/2 top-1/2 left-full text-6xl pr-16">
                        arrow_forward_ios
        </span>
            <div className="absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 z-50  flex w-auto">  
                <h1 className="text-white text-6xl font-bold" style={{fontFamily:"Festive" , letterSpacing:"8px"}}>Welcome to My Website</h1>
            </div>
            <div className=" bg-black h-screen ">
                <img id="img-1" className=" hidden bg-cover h-screen w-screen z-30  opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1625190273603-0f5814961433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                <img id="img-2" className=" hidden bg-cover h-screen w-screen z-20  opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1612831661881-dd08451593ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                <img id="img-3" className=" hidden bg-cover h-screen w-screen z-10  opacity-30 absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2 " src="https://images.unsplash.com/photo-1617540702506-89475a91c171?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" />
                
            </div>
        </>
    )
}

export default Slide__show;
