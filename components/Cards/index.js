// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(data => {
    console.log(`Cards Data:`, data);

    const articles = data.data.articles;
    console.log(`Articles Data`, articles);

    const articleKeys = Object.keys(articles);
    
    articleKeys.forEach(key => {
        const keyValues = articles[key];
        console.log(keyValues);
        
        keyValues.forEach(value => {
            cardsContainer.appendChild(createCard(value));
        })
    })
})

.catch(err => {
    console.log(err);
})

const createCard = article => {
    //Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const byAuthor = document.createElement('span');

    //Element structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(byAuthor);

    //Add classes
    card.classList.add(`card`);
    headline.classList.add(`headline`);
    author.classList.add(`author`);
    imageContainer.classList.add(`img-container`);

    //Element content
    headline.textContent = `${article.headline}`;
    image.src = `${article.authorPhoto}`;
    byAuthor.textContent = `${article.authorName}`;


    return card;
}








