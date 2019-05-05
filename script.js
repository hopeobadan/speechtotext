
var space = document.getElementsByClassName('space');

Array.prototype.forEach.call(space, function (b) {
    b.addEventListener('click', createRipple);
	
});

var colorList = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'white', 'black', 'grey', 'Gray',
						'violet', 'lavender', 'sky blue', 'royal blue', 'cyan', 'aqua', 'gold', 'olive', 'brown',
						'maroon', 'chocolate', 'lime', 'lime green', 'indigo'];



function start() {
			
			recognition.start();
			
			
			
}
		
		
function stop(){
	
	
	recognition.stop();
	finalTranscript = '';
	
}

space[0].onclick = start;
		






function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

    console.log(this);

    circle.classList.add('ripple');

}




  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  
    let finalTranscript = '';
    let recognition = new window.SpeechRecognition();
	
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
	  
      
	  document.innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
	  
	  
					color();	
					
		
	  
	 
		
	  /*if (finalTranscript == "home"){
			alert("hi");
		}*/
    }
	
	function color(){
		
		
		
		
		for(var i = 0; i <= colorList.length; i++){
			if(finalTranscript == colorList[i]){
				if(colorList[i] == 'sky blue'){
					colorList[i] = 'skyblue';
					space[0].style.background = colorList[i];
					
				}
				else if(colorList[i] == 'royal blue'){
					colorList[i] = 'royalblue';
					space[0].style.background = colorList[i];
				}					
				
				
			}
			
			else if(finalTranscript.charAt(0) == finalTranscript.charAt(0).toUpperCase()){
				finalTranscript.charAt(0).toLowerCase() + finalTranscript.slice(1);
				space[0].style.background = finalTranscript;
			}
			
			space[0].style.background = finalTranscript;
				
			
			setTimeout(stop, 2000);
			
		}
	}
	
	
	
	
	var h1 = document.getElementById("h1");
	h1.onclick = function(){
		
		recognition.stop();
		//window.open("index.html","_self");
		
	}
	
	
	
		
		
	
