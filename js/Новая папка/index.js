/* ---- particles.js config ---- */

particlesJS("particles-js", {
   "particles": {
    "number": {
      "value": 91,
      "density": {
        "enable": true,
        "value_area": 1282.7296486924183
      }
    },
    "color": {
      "value": "#090101"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 2,
        "color": "#3a3a3e"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4088700755207083,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 6.496617698410762,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 192.40944730386272,
      "color": "#050202",
      "opacity": 0.7455866083024681,
      "width": 0.6413648243462091
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



