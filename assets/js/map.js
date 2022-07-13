function GetMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AoaKYK-QGm9UK736uSMd5bHiuFhEe6tNOCVUDM8HeoE_hPj8mY90Z5KJHhRiRNHr',
        center: new Microsoft.Maps.Location(-22.2218, -54.8064),
        mapTypeId: Microsoft.Maps.MapTypeId.street,
        zoom: 10
    });

    let coords = getCordinates()
    let pushpins = []
    var base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcBAMAAABmCgnjAAAAFVBMVEVHcEz///8aGhpsuy2s4oDRuPMaADiElDMGAAAAAXRSTlMAQObYZgAAAFNJREFUeF7FkLENgDAQA52GGiIxwD8bPBsgBmD/aXCs6JMNcpWtk1wYx8SO6gO2N3kWtDuJBc39UtYTPEc69BIpTVqLgjJOpS7tQ1I5NyiGia2rHyT7OTg7xhBoAAAAAElFTkSuQmCC';
    var mapCenterLocation = map.getCenter();
    var mapCenterPoint = map.tryLocationToPixel(mapCenterLocation);
    var pushpinCenter = new Microsoft.Maps.Pushpin(mapCenterLocation, { icon: base64Image, anchor: new Microsoft.Maps.Point(12, 28) });

    pushpins.push(pushpinCenter)

    coords.forEach(element => {
        
    });

    // FOR EACH
    var mapCenterPointPlus = new Microsoft.Maps.Point(mapCenterPoint.x + (-54.81907434095882), mapCenterPoint.y + (-22.228133594728636));
    var mapCenterLocationPlus = map.tryPixelToLocation(mapCenterPointPlus);
    var pushpinPoint = new Microsoft.Maps.Pushpin(mapCenterLocationPlus, { icon: base64Image, iconSize: { width: 20, height: 22 } });

    pushpins.push(pushpinPoint)
    
    map.entities.push(pushpins);
}

