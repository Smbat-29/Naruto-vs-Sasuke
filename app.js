// const leftProcentHealth = document.getElementsByClassName('procentLeft');
// const leftNarutoImg = document.getElementById('narutoImg');
// const leftAttackBut = document.getElementById('leftAtack');
// const leftSuperAttackBut = document.getElementById('leftSup');
// const leftHealthBut = document.getElementById('leftHealth');


// const rightProcentHealth = document.getElementsByClassName('procentRight');
// const rightSasukeImg = document.getElementById('sasukeImg');
// const rightAttackBut = document.getElementById('rightAtack');
// const rightSuperAttackBut = document.getElementById('rightSup');
// const rightHealthBut = document.getElementById('rightHealth');


// const winnerName = document.getElementById('winnerName');
// const playAgainBut = document.getElementById('playAgain');
// const changePerson = document.getElementById('change');

// let healthPlayers = {
//     left: 100,
//     right: 100
// }
// let countOfSuperAttak = {
//     left: 3,
//     right: 3
// }
// let countForHealth = {
//     left: 0,
//     right: 0
// }
// leftSuperAttackBut.innerHTML = `Расенган ${countOfSuperAttak.left}/3`;
// rightSuperAttackBut.innerHTML = `Чидори Нагаши ${countOfSuperAttak.right}/3`;

// let miniHealth = (health, healthBar, limit = 20) => {
//     healthBar.style.width = `${health}%`
//     if (health < limit) {
//         healthBar.style.backgroundColor = 'red'
//     }
// }

// let restFullHealth = (health, healthBar) => {
//     health = 100
//     healthBar.style.width = `${health}%`
//     healthBar.style.backgroundColor = 'rgb(233, 166, 43)'
// }

// let attack = (attacker, victim, damageRange, superAttack = false, restoreHealth) => {
//     const [min, max] = damageRange
//     const damage = Math.round(Math.random() * (max - min + 1) + min)
//     if (healthPlayers[attacker.player] - damage > 0) {
//         healthPlayers[attacker.player] -= damage
//     } else {
//         healthPlayers[attacker.player] = 0
//         alertForWinner.innerText = `Win ${attacker.player === 'left' ? 'Uzumaki Naruto' : 'Uchiha Sasuke'}`
//         document.getElementsByClassName('forWinner').style.display = 'flex'
//     }

//     victim.person.style.filter = 'brightness(1) contrast(1.3) saturate(2) sepia(1) hue-rotate(-55deg)'
//     setTimeout(() => {
//         victim.person.style.filter = 'none';
//     }, 200);

//     miniHealth(healthPlayers[attacker.player], victim.healthBar)

//     if(healthPlayers[attacker.player] < 20) {
//         if(countForHealth[attacker.player] < 1) {
//             restoreHealth.style.backgroundColor = 'rgba(213, 140, 6, 0.774)'
//             restoreHealth.addEventListener('click',function restore() {
//                 restFullHealth(healthPlayers[attacker.player], victim.healthBar)        
//                 countForHealth[attacker.player]++
//                 restoreHealth.style.backgroundColor = 'rgba(211, 20, 20, 0.7)'
//                 healthPlayers[attacker.player] = 100
//                 restoreHealth.removeEventListener('click', restore)
//             })
//         } 
//     }

//     if(superAttack) {
//         countOfSuperAttak[attacker.player]--
//         attacker.button.innerHTML = `Super Attack ${countOfSuperAttak[attacker.player]}/3`;
//         if(countOfSuperAttak[attacker.player] === 0) {
//             attacker.button.style.backgroundColor = 'rgb(222, 25, 25)'
//             attacker.button.removeEventListener('click', play)        
//         }
//     }
// }   

