//escenario
const scene = new THREE.Scene();



 var loader = new THREE.TextureLoader();
loader.load('../img/escenario.jpg', function(texture){
    scene.background = texture; 
}); 







//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  //75 es la profundidad
//far-lejos    near- cerca


//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



camera.position.z = 6;
camera.position.y = 5;
camera.position.x = 3;

/* const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('./img/fondo2.jpg'); */

scene.add();


//elemento
const GLTFLoader = new THREE.GLTFLoader(); 
 GLTFLoader.load("../modelos3d/elfoevito.gltf",
(gltf) =>{
    var loaderObjeto = gltf.scene
    loaderObjeto.scale.set(0.02,0.02,0.02);
    loaderObjeto.position.x = 9;
    loaderObjeto.position.y = 1.4;
    const dcontrolsevito = new THREE.DragControls([loaderObjeto], camera, renderer.domElement);
    console.log('carga completa');
    scene.add(loaderObjeto);
}, () =>{
    console.log('cargando');
}, () => {
    console.log('error');
});  

const GLTFLoader2 = new THREE.GLTFLoader(); 
GLTFLoader2.load("../modelos3d/personaje.gltf",
(gltf) =>{
   var loaderObjeto2 = gltf.scene
   loaderObjeto2.scale.set(0.02,0.02,0.02);
   loaderObjeto2.position.x = 4;
   loaderObjeto2.position.z = 0;
   loaderObjeto2.position.y = 1.4;
/*    loaderObjeto2.rotation.y = 15; */
   const dcontrolsevita = new THREE.DragControls([loaderObjeto2], camera, renderer.domElement);
   console.log('carga completa');
   scene.add(loaderObjeto2);
}, () =>{
   console.log('cargando');
}, () => {
   console.log('error');
});   
/*  const GLTFLoader4 = new THREE.GLTFLoader(); 
GLTFLoader4.load("../modelos3d/fire.gltf",
(gltf) =>{
   var loaderObjeto4 = gltf.scene
   loaderObjeto4.scale.set(90,90,90);
   loaderObjeto4.position.x = 5;
   loaderObjeto4.position.z = 0;
   loaderObjeto4.position.y = 5.2;
/*     loaderObjeto4.rotation.y = 15; 
   loaderObjeto4.rotation.z = 0;  */
  /*  const dcontrolsbaogan = new THREE.DragControls([loaderObjeto4], camera, renderer.domElement);
   
   console.log('carga completa');
   scene.add(loaderObjeto4);
}, () =>{
   console.log('cargando');
}, () => {
   console.log('error');
});   */ 

const GLTFLoader3 = new THREE.GLTFLoader(); 
GLTFLoader3.load("../modelos3d/baogan.gltf",
(gltf) =>{
   var loaderObjeto3 = gltf.scene
   loaderObjeto3.scale.set(0.01,0.01,0.01);
   loaderObjeto3.position.x = -0.6;
   loaderObjeto3.position.z = 0;
   loaderObjeto3.position.y = 5.2;
/*    loaderObjeto3.rotation.y = 15; */
 /*   loaderObjeto3.rotation.z = 0; */
   const dcontrolsbaogan = new THREE.DragControls([loaderObjeto3], camera, renderer.domElement);
 
   //ORBIT CONTROL
/*    var control3 = new THREE.OrbitControls([loaderObjeto3],  renderer.domElement); 
   control3.minDistance = 3;
   control3.maxDistance = 9; */
   
   /* const flyControls = new THREE.FlyControls(camera, renderer.domElement);
   flyControls.movementSpeed =50;
   flyControls.rollSpeed =0.01;
   flyControls.autoForward =false;
   flyControls.dragToLock =false; */


   console.log('carga completa');
   scene.add(loaderObjeto3);
}, () =>{
   console.log('cargando');
}, () => {
   console.log('error');
});  


   //animacion
        function animate(){
            requestAnimationFrame(animate) //request- llama el espacio completo del frame--->
            //llama a si misma la función del animación, para poder funcionar
          
            renderer.render(scene, camera);

}
animate();

//light
 const light = new THREE.AmbientLight(0xfffffff, 2.4)
scene.add(light) 



