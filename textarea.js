//Config. Min/max rows configuration of Textarea.
const minRows = 3;
const maxRows = 5;

const initialHeight = minRows * 16;
const textarea = document.getElementById("ta");

//Initial state of Textarea. Empty/with placeholder. 
if (textarea.value === '') {
    textarea.setAttribute("style", "height:" + initialHeight + "px;overflow-y:hidden;");
}
else {
    textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
}

textarea.addEventListener("input", OnInput, false);

function OnInput(e) {
    textarea.style.height = 0;

    //Counting text rows inside Textarea.
    const taLineHeight = 16;
    const taHeight = textarea.scrollHeight;
    textarea.style.height = taHeight;
    const numberOfLines = Math.floor(taHeight / taLineHeight);

    //Conditional statements to set style attributes depending on current row count.
    if (numberOfLines < minRows) {
        textarea.setAttribute("style", "height:" + initialHeight + "px;overflow-y:hidden;");
    }
    else if (numberOfLines >= minRows && numberOfLines <= maxRows) {
        textarea.style.height = (textarea.scrollHeight) + "px";
        textarea.setAttribute("style", "height:" + textarea.scrollHeight + "px;overflow-y:hidden;");
    } else {
        textarea.setAttribute("style", "height:" + taLineHeight * maxRows + "px;overflow-y:scroll;");
    }
}

/*
Possible improvement. The moment scrollbar appears/disappears, there's minor change of Textarea height.
Not sure how precise the height should be but I see this as a possible improvement. Sadly, couldn't think of a way
to fix this at least for now.
*/

