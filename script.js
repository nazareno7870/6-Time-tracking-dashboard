const getData = async function(){
        const response = await fetch("data.json")
        const data = await response.json()
        return data
    }

const creatElements = (arr)=>{
    let item = 1
    arr.forEach(el => {
        const dashboard = document.getElementById('dashboard')

        const divBack = document.createElement('div')
        divBack.classList.add('back-item')

        const plantilla = `
        <div class="item item-${item}">
            
            <div >

              <div class="top-item">
                <h4>${el.title}</h4>
                <img src="./images/icon-ellipsis.svg" alt="Icon Menu">
              </div>

              <div class="bottom-item">

                <div class="daily">
                  <h1>${el.timeframes.daily.current}hrs</h1>
                  <p>Previous - ${el.timeframes.daily.previous}hrs</p>
                </div>

                <div class="weekly">
                  <h1>${el.timeframes.weekly.current}hrs</h1>
                  <p>Last Week - ${el.timeframes.weekly.previous}hrs</p>
                </div>

                <div class="monthly">
                  <h1>${el.timeframes.monthly.current}hrs</h1>
                  <p>Last Month - ${el.timeframes.monthly.previous}hrs</p>
                </div>

              </div>

            </div>

        </div>
        `
        divBack.innerHTML = plantilla
        
        dashboard.appendChild(divBack)

        item++
        
    });
}

const resetButtons = ()=>{
    const btnWeekly = document.getElementById('btn-weekly')
    btnWeekly.classList.remove('active-btn')

    const btnDaily = document.getElementById('btn-daily')
    btnDaily.classList.remove('active-btn')

    const btnMonthly = document.getElementById('btn-monthly')
    btnMonthly.classList.remove('active-btn')
}

const activeButton = (classlist)=>{
    const btnWeekly = document.getElementById(classlist)
    btnWeekly.classList.add('active-btn')
}

const hiddenDate = ()=>{

    const dailys = document.getElementsByClassName('daily')
    for(let day of dailys){
        day.style.display ='none'
    }

    const monthly = document.getElementsByClassName('monthly')
    for(let month of monthly){
        month.style.display ='none'
    }

    const weekly = document.getElementsByClassName('weekly')
    for(let week of weekly){
        week.style.display ='none'
    }
}

const filterWeekly = ()=>{

    resetButtons()
    
    activeButton('btn-weekly')

    hiddenDate()

    const weekly = document.getElementsByClassName('weekly')
    for(let week of weekly){
        week.style.display ='block'
    }
   
}

const filterDaily = ()=>{

    resetButtons()
    
    activeButton('btn-daily')

    hiddenDate()

    const daily = document.getElementsByClassName('daily')
    for(let day of daily){
        day.style.display ='block'
    }
   
}

const filterMonthly = ()=>{

    resetButtons()
    
    activeButton('btn-monthly')

    hiddenDate()

    const monthly = document.getElementsByClassName('monthly')
    for(let month of monthly){
        month.style.display ='block'
    }
   
}

document.addEventListener("DOMContentLoaded",async()=>{
    const data = await getData()

    creatElements(data)

    const weeklyBtn = document.getElementById('btn-weekly')
    weeklyBtn.addEventListener('click',filterWeekly)

    const dayBtn = document.getElementById('btn-daily')
    dayBtn.addEventListener('click',filterDaily)

    const monthBtn = document.getElementById('btn-monthly')
    monthBtn.addEventListener('click',filterMonthly)

})

