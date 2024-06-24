const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyles() {
            if(this.monsterHealth <= 0) {
                return {width: '0%'}
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            if (this.playerHealth <= 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        canUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0){
                this.winner = "Draw"
            }else if(value <= 0) {
                this.winner = "Monster"
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "Draw"
            } else if (value <= 0) {
                this.winner = "Player"
            }
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        },
        attackMonster() {
            this.currentRound++
            const attackVal = getRandomValue(5, 12)
            this.monsterHealth -= attackVal;
            this.addLogMessage("Player", "attack", attackVal);
            this.attackPlayer();
        },
        attackPlayer () {
            const attackVal = getRandomValue(8, 12)
            this.playerHealth -= attackVal;
            this.addLogMessage("Monster", "attack", attackVal);
        },
        specialAttackMonster() {
            this.currentRound++
            const attackVal = getRandomValue(10, 25);
            this.monsterHealth -= attackVal;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if(this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            }else {
                this.playerHealth += healValue
            }
            this.addLogMessage("Player", "heal", healValue);
            this.attackPlayer();
        },
        surrenderPlayer() {
            this.winner = "Monster"
        },
        addLogMessage(name, move, value) {
            this.logMessages.unshift({
                actionBy: name,
                actionType: move,
                actionValue: value
            })
        }
    }
})

app.mount("#game");