fetch("./books.json")
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });


  function appendData(data) {
    const header = document.createElement("header");
    const logo = document.createElement("div");
    const heading = document.createElement("h1");
    const imgwrapper =document.createElement("div")
    const container = document.createElement("div");
    const icons = document.createElement("div");
    const link =document.createElement("a");
    const github =document.createElement("i");
    const facebook =document.createElement("i");
    const linkedin =document.createElement("i");
    const bkicon =document.createElement("i");
    const link1 =document.createElement("a");
    const link2 =document.createElement("a");
    const link3 =document.createElement("a");
    const bascket = document.createElement("div");
    const productList =document.createElement("div")
    const totalPrice =document.createElement("div")
    

    
    let cost = 0;
    const confirmOrder =document.createElement("button");
    const popUpMessage =document.createElement("div");
    let closeB = document.createElement("button")
    closeB.className ="closeb"
        closeB.innerHTML = "Close";
        closeB.onclick = () =>{
          popUpMessage.innerHTML="";
          popUpMessage.remove();
          closeB.remove();
        }
    popUpMessage.className = "popup-message"
    confirmOrder.onclick = () =>{
      location.href ="./form.html"
    }
    confirmOrder.innerHTML ="Confirm Order"
    const basckicn =document.createElement("i")
    const bascketWrapp =document.createElement("div")
    const title1 =document.createElement("h3")
    header.className ="header"
    
    link.className= "link";
    link1.classname ='link1';
    link2.classname ='link2';
    link3.classname ='link3';
    link1.href= "https://github.com/Naka1910"
    link1.target ="_blank"
    link2.href ="https://www.facebook.com/naka.jiqia.5"
    link2.target = "_blank"
    link3.href ="https://www.linkedin.com/in/naka-jikia-a40b201b6/"
    link3.target ="_blank"
    link.href ="#cont";
    basckicn.className ="fas fa-cart-plus"
    totalPrice.className ="total-price"
    totalPrice.innerHTML =`Total: ${cost}`
    bascketWrapp.className ="bascket-wrapp"
    productList.className ="product-list"
    confirmOrder.className = "confirm-order"
    logo.className = "logo";
    github.className ="fab fa-github icon";
    facebook.className ="fab fa-facebook icon";
    linkedin.className ="fab fa-linkedin icon";
    bkicon.className = "fab fas fa-book-open book";
    icons.className ="icons";
    container.className = "container";
    container.id ="cont";
    heading.setAttribute("id", "heading");
    heading.innerHTML = "Best books for the soul...";
    logo.innerHTML = "Naka's Book Shop";
    bascket.className ="bascket";
    title1.className ="title1"
    title1.innerHTML ="Bag for Books"
    
    
    let fragment = new DocumentFragment();
    
    header.append(logo)
    logo.append(bkicon)
    header.append(link)
    link.append(logo)
    imgwrapper.append(icons)
    icons.append(link1)
    icons.append(link2)
    icons.append(link3)
    icons.append(github)
    icons.append(facebook)
    icons.append(linkedin)
    link1.append(github)
    link2.append(facebook)
    link3.append(linkedin)
    header.append(heading);
    imgwrapper.append(bascket)
    bascketWrapp.append(title1)
    bascketWrapp.append(totalPrice)
    bascketWrapp.append(basckicn)
    bascket.append(bascketWrapp)
    bascket.append(productList)
    imgwrapper.append(heading);
    imgwrapper.className ='imgwrapper';
    header.append(imgwrapper)
    fragment.append(header);
   
    document.body.className ="body"
   
    for (var i = 0; i < data.length; i++) {
      const wrapper = document.createElement("div");
      const info = document.createElement("div");
      const card = document.createElement("div");
  
      const image = document.createElement("img");
      const title = document.createElement("h4");
      const author = document.createElement("h5");
      const price = document.createElement("span");
      const description = document.createElement("p")
      description.innerHTML = "Book description: " + data[i].description
      description.className ="description";
      image.className ="image"
  
      wrapper.className = "wrapper";
      info.className = "info";
      card.className = "card";
      card.setAttribute("id",i);
      info.setAttribute("id","info-"+i);
      price.className = "price";
  
      title.className = "title";
      author.className = "author";
      title.innerHTML = data[i].title;
      author.innerHTML = "Author: " + data[i].author;
      price.innerHTML = "price: " + data[i].price;
      image.src = data[i].imageLink;
      card.appendChild(image);
      info.appendChild(title);
      info.appendChild(author);
      info.appendChild(price);
  
      card.appendChild(info);

      const popUp =document.createElement('div');
      popUp.setAttribute("id","popup-"+i);
      const popUpPrice =document.createElement("span");
      popUpPrice.innerHTML = data[i].price + ' $';
      const popUpTitle =document.createElement("h4")
      popUpTitle.innerHTML = data[i].title;
      const popUpAuthor =document.createElement("h5")
      popUpAuthor.innerHTML = data[i].author;
      const button = document.createElement('button')
      const buttonShow = document.createElement('button')
      button.className= "button"
      buttonShow.className= "button-show"
      popUp.className = "hide";
      popUp.append(popUpPrice);
      popUp.append(popUpTitle)
      popUp.append(popUpAuthor)
      // add to bascket functionality.
      button.addEventListener("click", addItem)
      function addItem(){
        // alert(price.innerText)
        const allInfo = document.createElement("div")
        const infoContainer = document.createElement("div")
        const buttonRemove = document.createElement("button")
        buttonRemove.innerHTML ="X"
        allInfo.className = "all-info"
        infoContainer.className ="info-container"
        buttonRemove.className ="button_remove"
        if(productList.innerText.includes(price.innerText)){

        }else{
        allInfo.append(title)
        allInfo.append(author);
        allInfo.append(price);
        infoContainer.append(allInfo);
        infoContainer.append(buttonRemove);
        productList.append(infoContainer);
        let priceHolder = price.innerText.replace("price: ", "");
        cost+=parseInt(priceHolder);
        totalPrice.innerText = `Total: ${cost}`
        if(cost > 0){
          productList.append(confirmOrder)
        }
        buttonRemove.onclick = () => {
          cost-=parseInt(priceHolder)
          totalPrice.innerText = `Total: ${cost}`
          infoContainer.remove();
          confirmOrder.remove();
        }
      }



      }

      card.append(button)
      card.append(buttonShow)
      button.innerHTML = 'Add to cart'
      buttonShow.innerHTML = 'Show more'
      buttonShow.onclick = () =>{
        if(popUpMessage.innerText.length === 0 ){
          popUpMessage.append(description);
          popUpMessage.append(closeB);
          wrapper.append(popUpMessage);
          popUpMessage.style.visibility ="visible";

        } 

      
    }


      wrapper.appendChild(card);
      wrapper.append(popUp);
      card.onmouseover = showPopup;
      card.onmouseout = hidePopup;
      container.appendChild(wrapper);
      fragment.append(container);

      document.body.append(fragment);

  }

}
function showPopup(ev){
  const cardId = ev.target.closest('.card').id;
  const info = document.getElementById('info-'+cardId);
  const popup = document.getElementById('popup-'+cardId);
  info.classList.add("hide");
  popup.classList.remove("hide");
  popup.classList.add("show");
}

function hidePopup(ev){
  const cardId = ev.target.closest('.card').id;
  const info = document.getElementById('info-'+cardId);
  const popup = document.getElementById('popup-'+cardId);
  info.classList.remove("hide");
  popup.classList.remove("show");
  popup.classList.add("hide");
}



