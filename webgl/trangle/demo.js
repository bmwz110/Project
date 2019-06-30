var canvas = document.getElementById('myCanvas')
var gl = canvas.getContext('webgl')

// 创建一个上层的program，以绑定顶点着色器和片元着色器，从而将着色器加载到canvas要执行的程序段里
var program = gl.createProgram()

var VSHADER_SHURCE, FSHADER_SOURCE

// 着色器(shader)创建函数
function createShader (gl, sourceCode, type) {
  // 创建着色器
  var shader = gl.createShader(type)
  // 给shader传入代码
  gl.sourceCode(shader, sourceCode)
  // 编译代码
  gl.compileShader(shader)
  return shader
}

// 定义顶点着色器
var vertexShader = createShader(gl, VSHADER_SHURCE, gl.VSHADER_SHURCE)
// 定义片元着色器
var fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FSHADER_SOURCE)

// 将program和着色器绑定
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)

// 给context绑定上一个program
gl.linkProgram(program)
gl.useProgram(program)