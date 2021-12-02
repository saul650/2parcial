var solo3=0;
const createCardNode = ()=>{
    
    
        const carta = document.createElement("div")
        carta.className = "card"
        carta.id="card";

        const cardHeader = document.createElement("div")
        switch(solo3)
        {   
            case 1: {cardHeader.className = "card__header card-red"; break;}
            case 2: {cardHeader.className = "card__header card-purple"; break;} 
            case 3: {cardHeader.className = "card__header card-gray"; break;}
        }   
            const cardHeader_left = document.createElement("div")
            cardHeader_left.className = "card-header__left"
                const cardHeader_elipse = document.createElement("div")
                cardHeader_elipse.className = "elipse"
                    const elipseNumber = document.createTextNode('1')
                    cardHeader_elipse.appendChild(elipseNumber)
                const cardHeaderLeft_parrafo = document.createElement("p")
                    const leftTextParrafo = document.createTextNode('Agenda/topic')
                    cardHeaderLeft_parrafo.appendChild(leftTextParrafo)
            cardHeader_left.appendChild(cardHeader_elipse)
            cardHeader_left.appendChild(cardHeaderLeft_parrafo)

            const cardHeader_right = document.createElement("div")
            cardHeader_right.className = "card-header__right"
                const cardHeaderRight_parrafo = document.createElement("p")
                    const rightTextParrafo = document.createTextNode('SAAS-0000')
                    cardHeaderRight_parrafo.appendChild(rightTextParrafo) 
                const cardHeader_img = document.createElement("img")
                cardHeader_img.src = "./assets/img/Vector.svg"
                cardHeader_img.alt = ""
            cardHeader_right.appendChild(cardHeaderRight_parrafo)
            cardHeader_right.appendChild(cardHeader_img)
        cardHeader.appendChild(cardHeader_left)
        cardHeader.appendChild(cardHeader_right)
        
        const cardMain = document.createElement("div")
        cardMain.className = "card__main"
            const cardMain_parrafo = document.createElement("p")
            const mainTextParrafo = document.createTextNode('Description of what is done here')
            cardMain_parrafo.appendChild(mainTextParrafo) 
        cardMain.appendChild(cardMain_parrafo)

        const cardFooter = document.createElement("div")
        cardFooter.className = "card__footer"
            const cardFooter_update = document.createElement("p")
                const updateTextParrafo = document.createTextNode('Last Update')
                cardFooter_update.appendChild(updateTextParrafo) 
            const cardFooter_date = document.createElement("p")
                const dateTextParrafo = document.createTextNode('22/8/2021')
                cardFooter_date.appendChild(dateTextParrafo) 
        cardFooter.appendChild(cardFooter_update)
        cardFooter.appendChild(cardFooter_date)
                
        carta.appendChild(cardHeader)
        carta.appendChild(cardMain)
        carta.appendChild(cardFooter)
        return carta
}

const portaCartas = document.querySelector("#app")
const addCardButton = document.querySelector("#button")
const addCard=()=>{
    solo3=solo3+parseInt(1);
    if(solo3<=3)
    {
        portaCartas.appendChild(createCardNode())
    }
}

addCardButton.addEventListener('click', addCard)