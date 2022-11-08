// void add to punch %
// if punch % is < threshold = gameover
// if userinpt = nesw  --> htmlpage
//



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
function changePageBoss()
{
    window.location.replace('./pages/bossFight.html')
}





function addPower()
{
    punch = punch + 25;  
}

function displayPower()
{
    console.log(punch); 
}

function correctAnswer()
{
    let d = document.getElementById("Correct");
    d.style.display = "block"; 
}
function cA2()
{
    let d = document.getElementById("Correct2");
    d.style.display = "block"; 
}


function wrongAnswer()
{
    let w = document.getElementById("Wrong");
    w.style.display = "block";
}
function wA2()
{
    let w = document.getElementById("Wrong2");
    w.style.display = "block";
}

function setPunch()
{
    let punch = 0;
    sessionStorage.setItem('punch', JSON.stringify(punch));

}

function displayAlert()
{
   punch = Number(sessionStorage.getItem('punch'));
   punch = punch + 25;
   sessionStorage.setItem('punch', punch)
   console.log(punch);
   alert("25 % power was added!");
    // r.style.filter = "0px";  
    
}

function unBlur(index)
{
    let r = document.getElementsByClassName('btn');
    r[index].style.filter = "blur(0px)";

}
function reBlur(index)
{
    let r = document.getElementsByClassName('btn');
    r[index].style.filter = "blur(10px)";
    
}

function isOverPercentage()
{
    var isOver = false;
    let g = Number(sessionStorage.getItem('punch'));
    console.log(g);
    if(g == 75)
    {
        isOver = true; 
    }
return isOver;
}

function finalC()
{
    if(isOverPercentage())
    {
        let d = document.getElementById("FinalCorrect");
        d.style.display = "block";
    }
    else
    {
        let d = document.getElementById("Wrong2");
        d.style.display = "block";
    }
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


