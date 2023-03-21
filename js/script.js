document.addEventListener("DOMContentLoaded",()=>{
    //alert("hi");
    const allBorder=document.getElementById('all');
    const all_value=document.getElementById('all_value');
    const code=document.getElementById('code');
    const container=document.querySelector('.container');
    const btnCopy=document.querySelector('#btn_copy');
    var all_radius=10;

     var coding="";
    function allBorderUpdate(){
        all_radius=allBorder.value;
         all_value.innerText=all_radius+"px";
          coding =`
 Border-Radius:${all_radius}px;
          `;
          code.value=coding;
          container.style.cssText=coding;
    }

    

    allBorder.addEventListener("mousemove",allBorderUpdate);
    allBorder.addEventListener("change",allBorderUpdate);
    btnCopy.addEventListener('click',()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
          alert('code copied');
    });
  allBorderUpdate();  
});

