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

String.prototype.capitalisation = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

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
  this.explosions = []

  this.ship_class_id = 0
  this.ship_explosion_id = 0

  this.outfit_list = [{type:'power',name:'Nanotech Battery'},
  {type:'power',name:'Antimatter Core'},
  {type:'turrets',name:'Quarg Skylance'},
  {type:'turrets',name:'Quarg Anti-Missile'},
  {type:'engines',name:'Medium Graviton Thruster'},
  {type:'engines',name:'Medium Graviton Steering'},
  {type:'systems',name:'Quantum Shield Generator'},
  {type:'systems',name:'Cooling Ducts'},
  {type:'systems',name:'Water Coolant System'},
  {type:'systems',name:'Liquid Nitrogen Cooler'},
  {type:'systems',name:'Liquid Helium Cooler'},
  {type:'systems',name:'D14-RN Shield Generator'},
  {type:'systems',name:'D23-QP Shield Generator'},
  {type:'systems',name:'D41-HY Shield Generator'},
  {type:'systems',name:'D67-TM Shield Generator'},
  {type:'systems',name:'D94-YV Shield Generator'},
  {type:'systems',name:'S-270 Regenerator'},
  {type:'systems',name:'S-970 Regenerator'},
  {type:'systems',name:'Small Radar Jammer'},
  {type:'systems',name:'Large Radar Jammer'},
  {type:'systems',name:'Ramscoop'},
  {type:'systems',name:'Catalytic Ramscoop'},
  {type:'systems',name:'Hyperdrive'},
  {type:'systems',name:'Scram Drive'},
  {type:'systems',name:'Jump Drive'},
  {type:'systems',name:'Cargo Scanner'},
  {type:'systems',name:'Outfit Scanner'},
  {type:'systems',name:'Surveillance Pod'},
  {type:'systems',name:'Cloaking Device'},
  {type:'systems',name:'Mass Expansion'},
  {type:'systems',name:'Cargo Expansion'},
  {type:'systems',name:'Bunk Room'},
  {type:'systems',name:'Small Bunk Room'},
  {type:'systems',name:'Fuel Pod'},
  {type:'systems',name:'Interference Plating'},
  {type:'systems',name:'Meteor Missile Box'},
  {type:'systems',name:'Sidewinder Missile Rack'},
  {type:'systems',name:'Javelin Storage Crate'},
  {type:'systems',name:'Heavy Rocket Rack'},
  {type:'systems',name:'Torpedo Storage Rack'},
  {type:'systems',name:'Typhoon Storage Tube'},
  {type:'systems',name:'Bullet Boxes'},
  {type:'special',name:'Local Map'},
  {type:'special',name:'Pilot\'s License'},
  {type:'power',name:'Generator (Candle Class)'},
  {type:'power',name:'Generator (Furnace Class)'},
  {type:'power',name:'Generator (Inferno Class)'},
  {type:'power',name:'Plasma Core'},
  {type:'power',name:'Double Plasma Core'},
  {type:'power',name:'Triple Plasma Core'},
  {type:'systems',name:'Korath Piercer Rack'},
  {type:'systems',name:'Korath Mine Rack'},
  {type:'systems',name:'Small Heat Shunt'},
  {type:'systems',name:'Large Heat Shunt'},
  {type:'systems',name:'Systems Core (Small)'},
  {type:'systems',name:'Systems Core (Medium)'},
  {type:'systems',name:'Systems Core (Large)'},
  {type:'systems',name:'Command Center'},
  {type:'systems',name:'Reasoning Node'},
  {type:'systems',name:'Control Transceiver'},
  {type:'engines',name:'Thruster (Asteroid Class)'},
  {type:'engines',name:'Thruster (Comet Class)'},
  {type:'engines',name:'Thruster (Lunar Class)'},
  {type:'engines',name:'Thruster (Planetary Class)'},
  {type:'engines',name:'Thruster (Stellar Class)'},
  {type:'engines',name:'Steering (Asteroid Class)'},
  {type:'engines',name:'Steering (Comet Class)'},
  {type:'engines',name:'Steering (Lunar Class)'},
  {type:'engines',name:'Steering (Planetary Class)'},
  {type:'engines',name:'Steering (Stellar Class)'},
  {type:'guns',name:'Sunbeam'},
  {type:'turrets',name:'Sunbeam Turret'},
  {type:'turrets',name:'Dual Sunbeam Turret'},
  {type:'turrets',name:'Wanderer Anti-Missile'},
  {type:'secondary weapons',name:'Thunderhead Launcher'},
  {type:'ammunition',name:'Thunderhead Missile'},
  {type:'systems',name:'Thunderhead Storage Array'},
  {type:'power',name:'Small Biochemical Cell'},
  {type:'power',name:'Large Biochemical Cell'},
  {type:'power',name:'Red Sun Reactor'},
  {type:'power',name:'Yellow Sun Reactor'},
  {type:'power',name:'White Sun Reactor'},
  {type:'power',name:'Blue Sun Reactor'},
  {type:'systems',name:'Bright Cloud Shielding'},
  {type:'systems',name:'Dark Storm Shielding'},
  {type:'systems',name:'Wanderer Ramscoop'},
  {type:'systems',name:'Wanderer Heat Sink'},
  {type:'engines',name:'Type 1 Radiant Thruster'},
  {type:'engines',name:'Type 2 Radiant Thruster'},
  {type:'engines',name:'Type 3 Radiant Thruster'},
  {type:'engines',name:'Type 4 Radiant Thruster'},
  {type:'engines',name:'Type 1 Radiant Steering'},
  {type:'engines',name:'Type 2 Radiant Steering'},
  {type:'engines',name:'Type 3 Radiant Steering'},
  {type:'engines',name:'Type 4 Radiant Steering'},
  {type:'guns',name:'Pulse Cannon'},
  {type:'turrets',name:'Pulse Turret'},
  {type:'guns',name:'Ion Cannon'},
  {type:'ammunition',name:'Railgun Slug'},
  {type:'secondary weapons',name:'Railgun'},
  {type:'ammunition',name:'Hai Tracker'},
  {type:'secondary weapons',name:'Hai Tracker Pod'},
  {type:'systems',name:'Tracker Storage Pod'},
  {type:'turrets',name:'Bullfrog Anti-Missile'},
  {type:'turrets',name:'Chameleon Anti-Missile'},
  {type:'systems',name:'Hai Corundum Regenerator'},
  {type:'systems',name:'Hai Diamond Regenerator'},
  {type:'systems',name:'Hai Williwaw Cooling'},
  {type:'power',name:'Hai Chasm Batteries'},
  {type:'power',name:'Hai Fissure Batteries'},
  {type:'power',name:'Hai Gorge Batteries'},
  {type:'power',name:'Hai Ravine Batteries'},
  {type:'power',name:'Hai Valley Batteries'},
  {type:'power',name:'Boulder Reactor'},
  {type:'power',name:'Geode Reactor'},
  {type:'power',name:'Pebble Core'},
  {type:'power',name:'Supercapacitor'},
  {type:'power',name:'LP036a Battery Pack'},
  {type:'power',name:'LP072a Battery Pack'},
  {type:'power',name:'LP144a Battery Pack'},
  {type:'power',name:'LP288a Battery Pack'},
  {type:'power',name:'LP576a Battery Pack'},
  {type:'power',name:'KP-6 Photovoltaic Panel'},
  {type:'power',name:'KP-6 Photovoltaic Array'},
  {type:'power',name:'nGVF-AA Fuel Cell'},
  {type:'power',name:'nGVF-BB Fuel Cell'},
  {type:'power',name:'nGVF-CC Fuel Cell'},
  {type:'power',name:'nGVF-DD Fuel Cell'},
  {type:'power',name:'nGVF-EE Fuel Cell'},
  {type:'power',name:'RT-I Radiothermal'},
  {type:'power',name:'S3 Thermionic'},
  {type:'power',name:'NT-200 Nucleovoltaic'},
  {type:'power',name:'Dwarf Core'},
  {type:'power',name:'Fission Reactor'},
  {type:'power',name:'Breeder Reactor'},
  {type:'power',name:'Fusion Reactor'},
  {type:'power',name:'Armageddon Core'},
  {type:'power',name:'Stack Core'},
  {type:'engines',name:'Afterburner'},
  {type:'engines',name:'Ionic Afterburner'},
  {type:'engines',name:'X1050 Ion Engines'},
  {type:'engines',name:'X1700 Ion Thruster'},
  {type:'engines',name:'X2700 Ion Thruster'},
  {type:'engines',name:'X3700 Ion Thruster'},
  {type:'engines',name:'X4700 Ion Thruster'},
  {type:'engines',name:'X5700 Ion Thruster'},
  {type:'engines',name:'X1200 Ion Steering'},
  {type:'engines',name:'X2200 Ion Steering'},
  {type:'engines',name:'X3200 Ion Steering'},
  {type:'engines',name:'X4200 Ion Steering'},
  {type:'engines',name:'X5200 Ion Steering'},
  {type:'engines',name:'Chipmunk Plasma Thruster'},
  {type:'engines',name:'Greyhound Plasma Thruster'},
  {type:'engines',name:'Impala Plasma Thruster'},
  {type:'engines',name:'Orca Plasma Thruster'},
  {type:'engines',name:'Tyrant Plasma Thruster'},
  {type:'engines',name:'Chipmunk Plasma Steering'},
  {type:'engines',name:'Greyhound Plasma Steering'},
  {type:'engines',name:'Impala Plasma Steering'},
  {type:'engines',name:'Orca Plasma Steering'},
  {type:'engines',name:'Tyrant Plasma Steering'},
  {type:'engines',name:'A120 Atomic Thruster'},
  {type:'engines',name:'A250 Atomic Thruster'},
  {type:'engines',name:'A370 Atomic Thruster'},
  {type:'engines',name:'A520 Atomic Thruster'},
  {type:'engines',name:'A860 Atomic Thruster'},
  {type:'engines',name:'A125 Atomic Steering'},
  {type:'engines',name:'A255 Atomic Steering'},
  {type:'engines',name:'A375 Atomic Steering'},
  {type:'engines',name:'A525 Atomic Steering'},
  {type:'engines',name:'A865 Atomic Steering'},
  {type:'engines',name:'AR120 Reverse Thruster'},
  {type:'special',name:'Aluminum'},
  {type:'special',name:'Copper'},
  {type:'special',name:'Gold'},
  {type:'special',name:'Iron'},
  {type:'special',name:'Lead'},
  {type:'special',name:'Neodymium'},
  {type:'special',name:'Platinum'},
  {type:'special',name:'Silicon'},
  {type:'special',name:'Silver'},
  {type:'special',name:'Titanium'},
  {type:'special',name:'Tungsten'},
  {type:'special',name:'Uranium'},
  {type:'guns',name:'Energy Blaster'},
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
  {type:'secondary weapons',name:'Flamethrower'},
  {type:'ammunition',name:'Meteor Missile'},
  {type:'secondary weapons',name:'Meteor Missile Launcher'},
  {type:'ammunition',name:'Sidewinder Missile'},
  {type:'secondary weapons',name:'Sidewinder Missile Launcher'},
  {type:'ammunition',name:'Javelin'},
  {type:'secondary weapons',name:'Javelin Pod'},
  {type:'ammunition',name:'Torpedo'},
  {type:'secondary weapons',name:'Torpedo Launcher'},
  {type:'ammunition',name:'Typhoon Torpedo'},
  {type:'secondary weapons',name:'Typhoon Launcher'},
  {type:'ammunition',name:'Heavy Rocket'},
  {type:'secondary weapons',name:'Heavy Rocket Launcher'},
  {type:'secondary weapons',name:'Nuclear Missile'},
  {type:'ammunition',name:'Gatling Gun Ammo'},
  {type:'secondary weapons',name:'Gatling Gun'},
  {type:'turrets',name:'Korath Grab-Strike'},
  {type:'turrets',name:'Korath Banisher'},
  {type:'turrets',name:'Korath Warder'},
  {type:'guns',name:'Korath Fire-Lance'},
  {type:'guns',name:'Korath Repeater'},
  {type:'turrets',name:'Korath Repeater Turret'},
  {type:'ammunition',name:'Korath Piercer'},
  {type:'secondary weapons',name:'Korath Piercer Launcher'},
  {type:'guns',name:'Korath Detainer'},
  {type:'ammunition',name:'Korath Mine'},
  {type:'secondary weapons',name:'Korath Minelayer'},
  {type:'turrets',name:'Korath Disruptor'},
  {type:'guns',name:'Korath Slicer'},
  {type:'turrets',name:'Korath Slicer Turret'},
  {type:'turrets',name:'Drak Distancer'},
  {type:'turrets',name:'Drak Draining Field'},
  {type:'turrets',name:'Drak Anti-Missile Field'},
  {type:'turrets',name:'Drak Turret'},
  {type:'guns',name:'Drak Antimatter Cannon'},
  {type:'guns',name:'Nano Strike'}]

  this.ship_class = ['Transport', 'Light Freighter', 'Heavy Freighter', 'Interceptor', 'Light Warship', 'Medium Warship', 'Heavy Warship', 'Fighter', 'Drone']
  this.explosion_list = ['plasma explosion',
  'tiny explosion',
  'small explosion',
  'medium explosion',
  'large explosion',
  'huge explosion',
  'nuke explosion',
  'final explosion small',
  'final explosion medium',
  'final explosion large']

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

  this.listFromObject = function(target, obj, errorMsg){
    target = document.getElementById(target)

    target.dataset.ecount = obj.length
    target.innerHTML = ''

    /* Display array */
    for(var i = 0; i < obj.length; i++){
      var html_string = '<li>'+obj[i].n+' x '+obj[i].c+'</li>'

      var d = document.createElement('div')
      d.innerHTML = html_string
      d = d.firstChild

      var btn = document.createElement('button')
      btn.innerHTML = 'Remove'
      btn.classList.add('danger')
      btn.style.marginLeft = '10px'
      var that = this
      btn.addEventListener('click', function(){
        that.removeEquipment(target.id,i,obj)
      })
      d.appendChild(btn)
      target.appendChild(d)
    }

    obj.length === 0 ? target.innerHTML = '<li>'+errorMsg+'</li>' : target
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
  gc += 'category "' + this.ship_class[this.ship_class_id] + '"\n\t\t' // cost
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
    if(this.outfits[i].name != ''){
      gc += '\t"' + this.outfits[i].name + '"' // outfit name
      this.outfits[i].hasOwnProperty('property') ? gc += ' ' + this.outfits[i].property + '\n\t' : gc += '\n\t' // outfit property
    }
  }

  // Generate mountpoints with its attached outfit
  for(var i = 0; i < this.mountPoints.length; i++){
    if(this.mountPoints[i].x === undefined || this.mountPoints[i].y === undefined)
    break;

    gc += this.mountPoints[i].type+' ' + this.mountPoints[i].x+ ' ' + this.mountPoints[i].y // mountpoint data
    document.getElementsByClassName('essm-ship-outfit-c')[i].value == '' ? gc+='' : gc+=' "'+document.getElementsByClassName('essm-ship-outfit-c')[i].value+'"' // mountpoint attachment data
    gc += '\n\t' // hit force
  }

  for(var i = 0; i < this.explosions.length; i++){
    this.explosions[i].n.includes('final explosion') == true ? gc += '"final explode" ' : gc += 'explode '
    gc += '"'+this.explosions[i].n+'"'
    this.explosions[i].n.includes('final explosion') == true ? gc += '' : gc += ' '+this.explosions[i].c
    gc += '\n\t'
  }

  gc += 'description "' + this.getVal('#'+this.shipParam.desc).replace(/\n|\t/g,'') + '"' // ship description
  document.getElementById(this.codeGenID).innerHTML = gc
}

