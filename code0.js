gdjs.fase1Code = {};
gdjs.fase1Code.GDnuvemObjects1= [];
gdjs.fase1Code.GDnuvemObjects2= [];
gdjs.fase1Code.GDnuvemObjects3= [];
gdjs.fase1Code.GDjogadorObjects1= [];
gdjs.fase1Code.GDjogadorObjects2= [];
gdjs.fase1Code.GDjogadorObjects3= [];
gdjs.fase1Code.GDchaoObjects1= [];
gdjs.fase1Code.GDchaoObjects2= [];
gdjs.fase1Code.GDchaoObjects3= [];
gdjs.fase1Code.GDponteObjects1= [];
gdjs.fase1Code.GDponteObjects2= [];
gdjs.fase1Code.GDponteObjects3= [];
gdjs.fase1Code.GDmoedaObjects1= [];
gdjs.fase1Code.GDmoedaObjects2= [];
gdjs.fase1Code.GDmoedaObjects3= [];
gdjs.fase1Code.GDinimigoObjects1= [];
gdjs.fase1Code.GDinimigoObjects2= [];
gdjs.fase1Code.GDinimigoObjects3= [];
gdjs.fase1Code.GDseta_95direitaObjects1= [];
gdjs.fase1Code.GDseta_95direitaObjects2= [];
gdjs.fase1Code.GDseta_95direitaObjects3= [];
gdjs.fase1Code.GDseta_95esquerdaObjects1= [];
gdjs.fase1Code.GDseta_95esquerdaObjects2= [];
gdjs.fase1Code.GDseta_95esquerdaObjects3= [];
gdjs.fase1Code.GDscore_95labelObjects1= [];
gdjs.fase1Code.GDscore_95labelObjects2= [];
gdjs.fase1Code.GDscore_95labelObjects3= [];
gdjs.fase1Code.GDauxiliar_95cameraObjects1= [];
gdjs.fase1Code.GDauxiliar_95cameraObjects2= [];
gdjs.fase1Code.GDauxiliar_95cameraObjects3= [];

gdjs.fase1Code.conditionTrue_0 = {val:false};
gdjs.fase1Code.condition0IsTrue_0 = {val:false};
gdjs.fase1Code.condition1IsTrue_0 = {val:false};


gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDjogadorObjects1Objects = Hashtable.newFrom({"jogador": gdjs.fase1Code.GDjogadorObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDmoedaObjects1Objects = Hashtable.newFrom({"moeda": gdjs.fase1Code.GDmoedaObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDjogadorObjects1Objects = Hashtable.newFrom({"jogador": gdjs.fase1Code.GDjogadorObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects = Hashtable.newFrom({"inimigo": gdjs.fase1Code.GDinimigoObjects1});
gdjs.fase1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("inimigo"), gdjs.fase1Code.GDinimigoObjects1);
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
gdjs.fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDjogadorObjects1Objects, gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects, false, runtimeScene, false);
}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDinimigoObjects1 */
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDjogadorObjects1Objects = Hashtable.newFrom({"jogador": gdjs.fase1Code.GDjogadorObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects = Hashtable.newFrom({"inimigo": gdjs.fase1Code.GDinimigoObjects1});
gdjs.fase1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.fase1Code.GDjogadorObjects1, gdjs.fase1Code.GDjogadorObjects2);


gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects2.length;i<l;++i) {
    if ( !(gdjs.fase1Code.GDjogadorObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects2[k] = gdjs.fase1Code.GDjogadorObjects2[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects2.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects2 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects2[i].setAnimationName("parado");
}
}}

}


{

gdjs.copyArray(gdjs.fase1Code.GDjogadorObjects1, gdjs.fase1Code.GDjogadorObjects2);


gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects2.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects2[k] = gdjs.fase1Code.GDjogadorObjects2[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects2.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects2 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects2[i].setAnimationName("andando");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inimigo"), gdjs.fase1Code.GDinimigoObjects1);
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
gdjs.fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDjogadorObjects1Objects, gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects, false, runtimeScene, false);
}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.fase1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.fase1Code.GDjogadorObjects1, gdjs.fase1Code.GDjogadorObjects2);


gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects2.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects2[k] = gdjs.fase1Code.GDjogadorObjects2[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects2.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects2 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.fase1Code.GDjogadorObjects1 */

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects1[k] = gdjs.fase1Code.GDjogadorObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects1.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects1[i].flipX(true);
}
}}

}


};gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects = Hashtable.newFrom({"inimigo": gdjs.fase1Code.GDinimigoObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDseta_9595direitaObjects1Objects = Hashtable.newFrom({"seta_direita": gdjs.fase1Code.GDseta_95direitaObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects = Hashtable.newFrom({"inimigo": gdjs.fase1Code.GDinimigoObjects1});
gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDseta_9595esquerdaObjects1Objects = Hashtable.newFrom({"seta_esquerda": gdjs.fase1Code.GDseta_95esquerdaObjects1});
gdjs.fase1Code.eventsList3 = function(runtimeScene) {

{


gdjs.fase1Code.condition0IsTrue_0.val = false;
{
gdjs.fase1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.fase1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("auxiliar_camera"), gdjs.fase1Code.GDauxiliar_95cameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("inimigo"), gdjs.fase1Code.GDinimigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("seta_direita"), gdjs.fase1Code.GDseta_95direitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("seta_esquerda"), gdjs.fase1Code.GDseta_95esquerdaObjects1);
{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].returnVariable(gdjs.fase1Code.GDinimigoObjects1[i].getVariables().get("direita")).setNumber(180);
}
}{for(var i = 0, len = gdjs.fase1Code.GDseta_95direitaObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDseta_95direitaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase1Code.GDseta_95esquerdaObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDseta_95esquerdaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.fase1Code.GDauxiliar_95cameraObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("auxiliar_camera"), gdjs.fase1Code.GDauxiliar_95cameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("jogador"), gdjs.fase1Code.GDjogadorObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.fase1Code.GDauxiliar_95cameraObjects1.length !== 0 ? gdjs.fase1Code.GDauxiliar_95cameraObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.fase1Code.GDauxiliar_95cameraObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].setX((gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].getPointX("")) + ((( gdjs.fase1Code.GDjogadorObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDjogadorObjects1[0].getPointX("")) - (gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].getPointX(""))) / 30);
}
}{for(var i = 0, len = gdjs.fase1Code.GDauxiliar_95cameraObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].setY((gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].getPointY("")) + ((( gdjs.fase1Code.GDjogadorObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDjogadorObjects1[0].getPointY("")) - (gdjs.fase1Code.GDauxiliar_95cameraObjects1[i].getPointY(""))) / 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogador"), gdjs.fase1Code.GDjogadorObjects1);
gdjs.copyArray(runtimeScene.getObjects("moeda"), gdjs.fase1Code.GDmoedaObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
gdjs.fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDjogadorObjects1Objects, gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDmoedaObjects1Objects, false, runtimeScene, false);
}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDmoedaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score_label"), gdjs.fase1Code.GDscore_95labelObjects1);
{for(var i = 0, len = gdjs.fase1Code.GDmoedaObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDmoedaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "asset\\coin.wav", false, 100, 1);
}{runtimeScene.getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.fase1Code.GDscore_95labelObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDscore_95labelObjects1[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogador"), gdjs.fase1Code.GDjogadorObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects1[k] = gdjs.fase1Code.GDjogadorObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects1.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects1[i].setAnimationName("pulando");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogador"), gdjs.fase1Code.GDjogadorObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects1[k] = gdjs.fase1Code.GDjogadorObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects1.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDjogadorObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDjogadorObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDjogadorObjects1[i].setAnimationName("pulando");
}
}
{ //Subevents
gdjs.fase1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogador"), gdjs.fase1Code.GDjogadorObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects1[k] = gdjs.fase1Code.GDjogadorObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects1.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.fase1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogador"), gdjs.fase1Code.GDjogadorObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.fase1Code.GDjogadorObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDjogadorObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.fase1Code.condition0IsTrue_0.val = true;
        gdjs.fase1Code.GDjogadorObjects1[k] = gdjs.fase1Code.GDjogadorObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDjogadorObjects1.length = k;}if (gdjs.fase1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.fase1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("inimigo"), gdjs.fase1Code.GDinimigoObjects1);
{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(gdjs.fase1Code.GDinimigoObjects1[i].getVariables().get("direita"))), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inimigo"), gdjs.fase1Code.GDinimigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("seta_direita"), gdjs.fase1Code.GDseta_95direitaObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
gdjs.fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects, gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDseta_9595direitaObjects1Objects, false, runtimeScene, false);
}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDinimigoObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].returnVariable(gdjs.fase1Code.GDinimigoObjects1[i].getVariables().get("direita")).setNumber(0);
}
}{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inimigo"), gdjs.fase1Code.GDinimigoObjects1);
gdjs.copyArray(runtimeScene.getObjects("seta_esquerda"), gdjs.fase1Code.GDseta_95esquerdaObjects1);

gdjs.fase1Code.condition0IsTrue_0.val = false;
{
gdjs.fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDinimigoObjects1Objects, gdjs.fase1Code.mapOfGDgdjs_46fase1Code_46GDseta_9595esquerdaObjects1Objects, false, runtimeScene, false);
}if (gdjs.fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.fase1Code.GDinimigoObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].returnVariable(gdjs.fase1Code.GDinimigoObjects1[i].getVariables().get("direita")).setNumber(180);
}
}{for(var i = 0, len = gdjs.fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinimigoObjects1[i].flipX(false);
}
}}

}


};

