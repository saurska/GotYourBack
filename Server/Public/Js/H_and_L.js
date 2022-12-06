function CharCount() {

    var Counter = document.getElementById('textarea').value.length;
    document.getElementById('textcount').innerHTML = Counter + "/1000(Max Characters)"

}

var CreateNewGig = document.getElementById('CreateNewGig');

// Gig wala content
function GigContentDisplay() {
    var GigSection = document.getElementById("CreateNewGigFirstSec");
    GigSection.style.display = "block";
    HideFirstSec();
    // GigSection.style.position="static";
}
function HideGigContent() {
    var GigSection = document.getElementById("CreateNewGigFirstSec");
    GigSection.style.display = "none";
    DisplayFirstSec();
}

// Request wala content

function HideRequestContent() {
    var GigSection = document.getElementById("CreateNewRequestFirstSec");
    GigSection.style.display = "none";
    DisplayFirstSec();
}
function RequestContentDisplay() {
    var RequestSection = document.getElementById("CreateNewRequestFirstSec");
    RequestSection.style.display = "block";
    HideFirstSec();

    // GigSection.style.position="static";
}

{

    var FirstSecDisplay = document.getElementById("FirstSecDisplay");
    function HideFirstSec() {
        FirstSecDisplay.style.display = "none";
    }

    function DisplayFirstSec() {
        FirstSecDisplay.style.display = "block";
    }

}

// {

//     var FirstSecDisplayGig = document.getElementById("FirstSecDisplayGig");
//     function HideFirstSecGig() {
//         FirstSecDisplayGig.style.display = "none";
//     }

//     function DisplayFirstSecGig() {
//         FirstSecDisplayGig.style.display = "block";
//     }

// }