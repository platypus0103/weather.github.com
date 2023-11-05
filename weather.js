const tempApp={
    temp:document.querySelector("#temp"),
    feels_like:document.querySelector("#feels_like"),
    temp_max:document.querySelector("#temp_max"),
    temp_min:document.querySelector("#temp_min"),
    choselocation:document.querySelector('#choselocation'),
    name:document.querySelector("#name"),
    img:document.querySelector("#img"),
    icon:"https://openweathermap.org/img/wn/",
    render(json){
        this.temp.textContent=json.main.temp;
        this.feels_like.textContent=json.main.feels_like;
        this.temp_max.textContent=json.main.temp_max;
        this.temp_min.textContent=json.main.temp_min;
        this.name.textContent=this.choselocation.options[this.choselocation.selectedIndex].text;
        this.img.setAttribute("src",this.icon +json.weather[0].icon+"@2x.png");
    },
    startGet(){
        let link=`https://api.openweathermap.org/data/2.5/weather?q=${this.choselocation.value},TW&units=metric&lang=zh_tw&appid=5576bab74c934c9abeb0dfc7453cf6fb`;
    
        fetch(link)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.render(json);
            })
    },
    init(){
        this.startGet();

        this.choselocation.addEventListener("change",()=>{
            this.startGet();
        });
    }
    

};
tempApp.init();

