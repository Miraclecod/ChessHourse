

new Vue({
    el: '#app',
    data: {
        location: null
    },
    methods: {
        possibleMoves() {
            let x = this.location[0].toUpperCase();
            switch(x){
              case 'A': x = 1;break;
              case 'B': x = 2;break;
              case 'C': x = 3;break;
              case 'D': x = 4;break;
              case 'E': x = 5;break;
              case 'F': x = 6;break;
              case 'G': x = 7;break;
              case 'H': x = 8;break;
            }
            function replaceNumber(num){
              switch(num){
              case 1: return 'A';
              case 2: return 'B';
              case 3: return 'C';
              case 4: return 'D';
              case 5: return 'E';
              case 6: return 'F';
              case 7: return 'G';
              case 8: return 'H';
            }
            }
            let y = +this.location[1];
            let all = [];
            for(let i = 1; i < 9; i++){
                for(let j = 1; j < 9; j++){
                    if(((Math.abs(i - y)== 1) && (Math.abs(j - x) == 2)) || ((Math.abs(i - y)== 2) && (Math.abs(j - x) == 1))){
                        all.push( replaceNumber(j) + '' + i);
                    }
                }
            }
            alert('Возможные варианты хода: ' + all);
        }
    }
});
