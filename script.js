// use document.getElementById('id').innerHTML = 'text' to change text in a paragraph, for example.

var slider = {
  
  get_position: function() { //Marker position
    var marker_pos = $('#marker').position();
    var left_pos = marker_pos.left + slider.marker_size / 2;
    var top_pos = marker_pos.top + slider.marker_size / 2;
    
    slider.position = {
      left: left_pos,
      top: top_pos,
      x: Math.round(slider.round_factor.x * (left_pos * slider.xmax / slider.width)) / slider.round_factor.x,
      y: Math.round((slider.round_factor.y * (slider.height - top_pos) * slider.ymax / slider.height)) / slider.round_factor.y,
    };

  },
  
  display_position: function() {// coord x and y value 
    //document.getElementById("coord").innerHTML = 'Business Impact: ' + slider.position.x.toString() + '<br> Stakeholder Impact: ' + slider.position.y.toString();
    document.getElementById("getx").value =slider.position.x.toString();
    document.getElementById("gety").value =slider.position.y.toString();
    document.getElementById("xvalue").innerHTML = slider.position.x.toString();
    document.getElementById("yvalue").innerHTML = slider.position.y.toString();

    

  },
  

  draw: function(x_size, y_size, xmax, ymax, marker_size, round_to) {
    
    if ((x_size === undefined) && (y_size === undefined) && (xmax === undefined) && (ymax === undefined) && (marker_size === undefined) && (round_to === undefined)) {
      x_size = 2500;
      y_size = 1500;
      xmax = 100;
      ymax = 100;
      marker_size = 20;
      round_to = 2;
    };
    
    slider.strokeStyle='black';
    slider.marker_size = marker_size;
    slider.height = y_size;
    slider.width = x_size;
    slider.xmax = xmax;
    slider.ymax = ymax;
    round_to = Math.pow(10, round_to);
    slider.round_factor = {
      x: round_to,
      y: round_to,
    };


    
    $("#markerbounds").css({
      "width": (x_size + marker_size).toString() + 'px',
      "height": (y_size + marker_size).toString() + 'px',
    });
    $("#box").css({
      "width": x_size.toString() + 'px',
      "height": y_size.toString() + 'px',
      "top": marker_size / 2,
      "left": marker_size / 2,
      
});
    $("#marker").css({
      "width": marker_size.toString() + 'px',
      "height": marker_size.toString() + 'px',
    });

    $("#coord").css({
      "top": x_size + marker_size / 2
    });
    
    $("#widget").css({
      "width": (x_size + marker_size).toString() + 'px',
    });
    $('#y').css({
      "top": -y_size / 2 - 45,
      "left": -36,
    })
    
    $('#x').css({
      "left": x_size / 2 - 18,
      "top": -3,
    })
    slider.get_position();
    slider.display_position();
    
  },
  
};

$("#marker").draggable({ 
  containment: "#markerbounds",
  drag: function() {
    slider.get_position();
    slider.display_position();
  },
});

//syntax for rendering is:
//  slider.render(width, height, width-range, height-range, marker size, output decimal places)

slider.draw(150,150,100,100,20,2);

// check to make sure the defaults work:
//slider.draw();
