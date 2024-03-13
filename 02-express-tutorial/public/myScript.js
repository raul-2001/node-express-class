// Get the button element

const h1 = document.getElementsByName('h1');
console.log(h1.item)

const button = document.getElementById('myButton');
console.log("start")
// Add a click event listener
button.addEventListener('click', () => {

    alert('Button clicked!');
    
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
        
        const url = "/api/v1/products";
        fetch(url)
        .then(response => {
            const myData = response.json();
            return new Promise((resolve, reject) => {
                resolve(myData);
            })
        })
        .then(myData => {
            const fetchedData = document.getElementById("fetchedData");
            const dataList = fetchedData.querySelector("ul");

            for (let i=0; i<myData.length; i++) {

                const data = document.createElement("li");
                const h2 = document.createElement("h2");
                const img = document.createElement("img");
                const price = document.createElement("h3");
                const descr = document.createElement("p");


                h2.innerText = myData[i].name;
                img.src = myData[i].image;
                price.innerText = myData[i].price;
                descr.innerText = myData[i].desc;

                data.appendChild(h2);
                data.appendChild(img);
                data.appendChild(price);
                data.appendChild(descr);
                dataList.appendChild(data);

            }
        })
    });
});