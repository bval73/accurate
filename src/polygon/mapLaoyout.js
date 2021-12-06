var map = tt.map({

    key: process.env.REACT_APP_TOMTOM_API_KEY,
    container: 'map',
    zoom: 10.5,
    center: [-82.390443,28.214687],
    dragPan: !isMobileOrTablet()
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());
map.on('load', function() {
    map.addLayer({
        'id': 'overlay',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[-82.493891,28.251387],[-82.493863,28.251414],[-82.493615,28.251624],[-82.493486,28.251708],[-82.493342,28.251803],[-82.49322,28.251853],[-82.4931,28.251885],[-82.492935,28.251896],[-82.492732,28.251861],[-82.490834,28.251492],[-82.490466,28.251421],[-82.48926,28.251163],[-82.488964,28.251133],[-82.488741,28.251144],[-82.488491,28.251184],[-82.486164,28.251829],[-82.484915,28.252184],[-82.484689,28.252229],[-82.484442,28.252271],[-82.484253,28.252267],[-82.484043,28.252224],[-82.483664,28.252127],[-82.483365,28.252045],[-82.483195,28.251999],[-82.482623,28.251853],[-82.482329,28.25174],[-82.481523,28.251311],[-82.481272,28.251262],[-82.481134,28.25127],[-82.480974,28.25133],[-82.478989,28.253617],[-82.478567,28.254132],[-82.477843,28.25497],[-82.477701,28.255106],[-82.477292,28.255369],[-82.476144,28.256078],[-82.475419,28.256545],[-82.474686,28.256994],[-82.474502,28.257072],[-82.474163,28.257115],[-82.47374,28.257144],[-82.473617,28.257161],[-82.473545,28.257189],[-82.473505,28.257244],[-82.473559,28.25743],[-82.473408,28.257114],[-82.473303,28.256937],[-82.473129,28.256641],[-82.472706,28.256021],[-82.472426,28.255657],[-82.471771,28.255013],[-82.471099,28.254497],[-82.469965,28.253674],[-82.469265,28.253167],[-82.467165,28.251646],[-82.466465,28.25114],[-82.46615,28.250912],[-82.465208,28.250229],[-82.464894,28.250002],[-82.464404,28.249812],[-82.4632,28.248825],[-82.462816,28.248504],[-82.462474,28.248221],[-82.46219,28.247924],[-82.461837,28.247463],[-82.461583,28.247013],[-82.461518,28.246872],[-82.461411,28.246636],[-82.46135,28.246441],[-82.461304,28.246294],[-82.461231,28.246077],[-82.461208,28.246009],[-82.461149,28.245703],[-82.461104,28.245406],[-82.46107,28.245181],[-82.46102,28.244849],[-82.460966,28.244481],[-82.460737,28.242901],[-82.460663,28.242383],[-82.460562,28.241684],[-82.460433,28.241742],[-82.460323,28.241787],[-82.459488,28.242132],[-82.459149,28.242266],[-82.45821,28.242629],[-82.455392,28.243718],[-82.454454,28.244082],[-82.454162,28.244246],[-82.453967,28.244393],[-82.453777,28.244565],[-82.453281,28.245464],[-82.452208,28.247414],[-82.451945,28.247976],[-82.451625,28.248524],[-82.451451,28.24876],[-82.451176,28.249026],[-82.450994,28.249184],[-82.450454,28.249655],[-82.45015,28.249961],[-82.450125,28.249994],[-82.44999,28.250179],[-82.449796,28.250752],[-82.449594,28.25176],[-82.449208,28.251677],[-82.448596,28.251564],[-82.448355,28.25154],[-82.448293,28.251534],[-82.448038,28.251536],[-82.447731,28.251595],[-82.445082,28.252563],[-82.444773,28.252668],[-82.444388,28.2528],[-82.443957,28.252903],[-82.44355,28.252943],[-82.443299,28.252944],[-82.442842,28.252906],[-82.44237,28.252805],[-82.441981,28.252664],[-82.441935,28.252648],[-82.441655,28.252519],[-82.441379,28.252347],[-82.44119,28.252213],[-82.440037,28.251212],[-82.439303,28.250569],[-82.439142,28.250379],[-82.438995,28.250172],[-82.438852,28.249927],[-82.438611,28.24947],[-82.438567,28.249385],[-82.438018,28.248319],[-82.437976,28.248239],[-82.437828,28.247961],[-82.437414,28.247169],[-82.437047,28.246467],[-82.436909,28.246203],[-82.436786,28.245987],[-82.436629,28.24575],[-82.435761,28.244806],[-82.435413,28.244456],[-82.434903,28.243942],[-82.43331,28.242317],[-82.432599,28.241567],[-82.432418,28.241335],[-82.432232,28.241056],[-82.431756,28.240304],[-82.431642,28.240113],[-82.430437,28.237527],[-82.430109,28.236844],[-82.429864,28.236291],[-82.429684,28.235885],[-82.429499,28.235536],[-82.429325,28.235262],[-82.429178,28.235078],[-82.428992,28.234878],[-82.428584,28.23448],[-82.42812,28.234035],[-82.427411,28.233355],[-82.426367,28.232309],[-82.42611,28.232052],[-82.425874,28.231747],[-82.425765,28.23156],[-82.425695,28.231353],[-82.425649,28.23104],[-82.425626,28.230711],[-82.425289,28.230727],[-82.425179,28.230733],[-82.424913,28.230765],[-82.424657,28.230861],[-82.424433,28.230969],[-82.424346,28.231035],[-82.424165,28.231176],[-82.424097,28.231259],[-82.42402,28.231352],[-82.423961,28.231426],[-82.42392,28.231497],[-82.423826,28.231658],[-82.423766,28.231763],[-82.423702,28.231872],[-82.423484,28.232183],[-82.423461,28.232217],[-82.423403,28.232279],[-82.423189,28.232505],[-82.422925,28.232703],[-82.422841,28.232748],[-82.422619,28.232869],[-82.422157,28.233041],[-82.421631,28.233146],[-82.421185,28.23321],[-82.420937,28.23327],[-82.42073,28.233341],[-82.420694,28.233354],[-82.42053,28.233437],[-82.420321,28.233594],[-82.420112,28.233735],[-82.420038,28.233791],[-82.419819,28.233958],[-82.419746,28.234015],[-82.419678,28.234066],[-82.419475,28.234222],[-82.419408,28.234274],[-82.419137,28.234476],[-82.418903,28.234701],[-82.418666,28.234965],[-82.418546,28.2351],[-82.418395,28.235329],[-82.418273,28.235518],[-82.417764,28.236331],[-82.417412,28.236895],[-82.417456,28.236919],[-82.417503,28.236937],[-82.417778,28.237043],[-82.417886,28.237066],[-82.417694,28.237374],[-82.41705,28.238413],[-82.417026,28.238453],[-82.414417,28.241245],[-82.413832,28.241916],[-82.413338,28.242483],[-82.412847,28.243157],[-82.412844,28.242554],[-82.412836,28.240746],[-82.412834,28.240144],[-82.412832,28.239769],[-82.412828,28.238669],[-82.412827,28.238644],[-82.412814,28.238322],[-82.412812,28.23827],[-82.412773,28.237338],[-82.412733,28.236354],[-82.412682,28.235115],[-82.412615,28.233484],[-82.4132,28.232346],[-82.415617,28.227651],[-82.417333,28.226237],[-82.418869,28.222466],[-82.418021,28.21671],[-82.417472,28.216111],[-82.413371,28.211638],[-82.412916,28.211141],[-82.412639,28.210839],[-82.412492,28.208477],[-82.41234,28.206031],[-82.413992,28.201237],[-82.414103,28.2009],[-82.414349,28.200197],[-82.414692,28.199225],[-82.414507,28.198551],[-82.413598,28.195224],[-82.413453,28.195147],[-82.413021,28.194916],[-82.412878,28.194839],[-82.41101,28.193839],[-82.409496,28.19303],[-82.406664,28.191458],[-82.405436,28.190787],[-82.403577,28.189773],[-82.403567,28.189682],[-82.403538,28.189409],[-82.403529,28.189319],[-82.403563,28.189253],[-82.403663,28.189065],[-82.403743,28.188914],[-82.40372,28.188453],[-82.403605,28.188255],[-82.403531,28.188128],[-82.403445,28.188019],[-82.403405,28.187969],[-82.403344,28.187892],[-82.40329,28.187817],[-82.403254,28.187766],[-82.403155,28.187627],[-82.403107,28.187585],[-82.402867,28.187377],[-82.402547,28.187163],[-82.402495,28.187128],[-82.402363,28.187019],[-82.402403,28.186995],[-82.402469,28.186955],[-82.402583,28.186901],[-82.403074,28.186673],[-82.403265,28.186591],[-82.403495,28.186494],[-82.403351,28.186232],[-82.403293,28.186127],[-82.40313,28.185841],[-82.40309,28.185727],[-82.403067,28.185563],[-82.403066,28.185413],[-82.403097,28.184783],[-82.403166,28.183869],[-82.403191,28.182769],[-82.403222,28.181721],[-82.403217,28.181123],[-82.403227,28.180745],[-82.403247,28.179407],[-82.403237,28.178088],[-82.403239,28.177359],[-82.403243,28.176237],[-82.403245,28.17551],[-82.403249,28.174736],[-82.403256,28.173088],[-82.403279,28.172511],[-82.403341,28.171864],[-82.403341,28.171321],[-82.4033,28.171175],[-82.410512,28.171213],[-82.412389,28.171223],[-82.41703,28.171247],[-82.417775,28.171248],[-82.417789,28.171249],[-82.418398,28.17125],[-82.420086,28.171256],[-82.420717,28.171258],[-82.421629,28.171261],[-82.421657,28.171261],[-82.421927,28.171261],[-82.422064,28.171262],[-82.422243,28.171262],[-82.422594,28.171263],[-82.424592,28.171269],[-82.425322,28.171271],[-82.427849,28.171278],[-82.428168,28.17128],[-82.429219,28.171177],[-82.430216,28.171163],[-82.431894,28.17114],[-82.432434,28.171086],[-82.432928,28.171098],[-82.433516,28.171148],[-82.434005,28.17126],[-82.434478,28.17138],[-82.434486,28.171386],[-82.435627,28.171432],[-82.436047,28.171449],[-82.437642,28.171491],[-82.437794,28.171495],[-82.437809,28.171496],[-82.438251,28.171515],[-82.438267,28.171516],[-82.438404,28.17152],[-82.438581,28.171525],[-82.439112,28.17154],[-82.43929,28.171545],[-82.439981,28.171564],[-82.442054,28.171624],[-82.442746,28.171644],[-82.442886,28.171647],[-82.44331,28.171658],[-82.443451,28.171662],[-82.444671,28.171701],[-82.444804,28.171702],[-82.449089,28.171689],[-82.454517,28.171699],[-82.455383,28.171706],[-82.457229,28.171759],[-82.45859,28.171779],[-82.461229,28.171819],[-82.461461,28.171823],[-82.461702,28.171828],[-82.461797,28.17183],[-82.46189,28.17183],[-82.463518,28.171842],[-82.464128,28.171846],[-82.464344,28.171847],[-82.466257,28.171859],[-82.466635,28.171862],[-82.46703,28.171864],[-82.467723,28.171871],[-82.469423,28.171888],[-82.473872,28.171933],[-82.474056,28.171935],[-82.475455,28.171957],[-82.475938,28.171964],[-82.477078,28.171981],[-82.478474,28.171992],[-82.478708,28.171993],[-82.479443,28.171999],[-82.480135,28.172117],[-82.481446,28.172172],[-82.481698,28.172171],[-82.482049,28.172177],[-82.482401,28.172183],[-82.483686,28.172206],[-82.483736,28.172206],[-82.484545,28.172206],[-82.484911,28.172214],[-82.487305,28.172267],[-82.491009,28.172349],[-82.491104,28.172348],[-82.491306,28.172345],[-82.491705,28.172342],[-82.491914,28.172346],[-82.492117,28.172351],[-82.492244,28.172353],[-82.492627,28.172359],[-82.492755,28.172362],[-82.492786,28.173736],[-82.492382,28.17526],[-82.491997,28.176715],[-82.49162,28.179393],[-82.491475,28.180871],[-82.490826,28.182599],[-82.490245,28.183776],[-82.490135,28.184001],[-82.489186,28.185657],[-82.488996,28.186426],[-82.488297,28.18643],[-82.48826,28.18643],[-82.486406,28.186437],[-82.486053,28.186449],[-82.485318,28.186475],[-82.485321,28.186703],[-82.48533,28.18739],[-82.485334,28.187619],[-82.485317,28.189341],[-82.485291,28.192038],[-82.485275,28.194508],[-82.485275,28.194624],[-82.485238,28.19588],[-82.485228,28.19623],[-82.484945,28.196049],[-82.484097,28.195506],[-82.483815,28.195325],[-82.483135,28.194882],[-82.482637,28.194568],[-82.481974,28.194161],[-82.481577,28.193946],[-82.481149,28.193752],[-82.481013,28.193699],[-82.480687,28.193572],[-82.480244,28.193446],[-82.479747,28.193318],[-82.479676,28.193306],[-82.479217,28.193235],[-82.478686,28.193182],[-82.478133,28.193168],[-82.477931,28.193175],[-82.477347,28.193199],[-82.477297,28.193208],[-82.477151,28.193237],[-82.477102,28.193247],[-82.476562,28.193329],[-82.475895,28.193453],[-82.475324,28.193561],[-82.474665,28.193678],[-82.474132,28.193763],[-82.474005,28.193784],[-82.473314,28.193843],[-82.472541,28.193848],[-82.472255,28.193828],[-82.471794,28.193798],[-82.471407,28.193768],[-82.471038,28.193712],[-82.470602,28.193621],[-82.470419,28.193583],[-82.469654,28.193376],[-82.469317,28.193261],[-82.468896,28.193118],[-82.468914,28.200568],[-82.468918,28.200643],[-82.468906,28.200666],[-82.468881,28.200691],[-82.468837,28.200704],[-82.46881,28.200712],[-82.468768,28.2007],[-82.468577,28.200675],[-82.468459,28.200757],[-82.468167,28.201009],[-82.467961,28.201179],[-82.467871,28.201256],[-82.46775,28.201368],[-82.467633,28.201534],[-82.467588,28.201673],[-82.467561,28.201817],[-82.467549,28.202015],[-82.46756,28.202453],[-82.467586,28.20265],[-82.467653,28.202884],[-82.467731,28.203091],[-82.467905,28.203381],[-82.468472,28.204568],[-82.468073,28.205185],[-82.468083,28.205211],[-82.46782,28.205703],[-82.468227,28.205703],[-82.468558,28.205704],[-82.468577,28.205797],[-82.468608,28.205858],[-82.468645,28.205885],[-82.468633,28.205929],[-82.468658,28.206012],[-82.468751,28.206188],[-82.468763,28.20632],[-82.468832,28.206457],[-82.468856,28.206551],[-82.468888,28.206601],[-82.468919,28.206678],[-82.468969,28.20679],[-82.468978,28.206809],[-82.469055,28.20698],[-82.469086,28.207079],[-82.469155,28.207206],[-82.469248,28.207305],[-82.469391,28.207426],[-82.469819,28.207546],[-82.469925,28.207623],[-82.470105,28.207728],[-82.47015,28.207758],[-82.470323,28.207876],[-82.470615,28.20814],[-82.470962,28.20841],[-82.471056,28.208476],[-82.471192,28.208531],[-82.471304,28.208536],[-82.471354,28.208558],[-82.471478,28.208553],[-82.471497,28.208553],[-82.47167,28.208542],[-82.471795,28.208514],[-82.471829,28.208503],[-82.472055,28.208437],[-82.472136,28.208393],[-82.472236,28.208316],[-82.472335,28.208272],[-82.47236,28.208245],[-82.472422,28.2082],[-82.47267,28.20781],[-82.472688,28.207761],[-82.472884,28.207822],[-82.472986,28.207854],[-82.473176,28.207959],[-82.473334,28.208152],[-82.473367,28.208193],[-82.47342,28.208384],[-82.473569,28.208409],[-82.473855,28.208977],[-82.474528,28.209412],[-82.474816,28.209462],[-82.475926,28.209656],[-82.476082,28.20987],[-82.476057,28.210768],[-82.475799,28.211218],[-82.476059,28.212022],[-82.47606,28.212755],[-82.475732,28.213414],[-82.475501,28.21388],[-82.474898,28.215101],[-82.474899,28.21562],[-82.474561,28.215626],[-82.473548,28.215644],[-82.473211,28.215651],[-82.472458,28.215665],[-82.472328,28.21566],[-82.469682,28.215573],[-82.468801,28.215544],[-82.468801,28.215665],[-82.468801,28.216028],[-82.468801,28.21615],[-82.4688,28.216416],[-82.4688,28.217213],[-82.4688,28.21748],[-82.468799,28.217712],[-82.468796,28.21841],[-82.468796,28.218643],[-82.468796,28.218894],[-82.468797,28.219336],[-82.468798,28.21965],[-82.468799,28.219757],[-82.468797,28.219902],[-82.469462,28.220682],[-82.471457,28.223021],[-82.472122,28.223802],[-82.473889,28.226124],[-82.47443,28.226835],[-82.477926,28.231052],[-82.479369,28.23295],[-82.481136,28.235274],[-82.481178,28.235328],[-82.481306,28.235492],[-82.481349,28.235547],[-82.48142,28.235642],[-82.481635,28.235929],[-82.481707,28.236025],[-82.484142,28.239096],[-82.48448,28.239522],[-82.48849,28.244461],[-82.491094,28.247669],[-82.491549,28.248229],[-82.493345,28.250441],[-82.49402,28.251272],[-82.493891,28.251387]]]
                }
            }
        },
        'layout': {},
        'paint': {
            'fill-color': '#db356c',
            'fill-opacity': 0.5,
            'fill-outline-color': 'black'
        }
    });
});
