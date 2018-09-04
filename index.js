const coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
    },

    toString: function () {
        if (this.state === 0) {
            return "heads"
        } else {
            return "tails"
        }
        
    
    },
    toHTML: function () {
        let image = document.createElement('img');
        if(this.state === 0) {
            coinImage = "heads.jpg";
        }else {
            coinImage = "tails.jpg";
        }
        image.setAttribute("src", coinImage);
        let coin = document.createElement("div");
        coin.appendChild(image);
        return image;;
    }
    
};


for (let i = 0; i < 20; i++) {
    coin.flip()
    let result = coin.toString();
    const resultText = document.createTextNode(result);
    const newP = document.createElement("p");
    const destination = document.getElementById("textDestination");
    newP.appendChild(resultText);
    destination.appendChild(newP);
}

for (let i = 0; i < 20; i++) {
    coin.flip()
    let resultPicture = coin.toHTML();
    // const resultText = document.createTextNode(result)
    const newP = document.createElement("p");
    const destination = document.getElementById("coin");
    newP.appendChild(resultPicture);;
    destination.appendChild(newP);
}