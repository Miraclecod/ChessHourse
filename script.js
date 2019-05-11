

new Vue({
    el: '#app',
    data: {
        location: null
    },
    methods: {
        possibleMoves() {
            let x = +this.location[0];
            let y = +this.location[1];
            let all = [];
            for(let i = 1; i < 9; i++){
                for(let j = 1; j < 9; j++){
                    if(((Math.abs(i - y)== 1) && (Math.abs(j - x) == 2)) || ((Math.abs(i - y)== 2) && (Math.abs(j - x) == 1))){
                        all.push( j + '' + i);
                    }
                }
            }
            alert('Возможные варианты хода: ' + all);
        }
    }
});