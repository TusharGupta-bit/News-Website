console.log("Js File")

// 776e7c0bbe9d4bfd9b4491bf5ced4de0

let newsAccordian = document.getElementById('accordianNews');

//Initiate an XHR Object
const xhr = new XMLHttpRequest();

// Open The Object
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=8e9ee116e25a05d4b48a5e1ee78e4b5c`, true);
// xhr.getResponseHeader('Content-Type', 'application/json');

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newsHTML = "";
    articles.forEach(function (element, index){
      let news = `<div class="card">
                  <div class="card-header" id="heading${index}">
                  <h2 class="mb-0">
                  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" ia-controls="collapse${index}">
                  <b>Breaking News ${index+1}:</b> ${element["title"]}
                  </button>
                  </h2>
                  </div>
                  <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordianNews">
                  <div class="card-body">
                  ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read More Click Here</a>
                  </div>
                  </div>
                  </div>`

      newsHTML += news;
    });
    newsAccordian.innerHTML= newsHTML;
  }
  else {
    console.log("Some error occured");
  }
}
xhr.send();



