bus_number=prompt('enter bus number\nbus 101\nbus 202\nbus 303')
switch(bus_number){
    case 'bus 101':
        console.log('bus 101 is going to the airport')
        break
    case 'bus 202':
        console.log('bus 202 is going to the train station')
        break
    case 'bus 303':
        console.log('bus 303 is going to the shopping mall')
        break
    default:
        console.log('invalid choice pls try again')

}