// let play = (event) => {
//     let target = event.target
//     let player 
//     if(target === leftAttackBut || target === leftSuperAttackBut) {
//         attack(
//             {player: 'left', button: leftSuperAttackBut},
//             {person: rightSasukeImg, healthBar: rightProcentHealth},
//             target === leftSuperAttackBut ? [15, 20] : [5, 10],
//             target === leftSuperAttackBut,
//             rightHealthBut
//         )
//         player = 2
//     } else if(target === rightAttackBut || target === rightSuperAttackBut) {
//         attack(
//             {player: 'right', button: rightSuperAttackBut},
//             {person: leftNarutoImg, healthBar: leftProcentHealth},
//             target === rightSuperAttackBut ? [15, 20] : [5, 10],
//             target === rightSuperAttackBut,
//             leftHealthBut
//         )
//         player = 1
//     } 
//     if(player === 1) {
//         rightAttackBut.setAttribute('disabled', '')
//         rightAttackBut.style.backgroundColor = 'rgb(222, 25, 25)'
//         rightSuperAttackBut.setAttribute('disabled', '')
//         rightSuperAttackBut.style.backgroundColor = 'rgb(222, 25, 25)'
//         leftAttackBut.removeAttribute('disabled', '')
//         leftAttackBut.style.backgroundColor = 'rgba(213, 140, 6, 0.774)'
//         if(countOfSuperAttak.left > 0) {
//             leftSuperAttackBut.removeAttribute('disabled', '')
//             leftSuperAttackBut.style.backgroundColor = 'rgba(213, 140, 6, 0.774)'
//         }
//     } else if (player === 2){
//         leftAttackBut.setAttribute('disabled', '')
//         leftAttackBut.style.backgroundColor = 'rgb(222, 25, 25)'
//         leftSuperAttackBut.setAttribute('disabled', '')
//         leftSuperAttackBut.style.backgroundColor = 'rgb(222, 25, 25)'
//         rightAttackBut.removeAttribute('disabled', '')
//         rightAttackBut.style.backgroundColor = 'rgba(213, 140, 6, 0.774)'
//         if(countOfSuperAttak.right > 0) {
//             rightSuperAttackBut.removeAttribute('disabled', '')
//             rightSuperAttackBut.style.backgroundColor = 'rgba(213, 140, 6, 0.774)'
//         }
//     }
// }
// leftAttackBut.addEventListener('click', play)
// leftSuperAttackBut.addEventListener('click', play)
// rightAttackBut.addEventListener('click', play)
// rightSuperAttackBut.addEventListener('click', play)

// let playAgain = () => {
//     window.location.reload()
// }
// playAgainBut.addEventListener('click', playAgain)


const leftProcentHealth = document.querySelector('.procentLeft');
const leftNarutoImg = document.getElementById('narutoImg');
const leftAttackBut = document.getElementById('leftAtack');
const leftSuperAttackBut = document.getElementById('leftSup');
const leftHealthBut = document.getElementById('leftHealth');

const rightProcentHealth = document.querySelector('.procentRight');
const rightSasukeImg = document.getElementById('sasukeImg');
const rightAttackBut = document.getElementById('rightAtack');
const rightSuperAttackBut = document.getElementById('rightSup');
const rightHealthBut = document.getElementById('rightHealth');

const winnerName = document.getElementById('winnerName');
const playAgainBut = document.getElementById('playAgain');

let healthPlayers = {
    left: 100,
    right: 100
};
let countOfSuperAttack = {
    left: 3,
    right: 3
};
let countForHealth = {
    left: 0,
    right: 0
};

leftSuperAttackBut.innerHTML = `Расенган ${countOfSuperAttack.left}/3`;
rightSuperAttackBut.innerHTML = `Чидори Нагаши ${countOfSuperAttack.right}/3`;

const updateHealthBar = (health, healthBar, limit = 20) => {
    healthBar.style.width = `${health}%`;
    healthBar.style.background = health < limit ? 'red' : 'linear-gradient(to right, #FF4500, #FFD700)';
};

