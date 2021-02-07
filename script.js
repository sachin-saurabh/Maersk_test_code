let array = [1,2,3,4,5,6,7,8,9];  // array of input
let sortBtn = document.getElementById('sortBtn');
let suffleBtn = document.getElementById('suffleBtn');

/**
 * 
 * @param {*} arr : takes in input of array and generates grid with style
 */
let cardGenerator = (arr) => {
    let gridContainer = document.getElementById('g-container');
    gridContainer.innerHTML = '';
    arr.forEach((ele, i) =>{
        let numChild = document.createElement('div');
        numChild.id = 'num_'+i;
        numChild.className = 'cell'; 
        let clientWidth = document.documentElement.clientWidth;
        let color = '';
         switch(ele.toString()) {
            case '1':
            case '8': color = '#6F98A8';
            break;
            case '3':case '5':case '9': color = '#2F454E';
            break;
            case '2': case '4':color = '#2B8EAD';
            break;
            case '6': case '7': color = '#BFBFBF';
            break;
        }
        if (clientWidth < 376) {
            numChild.style.backgroundColor = '#EFEFEF';
            numChild.style.borderLeft = '5px solid '+ color;
        } else {
            numChild.style.backgroundColor = color; 
            numChild.style.borderLeft = '0px';
        }
        numChild.innerHTML = arr[i];
        gridContainer.appendChild(numChild);

    });
}

window.onload = () => {
    let titleMsg = 'Shuffle and Sort';
    let creator = ' by Sachin Saurabh';
    document.getElementById('header').innerHTML = titleMsg;
    document.getElementById('footer').innerHTML = titleMsg + creator;
    cardGenerator(array);
};

window.addEventListener('resize', () => {
    cardGenerator(array);
});

sortBtn.addEventListener('click', () => {
    array = array.sort();
    cardGenerator(array);
});

suffleBtn.addEventListener('click', () => {
    array = randomiser(array);
    cardGenerator(array);
});

/**
 * 
 * @param {*} arr  on click of shuffle button takes array and shuffles the index of the array data.
 */
let randomiser = (arr) => {
    const newArr = [];
    for ( let i = arr.length-1; i>=0; i--) {
        let index = Math.floor(Math.random()*(i));
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
   return arr;
}
