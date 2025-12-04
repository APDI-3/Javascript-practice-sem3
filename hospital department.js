department=prompt('enter the department name\ncardiology\ndermatology\npediatrics')
switch(department){
    case 'cardiology':
        console.log('you should go to the cardiology department for heart issues.')
        break
    case 'dermatology':
        console.log('you should go to the dematology department for skin problems')
        break
    case 'pediatrics':
        console.log('you should go to the pediatrics department for children')
        break
    default:
        console.log('invalid choice pls try again')
}