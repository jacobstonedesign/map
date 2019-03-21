﻿var sapins_config = {
  "pins":[
  
  {
    "shape": "circle",
    "hover": "BLANK8",
    "pos_X": 20,
    "pos_Y": 350,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK9",
    "pos_X": 20,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK10",
    "pos_X": 50,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK11",
    "pos_X": 100,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK12",
    "pos_X": 150,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK13",
    "pos_X": 200,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK14",
    "pos_X": 250,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  },
  {
    "shape": "circle",
    "hover": "BLANK15",
    "pos_X": 300,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": true
  }// If you want to add more pin, you need to add comma ',' here
  ]
};

// The following is the script for pins interaction DON'T EDIT !!!
function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  var pins_len = sapins_config.pins.length;
  if(pins_len > 0) {
    var xmlns = "http://www.w3.org/2000/svg";
    var tsvg_obj = document.getElementById("wdsajspins");
    var svg_circle, svg_rect;
    for (var i = 0; i < pins_len; i++) {
      if (sapins_config.pins[i].shape === "circle") {
        svg_circle = document.createElementNS(xmlns, "circle");
        svg_circle.setAttributeNS(null, "cx", sapins_config.pins[i].pos_X + 1);
        svg_circle.setAttributeNS(null, "cy", sapins_config.pins[i].pos_Y + 1);
        svg_circle.setAttributeNS(null, "r", sapins_config.pins[i].size / 2);
        svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
        tsvg_obj.appendChild(svg_circle);
        svg_circle = document.createElementNS(xmlns, "circle");
        svg_circle.setAttributeNS(null, "cx", sapins_config.pins[i].pos_X);
        svg_circle.setAttributeNS(null, "cy", sapins_config.pins[i].pos_Y);
        svg_circle.setAttributeNS(null, "r", sapins_config.pins[i].size / 2);
        svg_circle.setAttributeNS(null, "fill", sapins_config.pins[i].upColor);
        svg_circle.setAttributeNS(null, "stroke", sapins_config.pins[i].outline);
        svg_circle.setAttributeNS(null, "stroke-width", 1);
        svg_circle.setAttributeNS(null, "id", "wdsajspins_" + i);
        tsvg_obj.appendChild(svg_circle);
        wdsajsAddEvent(i);
      }
      else if (sapins_config.pins[i].shape === "square") {
        svg_rect = document.createElementNS(xmlns, "rect");
        svg_rect.setAttributeNS(null, "x", sapins_config.pins[i].pos_X - sapins_config.pins[i].size / 2 + 1);
        svg_rect.setAttributeNS(null, "y", sapins_config.pins[i].pos_Y - sapins_config.pins[i].size / 2 + 1);
        svg_rect.setAttributeNS(null, "width", sapins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "height", sapins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
        tsvg_obj.appendChild(svg_rect);
        svg_rect = document.createElementNS(xmlns, "rect");
        svg_rect.setAttributeNS(null, "x", sapins_config.pins[i].pos_X - sapins_config.pins[i].size / 2);
        svg_rect.setAttributeNS(null, "y", sapins_config.pins[i].pos_Y - sapins_config.pins[i].size / 2);
        svg_rect.setAttributeNS(null, "width", sapins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "height", sapins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "fill", sapins_config.pins[i].upColor);
        svg_rect.setAttributeNS(null, "stroke", sapins_config.pins[i].outline);
        svg_rect.setAttributeNS(null, "stroke-width", 1);
        svg_rect.setAttributeNS(null, "id", "wdsajspins_" + i);
        tsvg_obj.appendChild(svg_rect);
        wdsajsAddEvent(i);
      }
    }
  }
});
function wdsajsAddEvent(id) {
  var obj = jQuery("#wdsajspins_" + id);
  if(sapins_config.pins[id].active === true){
    obj.attr({"cursor": "pointer"});
    obj.hover(function () {
      jQuery("#wddrjstip").show().html(sapins_config.pins[id].hover);
      obj.css({"fill":sapins_config.pins[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      obj.css({"fill":sapins_config.pins[id].upColor});
    });
    obj.mouseup(function(){
      obj.css({"fill":sapins_config.pins[id].overColor});
      if (sapins_config.pins[id].target === "new_window"){
        window.open(sapins_config.pins[id].url);  
      } else if (sapins_config.pins[id].target === "same_window") {
        window.parent.location.href = sapins_config.pins[id].url;
      } else if (sapins_config.pins[id].target === "modal") {
        jQuery(sapins_config.pins[id].url).modal("show");
      }
    });
    obj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      obj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw=jQuery("#wddrjstip").outerWidth(), tiph=jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#wddrjstip").show().html(sapins_config.pins[id].hover);
        jQuery("#wddrjstip").css({left:x, top:y});
      });
      obj.on("touchend", function () {
        jQuery("#" + id).css({"fill":sapins_config.pins[id].upColor});
        if (sapins_config.pins[id].target === "new_window") {
          window.open(sapins_config.pins[id].url);
        } else if (sapins_config.pins[id].target === "same_window") {
          window.parent.location.href = sapins_config.pins[id].url;
        } else if (sapins_config.pins[id].target === "modal") {
          jQuery(sapins_config.pins[id].url).modal("show");
        }
      });
    }
  }
}