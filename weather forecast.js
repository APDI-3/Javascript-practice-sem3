weather=prompt('enter the weather condition\nsunny\nrainy\ncold')
switch(weather){
    case 'sunny':
        console.log('its sunny day pls wear sunglasses')
        break
    case 'rainy':
        console.log('its rainy day pls carry an umbrella')
        break
    case 'cold':
        console.log('its cold day pls wear a jacket')
        break
    default:
        console.log('invalid choice pls try again')
    
}