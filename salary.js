//calculating the paye//
function paye(basicSalary) {
    let paye;

    if (basicSalary <= 24000) {
        paye = basicSalary * 0.1;
    } else if (basicSalary >= 24001 && basicSalary <= 32333) {
        paye = basicSalary * 0.25;
    } else if (basicSalary >= 32334 && basicSalary <= 500000) {
        paye = basicSalary * 0.3;
    } else if (basicSalary >= 500001 && basicSalary <= 800000) {
        paye = basicSalary * 0.325;
    } else if (basicSalary > 800000) {
        paye = basicSalary * 0.35;
    }

    console.log(`paye = ${paye}`);

    //calculating nhif deductions//
    function nhif(grossPay){
        let nhif;
        if (grossPay<=5999){
            nhif=grossPay-150;
        }else if(grossPay>=6000 && grossPay<=7999){
            nhif=grossPay-300;
        }else if(grossPay>=8000 && grossPay<=11999){
            nhif=grossPay-400;
        }else if(grossPay>=12000 && grossPay<=14999){
            nhif=grossPay-500;
        }else if(grossPay>=15000 && grossPay<=19999){
            nhif=grossPay-600;
        }else if(grossPay>=20000 && grossPay<=24999){
            nhif=grossPay-750;
        }else if(grossPay>=25000 && grossPay<=29999){
            nhif=grossPay-850;
        }else if(grossPay>=30000 && grossPay<=34999){
            nhif=grossPay-900;
        }else if(grossPay>=35000 && grossPay<=39999){
            nhif=grossPay-950;
        }else if(grossPay>=40000 && grossPay<=44999){
            nhif=grossPay-1000;
        }else if(grossPay>=45000 && grossPay<=49999){
            nhif=grossPay-1100;
        }else if(grossPay>=50000 && grossPay<=59999){
            nhif=grossPay-1200;
        }else if(grossPay>=60000 && grossPay<=69999){
            nhif=grossPay-1300;
        }else if(grossPay>=70000 && grossPay<=79999){
            nhif=grossPay-1400;
        }else if(grossPay>=80000 && grossPay<=89999){
            nhif=grossPay-1500;
        }else if(grossPay>=90000 && grossPay<=99999){
            nhif=grossPay-1600;
        }else if(grossPay>100000){
            nhif=grosspay-1700
        }
        console.log(`nhif = ${nhif}`);

    }
nhif(5999);    
}

paye(24000);

