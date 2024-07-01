function carSpeed(speed){
    const speedLimit=70;
    if (speed<=70){
        console.log('OK')
        }else{
             const demerit=5;   
             const demeritPoints=((speed-speedLimit)/demerit)
             console.log(demeritPoints+'points deducted')
        }
}
carSpeed(60)