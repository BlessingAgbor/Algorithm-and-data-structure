// const collect = [];
//     const conn = 'abcdefghijklmnopqrstuvwxyz';
//     const split = conn.split("");

    const model = (text) => {
        // a=1, b=2, c=3
// the letters variable converts the string into an array
        let letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
        // the line 10 is replacing whatever we input i.e when calling the function, it should replace it with the letter's index, the lowercase automatically changes the input to lower case and then replaces it so as to not bring errors.  
        return text.replace(/[a-z]/gi, function(el){
            return letters.indexOf(el.toLowerCase()) +1;
        });
    }
    console.log(model("I love singing"))
    
      
        // console.log(i.target.value(i))
    
        
        //     for(let i=0; i<split.length ;i++){
        //         console.log(split[i -1], i)
        //     // console.log(.includes().indexOf(i))

        //         }
        
        // const act = (n) => {
        // console.log(act("rhtdad"))
        // }

        // function letterPosition() {
        //     var result = ''
        //     for(var i =0; i<)
        // }