var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];//this is an array, in case we need 100s of other robots
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is still alive
    while(enemyHealth > 0){
    //fight function statements

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
            // If no (false), ask question again by running fight() again
            else {
                fight();
            }
        }
    }           
};
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
} 

