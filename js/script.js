 function GetSelectedText () {
    var selText = "";
    if (window.getSelection) { 
        if (document.activeElement && 
                (document.activeElement.tagName.toLowerCase () == "textarea" || 
                 document.activeElement.tagName.toLowerCase () == "input")) 
        {
            var text = document.activeElement.value;
            selText  = text.substring (document.activeElement.selectionStart, 
                                      document.activeElement.selectionEnd);
        }
        else {
            var selRange 	= window.getSelection ();
            selText 		= selRange.toString ();
        }
    } 
    else {
        if (document.selection.createRange) {       // Internet Explorer
            var range 	= document.selection.createRange ();
            selText 	= range.text;
        }
    }
    return selText;
}

function OnSelectInput (input) {
    selText 						= GetSelectedText ();
    var text 						= document.activeElement.value;
    var textTab 					= text.split(selText);
    document.activeElement.value 	= textTab[0]+selText.toUpperCase()+textTab[1];
}