function getCordinates() {
    let features = [
        { type: "Feature", geometry: { coordinates: [-53.6705126, -27.7528192] } },
        { type: "Feature", geometry: { coordinates: [-54.6679261, -20.5520851] } },
        { type: "Feature", geometry: { coordinates: [-53.5467346, -26.3001281] } },
        { type: "Feature", geometry: { coordinates: [-54.3799929, -21.4728629] } },
        { type: "Feature", geometry: { coordinates: [-53.4033393, -24.9674065] } },
        { type: "Feature", geometry: { coordinates: [-53.9769375, -24.6055209] } },
        { type: "Feature", geometry: { coordinates: [-40.3073087, -12.5100555] } },
        { type: "Feature", geometry: { coordinates: [-52.0014818, -23.4769016] } },
        { type: "Feature", geometry: { coordinates: [-54.80892, -22.2291887] } },
        { type: "Feature", geometry: { coordinates: [-53.3025894, -23.780178] } },
        { type: "Feature", geometry: { coordinates: [-52.8762024, -25.1041907] } },
        { type: "Feature", geometry: { coordinates: [-50.4091611, -22.6381698] } },
        { type: "Feature", geometry: { coordinates: [-48.9405857, -11.3055716] } },
        { type: "Feature", geometry: { coordinates: [-50.8777243, -21.7948968] } },
        { type: "Feature", geometry: { coordinates: [-52.8735471, -24.1385944] } },
        { type: "Feature", geometry: { coordinates: [-49.0040149, -19.9734783] } },
        { type: "Feature", geometry: { coordinates: [-50.1267266, -21.4240442] } },
        { type: "Feature", geometry: { coordinates: [-51.8441756, -21.8749171] } },
        { type: "Feature", geometry: { coordinates: [-52.1028458, -21.8073134] } },
        { type: "Feature", geometry: { coordinates: [-46.768683, -23.4863814] } },
        { type: "Feature", geometry: { coordinates: [-56.5254613, -22.1010031] } },
        { type: "Feature", geometry: { coordinates: [-53.2368307, -18.2768302] } },
        { type: "Feature", geometry: { coordinates: [-53.7240774, -24.5630014] } },
        { type: "Feature", geometry: { coordinates: [-52.3848141, -24.0522334] } },
        { type: "Feature", geometry: { coordinates: [-59.6289509, -13.8329458] } },
        { type: "Feature", geometry: { coordinates: [-52.2018142, -23.5209107] } },
        { type: "Feature", geometry: { coordinates: [-50.8749389, -21.773859] } },
        { type: "Feature", geometry: { coordinates: [-51.8187842, -21.9024049] } },
        { type: "Feature", geometry: { coordinates: [-52.437795, -26.878988] } },
        { type: "Feature", geometry: { coordinates: [-50.0641288, -23.2934608] } },
        { type: "Feature", geometry: { coordinates: [-53.0786798, -23.789147] } },
        { type: "Feature", geometry: { coordinates: [-55.2407553, -23.0900197] } },
        { type: "Feature", geometry: { coordinates: [-54.7291667, -2.4719072] } },
        { type: "Feature", geometry: { coordinates: [-47.7248797, -11.6899257] } },
        { type: "Feature", geometry: { coordinates: [-38.2146565, -8.9765098] } },
        { type: "Feature", geometry: { coordinates: [-53.7240774, -24.5630014] } },
        { type: "Feature", geometry: { coordinates: [-49.996716, -24.715433] } },
        { type: "Feature", geometry: { coordinates: [-48.5719154, -26.2184812] } },
        { type: "Feature", geometry: { coordinates: [-54.2241524, -24.6238567] } },
        { type: "Feature", geometry: { coordinates: [-54.5255131, -21.800188] } },
        { type: "Feature", geometry: { coordinates: [-51.3302543, -22.2443107] } },
        { type: "Feature", geometry: { coordinates: [-53.7240774, -24.5630014] } },
        { type: "Feature", geometry: { coordinates: [-52.0215415, -25.2520888] } },
        { type: "Feature", geometry: { coordinates: [-52.1525052, -21.7803147] } },
        { type: "Feature", geometry: { coordinates: [-49.6199699, -22.9052263] } },
        { type: "Feature", geometry: { coordinates: [-50.206754, -27.2921554] } },
        { type: "Feature", geometry: { coordinates: [-56.1088491, -14.4017079] } },
        { type: "Feature", geometry: { coordinates: [-49.4069282, -25.433099] } },
        { type: "Feature", geometry: { coordinates: [-51.1662241, -29.1817372] } },
        { type: "Feature", geometry: { coordinates: [-51.1662241, -29.1817372] } },
        { type: "Feature", geometry: { coordinates: [-45.351715, -22.9246173] } },
        { type: "Feature", geometry: { coordinates: [-51.4996069, -25.371935] } },
        { type: "Feature", geometry: { coordinates: [-51.6539768, -21.9844364] } },
        { type: "Feature", geometry: { coordinates: [-50.3428431, -21.2922457] } },
        { type: "Feature", geometry: { coordinates: [-54.5572387, -20.675061] } },
        { type: "Feature", geometry: { coordinates: [-52.3073844, -21.7251091] } },
        { type: "Feature", geometry: { coordinates: [-53.5992716, -25.4939568] } },
        { type: "Feature", geometry: { coordinates: [-53.5992716, -25.4939568] } },
        { type: "Feature", geometry: { coordinates: [-56.2297435, -14.5309176] } },
        { type: "Feature", geometry: { coordinates: [-54.8163758, -22.2281052] } },
        { type: "Feature", geometry: { coordinates: [-50.4514509, -22.6498916] } },
        { type: "Feature", geometry: { coordinates: [-50.8986685, -21.9193628] } },
        { type: "Feature", geometry: { coordinates: [-47.1459647, -22.7562032] } },
        { type: "Feature", geometry: { coordinates: [-52.0215415, -25.2520888] } },
        { type: "Feature", geometry: { coordinates: [-55.1598973, -21.6340185] } },
        { type: "Feature", geometry: { coordinates: [-51.473462, -22.0818107] } },
        { type: "Feature", geometry: { coordinates: [-52.1176134, -25.3803092] } },
        { type: "Feature", geometry: { coordinates: [-54.546341, -20.709219] } },
        { type: "Feature", geometry: { coordinates: [-51.7756917, -24.7529999] } },
        { type: "Feature", geometry: { coordinates: [-54.7421106, -18.5317543] } },
        { type: "Feature", geometry: { coordinates: [-46.79019, -23.42338] } },
        { type: "Feature", geometry: { coordinates: [-50.3428431, -21.2922457] } },
        { type: "Feature", geometry: { coordinates: [-51.65644, -23.2415818] } },
        { type: "Feature", geometry: { coordinates: [-50.6865022, -26.9274932] } },
        { type: "Feature", geometry: { coordinates: [-56.1088491, -14.4017079] } },
        { type: "Feature", geometry: { coordinates: [-52.852385, -22.9297427] } },
        { type: "Feature", geometry: { coordinates: [-50.2057545, -25.0772816] } },
        { type: "Feature", geometry: { coordinates: [-54.9625105, -15.9655715] } },
        { type: "Feature", geometry: { coordinates: [-50.1714624, -20.3227388] } },
        { type: "Feature", geometry: { coordinates: [-49.2819572, -20.4481746] } },
        { type: "Feature", geometry: { coordinates: [-49.7585847, -21.66498] } },
        { type: "Feature", geometry: { coordinates: [-51.3643181, -20.9129478] } },
        { type: "Feature", geometry: { coordinates: [-50.5952789, -25.2226145] } },
        { type: "Feature", geometry: { coordinates: [-45.194459, -21.3908531] } },
        { type: "Feature", geometry: { coordinates: [-54.6661494, -20.5452603] } },
        { type: "Feature", geometry: { coordinates: [-40.8497349, -14.8612905] } },
        { type: "Feature", geometry: { coordinates: [-54.7291667, -2.4719072] } },
        { type: "Feature", geometry: { coordinates: [-54.7231186, -2.533972] } },
        { type: "Feature", geometry: { coordinates: [-54.2857862, -23.922865] } },
        { type: "Feature", geometry: { coordinates: [-54.0398785, -24.5685062] } },
        { type: "Feature", geometry: { coordinates: [-50.4514509, -22.6498916] } },
        { type: "Feature", geometry: { coordinates: [-49.3024839, -25.2625996] } },
        { type: "Feature", geometry: { coordinates: [-51.3684933, -20.9200905] } },
        { type: "Feature", geometry: { coordinates: [-52.4089958, -26.8851864] } },
        { type: "Feature", geometry: { coordinates: [-52.4348041, -26.8844108] } },
        { type: "Feature", geometry: { coordinates: [-49.6199699, -22.9052263] } },
        { type: "Feature", geometry: { coordinates: [-53.8295983, -25.1391354] } },
        { type: "Feature", geometry: { coordinates: [-48.8562142, -25.1215988] } },
        { type: "Feature", geometry: { coordinates: [-55.5664203, -6.3822] } },
        { type: "Feature", geometry: { coordinates: [-55.8339068, -21.1473817] } },
        { type: "Feature", geometry: { coordinates: [-49.0466487, -22.343993] } },
        { type: "Feature", geometry: { coordinates: [-56.0925749, -15.595432] } },
        { type: "Feature", geometry: { coordinates: [-47.2295761, -22.7789382] } },
        { type: "Feature", geometry: { coordinates: [-58.8161257, -13.5479598] } },
        { type: "Feature", geometry: { coordinates: [-60.1317939, -12.740577] } },
        { type: "Feature", geometry: { coordinates: [-53.0491046, -26.0891603] } },
        { type: "Feature", geometry: { coordinates: [-56.0679283, -15.7029966] } },
        { type: "Feature", geometry: { coordinates: [-56.1442994, -15.7050832] } },
        { type: "Feature", geometry: { coordinates: [-51.2176986, -30.0346316] } },
        { type: "Feature", geometry: { coordinates: [-51.17609, -29.9014181] } },
        { type: "Feature", geometry: { coordinates: [-50.1391945, -25.153492] } },
        { type: "Feature", geometry: { coordinates: [-51.4728964, -25.3631017] } },
        { type: "Feature", geometry: { coordinates: [-50.3946676, -25.8682739] } },
        { type: "Feature", geometry: { coordinates: [-40.5022705, -20.6590881] } },
        { type: "Feature", geometry: { coordinates: [-51.8435141, -23.4568106] } },
        { type: "Feature", geometry: { coordinates: [-51.8468755, -29.5751469] } },
        { type: "Feature", geometry: { coordinates: [-50.1391945, -25.153492] } },
        { type: "Feature", geometry: { coordinates: [-50.8685529, -24.3075092] } },
        { type: "Feature", geometry: { coordinates: [-51.4728964, -25.3631017] } },
        { type: "Feature", geometry: { coordinates: [-53.5992716, -25.4939568] } },
        { type: "Feature", geometry: { coordinates: [-53.2616678, -21.7576015] } },
        { type: "Feature", geometry: { coordinates: [-54.606861, -20.527657] } },
        { type: "Feature", geometry: { coordinates: [-54.7456666, -22.2219036] } },
        { type: "Feature", geometry: { coordinates: [-48.6860351, -26.7703018] } },
        { type: "Feature", geometry: { coordinates: [-48.684816, -26.7802236] } },
        { type: "Feature", geometry: { coordinates: [-53.9769375, -24.6055209] } },
        { type: "Feature", geometry: { coordinates: [-52.148674, -21.7835636] } },
        { type: "Feature", geometry: { coordinates: [-51.4996069, -25.371935] } },
        { type: "Feature", geometry: { coordinates: [-40.8309137, -14.8524031] } },
        { type: "Feature", geometry: { coordinates: [-55.4946651, -11.8586791] } },
        { type: "Feature", geometry: { coordinates: [-51.4545863, -23.3902545] } },
        { type: "Feature", geometry: { coordinates: [-50.1099733, -24.9455771] } },
        { type: "Feature", geometry: { coordinates: [-52.2716387, -25.2037] } },
        { type: "Feature", geometry: { coordinates: [-51.4689067, -25.3613333] } },
        { type: "Feature", geometry: { coordinates: [-53.7240774, -24.5630014] } },
        { type: "Feature", geometry: { coordinates: [-49.7948753, -21.3136663] } },
        { type: "Feature", geometry: { coordinates: [-51.946204, -25.4550951] } },
        { type: "Feature", geometry: { coordinates: [-56.4458103, -14.8445147] } },
        { type: "Feature", geometry: { coordinates: [-45.6007108, -5.080419] } },
        { type: "Feature", geometry: { coordinates: [-53.7667733, -24.6899511] } },
        { type: "Feature", geometry: { coordinates: [-55.9952857, -4.7010286] } },
        { type: "Feature", geometry: { coordinates: [-54.7435179, -17.5843865] } },
        { type: "Feature", geometry: { coordinates: [-53.3856982, -21.688362] } },
        { type: "Feature", geometry: { coordinates: [-56.1142656, -21.4547638] } },
        { type: "Feature", geometry: { coordinates: [-44.9952207, -12.1476404] } },
        { type: "Feature", geometry: { coordinates: [-52.1176134, -25.3803092] } },
        { type: "Feature", geometry: { coordinates: [-51.1368159, -23.3790191] } },
        { type: "Feature", geometry: { coordinates: [-52.6339233, -27.0321301] } },
        { type: "Feature", geometry: { coordinates: [-55.7094488, -12.545824] } },
        { type: "Feature", geometry: { coordinates: [-54.7346255, -18.5051886] } },
        { type: "Feature", geometry: { coordinates: [-77.004719, 38.888684] } },
        { type: "Feature", geometry: { coordinates: [-54.8061919, -22.2380799] } },
        { type: "Feature", geometry: { coordinates: [-53.9769375, -24.6055209] } },
        { type: "Feature", geometry: { coordinates: [-47.8580808, -22.640317] } },
        { type: "Feature", geometry: { coordinates: [-53.1320915, -26.0700759] } },
        { type: "Feature", geometry: { coordinates: [-53.1521739, -26.0818543] } },
        { type: "Feature", geometry: { coordinates: [-52.6613932, -26.2993456] } },
        { type: "Feature", geometry: { coordinates: [-52.8292289, -25.1127674] } },
        { type: "Feature", geometry: { coordinates: [-53.0786806, -25.7666825] } },
        { type: "Feature", geometry: { coordinates: [-56.08113, -15.6083465] } },
        { type: "Feature", geometry: { coordinates: [-53.0106792, -24.1856722] } },
        { type: "Feature", geometry: { coordinates: [-39.2863555, -12.9804489] } },
        { type: "Feature", geometry: { coordinates: [-44.2967036, -2.6738169] } },
        { type: "Feature", geometry: { coordinates: [-47.3890342, -22.4094562] } },
        { type: "Feature", geometry: { coordinates: [-49.0466487, -22.343993] } },
        { type: "Feature", geometry: { coordinates: [-47.8739155, -21.9983826] } },
        { type: "Feature", geometry: { coordinates: [-39.3207175, -13.2829367] } },
        { type: "Feature", geometry: { coordinates: [-52.6250461, -23.6688988] } },
        { type: "Feature", geometry: { coordinates: [-54.5579964, -20.4633328] } },
        { type: "Feature", geometry: { coordinates: [-50.5837483, -25.025017] } },
        { type: "Feature", geometry: { coordinates: [-54.4479192, -20.167648] } },
        { type: "Feature", geometry: { coordinates: [-51.4996069, -25.371935] } },
        { type: "Feature", geometry: { coordinates: [-49.9423458, -7.099914] } },
        { type: "Feature", geometry: { coordinates: [-51.4413682, -25.3439242] } },
        { type: "Feature", geometry: { coordinates: [-52.628409, -27.0689459] } },
        { type: "Feature", geometry: { coordinates: [-51.488173, -20.8722638] } },
        { type: "Feature", geometry: { coordinates: [-50.1437157, -25.149984] } },
        { type: "Feature", geometry: { coordinates: [-53.9769375, -24.6055209] } },
        { type: "Feature", geometry: { coordinates: [-53.4657615, -24.9250157] } },
        { type: "Feature", geometry: { coordinates: [-46.025559, -22.5277857] } },
        { type: "Feature", geometry: { coordinates: [-44.0074497, -19.9472454] } },
        { type: "Feature", geometry: { coordinates: [-47.392331, -22.224874] } },
        { type: "Feature", geometry: { coordinates: [-47.6093019, -15.9369985] } },
        { type: "Feature", geometry: { coordinates: [-48.883867, -10.295831] } },
        { type: "Feature", geometry: { coordinates: [-45.351305, -22.924714] } },
        { type: "Feature", geometry: { coordinates: [-47.4979859, -21.8140101] } },
        { type: "Feature", geometry: { coordinates: [-47.4884152, -24.3028169] } },
        { type: "Feature", geometry: { coordinates: [-54.6671018, -18.1594879] } },
        { type: "Feature", geometry: { coordinates: [-55.4946651, -11.8586791] } },
        { type: "Feature", geometry: { coordinates: [-51.0489197, -26.281525] } },
        { type: "Feature", geometry: { coordinates: [-50.4170448, -22.6377911] } },
        { type: "Feature", geometry: { coordinates: [-51.5500373, -21.4647235] } },
        { type: "Feature", geometry: { coordinates: [-51.3029878, -26.4224715] } },
        { type: "Feature", geometry: { coordinates: [-53.2672534, -21.753871] } },
        { type: "Feature", geometry: { coordinates: [-55.9919923, -4.2647125] } },
        { type: "Feature", geometry: { coordinates: [-48.8485627, -23.4413687] } },
        { type: "Feature", geometry: { coordinates: [-54.5572387, -20.675061] } },
        { type: "Feature", geometry: { coordinates: [-49.9200909, -24.5500719] } },
        { type: "Feature", geometry: { coordinates: [-51.5107495, -30.0582353] } },
        { type: "Feature", geometry: { coordinates: [-56.1088491, -14.4017079] } },
        { type: "Feature", geometry: { coordinates: [-53.6228832, -25.0512328] } },
        { type: "Feature", geometry: { coordinates: [-49.1614842, -22.8732951] } },
        { type: "Feature", geometry: { coordinates: [-54.6532799, -20.5066566] } },
        { type: "Feature", geometry: { coordinates: [-51.6883376, -24.5023308] } },
        { type: "Feature", geometry: { coordinates: [-39.0006658, -11.6648674] } },
        { type: "Feature", geometry: { coordinates: [-51.0236197, -29.9262616] } },
        { type: "Feature", geometry: { coordinates: [-48.8571573, -26.3687835] } },
        { type: "Feature", geometry: { coordinates: [-48.6421395, -27.0005126] } },
        { type: "Feature", geometry: { coordinates: [-48.8571573, -26.3687835] } },
        { type: "Feature", geometry: { coordinates: [-48.7234038, -26.3803214] } },
        { type: "Feature", geometry: { coordinates: [-44.395108, -20.2256203] } },
        { type: "Feature", geometry: { coordinates: [-39.4341781, -12.5412316] } },
        { type: "Feature", geometry: { coordinates: [-46.2058347, -22.7687159] } },
        { type: "Feature", geometry: { coordinates: [-45.302745, -21.6591671] } },
        { type: "Feature", geometry: { coordinates: [-44.4086106, -19.28865] } },
        { type: "Feature", geometry: { coordinates: [-46.010483, -22.4570646] } },
        { type: "Feature", geometry: { coordinates: [-41.418233, -16.0108882] } },
        { type: "Feature", geometry: { coordinates: [-44.4126499, -19.2883118] } },
        { type: "Feature", geometry: { coordinates: [-49.3365699, -15.6948723] } },
        { type: "Feature", geometry: { coordinates: [-40.048969, -13.4961263] } },
        { type: "Feature", geometry: { coordinates: [-44.049855, -19.961938] } },
        { type: "Feature", geometry: { coordinates: [-41.3432826, -15.7244135] } },
        { type: "Feature", geometry: { coordinates: [-41.3432826, -15.7244135] } },
        { type: "Feature", geometry: { coordinates: [-44.746487, -20.6898988] } },
        { type: "Feature", geometry: { coordinates: [-44.0515101, -19.9112968] } },
        { type: "Feature", geometry: { coordinates: [-47.4549233, -2.9846595] } },
        { type: "Feature", geometry: { coordinates: [-43.65485, -16.6049559] } },
        { type: "Feature", geometry: { coordinates: [-44.1658631, -19.9623865] } },
        { type: "Feature", geometry: { coordinates: [-44.186179, -19.9745812] } },
        { type: "Feature", geometry: { coordinates: [-44.6839751, -19.9087978] } },
        { type: "Feature", geometry: { coordinates: [-41.9888488, -18.6761034] } },
        { type: "Feature", geometry: { coordinates: [-41.9888488, -18.6761034] } },
        { type: "Feature", geometry: { coordinates: [-44.9856483, -19.8777714] } },
        { type: "Feature", geometry: { coordinates: [-45.194459, -21.3908531] } },
        { type: "Feature", geometry: { coordinates: [-45.2236591, -22.84208] } },
        { type: "Feature", geometry: { coordinates: [-45.1449464, -22.7813146] } },
        { type: "Feature", geometry: { coordinates: [-46.5486461, -23.0360758] } },
        { type: "Feature", geometry: { coordinates: [-46.8440789, -23.6484604] } },
        { type: "Feature", geometry: { coordinates: [-45.8551607, -22.1997095] } },
        { type: "Feature", geometry: { coordinates: [-45.9694442, -22.4232597] } },
        { type: "Feature", geometry: { coordinates: [-45.962388, -22.4008208] } },
        { type: "Feature", geometry: { coordinates: [-45.0760603, -22.7293782] } },
        { type: "Feature", geometry: { coordinates: [-45.881655, -22.242786] } },
        { type: "Feature", geometry: { coordinates: [-52.63893, -27.0681229] } },
        { type: "Feature", geometry: { coordinates: [-52.7683085, -28.2758654] } },
        { type: "Feature", geometry: { coordinates: [-52.7683085, -28.2758652] } },
        { type: "Feature", geometry: { coordinates: [-52.7683085, -28.2758652] } },
        { type: "Feature", geometry: { coordinates: [-52.7683085, -28.2758652] } },
        { type: "Feature", geometry: { coordinates: [-52.8628402, -28.1083798] } },
        { type: "Feature", geometry: { coordinates: [-55.7332697, -12.5814234] } },
        { type: "Feature", geometry: { coordinates: [-56.173421, -15.6095146] } },
        { type: "Feature", geometry: { coordinates: [-55.501304, -11.8818772] } },
        { type: "Feature", geometry: { coordinates: [-50.1773609, -25.05409] } },
        { type: "Feature", geometry: { coordinates: [-51.8370447, -21.8870994] } },
        { type: "Feature", geometry: { coordinates: [-54.8194834, -22.229604] } },
        { type: "Feature", geometry: { coordinates: [-53.3142583, -27.662122] } },
        { type: "Feature", geometry: { coordinates: [-53.45353, -25.8976125] } },
        { type: "Feature", geometry: { coordinates: [-53.3340106, -22.3016455] } },
        { type: "Feature", geometry: { coordinates: [-53.5467757, -25.7755963] } },
        { type: "Feature", geometry: { coordinates: [-53.760392, -24.7264508] } },
        { type: "Feature", geometry: { coordinates: [-51.5114986, -22.0723898] } },
        { type: "Feature", geometry: { coordinates: [-54.7797936, -22.2246325] } },
        { type: "Feature", geometry: { coordinates: [-49.3704155, -28.6774759] } },
        { type: "Feature", geometry: { coordinates: [-53.7198719, -26.0728644] } },
        { type: "Feature", geometry: { coordinates: [-56.1088491, -14.4017079] } },
    ]

    let coords = []

    for (var i = 0; i < features.length; i++) {
        coords.push(features[i].geometry.coordinates)
    }

    return coords
}