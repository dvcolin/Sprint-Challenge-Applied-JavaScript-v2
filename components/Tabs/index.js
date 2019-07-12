// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsContainer = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    console.log(data);
    const topics = data.data.topics;
    console.log(topics);

    topics.forEach(topic => {
        topicsContainer.appendChild(createTab(topic));
    })
})

.catch(err => {
    console.log(err);
})

const createTab = topic => {
    //Elements
    const tab = document.createElement('div');

    //Add classes
    tab.classList.add('tab');

    //Element content
    tab.textContent = `${topic}`;

    return tab;
}