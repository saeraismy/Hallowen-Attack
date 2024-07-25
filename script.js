    const orang = document.getElementById("orang")
    const hantu = document.getElementById("hantu")
    const playerScore = document.getElementById("score")
    const backsound = document.getElementById("backsound")
    const lompat = document.getElementById("lompat")
    const kalah = document.getElementById("kalah")
    const runSound = document.getElementById("runSound")
    const zombieSound = document.getElementById("zombieSound")

    let score = 0;
    let interval = null;

    let jumlahScore = () => {
      score++;
      playerScore.innerHTML = `Score : ${score} `
    }
    
    function jump(){
      if(orang.classList != "animate"){
        orang.classList.add("animate");
        lompat.play();
      }
      setTimeout(function(){
        orang.classList.remove("animate")
      },500)
        let score = 0
        interval = setInterval(jumlahScore, 100)
      }

      const ifHitHantu = setInterval(function(){
        const orangBottom = parseInt(window.getComputedStyle(orang).getPropertyValue("bottom"))
        const hantuLeft = parseInt(window.getComputedStyle(hantu).getPropertyValue("left"))
        backsound.play();
        runSound.play();
        zombieSound.play();
      if(hantuLeft < 100 && hantuLeft > 0 && orangBottom <=0 ){
        kalah.play();
        zombieSound.pause();
        runSound.pause();
        backsound.pause();
        hantu.style.animation = "none"
        hantu.style.display = "none"
        if(confirm("Kamu nabrak zombie, score kamu: "+document.getElementById('score').innerHTML
        +" mulai ulang?")){
          window.location.reload()
        } 
        else {
          
        }
      }
      })