App.prototype.listItems = function(target_type,callback){
  var elementList = []

  /* Generate option */
  for(var i = 0; i < this.outfit_list.length; i++){
    if(this.outfit_list[i].type.toUpperCase() === target_type.toUpperCase() || this.outfit_list[i].type.toUpperCase() === (target_type+'s').toUpperCase()){
      elementList.push(this.outfit_list[i].name)
    }
  }

  if(typeof callback == 'function')
    callback(elementList,target_type)

  return elementList
}

App.prototype.addEquipment = function(target,equipment,count){
  if(count == 0){
    return
  }

  this.equipments.push({n:equipment,c:count})
  this.listFromObject(target,this.equipments ,'Empty list...')
}

App.prototype.addExplosion = function(target,equipment,count){
  if(equipment === 'Select Explosion...' || count == 0){
    return
  }
  this.explosions.push({n:equipment,c:count})
  this.listFromObject(target,this.explosions ,'Empty list...')
}

App.prototype.removeEquipment = function(target,index,obj){
  obj.pop(index)
  this.listFromObject(target,obj ,'Empty list...')
}

App.prototype.test = function(){
  console.log('loaded')
}

App.prototype.getShipClasses = function (callback) {
  if(typeof callback == 'function')
    callback(this.ship_class)
};

App.prototype.getShipClassList = function (callback) {
  if(typeof callback == 'function')
    callback(this.explosion_list)
};
