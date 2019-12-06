(function () {

    "use strict";
    // TODO: Add your ion access token from cesium.com/ion/

     Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZTdlNGQxNy03MjJjLTQ2ZjItYjc3MC0zZmMzOWRkZTZkNDYiLCJpZCI6MzczMSwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTUzODY1MjA0OH0.cy2FnkM4c7dUFQJrrAtKOQtJyFuN1UrLMiBAwUjbs0k';
     Cesium.BingMapsApi.defaultAccessTokenKey ='AtnrXO-GaWfQWtvkf7fq4WHB0bQ7ncFVvLmVS5oAytmnTEVfFnzzTulmkjpqFV3N';
    //////////////////////////////////////////////////////////////////////////
    // Creating the Viewer
    //////////////////////////////////////////////////////////////////////////


    var viewer = new Cesium.Viewer('cesiumContainer');

    //////////////////////////////////////////////////////////////////////////
    // Loading Imagery
    //////////////////////////////////////////////////////////////////////////

    // // Remove default base layer
    //    viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

    // Add imagery map
            
    //  viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3954 }));
    
     ///chinese rod map
    //viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider                              
    //({      url : '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'}));      
	

    //////////////////////////////////////////////////////////////////////////
    // Loading Terrain
    //////////////////////////////////////////////////////////////////////////

    // // Load Cesium World terrain 
     /*
     viewer.terrainProvider = Cesium.createWorldTerrain({
         requestWaterMask : true, // required for water effects
         requestVertexNormals : true // required for terrain lighting
     });
    // // Enable depth testing so things behind the terrain disappear.
     viewer.scene.globe.depthTestAgainstTerrain = true;
   */
    //////////////////////////////////////////////////////////////////////////
    // Configuring the Scene
    //////////////////////////////////////////////////////////////////////////

    // // Enable lighting based on sun/moon positions
    // viewer.scene.globe.enableLighting = true;

    // // Create an initial camera view
     var initialPosition = new Cesium.Cartesian3.fromDegrees(120.26115, 23.006,  1000000);
     var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0);
     var homeCameraView = 
     {
             destination : initialPosition,
             orientation : 
             {
             heading : initialOrientation.heading,
             pitch : initialOrientation.pitch,
             roll : initialOrientation.roll
             }
     };
	
   
    // // Set the initial view
     viewer.scene.camera.setView(homeCameraView);

    // // Add some camera flight animation options
     homeCameraView.duration = 2.0;
     homeCameraView.maximumHeight = 2000;
     homeCameraView.pitchAdjustHeight = 2000;
     homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
    // // Override the default home button
     viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
         e.cancel = true;
         viewer.scene.camera.flyTo(homeCameraView);
     });

    // // Set up clock and timeline.
     viewer.clock.shouldAnimate = true; // default
     viewer.clock.startTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:00:00Z");
     viewer.clock.stopTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:20:00Z");
     viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:00:00Z");
     viewer.clock.multiplier = 2; // sets a speedup
     viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER; // tick computation mode
     viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; // loop at the end
     viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime); // set visible range

    ////////////////////////////////////////////////
    //add 3d models in map
    ////////////////////////////////////////////////	 
	 
    var scene = viewer.scene;
	 
    var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(120.26115, 23.006,0));
    
    var model1 = scene.primitives.add(Cesium.Model.fromGltf(
    {
          url : '../Source/SampleData/Models/shanghai_city_scene/scene.gltf',
          modelMatrix : modelMatrix,
          scale : 0.1,
          maximumScreenSpaceError: 16 // default value
		  
          
    }));
      
    var scene = viewer.scene;
      
    var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(121.549171,25.028870, 0));
      
    var model2 = scene.primitives.add(Cesium.Model.fromGltf(
    {
          url : '../Source/SampleData/Models/pbr_textured_building/scene.gltf',
          modelMatrix : modelMatrix,
          scale : 0.2,
          maximumScreenSpaceError: 16 // default value
		  
          
    }));
    var scene = viewer.scene;
    var position=Cesium.Cartesian3.fromDegrees(120.208000,23.032460,0);
    var heading=0;
    var pitching=0;
    var roll=4.71;
    var hpr =new Cesium.HeadingPitchRoll(heading,pitching,roll);
    var modelMatrix=Cesium.Transforms.headingPitchRollToFixedFrame(position,hpr);

    var model3 = scene.primitives.add(Cesium.Model.fromGltf(
    {
          url : '../Source/SampleData/Models/test1/scene.gltf',
          modelMatrix : modelMatrix,
          scale :0.5,
          maximumScreenSpaceError:16 //defult value 
    }));
    


    /////////////////////////////////////////////
    //building menu                            //
    /////////////////////////////////////////////
   
    //The dropdown button function
       
    // Get the button, and when the user clicks on it, execute myFunction
    document.getElementById("myBtn").addEventListener("click",myFunction);

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() 
    {
        document.getElementById("myDropdown").classList.toggle("show");
    };


   document.getElementById("日本建築").addEventListener("click",myfunction)
   function myfunction(){
        viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(120.26115, 23.006,100)
    })
    };

   
   document.getElementById("台北大樓").addEventListener("click",myfunction2)
   function myfunction2(){
        viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(121.549171,25.028870,1000)
    })
    };

   
   document.getElementById("活動中心").addEventListener("click",myfunction3)
   function myfunction3(){
        viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(120.20800,23.032478,20)
    })
    };

	 
    
     
    //////////////////////////////////////////////////////
    //create building information                       //
    //////////////////////////////////////////////////////
    
    ///japan building
     var iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];
     iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms'); 

     var pinBuilder = new Cesium.PinBuilder();
     var bluePin = viewer.entities.add(
     {
        name:"日本建築",
        description: '<iframe width="390" height="315" src="https://www.youtube.com/embed/XDJiMvZc3iw?rel=0&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        position : Cesium.Cartesian3.fromDegrees(120.26115, 23.006,0),
        billboard : 
        {
                image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
     });

    ///taipei building
    var iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];
     iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms'); 

     var pinBuilder = new Cesium.PinBuilder();
     var bluePin = viewer.entities.add(
     {
        name:"台北大樓",
        description: '<table border="1"><tr><td>樓層</td><td>10</td></tr><tr><td>負責人資訊</td><td>王小明,電話:012345678</td></tr><tr><td>地址</td><td>106台北市大安區仁愛路四段169號</td></tr></table>',
        position : Cesium.Cartesian3.fromDegrees(121.549171,25.02700000,80),
        billboard : 
        {
                image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
     });

    ///本計畫第一次測試地點
    var iframe = document.getElementsByClassName('cesium-infoBox-iframe')[0];
     iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms'); 

     var pinBuilder = new Cesium.PinBuilder();
     var planPin = viewer.entities.add(
     {
     name:"活動中心全景圖",
     description: '<iframe src="https://www.360cities.net/embed_iframe/panorama_tmp-8049" width="500" height="400" frameborder="0" bgcolor="#000000" target="_blank" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe><br/><a title="Panorama photos of 安西里活動中心 on 360cities.net" href="https://www.360cities.net/image/panorama_tmp-8049">安西里活動中心</a>',
     position : Cesium.Cartesian3.fromDegrees(120.20800,23.032478,10),
     billboard : 
     {
                image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM
     }
     });

     var PinBuilder = new Cesium.PinBuilder();
     var planPin2 = viewer.entities.add(
     {
     name:"活動中心直播影片",
     description:'<iframe width="500" height="400" src="https://www.youtube.com/embed/Bs1ZcKhnxSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
     position: Cesium.Cartesian3.fromDegrees(120.20800,23.032500,10),
     billboard:
     {
                image : pinBuilder.fromColor(Cesium.Color.LIME, 48).toDataURL(),
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM
     }          
     });


    //ajax
    /////////////////////////////////////////////
    //hospital information                     //
    /////////////////////////////////////////////
    
    
        
    (function() 
        {
            var httpRequest;
            document.getElementById("ajaxButton").addEventListener('click', makeRequest);
            function makeRequest() 
            {
                httpRequest = new XMLHttpRequest();
                if (!httpRequest) 
                {
                    alert('Giving up :( Cannot create an XMLHTTP instance');
                    return false;
                }
                httpRequest.onreadystatechange = alertContents;
                httpRequest.open('GET', 'Source/hospital.json');
                httpRequest.send();
            }
            function alertContents() 
               {
                if (httpRequest.readyState === XMLHttpRequest.DONE) 
                    {
                    if (httpRequest.status === 200) 
                        {
                            alert(httpRequest.responseText);
                        } else {alert('There was a problem with the request.')}
                    }
                }
        }())    ;
   
    //hp1=醫療中心等級醫院

    const hp1name = [   //0            1          2         3           4
                        "台大醫院","台大兒醫","三軍總醫院","臺北榮總","國泰醫院",
                        //5            6          7         8         9
                        "馬偕台北","馬偕兒醫","新光醫院","亞東醫院","馬偕淡水",
                        //10                  11           12          13         14
                        "萬芳醫院(台北)","台北長庚醫院","林口長庚醫院","台中榮總","中國兒醫",
                        //15           16     17       18        19
                        "中山醫院","中國附醫","彰基","彰基兒醫","成大醫院",
                        //20                     21                22          23            24
                        "奇美醫院(台南南區)","奇美醫院(台南永康)","高雄榮總","高雄長庚醫院","高醫大附醫",
                        //25
                        "慈濟醫院(花蓮)"

                    ];
    const hp1position = [];
    hp1position[0] = new Cesium.Cartesian3.fromDegrees(121.518969,25.040678,0);
    hp1position[1] = new Cesium.Cartesian3.fromDegrees(121.518703,25.044171,0);
    hp1position[2] = new Cesium.Cartesian3.fromDegrees(121.592263,25.071708,0);
    hp1position[3] = new Cesium.Cartesian3.fromDegrees(121.520134,25.120336,0);
    hp1position[4] = new Cesium.Cartesian3.fromDegrees(121.553638,25.036883,0); 
    hp1position[5] = new Cesium.Cartesian3.fromDegrees(121.522216,25.058677,0); 
    hp1position[6] = new Cesium.Cartesian3.fromDegrees(120.988108,24.778289,0);
    hp1position[7] = new Cesium.Cartesian3.fromDegrees(121.520155,25.096404,0);
    hp1position[8] = new Cesium.Cartesian3.fromDegrees(121.452663,24.996988,0);
    hp1position[9] = new Cesium.Cartesian3.fromDegrees(121.461892,25.138886,0);
    hp1position[10] = new Cesium.Cartesian3.fromDegrees(121.558140,24.999901,0);
    hp1position[11] = new Cesium.Cartesian3.fromDegrees(121.549625,25.055415,0);
    hp1position[12] = new Cesium.Cartesian3.fromDegrees(121.367572,25.061085,0);
    hp1position[13] = new Cesium.Cartesian3.fromDegrees(120.604603,24.184795,0);
    hp1position[14] = new Cesium.Cartesian3.fromDegrees(120.988108,24.778289,0);
    hp1position[15] = new Cesium.Cartesian3.fromDegrees(121.549910,25.036681,0);
    hp1position[16] = new Cesium.Cartesian3.fromDegrees(120.680514,24.157747,0);
    hp1position[17] = new Cesium.Cartesian3.fromDegrees(120.544682,24.071142,0);
    hp1position[18] = new Cesium.Cartesian3.fromDegrees(120.543507,24.071160,0);
    hp1position[19] = new Cesium.Cartesian3.fromDegrees(120.219567,23.001965,0);
    hp1position[20] = new Cesium.Cartesian3.fromDegrees(120.221937,23.020777,0);
    hp1position[21] = new Cesium.Cartesian3.fromDegrees(120.221837,23.020756,0);
    hp1position[22] = new Cesium.Cartesian3.fromDegrees(120.322504,22.677537,0);
    hp1position[23] = new Cesium.Cartesian3.fromDegrees(120.356838,22.650063,0);
    hp1position[24] = new Cesium.Cartesian3.fromDegrees(120.309777,22.647373,0);
    hp1position[25] = new Cesium.Cartesian3.fromDegrees(121.592515,23.995097,0);


    //Create a red pin representing a hospital from the maki icon set.
    var pinBuilder = new Cesium.PinBuilder();

    var hospital1Pin0=viewer.entities.add({
        
        name: hp1name[0],
        position: hp1position[0],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>1582</td></tr><tr><td>急性病床數</td><td>2107</td></tr><tr><td>急性保險病床比率</td><td>75.08%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    }); 
    var hospital1Pin1=viewer.entities.add({
        
        name: hp1name[1],
        position: hp1position[1],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>1582</td></tr><tr><td>急性病床數</td><td>2107</td></tr><tr><td>急性保險病床比率</td><td>75.08%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin2=viewer.entities.add({
        
        name: hp1name[2],
        position: hp1position[2],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>1256</td></tr><tr><td>急性病床數</td><td>1659</td></tr><tr><td>急性保險病床比率</td><td>75.71%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin3=viewer.entities.add({
        
        name: hp1name[3],
        position: hp1position[3],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>2058</td></tr><tr><td>急性病床數</td><td>2736</td></tr><tr><td>急性保險病床比率</td><td>75.22%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin4=viewer.entities.add({
        
        name: hp1name[4],
        position: hp1position[4],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>419</td></tr><tr><td>急性病床數</td><td>665</td></tr><tr><td>急性保險病床比率</td><td>63.01%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin5=viewer.entities.add({
        
        name: hp1name[5],
        position: hp1position[5],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>478</td></tr><tr><td>急性病床數</td><td>795</td></tr><tr><td>急性保險病床比率</td><td>60.13%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin6=viewer.entities.add({
        
        name: hp1name[6],
        position: hp1position[6],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>134</td></tr><tr><td>急性病床數</td><td>192</td></tr><tr><td>急性保險病床比率</td><td>69.79%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin7=viewer.entities.add({
        
        name: hp1name[7],
        position: hp1position[7],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>389</td></tr><tr><td>急性病床數</td><td>647</td></tr><tr><td>急性保險病床比率</td><td>60.12%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin8=viewer.entities.add({
        
        name: hp1name[8],
        position: hp1position[8],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>749</td></tr><tr><td>急性病床數</td><td>1100</td></tr><tr><td>急性保險病床比率</td><td>68.09%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin9=viewer.entities.add({
        
        name: hp1name[9],
        position: hp1position[9],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>790</td></tr><tr><td>急性病床數</td><td>1009</td></tr><tr><td>急性保險病床比率</td><td>78.30%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin10=viewer.entities.add({
        
        name: hp1name[10],
        position: hp1position[10],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>407</td></tr><tr><td>急性病床數</td><td>631</td></tr><tr><td>急性保險病床比率</td><td>64.50%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin11=viewer.entities.add({
        
        name: hp1name[11],
        position: hp1position[11],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>94</td></tr><tr><td>急性病床數</td><td>145</td></tr><tr><td>急性保險病床比率</td><td>64.83%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin12=viewer.entities.add({
        
        name: hp1name[12],
        position: hp1position[12],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>2300</td></tr><tr><td>急性病床數</td><td>3111</td></tr><tr><td>急性保險病床比率</td><td>73.93%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });

    var hospital1Pin13=viewer.entities.add({
        
        name: hp1name[13],
        position: hp1position[13],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>1035</td></tr><tr><td>急性病床數</td><td>1354</td></tr><tr><td>急性保險病床比率</td><td>76.44%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin14=viewer.entities.add({
        
        name: hp1name[14],
        position: hp1position[14],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>178</td></tr><tr><td>急性病床數</td><td>216</td></tr><tr><td>急性保險病床比率</td><td>82.41%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin15=viewer.entities.add({
        
        name: hp1name[15],
        position: hp1position[15],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>97</td></tr><tr><td>急性病床數</td><td>161</td></tr><tr><td>急性保險病床比率</td><td>60.25%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin16=viewer.entities.add({
        
        name: hp1name[16],
        position: hp1position[16],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>1163</td></tr><tr><td>急性病床數</td><td>1660</td></tr><tr><td>急性保險病床比率</td><td>70.06%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });

    var hospital1Pin17=viewer.entities.add({
        
        name: hp1name[17],
        position: hp1position[17],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>784</td></tr><tr><td>急性病床數</td><td>1083</td></tr><tr><td>急性保險病床比率</td><td>72.39%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin18=viewer.entities.add({
        
        name: hp1name[18],
        position: hp1position[18],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>180</td></tr><tr><td>急性病床數</td><td>198</td></tr><tr><td>急性保險病床比率</td><td>90.91%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin19=viewer.entities.add({
        
        name: hp1name[19],
        position: hp1position[19],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>895</td></tr><tr><td>急性病床數</td><td>1193</td></tr><tr><td>急性保險病床比率</td><td>75.02%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin20=viewer.entities.add({
        
        name: hp1name[20],
        position: hp1position[20],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>645</td></tr><tr><td>急性病床數</td><td>1073</td></tr><tr><td>急性保險病床比率</td><td>60.11%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin21=viewer.entities.add({
        
        name: hp1name[21],
        position: hp1position[21],
        //description:'<table border="1"><tr><td>急性保險病床數</td><td>645</td></tr><tr><td>急性病床數</td><td>1073</td></tr><tr><td>急性保險病床比率</td><td>60.11%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin22=viewer.entities.add({
        
        name: hp1name[22],
        position: hp1position[22],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>999</td></tr><tr><td>急性病床數</td><td>1319</td></tr><tr><td>急性保險病床比率</td><td>75.74%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin23=viewer.entities.add({
        
        name: hp1name[23],
        position: hp1position[23],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>1378</td></tr><tr><td>急性病床數</td><td>1880</td></tr><tr><td>急性保險病床比率</td><td>73.30%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin24=viewer.entities.add({
        
        name: hp1name[24],
        position: hp1position[24],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>954</td></tr><tr><td>急性病床數</td><td>1471</td></tr><tr><td>急性保險病床比率</td><td>64.85%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });
    var hospital1Pin25=viewer.entities.add({
        
        name: hp1name[25],
        position: hp1position[25],
        description:'<table border="1"><tr><td>急性保險病床數</td><td>468</td></tr><tr><td>急性病床數</td><td>666</td></tr><tr><td>急性保險病床比率</td><td>70.27%</td></tr></table>',
        billboard:
        {
            image:'../Source/Images/hospital/yellostar.png',
            scale : 0.2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
           
        }

    });


}());

  
     
    
