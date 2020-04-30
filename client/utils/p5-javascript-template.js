/*eslint-disable*/ 
var p5Function = {type: "variable", style: "p5-function"};
var p5Variable = {type: "variable", style: "p5-variable"};
let p5VariableKeywords = {"P2D":p5Variable,"WEBGL":p5Variable,"ARROW":p5Variable,"CROSS":p5Variable,"HAND":p5Variable,"MOVE":p5Variable,"TEXT":p5Variable,"WAIT":p5Variable,"HALF_PI":p5Variable,"PI":p5Variable,"QUARTER_PI":p5Variable,"TAU":p5Variable,"TWO_PI":p5Variable,"DEGREES":p5Variable,"RADIANS":p5Variable,"CORNER":p5Variable,"CORNERS":p5Variable,"RADIUS":p5Variable,"RIGHT":p5Variable,"LEFT":p5Variable,"CENTER":p5Variable,"TOP":p5Variable,"BOTTOM":p5Variable,"BASELINE":p5Variable,"POINTS":p5Variable,"LINES":p5Variable,"LINE_STRIP":p5Variable,"LINE_LOOP":p5Variable,"TRIANGLES":p5Variable,"TRIANGLE_FAN":p5Variable,"TRIANGLE_STRIP":p5Variable,"QUADS":p5Variable,"QUAD_STRIP":p5Variable,"TESS":p5Variable,"CLOSE":p5Variable,"OPEN":p5Variable,"CHORD":p5Variable,"PIE":p5Variable,"PROJECT":p5Variable,"SQUARE":p5Variable,"ROUND":p5Variable,"BEVEL":p5Variable,"MITER":p5Variable,"RGB":p5Variable,"HSB":p5Variable,"HSL":p5Variable,"AUTO":p5Variable,"ALT":p5Variable,"BACKSPACE":p5Variable,"CONTROL":p5Variable,"DELETE":p5Variable,"DOWN_ARROW":p5Variable,"ENTER":p5Variable,"ESCAPE":p5Variable,"LEFT_ARROW":p5Variable,"OPTION":p5Variable,"RETURN":p5Variable,"RIGHT_ARROW":p5Variable,"SHIFT":p5Variable,"TAB":p5Variable,"UP_ARROW":p5Variable,"BLEND":p5Variable,"REMOVE":p5Variable,"ADD":p5Variable,"DARKEST":p5Variable,"LIGHTEST":p5Variable,"DIFFERENCE":p5Variable,"SUBTRACT":p5Variable,"EXCLUSION":p5Variable,"MULTIPLY":p5Variable,"SCREEN":p5Variable,"REPLACE":p5Variable,"OVERLAY":p5Variable,"HARD_LIGHT":p5Variable,"SOFT_LIGHT":p5Variable,"DODGE":p5Variable,"BURN":p5Variable,"THRESHOLD":p5Variable,"GRAY":p5Variable,"OPAQUE":p5Variable,"INVERT":p5Variable,"POSTERIZE":p5Variable,"DILATE":p5Variable,"ERODE":p5Variable,"BLUR":p5Variable,"NORMAL":p5Variable,"ITALIC":p5Variable,"BOLD":p5Variable,"BOLDITALIC":p5Variable,"LINEAR":p5Variable,"QUADRATIC":p5Variable,"BEZIER":p5Variable,"CURVE":p5Variable,"STROKE":p5Variable,"FILL":p5Variable,"TEXTURE":p5Variable,"IMMEDIATE":p5Variable,"IMAGE":p5Variable,"NEAREST":p5Variable,"REPEAT":p5Variable,"CLAMP":p5Variable,"MIRROR":p5Variable,"LANDSCAPE":p5Variable,"PORTRAIT":p5Variable,"GRID":p5Variable,"AXES":p5Variable,"frameCount":p5Variable,"deltaTime":p5Variable,"focused":p5Variable,"displayWidth":p5Variable,"displayHeight":p5Variable,"windowWidth":p5Variable,"windowHeight":p5Variable,"width":p5Variable,"height":p5Variable,"disableFriendlyErrors":p5Variable,"drawingContext":p5Variable,"VIDEO":p5Variable,"AUDIO":p5Variable,"deviceOrientation":p5Variable,"accelerationX":p5Variable,"accelerationY":p5Variable,"accelerationZ":p5Variable,"pAccelerationX":p5Variable,"pAccelerationY":p5Variable,"pAccelerationZ":p5Variable,"rotationX":p5Variable,"rotationY":p5Variable,"rotationZ":p5Variable,"pRotationX":p5Variable,"pRotationY":p5Variable,"pRotationZ":p5Variable,"turnAxis":p5Variable,"keyIsPressed":p5Variable,"key":p5Variable,"keyCode":p5Variable,"movedX":p5Variable,"movedY":p5Variable,"mouseX":p5Variable,"mouseY":p5Variable,"pmouseX":p5Variable,"pmouseY":p5Variable,"winMouseX":p5Variable,"winMouseY":p5Variable,"pwinMouseX":p5Variable,"pwinMouseY":p5Variable,"mouseButton":p5Variable,"mouseIsPressed":p5Variable,"touches":p5Variable,"pixels":p5Variable}; 
let p5FunctionKeywords = {"alpha":p5Function,"blue":p5Function,"brightness":p5Function,"color":p5Function,"green":p5Function,"hue":p5Function,"lerpColor":p5Function,"lightness":p5Function,"red":p5Function,"saturation":p5Function,"background":p5Function,"clear":p5Function,"colorMode":p5Function,"fill":p5Function,"noFill":p5Function,"noStroke":p5Function,"stroke":p5Function,"erase":p5Function,"noErase":p5Function,"arc":p5Function,"ellipse":p5Function,"circle":p5Function,"line":p5Function,"point":p5Function,"quad":p5Function,"rect":p5Function,"square":p5Function,"triangle":p5Function,"ellipseMode":p5Function,"noSmooth":p5Function,"rectMode":p5Function,"smooth":p5Function,"strokeCap":p5Function,"strokeJoin":p5Function,"strokeWeight":p5Function,"bezier":p5Function,"bezierDetail":p5Function,"bezierPoint":p5Function,"bezierTangent":p5Function,"curve":p5Function,"curveDetail":p5Function,"curveTightness":p5Function,"curvePoint":p5Function,"curveTangent":p5Function,"beginContour":p5Function,"beginShape":p5Function,"bezierVertex":p5Function,"curveVertex":p5Function,"endContour":p5Function,"endShape":p5Function,"quadraticVertex":p5Function,"vertex":p5Function,"print":p5Function,"cursor":p5Function,"frameRate":p5Function,"noCursor":p5Function,"windowResized":p5Function,"fullscreen":p5Function,"pixelDensity":p5Function,"displayDensity":p5Function,"getURL":p5Function,"getURLPath":p5Function,"getURLParams":p5Function,"preload":p5Function,"setup":p5Function,"draw":p5Function,"remove":p5Function,"createCanvas":p5Function,"resizeCanvas":p5Function,"noCanvas":p5Function,"createGraphics":p5Function,"blendMode":p5Function,"noLoop":p5Function,"loop":p5Function,"push":p5Function,"pop":p5Function,"redraw":p5Function,"p5":p5Function,"applyMatrix":p5Function,"resetMatrix":p5Function,"rotate":p5Function,"rotateX":p5Function,"rotateY":p5Function,"rotateZ":p5Function,"scale":p5Function,"shearX":p5Function,"shearY":p5Function,"translate":p5Function,"storeItem":p5Function,"getItem":p5Function,"clearStorage":p5Function,"removeItem":p5Function,"createStringDict":p5Function,"createNumberDict":p5Function,"select":p5Function,"selectAll":p5Function,"removeElements":p5Function,"changed":p5Function,"input":p5Function,"createDiv":p5Function,"createP":p5Function,"createSpan":p5Function,"createImg":p5Function,"createA":p5Function,"createSlider":p5Function,"createButton":p5Function,"createCheckbox":p5Function,"createSelect":p5Function,"createRadio":p5Function,"createColorPicker":p5Function,"createInput":p5Function,"createFileInput":p5Function,"createVideo":p5Function,"createAudio":p5Function,"createCapture":p5Function,"createElement":p5Function,"setMoveThreshold":p5Function,"setShakeThreshold":p5Function,"deviceMoved":p5Function,"deviceTurned":p5Function,"deviceShaken":p5Function,"keyPressed":p5Function,"keyReleased":p5Function,"keyTyped":p5Function,"keyIsDown":p5Function,"mouseMoved":p5Function,"mouseDragged":p5Function,"mousePressed":p5Function,"mouseReleased":p5Function,"mouseClicked":p5Function,"doubleClicked":p5Function,"mouseWheel":p5Function,"requestPointerLock":p5Function,"exitPointerLock":p5Function,"touchStarted":p5Function,"touchMoved":p5Function,"touchEnded":p5Function,"createImage":p5Function,"saveCanvas":p5Function,"saveFrames":p5Function,"loadImage":p5Function,"image":p5Function,"tint":p5Function,"noTint":p5Function,"imageMode":p5Function,"blend":p5Function,"copy":p5Function,"filter":p5Function,"get":p5Function,"loadPixels":p5Function,"set":p5Function,"updatePixels":p5Function,"loadJSON":p5Function,"loadStrings":p5Function,"loadTable":p5Function,"loadXML":p5Function,"loadBytes":p5Function,"httpGet":p5Function,"httpPost":p5Function,"httpDo":p5Function,"createWriter":p5Function,"save":p5Function,"saveJSON":p5Function,"saveStrings":p5Function,"saveTable":p5Function,"abs":p5Function,"ceil":p5Function,"constrain":p5Function,"dist":p5Function,"exp":p5Function,"floor":p5Function,"lerp":p5Function,"log":p5Function,"mag":p5Function,"map":p5Function,"max":p5Function,"min":p5Function,"norm":p5Function,"pow":p5Function,"round":p5Function,"sq":p5Function,"sqrt":p5Function,"fract":p5Function,"createVector":p5Function,"noise":p5Function,"noiseDetail":p5Function,"noiseSeed":p5Function,"randomSeed":p5Function,"random":p5Function,"randomGaussian":p5Function,"acos":p5Function,"asin":p5Function,"atan":p5Function,"atan2":p5Function,"cos":p5Function,"sin":p5Function,"tan":p5Function,"degrees":p5Function,"radians":p5Function,"angleMode":p5Function,"textAlign":p5Function,"textLeading":p5Function,"textSize":p5Function,"textStyle":p5Function,"textWidth":p5Function,"textAscent":p5Function,"textDescent":p5Function,"loadFont":p5Function,"text":p5Function,"textFont":p5Function,"append":p5Function,"arrayCopy":p5Function,"concat":p5Function,"reverse":p5Function,"shorten":p5Function,"shuffle":p5Function,"sort":p5Function,"splice":p5Function,"subset":p5Function,"float":p5Function,"int":p5Function,"str":p5Function,"boolean":p5Function,"byte":p5Function,"char":p5Function,"unchar":p5Function,"hex":p5Function,"unhex":p5Function,"join":p5Function,"match":p5Function,"matchAll":p5Function,"nf":p5Function,"nfc":p5Function,"nfp":p5Function,"nfs":p5Function,"split":p5Function,"splitTokens":p5Function,"trim":p5Function,"day":p5Function,"hour":p5Function,"minute":p5Function,"millis":p5Function,"month":p5Function,"second":p5Function,"year":p5Function,"plane":p5Function,"box":p5Function,"sphere":p5Function,"cylinder":p5Function,"cone":p5Function,"ellipsoid":p5Function,"torus":p5Function,"orbitControl":p5Function,"debugMode":p5Function,"noDebugMode":p5Function,"ambientLight":p5Function,"specularColor":p5Function,"directionalLight":p5Function,"pointLight":p5Function,"lights":p5Function,"lightFalloff":p5Function,"spotLight":p5Function,"noLights":p5Function,"loadModel":p5Function,"model":p5Function,"loadShader":p5Function,"createShader":p5Function,"shader":p5Function,"resetShader":p5Function,"normalMaterial":p5Function,"texture":p5Function,"textureMode":p5Function,"textureWrap":p5Function,"ambientMaterial":p5Function,"emissiveMaterial":p5Function,"specularMaterial":p5Function,"shininess":p5Function,"camera":p5Function,"perspective":p5Function,"ortho":p5Function,"frustum":p5Function,"createCamera":p5Function,"setCamera":p5Function,"setAttributes":p5Function,"sampleRate":p5Function,"freqToMidi":p5Function,"midiToFreq":p5Function,"soundFormats":p5Function,"getAudioContext":p5Function,"userStartAudio":p5Function,"loadSound":p5Function,"createConvolver":p5Function,"setBPM":p5Function,"saveSound":p5Function}; 
exports.p5FunctionKeywords = p5FunctionKeywords;
exports.p5VariableKeywords = p5VariableKeywords;
