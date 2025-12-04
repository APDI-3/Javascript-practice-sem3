Grades=[78,85,92,60,89]
total=Grades.reduce((sum,n) =>sum+n,0)
console.log(total)
avg=total/Grades.length
console.log(avg)