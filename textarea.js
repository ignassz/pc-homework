//Config. Min/max rows configuration of Textarea.
const minRows = 3;
const maxRows = 5;

const initialHeight = minRows * 16;
const textarea = document.getElementById("ta");

//Initial state of Textarea. Empty/with placeholder. 
if (ta.value == '') {
    ta.setAttribute("style", "height:" + initialHeight + "px;overflow-y:hidden;");
}
else {
    ta.setAttribute("style", "height:" + (ta.scrollHeight) + "px;overflow-y:hidden;");
}

ta.addEventListener("input", OnInput, false);

function OnInput(e) {
    this.style.height = 0;

    //Counting text rows inside Textarea.
    const taLineHeight = 16;
    const taHeight = ta.scrollHeight;
    ta.style.height = taHeight;
    const numberOfLines = Math.floor(taHeight / taLineHeight);

    //Conditional statements to set style attributes depending on current row count.
    if (numberOfLines < minRows) {
        ta.setAttribute("style", "height:" + initialHeight + "px;overflow-y:hidden;");
    }
    else if (numberOfLines >= minRows && numberOfLines <= maxRows) {
        this.style.height = (this.scrollHeight) + "px";
        ta.setAttribute("style", "height:" + ta.scrollHeight + "px;overflow-y:hidden;");
    } else {
        ta.setAttribute("style", "height:" + taLineHeight * maxRows + "px;overflow-y:scroll;");
    }
}

/*
Possible improvement. The moment scrollbar appears/disappears, there's minor change of Textarea height.
Not sure how precise the height should be but I see this as a possible improvement. Sadly, couldn't think of a way
to fix this at least for now.
*/

