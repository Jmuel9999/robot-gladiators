var fight = function(enemy) {
    //repeat and execute as long as the enemy-robot is still alive
    while(enemy.health > 0 && playerInfo.health > 0) {
    //fight function statements
        // Prompts players to choose between fighting or skipping the fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confim player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // If yes (true), leave the fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerMoney for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log(" playerInfo.money ", playerInfo.money);
                break; // stops the fighting after "skipping"
            }
        }    
        //generate random damage value based on a player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);//this is giving the 2 options of randomness

        enemy.health = Math.max(0, enemy.health - damage);//returns the number with the highest value
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            break;
          } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");    
        }
        // Remove player's health by subtracting the amount set in the enemy.attack variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);//the 0 is for no negative numbers if damage taken exceeds health left
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        // Check player's health.
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break; // this exits current loop
        }   else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }             
};
//function to start a new game
var startGame = function() { 
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {//i stands for "incrementor" j is used too
        //if a player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs a 1 to be added to it
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            var pickedEnemyObj = enemyInfo[i];
            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);// anywhere from 0 to 20 (because of round down "floor" PLUS 40hp)
            fight(pickedEnemyObj);
            // if the player is still alive AND we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " .");
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
    // use SWITCH to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
           playerInfo.refillHealth();
           break;
        case "UPGRADE":
        case "upgrade":
           playerInfo.upgradeAttack(); 
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
//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);//parameters representing lower and upper randomNumber limits

    return value;
}

var playerInfo = {//player info object
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        console.log(this);
        this.health = 100;//"this" IS the OBJECT (var playerInfo)
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack 6 for 7 dollars.")
            this.health += 20; // equal to this.health=this.health+20
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradAttack: function() {
      if (this.money >=7) {
        window.alert("Upgrading playr's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
      else {
          window.alert("You don't have enough money!");
      }
    },
};
var enemyInfo = [ // this is still an array, but with numerical indexes.
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

startGame();