gdjs.fase1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fase1Code.GDnuvemObjects1.length = 0;
gdjs.fase1Code.GDnuvemObjects2.length = 0;
gdjs.fase1Code.GDnuvemObjects3.length = 0;
gdjs.fase1Code.GDjogadorObjects1.length = 0;
gdjs.fase1Code.GDjogadorObjects2.length = 0;
gdjs.fase1Code.GDjogadorObjects3.length = 0;
gdjs.fase1Code.GDchaoObjects1.length = 0;
gdjs.fase1Code.GDchaoObjects2.length = 0;
gdjs.fase1Code.GDchaoObjects3.length = 0;
gdjs.fase1Code.GDponteObjects1.length = 0;
gdjs.fase1Code.GDponteObjects2.length = 0;
gdjs.fase1Code.GDponteObjects3.length = 0;
gdjs.fase1Code.GDmoedaObjects1.length = 0;
gdjs.fase1Code.GDmoedaObjects2.length = 0;
gdjs.fase1Code.GDmoedaObjects3.length = 0;
gdjs.fase1Code.GDinimigoObjects1.length = 0;
gdjs.fase1Code.GDinimigoObjects2.length = 0;
gdjs.fase1Code.GDinimigoObjects3.length = 0;
gdjs.fase1Code.GDseta_95direitaObjects1.length = 0;
gdjs.fase1Code.GDseta_95direitaObjects2.length = 0;
gdjs.fase1Code.GDseta_95direitaObjects3.length = 0;
gdjs.fase1Code.GDseta_95esquerdaObjects1.length = 0;
gdjs.fase1Code.GDseta_95esquerdaObjects2.length = 0;
gdjs.fase1Code.GDseta_95esquerdaObjects3.length = 0;
gdjs.fase1Code.GDscore_95labelObjects1.length = 0;
gdjs.fase1Code.GDscore_95labelObjects2.length = 0;
gdjs.fase1Code.GDscore_95labelObjects3.length = 0;
gdjs.fase1Code.GDauxiliar_95cameraObjects1.length = 0;
gdjs.fase1Code.GDauxiliar_95cameraObjects2.length = 0;
gdjs.fase1Code.GDauxiliar_95cameraObjects3.length = 0;

gdjs.fase1Code.eventsList3(runtimeScene);
return;

}

gdjs['fase1Code'] = gdjs.fase1Code;
