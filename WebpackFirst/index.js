/**
 * 参考文档：https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene
 */
import * as THREE from 'three';

let camera, scene, renderer;
let geometry, material, mesh;

window.onload = function () {
    /**
     * 将下面这两个函数放在window.onload回调中执行是为了解决：
     * Uncaught TypeError: Cannot read property 'appendChild' of null
     * 因为直接执行的时候document.body还是null
     */
    init();
    animate();
}

function init() {
    /**
     * 创建一个摄像机对象（摄像机决定了能够在场景里看到什么）
     * @param fov 可视角度. Default value is 50.
     * @param aspect 实际窗口的纵横比. Default value is 1.
     * @param near 近处的裁面的距离. Default value is 0.1.
     * @param far 远处的裁面的距离. Default value is 2000.
     */
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    //设置摄像机的位置
    camera.position.z = 1;
    //创建一个场景（场景是一个容器，用于保存、跟踪所要渲染的物体和使用的光源）
    scene = new THREE.Scene();
    //创建一个立方几何体
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    //法线网格材质，一种把法向量映射到RGB颜色的材质。
    material = new THREE.MeshNormalMaterial();
    //表示基于以三角形为polygon mesh（多边形网格）的物体的类。 同时也作为其他类的基类，例如SkinnedMesh。
    mesh = new THREE.Mesh( geometry, material );
    //增加立方几何体到场景中
    scene.add( mesh );
    //创建一个WebGL渲染器并设置其大小
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    //将渲染的结果输出到指定页面元素中
    document.body.appendChild( renderer.domElement );
}

function animate() {
    //通过requestAnimationFrame方法在特定时间间隔重新渲染场景
    requestAnimationFrame( animate );
    //设置物体的局部旋转，以弧度来表示。
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    //渲染场景
    renderer.render( scene, camera );
}

