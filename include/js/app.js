/*
app.js

Endless Sky Ship Pack Maker application script

Copyright (c) 2016 stanislaus krisna

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var App = function(setting){
  this.tabClass = setting.tabClass
  this.hiddenClass = setting.hiddenClass
  this.codeGenID = setting.codeGenID
  this.shipParam = setting.shipParam
  this.hardpoint = setting.hardpoint
  this.mountPointContainer = setting.mountPointContainer
  
  this.outfits = []
  this.explosions = []
  this.mountPoints = []
  
  this.equipments = []
  
  this.outfit_list = [{type:'engine',name:'Afterburner'},
                      {type:'engine',name:'Ionic Afterburner'},
                      {type:'engine',name:'X1050 Ion Engines'},
                      {type:'engine',name:'X1700 Ion Thruster'},
                      {type:'engine',name:'X2700 Ion Thruster'},
                      {type:'engine',name:'X3700 Ion Thruster'},
                      {type:'engine',name:'X4700 Ion Thruster'},
                      {type:'engine',name:'X5700 Ion Thruster'},
                      {type:'engine',name:'X1200 Ion Steering'},
                      {type:'engine',name:'X2200 Ion Steering'},
                      {type:'engine',name:'X3200 Ion Steering'},
                      {type:'engine',name:'X4200 Ion Steering'},
                      {type:'engine',name:'X5200 Ion Steering'},
                      {type:'engine',name:'Chipmunk Plasma Thruster'},
                      {type:'engine',name:'Greyhound Plasma Thruster'},
                      {type:'engine',name:'Impala Plasma Thruster'},
                      {type:'engine',name:'Orca Plasma Thruster'},
                      {type:'engine',name:'Tyrant Plasma Thruster'},
                      {type:'engine',name:'Chipmunk Plasma Steering'},
                      {type:'engine',name:'Greyhound Plasma Steering'},
                      {type:'engine',name:'Impala Plasma Steering'},
                      {type:'engine',name:'Orca Plasma Steering'},
                      {type:'engine',name:'Tyrant Plasma Steering'},
                      {type:'engine',name:'A120 Atomic Thruster'},
                      {type:'engine',name:'A250 Atomic Thruster'},
                      {type:'engine',name:'A370 Atomic Thruster'},
                      {type:'engine',name:'A520 Atomic Thruster'},
                      {type:'engine',name:'A860 Atomic Thruster'},
                      {type:'engine',name:'A125 Atomic Steering'},
                      {type:'engine',name:'A255 Atomic Steering'},
                      {type:'engine',name:'A375 Atomic Steering'},
                      {type:'engine',name:'A525 Atomic Steering'},
                      {type:'engine',name:'A865 Atomic Steering'},
                      {type:'engine',name:'AR120 Reverse Thruster'}, // End of engine list
                      {type:'other',name:'Cooling Ducts'},
                      {type:'other',name:'Water Coolant System'},
                      {type:'other',name:'Liquid Nitrogen Cooler'},
                      {type:'other',name:'Liquid Helium Cooler'},
                      {type:'other',name:'D14-RN Shield Generator'},
                      {type:'other',name:'D23-QP Shield Generator'},
                      {type:'other',name:'D41-HY Shield Generator'},
                      {type:'other',name:'D67-TM Shield Generator'},
                      {type:'other',name:'D94-YV Shield Generator'},
                      {type:'other',name:'S-270 Regenerator'},
                      {type:'other',name:'S-970 Regenerator'},
                      {type:'other',name:'Small Radar Jammer'},
                      {type:'other',name:'Large Radar Jammer'},
                      {type:'other',name:'Ramscoop'},
                      {type:'other',name:'Catalytic Ramscoop'},
                      {type:'other',name:'Hyperdrive'},
                      {type:'other',name:'Scram Drive'},
                      {type:'other',name:'Jump Drive'},
                      {type:'other',name:'Cargo Scanner'},
                      {type:'other',name:'Outfit Scanner'},
                      {type:'other',name:'Surveillance Pod'},
                      {type:'other',name:'Cloaking Device'},
                      {type:'other',name:'Mass Expansion'},
                      {type:'other',name:'Cargo Expansion'},
                      {type:'other',name:'Bunk Room'},
                      {type:'other',name:'Small Bunk Room'},
                      {type:'other',name:'Fuel Pod'},
                      {type:'other',name:'Interference Plating'},
                      {type:'other',name:'Laser Rifle'},
                      {type:'other',name:'Fragmentation Grenades'},
                      {type:'other',name:'Security Station'},
                      {type:'other',name:'Nerve Gas'},
                      {type:'other',name:'Local Map'},
                      {type:'other',name:'Pilot\'s License'},{type:'guns',name:'Energy Blaster'},
                      {type:'guns',name:'Modified Blaster'},
                      {type:'turrets',name:'Blaster Turret'},
                      {type:'turrets',name:'Modified Blaster Turret'},
                      {type:'turrets',name:'Quad Blaster Turret'},
                      {type:'guns',name:'Beam Laser'},
                      {type:'guns',name:'Heavy Laser'},
                      {type:'guns',name:'Electron Beam'},
                      {type:'turrets',name:'Laser Turret'},
                      {type:'turrets',name:'Heavy Laser Turret'},
                      {type:'turrets',name:'Electron Turret'},
                      {type:'turrets',name:'Anti-Missile Turret'},
                      {type:'turrets',name:'Heavy Anti-Missile Turret'},
                      {type:'guns',name:'Particle Cannon'},
                      {type:'guns',name:'Proton Gun'},
                      {type:'guns',name:'Plasma Cannon'},
                      {type:'turrets',name:'Plasma Turret'},
                      {type:'other',name:'Flamethrower'},
                      {type:'other',name:'Meteor Missile'},
                      {type:'other',name:'Meteor Missile Launcher'},
                      {type:'other',name:'Sidewinder Missile'},
                      {type:'other',name:'Sidewinder Missile Launcher'},
                      {type:'other',name:'Javelin'},
                      {type:'other',name:'Javelin Pod'},
                      {type:'other',name:'Torpedo'},
                      {type:'other',name:'Torpedo Launcher'},
                      {type:'other',name:'Typhoon Torpedo'},
                      {type:'other',name:'Typhoon Launcher'},
                      {type:'other',name:'Heavy Rocket'},
                      {type:'other',name:'Heavy Rocket Launcher'},
                      {type:'other',name:'Nuclear Missile'},
                      {type:'other',name:'Gatling Gun Ammo'},
                      {type:'other',name:'Gatling Gun'}
                      ]
  
  this.getVal = function(arg,id){
    /*
    Return selected element value.
    
    Use # as the first character of arg to select element by ID
    Use . as the first character of arg to select element by class then use id to get the element id
    other than # or ., function will select the tag name then use id to get the element id
    */
    
    var ele
    var ele_val = ''
    switch (arg[0]){
      case '.':
      ele = document.getElementsByClassName(arg.slice(1))[id]
      break;
      
      case '#':
      ele = document.getElementById(arg.slice(1))
      break;
      
      default:
      ele = document.getElementsByTagName(arg)[id]
      break;
    }
    
    switch(ele.type){
     case 'text':
     ele_val = ele.value
     break;
     
     case 'textarea':
     ele_val = ele.value
     break;
     
     case 'checkbox':
     ele_val = ele.checked
    }
    
    switch (ele_val){
      case "":
      return '0'
      
      default:
      return ele_val
    }
  }
  
  var a = this
  document.getElementById(this.hardpoint).addEventListener('keyup', function(){
    // a.loadHardpoint()
  })
  
  this.listEquipment = function(target){
    target = document.getElementById(target)
  
    target.dataset.ecount = this.equipments.length
    target.innerHTML = ''
    
    /* Display array */
    for(var i = 0; i < this.equipments.length; i++){
      var html_string = '<li>'+this.equipments[i].n+' x '+this.equipments[i].c+'</li>'
      
      var d = document.createElement('div')
      d.innerHTML = html_string
      d = d.firstChild
      
      var btn = document.createElement('button')
      btn.innerHTML = 'Remove'
      btn.classList.add('danger')
      btn.style.marginLeft = '10px'
      var that = this
      btn.addEventListener('click', function(){
        that.removeEquipment(target.id,i)
      })
      d.appendChild(btn)
      target.appendChild(d)
    }
    
    this.equipments.length === 0 ? target.innerHTML = '<li>No equipment added</li>' : target
  }
}

