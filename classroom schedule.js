classroom={
    math:' 8:00 AM',
    english:' 10:00 AM',
    science:' 1:00 PM'
}
for(let subject in classroom){
    console.log(subject + ':'+ classroom[subject]);
    
}