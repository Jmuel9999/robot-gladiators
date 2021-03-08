var playerName = window.prompt("What is your robot's name?");//"what's the player name?" is the ANSWER for the variable
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(enemyName = "Roborto", enemyHealth = 50, enemyAttack = 12);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];//this is an array, in case we need 100s of other robots
var enemyHealth = 50;
var enemyAttack = 12;
//console.log(enemyNames);// array argument
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);
var fight = function(enemyName) {
for(var i = 0; i < enemyNames.length; i++) {//var i = 0; this is an EXPRESSION       i < 3; this is a CONDITION    TOGETHER they are a STATEMENT    I++ is equal to i = i + 1, INCREMENT EXPRESSION
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
}

    //fight function statements

    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");// string argument

    // Prompts players to choose between fighting or skipping the fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // If player choses to fight, then fight.
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");    
        }

        // Remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //if player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // Confim player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
            }
            // If no (flase), ask question again by running fight() again
            else {
                fight();
            }
         } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    };    
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