App.prototype.toggleTab = function(tabCount){
  var tabList = document.getElementsByClassName(this.tabClass)
  
  for(var i = 0; i < tabList.length; i++){
    if(i === tabCount){
      tabList[i].classList.remove(this.hiddenClass)
    }else{
      tabList[i].classList.add(this.hiddenClass)
    }
  }
}

App.prototype.loadHardpoint = function(){
  var val = this.getVal('#'+this.hardpoint).replace(/\t/g,'').split(/\n/g)
  var tmp_html = {}
  
  for(var i = 0; i < val.length; i++){
    var tmp = val[i].split(/\ /g)
    val[i] = {type:tmp[0],x:tmp[1],y:tmp[2]}
    
    tmp_html[val[i].type.toLowerCase()] === undefined ? tmp_html[val[i].type.toLowerCase()] = '' : tmp_html[val[i].type.toLowerCase()] += ''
    var options = ''
    this.listItems(val[i].type.toLowerCase(),function(e){
      for(var i = 0; i < e.length; i++){
        options += '<option value="'+e[i]+'">'+e[i]+'</option>'
      }
    })
    tmp_html[val[i].type.toLowerCase()] += '<li>'+val[i].type+' '+val[i].x+' '+val[i].y+' <select class="essm-ship-outfit-c"><option disabled selected style="font-weight:bold;" value="">Select loadout</option>'+options+'</select></li>'
  }
  this.mountPoints = val
  for(var i = 0; i < val.length; i++){
    if(document.getElementById(this.mountPointContainer[val[i].type.toLowerCase()]) !== null)
    document.getElementById(this.mountPointContainer[val[i].type.toLowerCase()]).innerHTML = tmp_html[val[i].type.toLowerCase()]
  }
}

