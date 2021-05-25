class Start{
     constructor(){
          // for the start button
          this.startButton = createButton("Start Game");
          this.startButton.position(displayWidth/2-15,displayHeight/2);
          this.startButton.size(100,50);
          this.startButton.style("background","lightgrey");

          this.name = createInput("                    Type Your Name Here");
          this.name.position(displayWidth/2-120,displayHeight/2-100);
          this.name.size(300,50);

          this.story = createButton('STORY');
          this.story.position(100,50);

          this.storyT = createElement("h2");
          this.storyT1 = createElement("h2");
          this.storyT2 = createElement("h2");
          this.storyT3 = createElement("h2");

          this.storyT.style("background","white")
          this.storyT1.style("background","white")
          this.storyT2.style("background","white")
          this.storyT3.style("background","white")

          this.hideStory = createButton("Hide Story");
          this.hideStory.position(1400,55);
          
          this.A = createButton("A");
          this.B = createButton("B");
          this.C = createButton("C");
          this.D = createButton("D");
          this.E = createButton("E");
          this.F = createButton("F");
          this.G = createButton("G");
          this.H = createButton("H");
          this.I = createButton("I");
          this.J = createButton("J");
          this.K = createButton("K");
          this.L = createButton("L");
          this.M = createButton("M");
          this.N = createButton("N");
          this.O = createButton("O");
          this.P = createButton("P");
          this.Q = createButton("Q");
          this.R = createButton("R");
          this.S = createButton("S");
          this.T = createButton("T");
          this.U = createButton("U");
          this.V = createButton("V");
          this.W = createButton("W");
          this.X = createButton("X");
          this.Y = createButton("Y");
          this.Z = createButton("Z");

          }

          hide(){
               this.storyT.hide();
               this.storyT1.hide();
               this.storyT2.hide();
               this.storyT3.hide();

               this.A.hide();
               this.B.hide();
               this.C.hide();
               this.D.hide();
               this.E.hide();
               this.F.hide();
               this.G.hide();
               this.H.hide();
               this.I.hide();
               this.J.hide();
               this.K.hide();
               this.L.hide();
               this.M.hide();
               this.N.hide();
               this.O.hide();
               this.P.hide();
               this.Q.hide();
               this.R.hide();
               this.S.hide();
               this.T.hide();
               this.U.hide();
               this.V.hide();
               this.W.hide();
               this.X.hide();
               this.Y.hide();
               this.Z.hide();
          }
     

     display(){
          this.story.mousePressed(() => {
               this.storyT.html("You are hanged by a crazy person.")
               this.storyT1.html("If you want to live you have give him the correct word to his riddles.")
               this.storyT2.html("Or you will die.")
               this.storyT3.html("But dont worry you can play again by refreshing the page.")
               this.storyT.position(700,50);
               this.storyT1.position(700,76);
               this.storyT2.position(700,103);
               this.storyT3.position(700,129);
          });

          this.hideStory.mousePressed(()=>{
               this.storyT.hide();
               this.storyT1.hide();
               this.storyT2.hide();
               this.storyT3.hide();
          })

          this.startButton.mousePressed(()=>{
               this.A.position(700,200);
          this.B.position(750,200);
          this.C.position(800,200);
          this.D.position(850,200);
          this.E.position(900,200);
          this.F.position(700,250);
          this.G.position(750,250);
          this.H.position(800,250);
          this.I.position(850,250);
          this.J.position(900,250);
          this.K.position(700,300);
          this.L.position(750,300);
          this.M.position(800,300);
          this.N.position(850,300);
          this.O.position(900,300);
          this.P.position(700,350);
          this.Q.position(750,350);
          this.R.position(800,350);
          this.S.position(850,350);
          this.T.position(900,350);
          this.U.position(750,400);
          this.V.position(800,400);
          this.W.position(850,400);
          this.X.position(750,450);
          this.Y.position(800,450);
          this.Z.position(850,450);

          this.startButton.hide();
          this.name.hide();
          })
     }
}