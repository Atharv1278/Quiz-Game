class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Your Answer Here....");
  


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.input1 = createElement('h3')
    this.input2 = createElement('h4')
     this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();


 function setElementsPosition(){
      this.titleImg.position(120, 100);
      this.input1.position(50, 60)
      this.input2.position(390, 780)
    
  
    }

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    html() 
    position()

   
 



    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message

     handleMousePressed(){
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var message = ` Hello ${this.input.value()} </br>Thank you ! Your answer is submited`;
        this.greeting.html(message);
        this.button.html( "Thank You, Your Answer Has Been Submitted" )

      })
    }


  }
}


