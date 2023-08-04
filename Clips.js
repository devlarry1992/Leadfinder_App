let myLead =[]
const delBtn = document.getElementById('del-btn')
const tabBtn = document.getElementById('tab-btn')
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const unOrdered = document.getElementById('unorder')
let validDiv = document.getElementById('valid')
const localRender =JSON.parse( localStorage.getItem("Leads"))

if(localRender){
    myLead = localRender
    render(myLead)
}

function render(arg) {
    let listItems = ""
    for (let i = 0; i < arg.length; i++) {
        listItems += `
        <li>
            <a target = '_blank' href ="${arg[i]}">
                   ${arg[i]} 
            </a>
        </li>
        `
    }
    unOrdered.innerHTML = listItems
    inputEl.value = ""
}

inputBtn.addEventListener("click", function () {
    let x = inputEl.value
    myLead.push(x)
    render(myLead)
    localStorage.setItem("Leads" , JSON.stringify(myLead))
    
})

delBtn.addEventListener("click", function () {
    localStorage.clear()
    myLead = []
    render(myLead)
    
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("Leads" , JSON.stringify(myLead))
        render(myLead)
        
    })

    
    
})