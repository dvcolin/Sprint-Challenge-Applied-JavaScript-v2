// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {
    //Elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temperature = document.createElement('span');

    //Element structure
    header.appendChild(date);
    header.appendChild(headerTitle);
    header.appendChild(temperature);

    //Add classes
    header.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    //Element content
    date.textContent = `MARCH 28, 2019`;
    headerTitle.textContent = `Lambda Times`;
    temperature.textContent = `98°`;

    return header;
}



