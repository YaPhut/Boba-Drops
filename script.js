let count = 0;

function giveBoba() {
    count++;
    let alertmessage = "GIVE BOBA PLS ";
    for (let rep = 0; rep < count; rep++) alertmessage = alertmessage.concat("🧋");
    if (count < 6) alert(alertmessage);
    if (count == 1) {
        alert("Also do not click the button 5 times");
    }
    if (count == 8) {
        document.getElementById("boba").src = "https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif";
        document.getElementById("BOO").innerHTML = "gottem";
    } else if (count > 8) {
        
    } else if (count >= 5) {
        // boo
        let BOOSTRING = "BOO";
        for (let idx = 5; idx < count; idx++) BOOSTRING = BOOSTRING.concat("O");
        let left = 10 - count;
        document.getElementById("BOO").innerHTML = BOOSTRING.concat("! Don't click ", left.toString(), " more times");
    }
}