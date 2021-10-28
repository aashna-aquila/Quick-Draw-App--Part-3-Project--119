
quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant"];
timer_counter = 0; 
timer_check = ""; 
drawn_sketch = "";
answer_holder = ""; 
score = 0;

 random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1); 
 console.log(quick_draw_data_set[random_number]); 
 sketch = quick_draw_data_set[random_number];
  document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;


function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
    
function clear()
{
 background("white");
}
function updateCanvas() {
    background("white");
    random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
  }
  
  
  function draw() {
    check_sketch()
    if(drawn_sketch == sketch)
    {
      answer_holder = "set"
      score++;
      document.getElementById('score').innerHTML = 'Score: ' + score;
    }
  
  }
  
  function check_sketch()
  {
    timer_counter++;
    document.getElementById('time').innerHTML = 'Timer: ' + timer_counter;
    console.log(timer_counter)
    if(timer_counter > 400)
      {
        timer_counter = 0;
        timer_check = "completed"
      }
      if(timer_check =="completed" || answer_holder == "set")
      {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
      }
  
      }
  function preload() 
  { classifier = ml5.imageClassifier('DoodleNet'); }

  function updateCanvas() 
  { background("white"); random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1); 
  console.log(quick_draw_data_set[random_number]); 
  sketch = quick_draw_data_set[random_number];
   document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch; }
  