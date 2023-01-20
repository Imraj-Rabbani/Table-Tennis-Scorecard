const p1=document.querySelector('#p1btn')
const p2=document.querySelector('#p2btn')
const resetbtn=document.querySelector('#resetbtn')
const p1Display=document.querySelector('#p1score')
const p2Display=document.querySelector('#p2score')
const winningScoreSelect=document.querySelector('#num')



let winningScore=3
let p1Score=0
let p2Score=0
let isGameOver=false

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value)
    reset()
    
})

p1.addEventListener('click',() => {
    if (!isGameOver){
        if (p1Score !== winningScore-1){
            p1Score+=1
            p1Display.innerHTML=p1Score
        }else {
            p1Score+=1
            p1Display.innerHTML=p1Score
            isGameOver=true
            p1Display.classList.add("text-success")
            p2Display.classList.add("text-danger")
        }
    }
})



p2.addEventListener('click',() => {
    if (!isGameOver){
        if (p2Score !== winningScore-1){
            p2Score+=1
            p2Display.innerHTML=p2Score            
        }else{
            p2Score+=1
            p2Display.innerHTML=p2Score  
            isGameOver=true
            p2Display.classList.add("text-success")
            p1Display.classList.add("text-danger")
        }
    }
})

resetbtn.addEventListener('click',reset)
    
function reset(){
    p1Score=0
    p2Score=0
    p1Display.innerHTML=p1Score
    p2Display.innerHTML=p2Score
    isGameOver=false
    p2Display.classList.remove("text-success","text-danger")
    p1Display.classList.remove("text-danger","text-success")
}
