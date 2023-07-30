document.getElementById('result').addEventListener('click',calculate);

function calculate(){
    let y1=document.getElementById('year').value
    let m1=document.getElementById('month').value
    let d1=document.getElementById('date').value
    //current date
    let y2=new Date().getFullYear();
    let m2=new Date().getMonth()+1;
    let d2=new Date().getDate();

    let month=[31,28,31,30,31,30,31,31,30,31,30,31]
        if(d1>d2){
            d2=d2+month[m2-1];
            m2=m2-1;
        }
        if(m1>m2){
            m2=m2+12;
            y2=y2-1;
        }
        var d=d2-d1;
        var m=m2-m1;
        var y=y2-y1;
        age.innerHTML=" Your age is "+ y + " Years " + m + " Months " + d + " Days " ;
}
