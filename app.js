
async function fetchActivity () {
    const res = await fetch
     ('http://www.boredapi.com/api/activity?participants');
 
     const data = await res.json ();
 
     console.log(data);
 
 }
 
 fetchActivity();

