    
// const activity = document.querySelector('#result');

// const fetchData = async (id) => {
//     const res = await fetch('https://www.boredapi.com/api/activity?participants=:participants');
//     console.log(fetch);

//     const result = await res.json();
//     renderData(result);

// };

// fetchData();
const activity = document.querySelector('#result')


async function fetchData () {
    const res = await fetch(`http://www.boredapi.com/api/`);
 
     const data = await res.json ();
     renderData(result);
 
     console.log(id);
 
 }
 
 fetchData();

//  function getActivity() {

//  }

 const renderData = data => {
     data.map(value =>{
         const li = document.createElement('li');
         li.innerHTML = `activity:${value.activity} participants:${value.participants}`;
         activity.appendChild(li);
         console.log(li);
     });
 };