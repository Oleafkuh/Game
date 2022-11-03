// void add to punch %
// if punch % is < threshold = gameover
// if userinpt = nesw  --> htmlpage
//

let punch = 0; 

console.log(window);

function changePageW()
{
    window.location.replace('./pages/westRockyCave.html')
}
function changePageS()
{
    window.location.replace('./pages/southSeaWitch.html')
}
function changePageE()
{
    window.location.replace('./pages/eastCoral.html')
}
function changePageN()
{
    window.location.replace('./pages/northOpeanSea.html')
}
function changePageHome()
{
    window.location.replace('../index.html')
}




function addPercentage(percent)
{
    punch += percent; 
}

function correctAnswer()
{
    let d = document.getElementById("Correct");
    d.style.display = "block"; 
}


function unBlur()
{
    let r = document.getElementsByClassName("btn");
    console.log(r);
    for (i = 0; i < r.length; i++){
        console.log(r[i].style.filter)
    }
    // r.style.filter = "0px";  
    
}



/*const textElement = document.getElementById('text')
const optionButtonElement = document.getElementById('option-buttons')


function showTextNode(textNodeIndex)
{
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innertext = textNode.text
    while(optionButtonElement.firstChild)
    {
        optionButtonElement.removeChild(optionButtonElement.firstChild)
    }

    textNode.options.forEach(option =>
        {
            if(showOption(option))
            {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                optionButtonElement.appendChild(button)
            }
        })
}

function selectOption(option)
{
    const nextTextNodeId = option.nextText
}

const textNodes = 
[
    {
        id: 1,
        text: 'you see a fisherman',
        options:
        [
            {
                text: 'go to him',
                nextText: 2
            },
            {
                text: 'swim away',
                nextText: 2
            }

        ]
    },
    {
        id: 2,
        text: 'ehwbhbsda',
        options: 
        [
            {
                text: 'trade',
            },
            {
                text: 'run away',
            }
        ]

        

    }
]

*/















/*function changePage()
{
    console.log('change');
    window.location.replace('./pages/westRockyCave.html')
}*/


//console.log(window);





/*function myFunction()
{
    console.log(";-;");
}

function myParam(name)
{
    console.log("name--> " + name);
}


//myFunction();

let a = myFunction;
a();

myParam('bob');

//setTimeout (function, milliseconds)
setTimeout(function Hey()
{
    console.log('hey');
}, 4000)
*/


