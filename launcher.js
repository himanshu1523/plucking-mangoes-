class Launcher {
constructor(bodyA,pointB){
var option={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:5
}
this.launcher=constriant.create (option);
this.pointB=pointB;
world.add(World,this.launcher);
}
fly(){
this.launcher.bodyA=null;

}
attach(body){
this.launcher.bodyA=body;
}
display(){
constriantMode(POINT);

}
}