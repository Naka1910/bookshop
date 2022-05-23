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
    const heading = document.createElement("h1");
    const container = document.createElement("div");
    const imgwrapper =document.createElement("div")
    container.className = "container";
    heading.setAttribute("id", "heading");
    heading.innerHTML = "Welcome to our cozy book shop";
    let fragment = new DocumentFragment();
    header.append(heading);
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
      const button1 = document.createElement('button')
      button.classBame= "button"
      button.classBame= "button1"
      popUp.className = "hide";
      popUp.append(popUpPrice)
      popUp.append(popUpTitle)
      popUp.append(popUpAuthor)
      popUp.append(button)
      popUp.append(button1)
      button.innerHTML = 'Add to cart'
      button1.innerHTML = 'Show more'

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
  var cardId = ev.target.closest('.card').id;
  var info = document.getElementById('info-'+cardId);
  var popup = document.getElementById('popup-'+cardId);
  info.classList.add("hide");
  popup.classList.remove("hide");
  popup.classList.add("show");
}

function hidePopup(ev){
  var cardId = ev.target.closest('.card').id;
  var info = document.getElementById('info-'+cardId);
  var popup = document.getElementById('popup-'+cardId);
  info.classList.remove("hide");
  popup.classList.remove("show");
  popup.classList.add("hide");
}



