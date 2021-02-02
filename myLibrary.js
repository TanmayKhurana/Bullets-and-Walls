function touch(car1, object1){

  if (object1.x-car1.x<=(car1.width+object1.width)/2) {
    car1.velocityX = 0;
    var damage = 0.5*weight1*speed1*speed1/(thickness*thickness*thickness);
  if (damage > 25){
    car1.shapeColor = "red"
   }
   else{ if(damage < 5){
     car1.shapeColor = "yellow"
     }
   }

  if (damage < 5 && damage> 2){
    car1.shapeColor = "yellow"
   }
   else{ if(damage > 25){
    car1.shapeColor = "red"
   }
  }
  if (damage < 2){
    car1.shapeColor = "blue"
   }
  }
  }

  function istouching(car2, object2){
    if (object2.x-car2.x<=(car2.width+object2.width)/2) {
      car2.velocityX = 0;
      var damage = 0.5*weight2*speed2*speed2/(thickness*thickness*thickness);
    if (damage > 25){
      car2.shapeColor = "red"
     }
     else{ if(damage < 5){
       car2.shapeColor = "yellow"
       }
     }
  
    if (damage < 5 && damage> 2){
      car2.shapeColor = "yellow"
     }
     else{ if(damage > 25){
      car2.shapeColor = "red"
     }
    }
    if (damage < 2){
      car2.shapeColor = "blue"
     }
    }
  }  
  
    function move(car3, object3){
      if (object3.x-car3.x<=(car3.width+object3.width)/2) {
        car3.velocityX = 0;
        var damage = 0.5*weight3*speed3*speed3/(thickness*thickness*thickness);
      if (damage > 25){
        car3.shapeColor = "red"
       }
       else{ if(damage < 5){
         car3.shapeColor = "yellow"
         }
       }
    
      if (damage < 5 && damage> 2){
        car3.shapeColor = "yellow"
       }
       else{ if(damage > 25){
        car3.shapeColor = "red"
       }
      }
      if (damage < 2){
        car3.shapeColor = "blue"
       }
      }
        }

        function affect(car4, object4){
          if (object4.x-car4.x<=(car4.width+object4.width)/2) {
            car4.velocityX = 0;
            var damage = 0.5*weight4*speed4*speed4/(thickness*thickness*thickness);
          if (damage > 25){
            car4.shapeColor = "red"
           }
           else{ if(damage < 5){
             car4.shapeColor = "yellow"
             }
           }
        
          if (damage < 5 && damage> 2){
            car4.shapeColor = "yellow"
           }
           else{ if(damage > 25){
            car4.shapeColor = "red"
           }
          }
          if (damage < 2){
            car4.shapeColor = "blue"
           }
          }
            }       