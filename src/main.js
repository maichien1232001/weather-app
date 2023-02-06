function main(){

const root = document.getElementById("root")
    const header = document.createElement("header")
    const divHeader = document.createElement("div")
    const title = document.createElement("h1")
    const content = document.createElement("div")
    const search = document.createElement("div")
    const input = document.createElement("div")
    const inputText = document.createElement("input")
    const btn = document.createElement("button")
    const contentMain =document.createElement("div")
    const city = document.createElement("h2")
    const temprature = document.createElement("h2")
    const tempratureFeel = document.createElement("h2")
    const humidity = document.createElement("h2")
    const wind = document.createElement("h2")


    root.appendChild(header)
    header.appendChild(divHeader)
    divHeader.classList.add("header")
    divHeader.appendChild(title)
    title.innerHTML = "Weather App"

    root.appendChild(content)
    content.classList.add("content")
    content.appendChild(search)
    search.classList.add("search")
    search.appendChild(input)
    input.classList.add("input")
    input.appendChild(inputText)
    inputText.classList.add("input-text")
    inputText.type = "text"
    inputText.placeholder = "Nhập địa chỉ cần tìm"
    input.appendChild(btn)
    btn.classList.add("btn-search")
    btn.innerHTML = "Search"

    content.appendChild(contentMain)
    contentMain.classList.add("content-main")
    contentMain.appendChild(city)
    city.classList.add("city")
    contentMain.appendChild(temprature)
    temprature.classList.add("temprature")
    contentMain.appendChild(tempratureFeel)
    tempratureFeel.classList.add("temprature-feel")
    contentMain.appendChild(humidity)
    humidity.classList.add("humidity")
    contentMain.appendChild(wind)
    wind.classList.add("wind")

}

export default main