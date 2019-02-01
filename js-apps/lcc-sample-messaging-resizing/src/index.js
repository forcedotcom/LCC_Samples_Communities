import LCC from 'lightning-container';

// Select the node that will be observed for mutations
var targetNode = document.getElementById('resizable');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: false, subtree: false };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }

    //Get the targets new size
    var h = mutationsList[0].target.clientHeight
    var w = mutationsList[0].target.clientWidth

    LCC.sendMessage([h, w]);
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Register for messages sent by hosting component
LCC.addMessageHandler(function(message) {
	//TODO, Handle size commands from the parent.
});

// Functions for example resizing.
function resize(height, width) {
    var targetNode = document.getElementById('resizable');
    targetNode.style.height = height + "px";
    targetNode.style.width = width + "px";
}

function resize1() {
    resize(200, 200);
}

function resize2() {
    resize(200, 1000);
}

function resize3() {
    resize(900 * Math.random() + 100, 900 * Math.random() + 100);
}

document.getElementById("sendBtn1").addEventListener("click", resize1);
document.getElementById("sendBtn2").addEventListener("click", resize2);
document.getElementById("sendBtn3").addEventListener("click", resize3);