function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
     //5
     -0.5, 0.9,  
     -0.7, 0.9,
     -0.7, 0.6,
     -0.5, 0.6,
     -0.5, 0.2,
     -0.7, 0.2,

     //7
     0.25, 0.9, 
     0.5, 0.9, 
     0.39, 0.2,

     //A
     -0.5, -0.2, //.
     -0.7, -0.9, //pnjang
     -0.65, -0.85, //kecil

     -0.49, -0.2,
     -0.3, -0.9,
     -0.35, -0.85,

     //R
     0.25, -0.2, //top
     0.25, -0.25,
     0.5, -0.2,  
      
     0.25, -0.9,
     0.27, -0.9,
     0.27, -0.21,

     0.51, -0.91,
     0.49, -0.89,
     0.25, -0.5,

     0.51, -0.2,
     0.49, -0.24,
     0.25, -0.5,





      
     
      
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    //vertex shader
    var vertexShaderCode = `
    attribute vec2 aPosition;
    void main () {
      gl_PointSize = 10.0;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // fragment shader
    var fragmentShaderCode = `
         precision mediump float;
         void main() {
          gl_FragColor = vec4(1.0, 0.8, 0.5, 1.0);

         }
         `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    gl.clearColor(0.86, 0.49, 0.24, 1.0);
                  //red  green blue alpha
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINE_STRIP, 0, 6);
    gl.drawArrays(gl.LINE_STRIP, 6, 3);

    gl.drawArrays(gl.TRIANGLE_FAN, 9, 6);
    gl.drawArrays(gl.TRIANGLES, 15, 12);

    }