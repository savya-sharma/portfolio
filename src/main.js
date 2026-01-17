import * as THREE from 'three';
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.03
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


gsap.registerPlugin(ScrollTrigger);
const canvas = document.querySelector('canvas');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 2;


const scene = new THREE.Scene();

const geometry = new THREE.IcosahedronGeometry(1, 200, 200);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColorChange: { value: 0 }
  },
  vertexShader: vertex,
  fragmentShader: fragment,
});
const sphare = new THREE.Mesh(geometry, material);
sphare.position.y = -1.4;
scene.add(sphare);


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.landing',
    start: 'top top',
    end: 'bottom center',
    scrub: 2.3,
    // markers: true,
  }
});


tl.to(sphare.position, {
  y: 0,
  z: -1,
  ease: 'power2.inOut',
}, "a").to(material.uniforms.uColorChange, {
  value: 1,
  ease: 'power2.inOut',
}, "a"
).
  to('.landing h1, h5', {
    opacity: 0,
  }, "a").
  to('.landing p', {
    opacity: 1,
  })




const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value = clock.getElapsedTime();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});





// page colors
const page4 = document.querySelector(".page4");
const navbar = document.querySelector(".bar");

const pageTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: page4,
    start: "top 40%",
    end: "bottom 120%",
    scrub: true,
    // markers: true,
  },
})

// Animate .page4 when it enters view
pageTimeline.set(page4, {
  padding: '5vw',
  y: '8%',
}).to(page4, {
  y: 0,
  padding: 0,
  duration: 2.6,
  ease: 'sine.out' // Use 'expo.inOut' for a more natural, smooth easing
})



// Current time
const time = document.querySelector(".time");

// Create the element to show current time and append it to .time
let timeSpan = document.createElement('span');
timeSpan.id = 'current-time';
time.appendChild(timeSpan);

function updateCurrentTime() {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());

  // Blink logic: colon is visible if seconds are even, invisible if odd
  const colon = (now.getSeconds() % 2 === 0) ? ':' : '<span style="visibility:hidden">:</span>';
  // Use innerHTML to allow for hiding colon
  timeSpan.innerHTML = `${h}&nbsp;${colon}&nbsp;${m}&nbsp;${colon}&nbsp;${s} &nbsp;${'IST'}`;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);


//handleMenu
const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu a");

menuBtn.addEventListener("click", () => {
  const menuOpen = menuBtn.dataset.open === "true";
  if (!menuOpen) {
    gsap.to(".menu a", {
      x: 60,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15
    });
    menuBtn.dataset.open = "true";
  } else {
    gsap.to(".menu a", {
      x: 0,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power4.in",
      stagger: {
        each: 0.15,
        from: "end"
      }
    });
    menuBtn.dataset.open = "false";
  }
});

