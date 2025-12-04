day=prompt('enter one of these days :\nmonday\nwednesday\nfriday')
switch(day){
    case 'monday':
        console.log('monday is a math club')
        break
    case 'wednesday':
        console.log('wednesday is science lab')
        break
    case 'friday':
        console.log('friday is sports day')
        break
    default:
        console.log('invalid choice pls try again')
}