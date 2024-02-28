const today = new Date();
const tenDays = 10;



const countDays = () => {
    today.setDate(today.getDate() + tenDays)
    console.log(`${tenDays} days plus today will be ${today}`)
}

countDays();