var img2
var ShipTracer = function(setting){
  this.canvasObject = setting.canvasObject
  this.imageInput = setting.imageInput
  this.imageInputOnChange = setting.imageInputOnChange

  this.ctx = this.canvasObject.getContext('2d')
  this.ctx.font = '15px Arial'
  this.ctx.textAlign= 'center'
  this.ctx.fillText("No image loaded...", this.canvasObject.width/2, this.canvasObject.height/2)
  this.img = null
  this.img2x = 1

  this.currentPosition = {x:0,y:0}

  var that = this
  this.canvasObject.addEventListener('mousedown', function(e){
    var rect = this.getBoundingClientRect();

    /*console.log((e.offsetX / e.target.offsetWidth * this.width) - (this.width / 2))
    console.log((e.offsetY / e.target.offsetHeight * this.height) - (this.height / 2))*/

    // Convert rescalled mouse click to original
    var click = {x:e.offsetX * (this.width / e.target.offsetWidth), y:e.offsetY * (this.height / e.target.offsetHeight)}
    console.log(click)

    // Move the center (0, 0) to the center of the image. Each pixel is half a pixel
    click.x = 0.5 * (click.x - 0.5 * this.width)
    click.y = 0.5 * (click.y - 0.5 * this.height)

    // Round the coordinate
    that.currentPosition.x = Math.round(click.x * 100) / 100
    that.currentPosition.y = Math.round(click.y * 100) / 100
  })

  this.imageInput.addEventListener('change', function(e){
    that.img = new Image
    that.img.src = URL.createObjectURL(e.target.files[0])
    that.img.onload = function (){
      that.canvasObject.width = that.img2x * that.img.width
      that.canvasObject.height = that.img2x * that.img.height

      that.ctx.drawImage(that.img,0,0,this.width*that.img2x,this.height*that.img2x)
      that.canvasObject.classList.add('loaded')
    }

    // Check if the file is @2x
    var fileName = e.target.files[0].name
    if(fileName.lastIndexOf('@2x') == fileName.lastIndexOf('.') - 3){
      that.img2x = 1
    }else{
      that.img2x = 2
    }

    if(typeof that.imageInputOnChange === 'function')
    that.imageInputOnChange()
  })
}