App.prototype.generate = function(){
  var gc = ''
  gc += 'ship "' + this.getVal('#'+this.shipParam.name) + '"\n\t' // Write ship definition opening
  gc += 'sprite "ship/' + this.getVal('#'+this.shipParam.name) + '"\n\t' // sprite
  
  switch(this.getVal('#'+this.shipParam.can_disable)){
    case true:
      gc += '"never disabled"\n\t' // can be disabled
    break;
  }
  
  gc += 'attributes\n\t\t' // attributes
  gc += '"cost" ' + this.getVal('#'+this.shipParam.cost) + '\n\t\t' // cost
  gc += '"shields" ' + this.getVal('#'+this.shipParam.shields) + '\n\t\t' // attributes
  gc += '"hull" ' + this.getVal('#'+this.shipParam.hull) + '\n\t\t' // hull
  gc += '"required crew" ' + this.getVal('#'+this.shipParam.required_crew) + '\n\t\t' // required crew
  switch(this.getVal('#'+this.shipParam.can_automate)){
    case true:
      gc += '"automaton" 1\n\t\t' // can be disabled
    break;
  }
  gc += '"bunks" ' + this.getVal('#'+this.shipParam.bunks) + '\n\t\t' // bunks
  gc += '"mass" ' + this.getVal('#'+this.shipParam.mass) + '\n\t\t' // mass
  gc += '"drag" ' + this.getVal('#'+this.shipParam.drag) + '\n\t\t' // drag
  gc += '"heat dissipation" ' + this.getVal('#'+this.shipParam.heat_dissipation) + '\n\t\t' // heat dissipation
  gc += '"fuel capacity" ' + this.getVal('#'+this.shipParam.fuel) + '\n\t\t' // fuel capacity
  gc += '"cargo space" ' + this.getVal('#'+this.shipParam.cargo) + '\n\t\t' // cargo space
  gc += '"outfit space" ' + this.getVal('#'+this.shipParam.outfit) + '\n\t\t' // outfit space
  gc += '"weapon capacity" ' + this.getVal('#'+this.shipParam.weapon) + '\n\t\t' // weapon capacity
  gc += '"engine capacity" ' + this.getVal('#'+this.shipParam.engine) + '\n\t\t' // engine capacity
  gc += 'weapon\n\t\t\t' // weapon
  
  var sd = (parseInt(this.getVal('#'+this.shipParam.shields),10) + parseInt(this.getVal('#'+this.shipParam.hull),10)) / 10
  var hd = sd / 2
  var hf = sd + hd
  var br = sd / 10
  
  gc += '"blast radius" ' + br + '\n\t\t\t' // blast radius
  gc += '"shield damage" ' + sd + '\n\t\t\t' // shield damage
  gc += '"hull damage" ' + hd + '\n\t\t\t' // hull damage
  gc += '"hit force" ' + hf + '\n\t' // hit force
  
  // Clear print array
  this.outfits = []
  
  // Push mountpoint equipment to temp sorting array
  var mount_items = [];
  for(var i = 0; i < document.getElementsByClassName('essm-ship-outfit-c').length; i++){
    mount_items[document.getElementsByClassName('essm-ship-outfit-c')[i].value] === undefined ? mount_items[document.getElementsByClassName('essm-ship-outfit-c')[i].value] = 1 : mount_items[document.getElementsByClassName('essm-ship-outfit-c')[i].value] += 1
  }
  
  // Push mountpoint equipment temp sorting array to printing array
  for(prop in mount_items){
    this.outfits.push({name:prop,property:mount_items[prop]})
  }
  
  // Push equipment data to printing array (outfits)
  for(var i = 0; i < this.equipments.length; i++){
    this.outfits.push({name:this.equipments[i].n,property:this.equipments[i].c})
  }
  
  // List all selected outfits
  gc += 'outfits\n\t' // outfits
  for(var i = 0; i < this.outfits.length; i++){
    gc += '\t"' + this.outfits[i].name + '"' // outfit name
    this.outfits[i].hasOwnProperty('property') ? gc += ' ' + this.outfits[i].property + '\n\t' : gc += '\n\t' // outfit property
  }
  
  // Generate mountpoints with its attached outfit
  for(var i = 0; i < this.mountPoints.length; i++){
    gc += this.mountPoints[i].type+' ' + this.mountPoints[i].x+ ' ' + this.mountPoints[i].y // mountpoint data
    document.getElementsByClassName('essm-ship-outfit-c')[i].value == '' ? gc+='' : gc+=' "'+document.getElementsByClassName('essm-ship-outfit-c')[i].value+'"' // mountpoint attachment data
    gc += '\n\t' // hit force
  }
  
  gc += 'description "' + this.getVal('#'+this.shipParam.desc).replace(/\n|\t/g,'') + '"' // ship description
  document.getElementById(this.codeGenID).innerHTML = gc
}

App.prototype.listItems = function(target_type,callback){
  var elementList = []
  
  /* Generate option */
  for(var i = 0; i < this.outfit_list.length; i++){
    if(this.outfit_list[i].type === target_type || this.outfit_list[i].type === target_type+'s'){
      elementList.push(this.outfit_list[i].name)
    }
  }
  
  if(typeof callback == 'function')
    callback(elementList)
  
  return elementList
}

App.prototype.addEquipment = function(target,equipment,count){
  this.equipments.push({n:equipment,c:count})
  this.listEquipment(target)
}

App.prototype.removeEquipment = function(target,index){
  this.equipments.pop(index)
  this.listEquipment(target)
}

App.prototype.test = function(){
  console.log('loaded')
}