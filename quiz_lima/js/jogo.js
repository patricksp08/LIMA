var card = [
    document.getElementById("card1"), 
    document.getElementById("card2"), 
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5"),
    document.getElementById("card6"),
    document.getElementById("card7"),
    document.getElementById("card8"),
    document.getElementById("card9"),
    document.getElementById("card10"),
] 
function iniciaJogo(){
    
        for (let i = 0; i < deck.length; i++) {
    
            card[i].innerHTML =
            `<div id="questTitle"> 
                <strong><h2>${deck[i].titulo}</h2></strong>
            </div>
            <div id="questImg"> 
                <img src="${deck[i].imgSrc}" class="${deck[i].class}" alt="image"><br>
            </div>
            <div id="questAlt"> 
                <strong><label for="${deck[i].id}"><input type="radio" name="${deck[i].nameId}" id="${deck[i].id}">${deck[i].alternativa1}</label></strong><br>
                <strong><label for="${deck[i].id}"><input type="radio" name="${deck[i].nameId}" id="${deck[i].id}">${deck[i].alternativa2}</label></strong><br>
                <strong><label for="${deck[i].id}"><input type="radio" name="${deck[i].nameId}" id="${deck[i].id}">${deck[i].alternativa3}</label></strong><br>
                <span id="${deck[i].resposta}"></span>
            </div>`
        }
    }
    iniciaJogo()

        function refresh(){
        
            window.location.reload();
            window.scrollTo(0,0)
        }