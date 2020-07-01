
window.onload = () => {
    let method = 'dynamic';

    // if you want to statically add places, de-comment following line:
    method = 'static';
    if (method === 'static') {
        let places = staticLoadPlaces();
        return renderPlaces(places);
    }

    if (method !== 'static') {
        // first get current user location
        return navigator.geolocation.getCurrentPosition(function (position) {

            // than use it to load from remote APIs some places nearby
            dynamicLoadPlaces(position.coords)
                .then((places) => {
                    renderPlaces(places);
                })
        },
            (err) => console.error('Error in retrieving position', err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 27000,
            }
        );
    }
};

function staticLoadPlaces() {
    return [
        {
        name: "4VIRI001",
        location: {
          lat:36.544693877981, // change here latitude if using static data
          lng:-5.3852950782196, // change here longitude if using static data
          }
        },
        {
        name: "4TERE001",
        location: {
          lat:36.544679285001, // change here latitude if using static data
          lng:-5.3855738764163, // change here longitude if using static data
          }
        },
        {
        name: "4RUDI001",
        location: {
          lat:36.545064432085, // change here latitude if using static data
          lng:-5.3861442136511, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA030",
        location: {
          lat:36.544631872253, // change here latitude if using static data
          lng:-5.3847905282138, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA029",
        location: {
          lat:36.54458616569, // change here latitude if using static data
          lng:-5.3848226330719, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA028",
        location: {
          lat:36.54453301541, // change here latitude if using static data
          lng:-5.3847763201541, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA027",
        location: {
          lat:36.544505100066, // change here latitude if using static data
          lng:-5.3848201416185, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA026",
        location: {
          lat:36.544522221163, // change here latitude if using static data
          lng:-5.3848653472145, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA025",
        location: {
          lat:36.544486191998, // change here latitude if using static data
          lng:-5.3848642398834, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA024",
        location: {
          lat:36.544458053246, // change here latitude if using static data
          lng:-5.3849192242641, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA023",
        location: {
          lat:36.544430584615, // change here latitude if using static data
          lng:-5.3849407196913, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA022",
        location: {
          lat:36.54437453041, // change here latitude if using static data
          lng:-5.3850395253136, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA021",
        location: {
          lat:36.544498398519, // change here latitude if using static data
          lng:-5.3851550310474, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA020",
        location: {
          lat:36.544470259636, // change here latitude if using static data
          lng:-5.3852100153234, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA019",
        location: {
          lat:36.544346391581, // change here latitude if using static data
          lng:-5.3850945095493, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA018",
        location: {
          lat:36.546065871365, // change here latitude if using static data
          lng:-5.3865436223931, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA017",
        location: {
          lat:36.545803989685, // change here latitude if using static data
          lng:-5.3865690776556, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA016",
        location: {
          lat:36.545820439436, // change here latitude if using static data
          lng:-5.3866477738454, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA015",
        location: {
          lat:36.545531535907, // change here latitude if using static data
          lng:-5.3866723975619, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA014",
        location: {
          lat:36.545209158936, // change here latitude if using static data
          lng:-5.3843167927022, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA013",
        location: {
          lat:36.545055588288, // change here latitude if using static data
          lng:-5.3843344136548, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA012",
        location: {
          lat:36.545027003095, // change here latitude if using static data
          lng:-5.3844117247561, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA011",
        location: {
          lat:36.545052908293, // change here latitude if using static data
          lng:-5.3844683704368, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA010",
        location: {
          lat:36.544917798896, // change here latitude if using static data
          lng:-5.3844642185659, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA009",
        location: {
          lat:36.544802035265, // change here latitude if using static data
          lng:-5.3857451985471, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA008",
        location: {
          lat:36.544819826377, // change here latitude if using static data
          lng:-5.3857569154437, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA007",
        location: {
          lat:36.544763548034, // change here latitude if using static data
          lng:-5.3858668839297, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA006",
        location: {
          lat:36.545093180726, // change here latitude if using static data
          lng:-5.3842573792624, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA005",
        location: {
          lat:36.545445419831, // change here latitude if using static data
          lng:-5.3860218899178, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA004",
        location: {
          lat:36.5454291304, // change here latitude if using static data
          lng:-5.3841336623256, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA003",
        location: {
          lat:36.545023796254, // change here latitude if using static data
          lng:-5.3854727688292, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA002",
        location: {
          lat:36.544892190216, // change here latitude if using static data
          lng:-5.3848432083575, // change here longitude if using static data
          }
        },
        {
        name: "4CAMA001",
        location: {
          lat:36.544789535921, // change here latitude if using static data
          lng:-5.3850187715581, // change here longitude if using static data
          }
        },
        {
        name: "4CALO005",
        location: {
          lat:36.545409921897, // change here latitude if using static data
          lng:-5.3850936902984, // change here longitude if using static data
          }
        },
        {
        name: "4CALO004",
        location: {
          lat:36.545393247698, // change here latitude if using static data
          lng:-5.385026157911, // change here longitude if using static data
          }
        },
        {
        name: "4CALO003",
        location: {
          lat:36.545364438654, // change here latitude if using static data
          lng:-5.3851146321658, // change here longitude if using static data
          }
        },
        {
        name: "4CALO002",
        location: {
          lat:36.545330196676, // change here latitude if using static data
          lng:-5.3850242198907, // change here longitude if using static data
          }
        },
        {
        name: "4CALO001",
        location: {
          lat:36.545300940832, // change here latitude if using static data
          lng:-5.3851350202653, // change here longitude if using static data
          }
        },
        {
        name: "4BOTR002",
        location: {
          lat:36.54539287155, // change here latitude if using static data
          lng:-5.3854952852881, // change here longitude if using static data
          }
        },
        {
        name: "4BOTR001",
        location: {
          lat:36.545348952292, // change here latitude if using static data
          lng:-5.3854380852213, // change here longitude if using static data
          }
        },
        {
        name: "4ALBE004",
        location: {
          lat:36.545621261091, // change here latitude if using static data
          lng:-5.3844411560124, // change here longitude if using static data
          }
        },
        {
        name: "4ALBE003",
        location: {
          lat:36.545658630281, // change here latitude if using static data
          lng:-5.3843752842815, // change here longitude if using static data
          }
        },
        {
        name: "4ALBE002",
        location: {
          lat:36.545697786024, // change here latitude if using static data
          lng:-5.3842201072166, // change here longitude if using static data
          }
        },
        {
        name: "4ALBE001",
        location: {
          lat:36.545760837079, // change here latitude if using static data
          lng:-5.3842220446097, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545893168295, // change here latitude if using static data
          lng:-5.3866165007699, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545105611995, // change here latitude if using static data
          lng:-5.3845370096239, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545087820755, // change here latitude if using static data
          lng:-5.3845252929536, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546138086541, // change here latitude if using static data
          lng:-5.386087870304, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546076376532, // change here latitude if using static data
          lng:-5.3860189521773, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546112852635, // change here latitude if using static data
          lng:-5.3859977336999, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546140321453, // change here latitude if using static data
          lng:-5.385976238225, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546105633223, // change here latitude if using static data
          lng:-5.3859081510908, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546160347349, // change here latitude if using static data
          lng:-5.3858763232768, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.5461035533, // change here latitude if using static data
          lng:-5.3855618147753, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546104223636, // change here latitude if using static data
          lng:-5.385528325155, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546086655952, // change here latitude if using static data
          lng:-5.3855054448944, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546114571565, // change here latitude if using static data
          lng:-5.3854616228291, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546244248439, // change here latitude if using static data
          lng:-5.3852868880475, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.5461372781, // change here latitude if using static data
          lng:-5.3852277491954, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546101695783, // change here latitude if using static data
          lng:-5.3852043152128, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546139065394, // change here latitude if using static data
          lng:-5.3851384434782, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546085021671, // change here latitude if using static data
          lng:-5.3851367821943, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546158420395, // change here latitude if using static data
          lng:-5.3850720179318, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545198200312, // change here latitude if using static data
          lng:-5.3862153468967, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545172519468, // change here latitude if using static data
          lng:-5.3861475375023, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54548010802, // change here latitude if using static data
          lng:-5.386089976503, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545410508121, // change here latitude if using static data
          lng:-5.3859649664959, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54613071059, // change here latitude if using static data
          lng:-5.3864562560774, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546148054549, // change here latitude if using static data
          lng:-5.3864902997621, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546129369386, // change here latitude if using static data
          lng:-5.3865232352945, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546102571088, // change here latitude if using static data
          lng:-5.3865112409716, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546110907754, // change here latitude if using static data
          lng:-5.3865450076111, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546092893198, // change here latitude if using static data
          lng:-5.3865444535235, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546011380618, // change here latitude if using static data
          lng:-5.3865642865061, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545939322395, // change here latitude if using static data
          lng:-5.3865620701488, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545931432803, // change here latitude if using static data
          lng:-5.3865059772354, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545771313547, // change here latitude if using static data
          lng:-5.386400522216, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545788657529, // change here latitude if using static data
          lng:-5.3864345657269, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545761412164, // change here latitude if using static data
          lng:-5.3864448977941, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545696796494, // change here latitude if using static data
          lng:-5.3865211005809, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545714811051, // change here latitude if using static data
          lng:-5.386521654655, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545742056421, // change here latitude if using static data
          lng:-5.3865113226204, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545838230444, // change here latitude if using static data
          lng:-5.3866594911111, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54578753988, // change here latitude if using static data
          lng:-5.3864903814964, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545787316348, // change here latitude if using static data
          lng:-5.38650154465, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545805554438, // change here latitude if using static data
          lng:-5.3864909355653, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545768407649, // change here latitude if using static data
          lng:-5.3865456431816, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545786422206, // change here latitude if using static data
          lng:-5.3865461972629, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545705356701, // change here latitude if using static data
          lng:-5.3865437039008, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545732154998, // change here latitude if using static data
          lng:-5.3865556981656, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545750393093, // change here latitude if using static data
          lng:-5.3865450891008, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545795876557, // change here latitude if using static data
          lng:-5.3865241479949, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545805107371, // change here latitude if using static data
          lng:-5.3865132618774, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.5458046603, // change here latitude if using static data
          lng:-5.3865355881891, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545704909625, // change here latitude if using static data
          lng:-5.3865660301833, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545750169555, // change here latitude if using static data
          lng:-5.3865562522485, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545768184111, // change here latitude if using static data
          lng:-5.3865568063319, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545786198668, // change here latitude if using static data
          lng:-5.3865573604158, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54581999234, // change here latitude if using static data
          lng:-5.3866701001593, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545713469823, // change here latitude if using static data
          lng:-5.3865886335102, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545749722476, // change here latitude if using static data
          lng:-5.3865785785436, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545767513492, // change here latitude if using static data
          lng:-5.3865902957822, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545731260838, // change here latitude if using static data
          lng:-5.386600350745, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545758059129, // change here latitude if using static data
          lng:-5.3866123450335, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545776297227, // change here latitude if using static data
          lng:-5.3866017359791, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545721806473, // change here latitude if using static data
          lng:-5.386622399985, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545794311783, // change here latitude if using static data
          lng:-5.3866022900736, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545812102796, // change here latitude if using static data
          lng:-5.3866140073248, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54579364115, // change here latitude if using static data
          lng:-5.386635779534, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545811655706, // change here latitude if using static data
          lng:-5.3866363336368, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545738926843, // change here latitude if using static data
          lng:-5.3866676066648, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545793417604, // change here latitude if using static data
          lng:-5.3866469426873, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545783739681, // change here latitude if using static data
          lng:-5.3866801550899, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545647736314, // change here latitude if using static data
          lng:-5.3867206517868, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54563917614, // change here latitude if using static data
          lng:-5.3866980484663, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545675428801, // change here latitude if using static data
          lng:-5.3866879935591, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54563962324, // change here latitude if using static data
          lng:-5.3866757222049, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545621832233, // change here latitude if using static data
          lng:-5.3866640049682, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545631286604, // change here latitude if using static data
          lng:-5.3866419557615, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545467590764, // change here latitude if using static data
          lng:-5.386715110619, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545494165491, // change here latitude if using static data
          lng:-5.3867382680101, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545520740213, // change here latitude if using static data
          lng:-5.3867614254173, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545530418154, // change here latitude if using static data
          lng:-5.3867282131369, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545530865258, // change here latitude if using static data
          lng:-5.3867058869072, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545503619874, // change here latitude if using static data
          lng:-5.3867162188486, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54548605242, // change here latitude if using static data
          lng:-5.3866933385166, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545504290525, // change here latitude if using static data
          lng:-5.3866827295152, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545532653634, // change here latitude if using static data
          lng:-5.3866165819838, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545505184712, // change here latitude if using static data
          lng:-5.386638077069, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545478162878, // change here latitude if using static data
          lng:-5.3866372459238, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545505855341, // change here latitude if using static data
          lng:-5.3866045877331, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545515756778, // change here latitude if using static data
          lng:-5.386560212323, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545470720384, // change here latitude if using static data
          lng:-5.3865588271262, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545470049769, // change here latitude if using static data
          lng:-5.3865923164481, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545386748814, // change here latitude if using static data
          lng:-5.3867014540153, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545405210468, // change here latitude if using static data
          lng:-5.3866796819312, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545414888386, // change here latitude if using static data
          lng:-5.386646469688, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545397544459, // change here latitude if using static data
          lng:-5.3866124263018, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545378635728, // change here latitude if using static data
          lng:-5.3866565245878, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545323027216, // change here latitude if using static data
          lng:-5.3867330038901, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545287445207, // change here latitude if using static data
          lng:-5.3867095695004, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545297123131, // change here latitude if using static data
          lng:-5.386676357311, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545332705147, // change here latitude if using static data
          lng:-5.386699791689, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545351390347, // change here latitude if using static data
          lng:-5.3866668565295, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545343500788, // change here latitude if using static data
          lng:-5.3866107640368, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545308142292, // change here latitude if using static data
          lng:-5.3865761666112, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545235860523, // change here latitude if using static data
          lng:-5.3865851133733, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545091520522, // change here latitude if using static data
          lng:-5.386591843806, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545025339939, // change here latitude if using static data
          lng:-5.3867461871346, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544990652119, // change here latitude if using static data
          lng:-5.3866781006876, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.5449172526, // change here latitude if using static data
          lng:-5.3867428624678, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544863432481, // change here latitude if using static data
          lng:-5.3867300371224, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544955740719, // change here latitude if using static data
          lng:-5.3866211773332, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544948521727, // change here latitude if using static data
          lng:-5.3865315960351, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544992887524, // change here latitude if using static data
          lng:-5.3865664703065, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545012019747, // change here latitude if using static data
          lng:-5.3865112091689, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544950980513, // change here latitude if using static data
          lng:-5.3864088026687, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546100507328, // change here latitude if using static data
          lng:-5.384813325971, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546111748335, // change here latitude if using static data
          lng:-5.3847019706723, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545681034141, // change here latitude if using static data
          lng:-5.3850573438089, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54553669413, // change here latitude if using static data
          lng:-5.3850640770821, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545563939393, // change here latitude if using static data
          lng:-5.3850537445485, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545539821592, // change here latitude if using static data
          lng:-5.384907793262, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545874208205, // change here latitude if using static data
          lng:-5.3848622208349, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54565803326, // change here latitude if using static data
          lng:-5.3848555765592, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545649696101, // change here latitude if using static data
          lng:-5.3848218102744, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545694062418, // change here latitude if using static data
          lng:-5.3848566839336, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54568572526, // change here latitude if using static data
          lng:-5.3848229176328, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545772000607, // change here latitude if using static data
          lng:-5.3850154598324, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545746542474, // change here latitude if using static data
          lng:-5.3849364871243, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545817037049, // change here latitude if using static data
          lng:-5.3850168441491, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546250727238, // change here latitude if using static data
          lng:-5.3849631543527, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546158571687, // change here latitude if using static data
          lng:-5.3846140490505, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546105421368, // change here latitude if using static data
          lng:-5.3845677352716, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546090086957, // change here latitude if using static data
          lng:-5.3844332230856, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.546021898801, // change here latitude if using static data
          lng:-5.3846880391756, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545949617115, // change here latitude if using static data
          lng:-5.3846969877504, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545803713524, // change here latitude if using static data
          lng:-5.3847818638826, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545970982058, // change here latitude if using static data
          lng:-5.3845300934813, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545943066778, // change here latitude if using static data
          lng:-5.3845739158229, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545824631859, // change here latitude if using static data
          lng:-5.3846372963036, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545823738414, // change here latitude if using static data
          lng:-5.3846819489986, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545553743053, // change here latitude if using static data
          lng:-5.384662481173, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545562303622, // change here latitude if using static data
          lng:-5.3846850842651, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545831108831, // change here latitude if using static data
          lng:-5.3843135642053, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545720117965, // change here latitude if using static data
          lng:-5.3844553639242, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545673071392, // change here latitude if using static data
          lng:-5.3845544483191, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545700316617, // change here latitude if using static data
          lng:-5.3845441155885, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545931752333, // change here latitude if using static data
          lng:-5.3842384664713, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545385508095, // change here latitude if using static data
          lng:-5.384512101173, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545230076672, // change here latitude if using static data
          lng:-5.3841722260654, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545257321869, // change here latitude if using static data
          lng:-5.3841618932489, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545275336458, // change here latitude if using static data
          lng:-5.3841624467668, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545409105982, // change here latitude if using static data
          lng:-5.3842335768743, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545381190816, // change here latitude if using static data
          lng:-5.3842773990225, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545375830763, // change here latitude if using static data
          lng:-5.3845453137036, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545403746024, // change here latitude if using static data
          lng:-5.3845014916602, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545349925613, // change here latitude if using static data
          lng:-5.3844886677573, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545351042313, // change here latitude if using static data
          lng:-5.3844328522209, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545290447905, // change here latitude if using static data
          lng:-5.3843081205942, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545299901848, // change here latitude if using static data
          lng:-5.3842860711677, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545309579108, // change here latitude if using static data
          lng:-5.3842528586327, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545337047629, // change here latitude if using static data
          lng:-5.3842313627288, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545328486969, // change here latitude if using static data
          lng:-5.3842087597491, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545347618127, // change here latitude if using static data
          lng:-5.384153497734, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545428460466, // change here latitude if using static data
          lng:-5.3841671516888, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545428683778, // change here latitude if using static data
          lng:-5.3841559885678, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545466350378, // change here latitude if using static data
          lng:-5.3845257555082, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545503272926, // change here latitude if using static data
          lng:-5.3844822102065, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54551027009, // change here latitude if using static data
          lng:-5.3845829551733, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545547416006, // change here latitude if using static data
          lng:-5.3845282467415, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545114395941, // change here latitude if using static data
          lng:-5.3845484494974, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54524161476, // change here latitude if using static data
          lng:-5.3844965092856, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545216379589, // change here latitude if using static data
          lng:-5.3844063741901, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545243178134, // change here latitude if using static data
          lng:-5.3844183676432, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545226056881, // change here latitude if using static data
          lng:-5.3843731617071, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545199258331, // change here latitude if using static data
          lng:-5.3843611682724, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545081046856, // change here latitude if using static data
          lng:-5.3844133854713, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545089607479, // change here latitude if using static data
          lng:-5.3844359883977, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545080153511, // change here latitude if using static data
          lng:-5.384458037746, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545070476198, // change here latitude if using static data
          lng:-5.3844912501555, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545088714125, // change here latitude if using static data
          lng:-5.3844806406766, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545088267442, // change here latitude if using static data
          lng:-5.3845029668154, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545115736004, // change here latitude if using static data
          lng:-5.3844814710595, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.5451434279, // change here latitude if using static data
          lng:-5.3844488122112, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545162112496, // change here latitude if using static data
          lng:-5.3844158765523, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545180797082, // change here latitude if using static data
          lng:-5.3843829408772, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545153775202, // change here latitude if using static data
          lng:-5.3843821105266, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545126753321, // change here latitude if using static data
          lng:-5.3843812801772, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545118192688, // change here latitude if using static data
          lng:-5.3843586772451, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545063925597, // change here latitude if using static data
          lng:-5.3843681796327, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545045241016, // change here latitude if using static data
          lng:-5.3844011152635, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545028119751, // change here latitude if using static data
          lng:-5.3843559094487, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545109855378, // change here latitude if using static data
          lng:-5.3843249112441, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545174246375, // change here latitude if using static data
          lng:-5.3842598701816, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545183923626, // change here latitude if using static data
          lng:-5.3842266576959, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545129879859, // change here latitude if using static data
          lng:-5.3842249971045, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544969609218, // change here latitude if using static data
          lng:-5.3845775098328, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544970055913, // change here latitude if using static data
          lng:-5.3845551837294, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544953158049, // change here latitude if using static data
          lng:-5.3844988148788, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544943480727, // change here latitude if using static data
          lng:-5.3845320272291, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544942363991, // change here latitude if using static data
          lng:-5.3845878424685, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544924126056, // change here latitude if using static data
          lng:-5.3845984519035, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544950701229, // change here latitude if using static data
          lng:-5.3846216084197, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544968715813, // change here latitude if using static data
          lng:-5.384622162038, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54483784993, // change here latitude if using static data
          lng:-5.384405912288, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544800927418, // change here latitude if using static data
          lng:-5.3844494572718, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544879312944, // change here latitude if using static data
          lng:-5.3845859048361, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544816261895, // change here latitude if using static data
          lng:-5.3845839672096, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544755444277, // change here latitude if using static data
          lng:-5.3844703993789, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544672368558, // change here latitude if using static data
          lng:-5.384568375363, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544662691221, // change here latitude if using static data
          lng:-5.3846015875853, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544724402151, // change here latitude if using static data
          lng:-5.3846705033107, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544696710201, // change here latitude if using static data
          lng:-5.3847031619084, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544660904391, // change here latitude if using static data
          lng:-5.3846908916393, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544624875222, // change here latitude if using static data
          lng:-5.3846897843836, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544606860638, // change here latitude if using static data
          lng:-5.3846892307564, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544641996367, // change here latitude if using static data
          lng:-5.3847349900249, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544604850378, // change here latitude if using static data
          lng:-5.384789697738, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544568597844, // change here latitude if using static data
          lng:-5.3847997534308, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544503536456, // change here latitude if using static data
          lng:-5.3848982824951, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544553559247, // change here latitude if using static data
          lng:-5.385100877312, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544541647725, // change here latitude if using static data
          lng:-5.3852457192616, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544927690335, // change here latitude if using static data
          lng:-5.3857714017619, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544900221559, // change here latitude if using static data
          lng:-5.3857928969994, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544916895334, // change here latitude if using static data
          lng:-5.385860429092, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544944587588, // change here latitude if using static data
          lng:-5.3858277708371, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544977935056, // change here latitude if using static data
          lng:-5.3859628351406, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544987612771, // change here latitude if using static data
          lng:-5.3859296229767, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544991032836, // change here latitude if using static data
          lng:-5.3862089760106, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545064655581, // change here latitude if using static data
          lng:-5.3861330505986, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545047981967, // change here latitude if using static data
          lng:-5.3860655183256, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545057591014, // change here latitude if using static data
          lng:-5.3855855070307, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545084612871, // change here latitude if using static data
          lng:-5.3855863377971, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54505870822, // change here latitude if using static data
          lng:-5.385529691749, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544956499842, // change here latitude if using static data
          lng:-5.3856829282676, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544965730579, // change here latitude if using static data
          lng:-5.3856720421578, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544991411706, // change here latitude if using static data
          lng:-5.3857398512253, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545010096645, // change here latitude if using static data
          lng:-5.3857069159599, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545027217386, // change here latitude if using static data
          lng:-5.3857521220335, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545081708011, // change here latitude if using static data
          lng:-5.3857314575653, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545071806888, // change here latitude if using static data
          lng:-5.3857758328533, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545079920317, // change here latitude if using static data
          lng:-5.3858207620278, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545089597995, // change here latitude if using static data
          lng:-5.3857875498009, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545133070148, // change here latitude if using static data
          lng:-5.3858670759862, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545241604492, // change here latitude if using static data
          lng:-5.3858480732994, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545160091999, // change here latitude if using static data
          lng:-5.3858679068529, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545142300902, // change here latitude if using static data
          lng:-5.3858561898757, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545133740555, // change here latitude if using static data
          lng:-5.3858335867919, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545171333939, // change here latitude if using static data
          lng:-5.3857565531052, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545189795426, // change here latitude if using static data
          lng:-5.385734780844, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545173121588, // change here latitude if using static data
          lng:-5.3856672485334, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545163667397, // change here latitude if using static data
          lng:-5.3856892977419, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545144759004, // change here latitude if using static data
          lng:-5.3857333961424, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54513753935, // change here latitude if using static data
          lng:-5.3856438146701, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545120865457, // change here latitude if using static data
          lng:-5.3855762824223, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545130319628, // change here latitude if using static data
          lng:-5.3855542332107, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545174462282, // change here latitude if using static data
          lng:-5.3856002700994, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545209597631, // change here latitude if using static data
          lng:-5.3856460301104, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545326245431, // change here latitude if using static data
          lng:-5.3856719564057, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54533301813, // change here latitude if using static data
          lng:-5.3857838642867, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545421526692, // change here latitude if using static data
          lng:-5.3858647755159, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545355278324, // change here latitude if using static data
          lng:-5.3855723193251, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545293791406, // change here latitude if using static data
          lng:-5.3854922392318, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545077616538, // change here latitude if using static data
          lng:-5.3854855933425, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545026253954, // change here latitude if using static data
          lng:-5.3853499752489, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544999902351, // change here latitude if using static data
          lng:-5.3853156554173, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544962979521, // change here latitude if using static data
          lng:-5.3853592000359, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545019927649, // change here latitude if using static data
          lng:-5.3852157417202, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545055956802, // change here latitude if using static data
          lng:-5.385216849236, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545030275373, // change here latitude if using static data
          lng:-5.3851490402673, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.5449933526, // change here latitude if using static data
          lng:-5.385192584985, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544965660511, // change here latitude if using static data
          lng:-5.3852252434961, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545143348688, // change here latitude if using static data
          lng:-5.3853535748856, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545089304965, // change here latitude if using static data
          lng:-5.3853519135122, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54461117719, // change here latitude if using static data
          lng:-5.3849239305385, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545473570863, // change here latitude if using static data
          lng:-5.3846153373051, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545455332924, // change here latitude if using static data
          lng:-5.3846259467992, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545429204465, // change here latitude if using static data
          lng:-5.3845804638863, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545420197173, // change here latitude if using static data
          lng:-5.3845801870772, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545410743176, // change here latitude if using static data
          lng:-5.3846022364981, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545410296467, // change here latitude if using static data
          lng:-5.3846245627275, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545247718507, // change here latitude if using static data
          lng:-5.3846419062769, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545176553589, // change here latitude if using static data
          lng:-5.3845950394418, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545004521628, // change here latitude if using static data
          lng:-5.3846344323325, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545021419426, // change here latitude if using static data
          lng:-5.3846908012469, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545002958121, // change here latitude if using static data
          lng:-5.3847125737223, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544985390259, // change here latitude if using static data
          lng:-5.3846896939767, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544848717348, // change here latitude if using static data
          lng:-5.3847636829625, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544801893934, // change here latitude if using static data
          lng:-5.3848516030471, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544809337583, // change here latitude if using static data
          lng:-5.384930021064, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54478209233, // change here latitude if using static data
          lng:-5.384940353556, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544770851169, // change here latitude if using static data
          lng:-5.3850517069092, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544637975682, // change here latitude if using static data
          lng:-5.3849359240623, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545326773875, // change here latitude if using static data
          lng:-5.3847448655306, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545364813297, // change here latitude if using static data
          lng:-5.3846455048747, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545255609003, // change here latitude if using static data
          lng:-5.3846979985515, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.545138737576, // change here latitude if using static data
          lng:-5.3846832368138, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544937003296, // change here latitude if using static data
          lng:-5.3848557555747, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544936333167, // change here latitude if using static data
          lng:-5.384889244708, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544860253881, // change here latitude if using static data
          lng:-5.3850879645825, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544889804101, // change here latitude if using static data
          lng:-5.3854128000498, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544593680728, // change here latitude if using static data
          lng:-5.3853478474541, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544600900629, // change here latitude if using static data
          lng:-5.3854374282802, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544637600057, // change here latitude if using static data
          lng:-5.3854050468912, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544654720924, // change here latitude if using static data
          lng:-5.3854502526828, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544608790765, // change here latitude if using static data
          lng:-5.3854935201432, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544636036058, // change here latitude if using static data
          lng:-5.3854831878679, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544680625627, // change here latitude if using static data
          lng:-5.3855068984038, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544662387618, // change here latitude if using static data
          lng:-5.3855175075858, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544652710021, // change here latitude if using static data
          lng:-5.3855507196706, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544678614674, // change here latitude if using static data
          lng:-5.3856073654209, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54468762196, // change here latitude if using static data
          lng:-5.3856076423417, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.54465948287, // change here latitude if using static data
          lng:-5.3856626265721, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544866203536, // change here latitude if using static data
          lng:-5.3856913219789, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544744863055, // change here latitude if using static data
          lng:-5.3858998190527, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544734514923, // change here latitude if using static data
          lng:-5.3859665201385, // change here longitude if using static data
          }
        },
        {
        name: "4",
        location: {
          lat:36.544742628287, // change here latitude if using static data
          lng:-5.3860114491315, // change here longitude if using static data
          }
        },
    ]
}

// getting places from REST APIs
function dynamicLoadPlaces(position) {
    let params = {
        radius: 300,    // search places not farther than this value (in meters)
        clientId: 'HZIJGI4COHQ4AI45QXKCDFJWFJ1SFHYDFCCWKPIJDWHLVQVZ',
        clientSecret: '',
        version: '20300101',    // foursquare versioning, required but unuseful for this demo
    };

    // CORS Proxy to avoid CORS problems
    let corsProxy = 'https://cors-anywhere.herokuapp.com/';

    // Foursquare API
    let endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
        &ll=${position.latitude},${position.longitude}
        &radius=${params.radius}
        &client_id=${params.clientId}
        &client_secret=${params.clientSecret}
        &limit=15
        &v=${params.version}`;
    return fetch(endpoint)
        .then((res) => {
            return res.json()
                .then((resp) => {
                    return resp.response.venues;
                })
        })
        .catch((err) => {
            console.error('Error with places API', err);
        })
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let text = document.createElement('a-link');
        text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        text.setAttribute('title', place.name);
        text.setAttribute('href', 'http://www.example.com/');
        text.setAttribute('scale', '15 15 15');

        text.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(text);
    });
}
