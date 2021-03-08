var playerName = window.prompt("What is your robot's name?");
var playerHealth = 70;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];//this is an array, in case we need 100s of other robots
var enemyHealth = 20;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is still alive
    while(enemyHealth > 0 && playerHealth > 0) {
    //fight function statements
        // Prompts players to choose between fighting or skipping the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confim player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // If yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log(" playerMoney ", playerMoney);
                break; // stops the fighting after "skipping"
            }
        }    
        // Remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.max(0, enemyHealth - playerAttack);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            
            // award player money for winning
            playerMoney = playerMoney + 20;

            break;
          } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");    
        }
        // Remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = Math.max(0, playerHealth - enemyAttack);
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // Check player's health.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break; // this exits current loop
        }   else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }             
};
//function to start a new game
var startGame = function() { 
    // reset player stats
    playerHealth = 70;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        //debugger;
        //if a player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs a 1 to be added to it
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = Math.floor(Math.random() * 21) + 40;// anywhere from 0 to 20 (because of round down "floor" PLUS 40hp)
            fight(pickedEnemyName);
            // if the player is still alive AND we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        }
    }
    // after the loops ends, player is either out of health or enemies to fight, so run the endGame function
    endGame (); 
};
// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
    window.alert("The game has now ended. Let's see how you did!")
    }
    // ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            //restart the game
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }  
};  
   
// Shop details
var shop = function() {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Woud you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney + playerMoney - 7;
            }    
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }    
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")

            // call shop() again to force the player to pick a valid option
            shop();
            break;
    }
};

startGame();