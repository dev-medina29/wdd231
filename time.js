const D1=document.querySelector('#time1');
const D2=document.querySelector('#time2');
const daysInMs=1000*60*60*24; 
const btn=document.querySelector('#calB');
const result=document.querySelector('#result');
const calculateDays=(date1,date2)=>{
    const diffInMs=Math.abs(date2-date1);
    return Math.round(diffInMs/daysInMs);
}
btn.addEventListener('click',()=>{
    const date1=new Date(D1.value);
    const date2=new Date(D2.value);
    const days=calculateDays(date1,date2);
    result.textContent=`There are ${days} days between the selected dates.`;
});