const attack = (attacker, victim, damageRange, isSuperAttack, restoreHealth) => {
    const [min, max] = damageRange;
    const damage = Math.floor(Math.random() * (max - min + 1)) + min;
    healthPlayers[victim.player] -= damage;

    if (healthPlayers[victim.player] <= 0) {
        healthPlayers[victim.player] = 0;
        winnerName.innerText = `Winner: ${attacker.player === 'left' ? 'Uzumaki Naruto' : 'Uchiha Sasuke'}`;
        document.querySelector('.forWinner').style.display = 'flex';
        let divForPicture = document.querySelector('.divForPicture');
        if (attacker.player === 'left') {
            divForPicture.style.backgroundImage = "url('./Images/NarutoWin.png')";
        } else {
            divForPicture.style.backgroundImage = "url('./Images/Sasuke2.png')";
        }
    }

    victim.person.style.filter = 'brightness(1) contrast(1.3) saturate(2) sepia(1) hue-rotate(-55deg)';
    setTimeout(() => {
        victim.person.style.filter = 'none';
    }, 200);

    updateHealthBar(healthPlayers[victim.player], victim.healthBar);

    if (isSuperAttack) {
        countOfSuperAttack[attacker.player]--;
        attacker.button.innerHTML = `Super Attack ${countOfSuperAttack[attacker.player]}/3`;
        if (countOfSuperAttack[attacker.player] === 0) {
            attacker.button.style.background = "linear-gradient(45deg,rgb(100, 0, 0),rgba(255, 0, 0, 0.82))" ;
            attacker.button.disabled = true;
        }
    }

    if (healthPlayers[attacker.player] < 20 && countForHealth[attacker.player] < 1) {
        restoreHealth.style.backgroundColor = 'linear-gradient(45deg, #FF8C00, #FFD700)';
        restoreHealth.addEventListener('click', function restore() {
            healthPlayers[attacker.player] = 100;
            updateHealthBar(healthPlayers[attacker.player], attacker.healthBar);
            countForHealth[attacker.player]++;
            restoreHealth.style.background = 'linear-gradient(45deg,rgb(100, 0, 0),rgba(255, 0, 0, 0.82))';
            restoreHealth.removeEventListener('click', restore);
        });
    }
};

const toggleButtons = (currentPlayer) => {
    const isLeftTurn = currentPlayer === 'left';
    const disableButtons = (attackButton, superAttackButton) => {
        attackButton.disabled = true;
        superAttackButton.disabled = true;
        attackButton.style.background = 'linear-gradient(45deg,rgb(100, 0, 0),rgba(255, 0, 0, 0.82))';
        superAttackButton.style.background = 'linear-gradient(45deg,rgb(100, 0, 0),rgba(255, 0, 0, 0.82))';
    };

    const enableButtons = (attackButton, superAttackButton, superAttackCount) => {
        attackButton.disabled = false;
        attackButton.style.backgroundColor = 'linear-gradient(45deg, #FF8C00, #FFD700)';
        if (superAttackCount > 0) {
            superAttackButton.disabled = false;
            superAttackButton.style.backgroundColor = 'linear-gradient(45deg, #FF8C00, #FFD700)';
        }
    };

    if (isLeftTurn) {
        disableButtons(rightAttackBut, rightSuperAttackBut);
        enableButtons(leftAttackBut, leftSuperAttackBut, countOfSuperAttack.left);
    } else {
        disableButtons(leftAttackBut, leftSuperAttackBut);
        enableButtons(rightAttackBut, rightSuperAttackBut, countOfSuperAttack.right);
    }
};

const play = (event) => {
    const target = event.target;
    if (target === leftAttackBut || target === leftSuperAttackBut) {
        attack(
            { player: 'left', button: leftSuperAttackBut, healthBar: leftProcentHealth },
            { player: 'right', person: rightSasukeImg, healthBar: rightProcentHealth },
            target === leftSuperAttackBut ? [15, 20] : [5, 10],
            target === leftSuperAttackBut,
            leftHealthBut
        );
        toggleButtons('right');
    } else if (target === rightAttackBut || target === rightSuperAttackBut) {
        attack(
            { player: 'right', button: rightSuperAttackBut, healthBar: rightProcentHealth },
            { player: 'left', person: leftNarutoImg, healthBar: leftProcentHealth },
            target === rightSuperAttackBut ? [15, 20] : [5, 10],
            target === rightSuperAttackBut,
            rightHealthBut
        );
        toggleButtons('left');
    }
};

[leftAttackBut, leftSuperAttackBut, rightAttackBut, rightSuperAttackBut].forEach((button) => {
    button.addEventListener('click', play);
});

playAgainBut.addEventListener('click', () => window.location.reload());









