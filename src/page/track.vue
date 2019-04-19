<template>
  <div class="track">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="container">
      <div class="search-box">
        <Input
          search
          enter-button
          :placeholder="$t('track.placeholder')"
          v-model="value"
        />
      </div>
      <div class="content">
        <h1>{{$t('track.title1')}}</h1>
        <ul v-show="searchList.length>0">
          <li
            v-for="(item,index) in searchList"
            :key="index"
            @click="toUrl(item.url)"
          >
            <p>
              <span>{{item.name}}</span>
              <a
                :href="item.url"
                target="_blank"
              >{{item.href}}</a>
            </p>
          </li>
        </ul>
        <ul>
          <li
            v-for="(item,index) in searchList2"
            :key="index"
            @click="toUrl(item.url)"
          >
            <p>
              <span>{{item.name}}</span>
              <a
                :href="item.url"
                target="_blank"
              >{{item.href}}</a>
            </p>
          </li>
        </ul>
        <h1>{{$t('track.title2')}}</h1>
        <ul v-show="searchList3.length>0">
          <li
            v-for="(item,index) in searchList3"
            :key="index"
            @click="toUrl(item.url)"
          >
            <p>
              <span>{{item.name}}</span>
              <a
                :href="item.url"
                target="_blank"
              >{{item.href}}</a>
            </p>
          </li>
        </ul>
        <ul>
          <li
            v-for="(item,index) in searchList4"
            :key="index"
            @click="toUrl(item.url)"
          >
            <p>
              <span>{{item.name}}</span>
              <a
                :href="item.url"
                target="_blank"
              >{{item.href}}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from "@/components/header";
import myFoot from "@/components/footer";
export default {
  components: {
    myHead,
    myFoot
  },
  data() {
    return {
      value: "",
      List: [
        {
          name: "Aban Air",
          href: "Airline",
          url: "http://www.abanair.com/"
        },
        {
          name: "ABSA-Aerolinhas Brasileiras",
          href: "Airline",
          url: "http://www.latamcargo.com/"
        },
        {
          name: "ACCIONA Airport Services",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=7X&Pfx=303"
        },
        {
          name: "Adria Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Aegean Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=A3&Pfx=390"
        },
        {
          name: "Aer Lingus",
          href: "Airline",
          url: "https://www.iagcargo.com/ecargo/tracking"
        },
        {
          name: "Aer Lingus",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=EI&Pfx=053"
        },
        {
          name: "Aeroflot Cargo CHAMP",
          href: "(AWB Prefix 507)",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=SU&Pfx=507"
        },
        {
          name: "Aeroflot-Russian Airlines CHAMP",
          href: "(AWB Pfx 555)",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=SU&Pfx=555"
        },
        {
          name: "Aerolineas Argentinas",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "AeroMexico Cargo",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Aeromexpress",
          href: "Airline",
          url: "http://www.aeromexpress.com.mx/indexi.cfm"
        },
        {
          name: "Aerosvit Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=VV&Pfx=870"
        },
        {
          name: "Aerosvit Airlines",
          href: "Tradevision",
          url: "http://www.tradevision.net/appl/fsr.asp?Owner=RES-AEW"
        },
        {
          name: "AeroUnion",
          href: "Airline",
          url: "http://www.aerounion.com.mx/EN/"
        },
        {
          name: "Air Algerie",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=AH&Pfx=124"
        },
        {
          name: "Air Arabia",
          href: "Airline",
          url: "http://cargo.airarabia.com/Track.aspx"
        },
        {
          name: "Air Asia",
          href: "Airline",
          url: "http://cargo.airasia.com/"
        },
        {
          name: "Air Baltic",
          href: "Airline",
          url: "https://www.airbaltic.com/public/cargo.html"
        },
        {
          name: "Air Canada Cargo",
          href: "Airline",
          url: "http://cargotools.aircanada.ca/TrackAndTraceInput.asp"
        },
        {
          name: "Air Canada Cargo",
          href: "CPS",
          url: "https://www.cargoportalservices.com/lmsweb/tracking-awb.jsp"
        },
        {
          name: "Air Cargo Germany",
          href: "Airline",
          url: "https://acg.aero"
        },
        {
          name: "Air China",
          href: "Airline",
          url: "http://www.airchinacargo.com/en/"
        },
        {
          name: "Air Europa",
          href: "Airline",
          url: "http://cargo.air-europa.com/ferreret/es/WebPantallaPrincipal.html"
        },
        {
          name: "Air Europa Cargo",
          href: "Airline",
          url: "http://cargo.air-europa.com/ferreret/in/WebPantallaPrincipal.html"
        },
        {
          name: "Air France Cargo",
          href: "Airline",
          url: "https://www.airfranceklm.com/en"
        },
        {
          name: "Air France Cargo",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Air France Cargo Equation",
          href: "CHAMP",
          url: "http://www.champ.aeroafr_exp.htm/"
        },
        {
          name: "Air Gabon",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "Air Greenland",
          href: "Airline",
          url: "https://www.airgreenland.gl/cargo/tracking_awb/"
        },
        {
          name: "Air Hong Kong",
          href: "Cathay (AWB Prefix 288)",
          url: "http://www.cathaypacificcargo.com/"
        },
        {
          name: "Air Hong Kong",
          href: "Hactl",
          url: "http://www.hactl.com/en-us/home.aspx"
        },
        {
          name: "Air Jamaica",
          href: "Airline",
          url: "http://ww1.airjamaica.com/track.aspx"
        },
        {
          name: "Air Jamaica",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=JM&Pfx=201"
        },
        {
          name: "Air Macau",
          href: "Airline",
          url: "http://en.airmacau.com.mo/cargo/track.asp"
        },
        {
          name: "Air Madagascar",
          href: "Datacair",
          url: "http://www.datacair.com/"
        },
        {
          name: "Air Malta",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=KM&Pfx=643"
        },
        {
          name: "Air Malta",
          href: "CHAMP",
          url: "http://www.champ.aeromau.htm/"
        },
        {
          name: "Air Mauritius ",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=MK&Pfx=239"
        },
        {
          name: "Air Mauritius ",
          href: "CHAMP",
          url: "http://www.champ.aeromau.htm/"
        },
        {
          name: "Air Moldova",
          href: "Airline",
          url: "https://www.airmoldova.md/cargo-check-en/"
        },
        {
          name: "Air New Zealand",
          href: "Airline",
          url: "https://www.airnewzealand.co.uk/international-cargo"
        },
        {
          name: "Air New Zealand",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=NZ&Pfx=086"
        },
        {
          name: "Air Niugini",
          href: "Mercator",
          url: "http://pxprd.mercator.com:6715/skychain/app?service=page/nwp:Trackshipmt"
        },
        {
          name: "Air Seychelles",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=HM&Pfx=061"
        },
        {
          name: "Air-India Cargo",
          href: "Airline",
          url: "http://www.airindia.com/error.htm"
        },
        {
          name: "AirBridge Cargo",
          href: "Airline",
          url: "https://www.airbridgecargo.com//tracking/"
        },
        {
          name: "Airmax Cargo",
          href: "Airline",
          url: "http://www.airmaxcargo.com.pe/AirsisWeb/"
        },
        {
          name: "Alaska Airlines",
          href: "Airline",
          url: "https://www.alaskaair.com/content/page-not-found"
        },
        {
          name: "Alaska Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=AS&Pfx=027"
        },
        {
          name: "Alitalia",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=AZ&Pfx=055"
        },
        {
          name: "Alitalia ",
          href: "CHAMP",
          url: "http://www.champ.aeroaza.htm/"
        },
        {
          name: "Alitalia",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Allied Air",
          href: "CHAMP",
          url: "http://alliedairng.com/cargo.html"
        },
        {
          name: "American Airlines",
          href: "Airline",
          url: "https://www.aacargo.com/index.html"
        },
        {
          name: "American Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=AA&Pfx=001"
        },
        {
          name: "Amerijet International",
          href: "Airline",
          url: "https://mycargo.amerijet.com/tracking"
        },
        {
          name: "ANA All Nippon Airways",
          href: "Airline",
          url: "http://www.anacargo.jp/en/int/index.html"
        },
        {
          name: "Asiana Airlines",
          href: "Airline",
          url: "https://asianacargo.com/home.do"
        },
        {
          name: "Asiana Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=OZ&Pfx=988"
        },
        {
          name: "Atlantic Southeast",
          href: "Delta Air Logistics",
          url: "https://www.deltacargo.com/Cargo/"
        },
        {
          name: "Atlas Air Worldwide",
          href: "Airline",
          url: "https://www.atlasair.com/aa/tracking.asp"
        },
        {
          name: "Austrian Airlines",
          href: "CPS",
          url: "https://www.cargoportalservices.com/lmsweb/tracking-awb.jsp"
        },
        {
          name: "Avianca",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "Avient Cargo",
          href: "Delta Air Logistics",
          url: "http://212.140.240.197/iCargoLite/Login.jsp"
        },
        {
          name: "Azerbaijan Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=J2&Pfx=771"
        },
        {
          name: "Azul Cargo",
          href: "Airline",
          url: "http://www.azulcargo.com.br/Rastreamento_p1.aspx"
        },
        {
          name: "Biman Bangladesh",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=BG&Pfx=997"
        },
        {
          name: "bmi",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=BD&Pfx=236"
        },
        {
          name: "bmi",
          href: "Tradevision",
          url: "http://www.tradevision.net/res-bmao"
        },
        {
          name: "Bringer Air Cargo",
          href: "Airline",
          url: "http://www.bringeraircargo.com/tracking/"
        },
        {
          name: "British Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=BA&Pfx=125"
        },
        {
          name: "British Airways (IAG)",
          href: "Airline",
          url: "https://www.iagcargo.com/en/home"
        },
        {
          name: "Brussels Airlines",
          href: "Airline",
          url: "https://www.brusselsairlines.com/en-be/b2b/info-and-services/cargo/track-and-trace.aspx"
        },
        {
          name: "Bulgaria Air",
          href: "datacair",
          url: "http://www.datacair.com/tracktrace/index.php"
        },
        {
          name: "BWIA West Indies Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=BW&Pfx=106"
        },
        {
          name: "C.A.L. Cargo Airlines",
          href: "Airline",
          url: "http://www.cal-cargo.com/"
        },
        {
          name: "Canadian Cargo",
          href: "CHAMP",
          url: "http://www.champ.aerocp018.htm/"
        },
        {
          name: "Cargoitalia",
          href: "Airline",
          url: "http://www.cargoitalia.it/"
        },
        {
          name: "Cargolux Airlines",
          href: "Airline",
          url: "https://www.cargolux.com/"
        },
        {
          name: "Caribbean Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=BW&Pfx=106"
        },
        {
          name: "Cathay Pacific Cargo",
          href: "Airline",
          url: "http://www.cathaypacificcargo.com/"
        },
        {
          name: "Cayman Airways",
          href: "Airline",
          url: "https://www.camair-co.cmtracking/"
        },
        {
          name: "Centurian Air Cargo",
          href: "Airline",
          url: "http://www.centurioncargo.com/en/awb-tracking.php"
        },
        {
          name: "China Airlines",
          href: "Airline",
          url: "https://cargo.china-airlines.com/ccnetv2/content/home/index.aspx"
        },
        {
          name: "China Eastern Airlines",
          href: "Airline",
          url: "http://cargo2.ce-air.com/MU/index.aspx"
        },
        {
          name: "China Hainan Airlines",
          href: "Airline",
          url: "http://www.hnacargo.com/Portal2/Index.aspx"
        },
        {
          name: "China Southern Airlines",
          href: "Airline",
          url: "http://tang.cs-air.com/EN/WebFace/Tang.WebFace.Cargo/AgentAwbBrower.aspx"
        },
        {
          name: "Cielos Airlines",
          href: "Airline",
          url: "http://www.cielos-airlines.com/tracking_cliente_e.php"
        },
        {
          name: "Comair",
          href: "Delta Air Logistics",
          url: "https://www.deltacargo.com/Cargo/"
        },
        {
          name: "Continental Airlines",
          href: "Airline",
          url: "http://www6.cocargo.com/?s_token=1555577395.0824733052&kw=air+cargo&term=Air%20Cargo%20Booking%20System&term=Air%20Cargo%20Shipment%20Costs&term=Help%20Desk%20Ticket%20System&backfill=0&tdfs=1"
        },
        {
          name: "Copa Airlines",
          href: "Airline",
          url: "http://www.coyneair.com/#Tracking"
        },
        {
          name: "Coyne Airways",
          href: "Airline",
          url: "http://www.coyneair.com/#Tracking"
        },
        {
          name: "Croatia Airlines",
          href: "Airline",
          url: "https://www.croatiaairlines.com/Additional-services/cargo/Our-service"
        },
        {
          name: "Crossair ",
          href: "via SWISS World",
          url: "https://www.swissworldcargo.com/home?Country=ROW"
        },
        {
          name: "Cubana Cargo",
          href: "Airline",
          url: "https://www.cargocubana.com/cubanacargo/portlet/en/html/601"
        },
        {
          name: "Cyprus Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=CY&Pfx=048"
        },
        {
          name: "Czech Airlines CSA Cargo",
          href: "Airline",
          url: "http://www.csacargo.cz/en/cargo/cargo_home.htm"
        },
        {
          name: "Czech Airlines CSA Cargo ",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=OK&Pfx=064"
        },
        {
          name: "Czech Airlines CSA Cargo",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Daallo Airlines",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "DAS Air",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "DAS Air USA",
          href: "Airline",
          url: "http://dastrack.dasairusa.com/cgi-bin/dasair/dascomsathtml.exe"
        },
        {
          name: "Delta Air Logistics",
          href: "Airline",
          url: "https://www.deltacargo.com/Cargo/"
        },
        {
          name: "Delta Air Logistics",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=DL&Pfx=006"
        },
        {
          name: "Delta Air Logistics",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "DHL Airways",
          href: "Airline",
          url: "https://aviationcargo.dhl.com/aviationcargo/"
        },
        {
          name: "DHL Aviation Americas",
          href: "Airline (Tracking)",
          url: "https://aviationcargo.dhl.com/webedit/ACGSplash.asp"
        },
        {
          name: "Dragonair",
          href: "Airline",
          url: "http://www.dragonaircargo.com/usrapps/identity/home.aspx"
        },
        {
          name: "Egyptair",
          href: "Airline",
          url: "http://egyptair-cargo.com/cargo/home.htm"
        },
        {
          name: "Egyptair",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=MS&Pfx=077"
        },
        {
          name: "El Al Israel Airlines",
          href: "Airline",
          url: "https://www.elal.com/en/Cargo/Pages/default.aspx"
        },
        {
          name: "El Al Israel Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=LY&Pfx=114"
        },
        {
          name: "Emirates SkyCargo",
          href: "Airline",
          url: "https://www.skycargo.com/"
        },
        {
          name: "Estafeta Carga",
          href: "Airline",
          url: "https://www.estafeta.com/ingles/rastreo/rastreo.html"
        },
        {
          name: "Estafeta Carga",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "Ethiopian Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Etihad Airways",
          href: "Airline",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=ET&Pfx=071"
        },
        {
          name: "European Air Transport",
          href: "DHL",
          url: "https://www.dhl.be/err/service_downtime_2011.html"
        },
        {
          name: "EVA Airways",
          href: "Airline",
          url: "http://www.brcargo.com/ec_web/Default.aspx"
        },
        {
          name: "EVA Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=BR&Pfx=695"
        },
        {
          name: "Far Eastern Air Transport",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=EF&Pfx=265"
        },
        {
          name: "FedEx",
          href: "Airline",
          url: "https://www.fedex.com/en-us/tracking.html?action=track&cntry_code=us"
        },
        {
          name: "FedEx",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=FX&Pfx=023"
        },
        {
          name: "FedEx Express",
          href: "Airline",
          url: "https://www.fedex.com/en-us/shipping/services.html"
        },
        {
          name: "Fenix Air",
          href: "Airline",
          url: "http://network-airline.com/"
        },
        {
          name: "Finnair Cargo",
          href: "Airline",
          url: "https://cargo.finnair.com/en"
        },
        {
          name: "Finnair Cargo",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=AY&Pfx=105"
        },
        {
          name: "FlyDubai Cargo",
          href: "Mercator",
          url: "http://scfzprd.mercator.com/skychain/app?service=page/nwp:Trackshipmt"
        },
        {
          name: "Four Star Air Cargo",
          href: "Airline",
          url: "https://www.fourstarcargo.com/login/"
        },
        {
          name: "Gabon Airlines",
          href: "datacair",
          url: "http://www.datacair.com/tracktrace/index.php"
        }
      ],
      List2: [
        {
          name: "Garuda Indonesia",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=GA&Pfx=126"
        },
        {
          name: "GB Airways",
          href: "BA (AWB Prefix 171)",
          url: "https://www.iagcargo.com/tracking/"
        },
        {
          name: "Global Aviation Services",
          href: "Airline",
          url: "http://www.global-aviationgroup.com/"
        },
        {
          name: "Gol Airlines",
          href: "Airline",
          url: "http://g3cs.uesc.com/"
        },
        {
          name: "Grandstar Cargo",
          href: "Airline",
          url: "http://www.grandstarcargo.com/ecargo/ecargo_tracing.asp"
        },
        {
          name: "Great Wall Airlines",
          href: "Airline",
          url: "http://www.gwairlines.com/en/index.asp"
        },
        {
          name: "Gulf Air",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=GF&Pfx=072"
        },
        {
          name: "Gulf Air Falcon Cargo",
          href: "Airline",
          url: "https://cargo.gulfair.com/"
        },
        {
          name: "Hawaiian Air Cargo",
          href: "Airline",
          url: "https://hawaiian.smartkargo.com/"
        },
        {
          name: "Hong Kong Airlines",
          href: "Airline",
          url: "http://202.106.139.28/HX/Service/index.aspx?strCul=en"
        },
        {
          name: "Iberia",
          href: "Airline",
          url: "https://www.iagcargo.com/en/home"
        },
        {
          name: "Iberia",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=IB&Pfx=075"
        },
        {
          name: "Icelandair-Flugleidir",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=FI&Pfx=108"
        },
        {
          name: "Indian Airlines",
          href: "Airline",
          url: "http://220.226.206.133:8080/tntweb/wptt100c.jsp"
        },
        {
          name: "IndiGo CarGo",
          href: "Airline",
          url: "https://cargo.goindigo.in/Cargo/Services"
        },
        {
          name: "Insel Air Cargo",
          href: "Airline",
          url: "http://www.inselaircargo.com/Tracking.2561"
        },
        {
          name: "Iran Air",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=IR&Pfx=096"
        },
        {
          name: "Jade Cargo International",
          href: "Airline",
          url: "http://www.jadecargo.com/"
        },
        {
          name: "Japan Air System",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=JD&Pfx=234"
        },
        {
          name: "Japan Airlines",
          href: "Airline",
          url: "http://www.cargo.jal.co.jp/f_AWB_E.htm"
        },
        {
          name: "Japan Asia",
          href: "Japan Airlines",
          url: "http://www.cargo.jal.co.jp/f_AWB_E.htm"
        },
        {
          name: "JAT - Jugoslovenski Aerotransport",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=JU&Pfx=115"
        },
        {
          name: "Jet Airways",
          href: "CHAMP",
          url: "http://cargo.jetairways.com/cargoview/"
        },
        {
          name: "Jetairfly",
          href: "Network Aviation",
          url: "http://network-airline.com/"
        },
        {
          name: "jetBlue Cargo",
          href: "Airline",
          url: "https://icargonet.ibsplc.aero/b6portal/login.jsp"
        },
        {
          name: "Jubba Airways",
          href: "Airline",
          url: "https://icargonet.ibsplc.aero/b6portal/login.jsp"
        },
        {
          name: "Kales",
          href: "Airline",
          url: "https://kales.com/office/frankfurt/kaltrack"
        },
        {
          name: "Kalitta Air",
          href: "Airline",
          url: "http://www.allianceairlines.com/"
        },
        {
          name: "Kenya Airways",
          href: "Airline",
          url: "http://www.kqcargo.com/"
        },
        {
          name: "KLM",
          href: "Airline",
          url: "https://www.afklcargo.com/WW/en/local/app/index.jsp#/myCargo/myshipment"
        },
        {
          name: "KLM",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Korean Air Cargo",
          href: "Airline",
          url: "https://cargo.koreanair.com/"
        },
        {
          name: "Korean Air Cargo",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Kuwait Airways",
          href: "Airline",
          url: "https://www.kuwaitairways.com/en/is/gs/cargo"
        },
        {
          name: "Kuwait Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=KU&Pfx=229"
        },
        {
          name: "LACSA Airlines",
          href: "Airline",
          url: "http://www.cargotaca.com/"
        },
        {
          name: "LAN Cargo",
          href: "Airline",
          url: "http://www.latamcargo.com/"
        },
        {
          name: "Lan Cargo",
          href: "Airline",
          url: "http://www.latamcargo.com/"
        },
        {
          name: "Leisure Cargo",
          href: "Airline",
          url: "https://www.leisurecargo.com/"
        },
        {
          name: "LIAT",
          href: "Airline",
          url: "http://www.liatairline.com/quikpak.htm"
        },
        {
          name: "LOT-Polish Airlines",
          href: "Airline",
          url: "http://www.cargoserv.com/webtracking/lot/tracking.asp"
        },
        {
          name: "LOT-Polish Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=LO&Pfx=080"
        },
        {
          name: "LTU International",
          href: "Airline",
          url: "https://www.leisurecargo.com/"
        },
        {
          name: "Lufthansa Cargo",
          href: "Airline",
          url: "https://lufthansa-cargo.com/eservices/etracking"
        },
        {
          name: "Lufthansa Cargo",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=LH&Pfx=020"
        },
        {
          name: "Lybian Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=LH&Pfx=020"
        },
        {
          name: "Malaysia Airlines Cargo",
          href: "Airline",
          url: "http://www.maskargo.com/"
        },
        {
          name: "Mandarin Airlines",
          href: "Airline",
          url: "https://www.mandarin-airlines.com/cargo_new/index.htm?AspxAutoDetectCookieSupport=1"
        },
        {
          name: "Martinair Cargo",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=MP&Pfx=129"
        },
        {
          name: "Mas Air",
          href: "Lan-Chile (AWB Prefix 865)",
          url: "http://www.lancargo.cl/ingles.html"
        },
        {
          name: "Mexicana ",
          href: "(VIA Cargolux)",
          url: "https://www.cargolux.com/"
        },
        {
          name: "Middle East Airlines Airliban",
          href: "Airline",
          url: "https://www.mea.com.lb/MEA/English/Misc/CargoSearch.htm"
        },
        {
          name: "MNG Airlines",
          href: "CHAMP",
          url: "https://www.mngairlines.com/"
        },
        {
          name: "National Air Cargo",
          href: "Airline",
          url: "https://www.nationalaircargo.com/"
        },
        {
          name: "Nippon Cargo Airlines ",
          href: "Airline",
          url: "http://www.nca.aero/e/index.html"
        },
        {
          name: "Northern Air Cargo",
          href: "Airline",
          url: "https://www.nac.aero/"
        },
        {
          name: "Northwest Cargo",
          href: "CPS",
          url: "https://www.cargoportalservices.com/lmsweb/tracking-awb.jsp"
        },
        {
          name: "Northwest Cargo",
          href: "SkyTeam",
          url: "https://www.skyteam.com/zh/cargo/"
        },
        {
          name: "Norwegian Cargo",
          href: "Airline",
          url: "https://www.norwegiancargo.com/"
        },
        {
          name: "Olympic Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=OA&Pfx=050"
        },
        {
          name: "Oman Air",
          href: "EA CARGO (UK Only)",
          url: "http://81.140.56.29/TrackerPublic.jsp"
        },
        {
          name: "Pakistan International Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=PK&Pfx=214"
        },
        {
          name: "Pegasus Cargo",
          href: "Airline",
          url: "http://www.pegasuscargo.com/en/default.aspx"
        },
        {
          name: "Philippine Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=PR&Pfx=079"
        },
        {
          name: "Polar Air Cargo",
          href: "Airline",
          url: "http://www.polaraircargo.com/"
        },
        {
          name: "Polar Air Cargo",
          href: "Airline",
          url: "http://www.polaraircargo.com/"
        },
        {
          name: "Qantas Airways",
          href: "Airline",
          url: "https://freight.qantas.com/"
        },
        {
          name: "Qantas Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=QF&Pfx=081"
        },
        {
          name: "Qatar Airways",
          href: "Airline",
          url: "http://www.qrcargo.com/errorpage"
        },
        {
          name: "Royal Air Maroc",
          href: "CHAMP",
          url: "http://www.champ.aeroram.htm/"
        },
        {
          name: "Royal Brunei Airlines",
          href: "Airline",
          url: "http://royalskies.bruneiair.com/cargo_awb/newSearchAction.do"
        },
        {
          name: "Royal Jordanian",
          href: "Airline",
          url: "http://www.rj-cargo.com/"
        },
        {
          name: "RUS Aviation",
          href: "Airline",
          url: "https://www.rusaviation.com/#"
        },
        {
          name: "SAS Cargo",
          href: "Airline",
          url: "https://www.sascargo.com/SASCargo/Tracking.aspx"
        },
        {
          name: "SAS Cargo",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=SK&Pfx=117"
        },
        {
          name: "Saudi Arabian Airlines",
          href: "Airline",
          url: "http://www.cargoserv.com/webtracking/sv/tracking_sv3.asp"
        },
        {
          name: "Saudi Arabian Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/webtracking/sv/tracking_sv3.asp"
        },
        {
          name: "Shanghai Airlines",
          href: "Airline",
          url: "http://ecargo.shanghai-air.com/tracking.htm"
        },
        {
          name: "Shenzhen Airlines",
          href: "Airline",
          url: "http://cargo.shenzhenair.com/"
        },
        {
          name: "Siberia Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=S7&Pfx=421"
        },
        {
          name: "Sichuan",
          href: "Airline",
          url: "http://www.sichuanair.com/"
        },
        {
          name: "Silkair",
          href: "Airline",
          url: "http://www.siacargo.com/"
        },
        {
          name: "Silkway West Airlines",
          href: "Airline",
          url: "http://www.silkwaywest.com/home/"
        },
        {
          name: "Singapore Airlines",
          href: "CHAMP",
          url: "http://www.siacargo.com/"
        },
        {
          name: "SkyLease Cargo",
          href: "Airline",
          url: "http://www.skyleasecargo.com/en/index.php"
        },
        {
          name: "SkyWest Airlines",
          href: "Delta Air Logistics",
          url: "https://www.deltacargo.com/Cargo/"
        },
        {
          name: "SkyWest Airlines",
          href: "via Australian Air Express",
          url: "https://freight.qantas.com/"
        },
        {
          name: "South African Airways",
          href: "Airline",
          url: "https://www.flysaa.com/about-us/leading-carrier/saa-cargo/track-a-shipment"
        },
        {
          name: "South American Airways",
          href: "Airline",
          url: "http://www.southamericanairways.com/tracking_summary.asp"
        },
        {
          name: "Southwest Airlines",
          href: "Airline",
          url: "https://www.swacargo.com/swacargo/trackingTrackShipment.htm"
        },
        {
          name: "SriLankan Airlines",
          href: "Airline",
          url: "http://www.srilankanskychain.aero/skychain/app?service=page/nwp:Trackshipmt"
        },
        {
          name: "SriLankan Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=UL&Pfx=603"
        },
        {
          name: "Starlight Airlines",
          href: "Airline",
          url: "http://www.starlightairline.com/track.asp"
        },
        {
          name: "Sudan Airways",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "Swiss WorldCargo",
          href: "Airline",
          url: "https://www.swissworldcargo.com/home?Country=ROW"
        },
        {
          name: "Swiss WorldCargo",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=LX&Pfx=724"
        },
        {
          name: "Syrian Arab Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=RB&Pfx=070"
        },
        {
          name: "TAAG Angola Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=DT&Pfx=118"
        },
        {
          name: "TACA Cargo",
          href: "Airline",
          url: "http://www.cargotaca.com/"
        },
        {
          name: "TAM Linhas Aereas",
          href: "Datacair",
          url: "http://www.datacair.com/"
        },
        {
          name: "Tampa Cargo",
          href: "Airline",
          url: "http://www.aviancacargo.com/index.aspx"
        },
        {
          name: "TAP Air Portugal",
          href: "Airline",
          url: "http://www.tapcargo.com/Portugal/en/home"
        },
        {
          name: "Tarom",
          href: "Airline",
          url: "https://www.tarom.ro/en/services/cargo/track-trace"
        },
        {
          name: "Thai Airways",
          href: "Airline",
          url: "https://www.thaicargo.com/"
        },
        {
          name: "Thai Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=TG&Pfx=217"
        },
        {
          name: "Thomas Cook (Condor)",
          href: "Lufthansa Cargo",
          url: "https://lufthansa-cargo.com/eservices/etracking"
        },
        {
          name: "Thomsonfly Cargo",
          href: "Network Aviation",
          url: "http://network-airline.com/"
        },
        {
          name: "TNT Airways",
          href: "Airline (Track Package)",
          url: "https://www.tnt.com"
        },
        {
          name: "Tobruk Air",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        },
        {
          name: "Trans Mediterranean Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=TL&Pfx=270"
        },
        {
          name: "Transaero",
          href: "BA (AWB Prefix 670)",
          url: "https://www.iagcargo.com/tracking/"
        },
        {
          name: "Tui Belgium",
          href: "Network Aviation",
          url: "http://network-airline.com/"
        },
        {
          name: "Turkish Airlines",
          href: "Airline",
          url: "https://www.turkishcargo.com.tr/cargo/index.aspx"
        },
        {
          name: "Turkish Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=TK&Pfx=235"
        },
        {
          name: "Ukraine International Airlines",
          href: "Airline",
          url: "http://cargo.ukraine-international.com/eng/"
        },
        {
          name: "Ukraine International Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=PS&Pfx=566"
        },
        {
          name: "United Air Lines",
          href: "Airline",
          url: "https://www.unitedcargo.com/"
        },
        {
          name: "United Air Lines",
          href: "CPS",
          url: "https://www.cargoportalservices.com/lmsweb/tracking-awb.jsp"
        },
        {
          name: "UPS Air Cargo",
          href: "Airline",
          url: "https://www.ups.com/aircargo/using/services/actracking/actracking.html"
        },
        {
          name: "US Airways",
          href: "Airline",
          url: "https://www.americanairlines.cn/intl/cn/index.jsp?locale=zh_CN"
        },
        {
          name: "US Airways",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=US&Pfx=037"
        },
        {
          name: "VARIG",
          href: "Airline",
          url: "http://www.variglog.com"
        },
        {
          name: "VARIG",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=RG&Pfx=042"
        },
        {
          name: "VARIG Logistica",
          href: "Airline",
          url: "http://www.variglog.com/ingles/tracking/normal.asp?tracking=A"
        },
        {
          name: "Vietnam Airlines",
          href: "CHAMP",
          url: "http://www.cargoserv.com/tracking.asp?Carrier=VN&Pfx=738"
        },
        {
          name: "Virgin Atlantic Cargo",
          href: "Airline",
          url: "https://www.virginatlantic.com/gb/en"
        },
        {
          name: "Volga-Dnepr",
          href: "Airline",
          url: "http://abc.3ebra.com/eng/awb/"
        },
        {
          name: "WestJet Cargo",
          href: "Airline",
          url: "https://cargo.westjet.com/Tracking.aspx?Culture=EN"
        },
        {
          name: "Xiamen Airlines",
          href: "Airline",
          url: "https://www.xiamenair.com/zh-cn/"
        },
        {
          name: "Yangtze River Express",
          href: "Airline",
          url: "http://www.yzr.com.cn/"
        },
        {
          name: "Yemenia - Yemen Airways",
          href: "ANA Aviation",
          url: "http://web.ana-aviation.com/"
        }
      ],
      List3: [
        {
          name: "2GO",
          href: "",
          url: "http://www.2go-express.com.ph/ttrace/login.asp"
        },
        {
          name: "ACM Ambassador International",
          href: "",
          url: "http://internationalstudentexperience.com.au"
        },
        {
          name: "Adcom Worldwide",
          href: "",
          url: "http://www.adcomworldwide.com/main.php?action=track_it"
        },
        {
          name: "Advantex Express",
          href: "",
          url: "http://www.adcomworldwide.com/main.php?action=track_it"
        },
        {
          name: "AEI Ocean",
          href: "DHL",
          url: "https://www.dhl.com/en.html"
        },
        {
          name: "Agility Logistics",
          href: "Formerly Geo-Logistics",
          url: "https://tracking.agility.com/Login.aspx?ReturnUrl=%2f"
        },
        {
          name: "Air-Sea Forwarders",
          href: "",
          url: "http://airseainc.com/index.php"
        },
        {
          name: "Airgroup",
          href: "",
          url: "http://www.airgroup.com/main.php"
        },
        {
          name: "Airways Freight",
          href: "",
          url: "https://www.airwaysfreight.com/"
        },
        {
          name: "AIT Worldwide Logistics",
          href: "",
          url: "https://www.airwaysfreight.com/"
        },
        {
          name: "Alaska Marine Lines",
          href: "",
          url: "http://www.lynden.com/trace.html"
        },
        {
          name: "Alian�a",
          href: "",
          url: "https://www.alianca.com.br"
        },
        {
          name: "All Ports International Logistics",
          href: "",
          url: "http://www.allports.com.au/Tracking/Login/"
        },
        {
          name: "Alliance Shippers",
          href: "",
          url: "http://itrek.alliance.com/"
        },
        {
          name: "Allstates WorldCargo",
          href: "",
          url: "http://www.allstates-worldcargo.com/webtrak/shipinquiry/shiplookup.aspx"
        },
        {
          name: "Alphatrans International Forwarding",
          href: "",
          url: "https://www.alphatrans.com/tracking/index.asp"
        },
        {
          name: "American President Lines",
          href: "",
          url: "https://www.apl.com/tracking"
        },
        {
          name: "Amerijet International",
          href: "",
          url: "https://mycargo.amerijet.com/tracking"
        },
        {
          name: "ANL Container Line",
          href: "",
          url: "http://www.cma-cgm.com/ebusiness/tracking"
        },
        {
          name: "ANZDL Australia-New Zealand Directline",
          href: "(Via Hapag Lloyd Tracing)",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "APEX International Forwarding",
          href: "",
          url: "http://apexlogistics.zes.zeald.com/"
        },
        {
          name: "APL Global Logistics",
          href: "",
          url: "http://www.apllogistics.com/"
        },
        {
          name: "ATE Group",
          href: "",
          url: "http://tt.airtiger.com/"
        },
        {
          name: "Atlantic Container Line",
          href: "",
          url: "http://www.aclcargo.com/index2.htm"
        },
        {
          name: "Atlanticargo",
          href: "",
          url: "http://66.0.33.171/acs/public/index.htm"
        },
        {
          name: "Atlas de Cargo",
          href: "",
          url: "http://www.atlasdecargo.com/track_trace.aspx"
        },
        {
          name: "Baltrans",
          href: "",
          url: "http://baltrans.riege.de/"
        },
        {
          name: "BAS Worldwide",
          href: "",
          url: "http://www.bas-hk.com/bas/track/login.htm"
        },
        {
          name: "Blue Anchor",
          href: "(Kuehne + Nagel)",
          url: "https://home.kuehne-nagel.com/"
        },
        {
          name: "Burnard International",
          href: "(To Trackfreight)",
          url: "https://www.burnard.co.nz/"
        },
        {
          name: "Canada Maritime ",
          href: "(To Tracing)",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "cargo-partner",
          href: "",
          url: "https://www.cargo-partner.com"
        },
        {
          name: "Cargo1",
          href: "",
          url: "https://www.cargo-partner.com"
        },
        {
          name: "Cast Line",
          href: "Hapag-Lloyd (Online/Tracing)",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "CH Robinson Worldwide",
          href: "",
          url: "https://www.chrwonline.com/login"
        },
        {
          name: "CMA CGM",
          href: "",
          url: "http://www.cma-cgm.com/ebusiness/tracking"
        },
        {
          name: "CNC Line",
          href: "",
          url: "http://www.cncline.com.tw/eservice/Cargo.asp"
        },
        {
          name: "Columbus Line",
          href: "Hamburg S�d",
          url: "https://www.hamburgsud.com/WWW/EN/E-Business/Track_and_Trace/index.jsp"
        },
        {
          name: "COSCO",
          href: "Americas",
          url: "http://elines.coscoshipping.com/usa/"
        },
        {
          name: "COSCO",
          href: "Canada",
          url: "http://lines.coscoshipping.com/home/"
        },
        {
          name: "CP Ships",
          href: "Hapag-Lloyd (Online/Tracing)",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "Crowley American Transport",
          href: "Hamburg S�d",
          url: "https://www.hamburgsud.com/WWW/EN/E-Business/Track_and_Trace/index.jsp"
        },
        {
          name: "Crowley Marine Transport",
          href: "",
          url: "http://www.crowley.com/liner-shipping-services/form-shipment-track.asp"
        },
        {
          name: "CSAV",
          href: "",
          url: "http://www.csav.com/rastreo/rastreo.nsf/yourtrace?OpenForm"
        },
        {
          name: "CTS International Transportation",
          href: "",
          url: "http://www.ctsfreight.com/en/?aid=7"
        },
        {
          name: "Cube Lines",
          href: "",
          url: "http://www.ctsfreight.com/en/?aid=7"
        },
        {
          name: "DAL Deutsche Afrika-Linien",
          href: "",
          url: "http://www.dal.biz/english/onlineservices/tracking/index.php"
        },
        {
          name: "Delbros Supply Chain Solutions",
          href: "",
          url: "http://delbros.com/"
        },
        {
          name: "Delmas",
          href: "",
          url: "https://www.cma-cgm.com/UK/html/accueil/cadre.htm"
        },
        {
          name: "DHL Danzas Air & Ocean",
          href: "",
          url: "https://www.cma-cgm.com/UK/html/accueil/cadre.htm"
        },
        {
          name: "DHX Dependable Hawaiian Express",
          href: "",
          url: "https://www.dhx.com/"
        },
        {
          name: "Econocaribe Consolidators",
          href: "",
          url: "http://www.tracking.com/econotrack/"
        },
        {
          name: "Ecu-Line",
          href: "",
          url: "http://ecu.statistics.eu.eculine.net/ECU.TNT/Frontend/home.html"
        },
        {
          name: "Emirates Shipping Line",
          href: "",
          url: "http://www.emiratesline.com/index.html"
        },
        {
          name: "EMU Lines",
          href: "",
          url: "http://www.emulines.org/html/index.asp"
        },
        {
          name: "Eucon",
          href: "",
          url: "https://www.eucon.nl/"
        },
        {
          name: "Evergreen Marine",
          href: "",
          url: "https://www.evergreen-marine.com/"
        },
        {
          name: "Exel",
          href: "DHL",
          url: "http://sci2.exel.com/"
        },
        {
          name: "FedEx Trade Networks",
          href: "",
          url: "http://www.ftn.fedex.com/?link=4"
        },
        {
          name: "FER Fischer & Rechsteiner",
          href: "",
          url: "http://www.ferfreight.com/it/tracking_en/login.htm"
        },
        {
          name: "Florens Container Services",
          href: "",
          url: "https://www.florens.com/#/"
        },
        {
          name: "Flying Cargo",
          href: "",
          url: "http://flying-cargo.com/pages_eng/track.asp/?iGlobalId=1"
        },
        {
          name: "GAC Gulf Agency Company",
          href: "",
          url: "http://www.gactrack.com/track/home.htm"
        },
        {
          name: "GeoLogistics",
          href: "(Agility Logistics)",
          url: "http://www.agilitylogistics.com/Pages/default.aspx"
        },
        {
          name: "Hamburg S�d",
          href: "",
          url: "https://www.hamburgsud.com/WWW/EN/E-Business/Track_and_Trace/index.jsp"
        },
        {
          name: "Hanjin Shipping",
          href: "",
          url: "http://www.hanjin.com/en/main.jsp"
        },
        {
          name: "Hanshin Freight",
          href: "",
          url: "http://www.hanjin.com/en/main.jsp"
        },
        {
          name: "Hapag-Lloyd",
          href: "(Online/Tracing)",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "Hecny Group",
          href: "",
          url: "http://crm.hecny.com/eservice/CargoTracking/login.asp"
        },
        {
          name: "Hellmann Worldwide Logistics",
          href: "",
          url: "https://www.hellmann.net/en/trackingtracing"
        },
        {
          name: "Heung-A Shipping",
          href: "",
          url: "http://www.heung-a.co.kr/eng/cargo_web/cargotrace.cfm"
        }
      ],
      List4:[
        {
          name: "Horizon Lines",
          href: "",
          url: "http://www.horizon-lines.com/containersearch/"
        },
        {
          name: "Hyundai Merchant Marine",
          href: "",
          url: "http://www.hmm21.com/cms/business/usa/trackTrace/trackTrace/index.jsp"
        },
        {
          name: "IBEX International Forwarding",
          href: "",
          url: "http://www.ibexfreight.com/Asp/login.asp"
        },
        {
          name: "ICE International Cargo Express",
          href: "",
          url: "https://www.icecargo.com.au/wp-content/cache/all/tracking//index.html"
        },
        {
          name: "Ignazio Messina",
          href: "(To Tracking)",
          url: "http://www.informare.it/pubblic/messina/redir.htm"
        },
        {
          name: "Intercargo Hungary",
          href: "",
          url: "https://www.intercargo.hu/index.php?page=trackandtrace"
        },
        {
          name: "IRISL Group",
          href: "",
          url: "http://iicsline.irisl.net/IICS/CargoTracking/CargoTracking/FindContainer.aspx"
        },
        {
          name: "Italia Line",
          href: "Hapag Lloyd (Online/Tracing)",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "Italia Marittima",
          href: "",
          url: "https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do"
        },
        {
          name: "Jolly - B",
          href: "",
          url: "http://www.jollyb-box.com/JollyB/website/tracking.htm"
        },
        {
          name: "K Line America",
          href: "",
          url: "http://www.kline.com/"
        },
        {
          name: "K Line Europe",
          href: "",
          url: "https://klineurope.com/Europe.aspx"
        },
        {
          name: "Kintetsu World Express",
          href: "",
          url: "http://css.kwe.com/WaybillLogin.jsp"
        },
        {
          name: "Kuehne & Nagel",
          href: "",
          url: "https://home.kuehne-nagel.com/"
        },
        {
          name: "Lianyungang China Shipping Container Lines Co Ltd",
          href: "",
          url: "https://home.kuehne-nagel.com/"
        },
        {
          name: "Lloyd Triestino",
          href: "",
          url: "https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do"
        },
        {
          name: "Lynden Tracking Center",
          href: "",
          url: "http://www.lynden.com/trace.html"
        },
        {
          name: "Mach 2 Shipping",
          href: "",
          url: "http://www.mach2.co.uk/"
        },
        {
          name: "Maersk Line",
          href: "",
          url: "https://www.maersk.com/appmanager/"
        },
        {
          name: "Matson",
          href: "Hapag Lloyd (Online/Tracing)",
          url: "https://www.matson.com/vcsc/login/matsonlogin.jsp"
        },
        {
          name: "Matson Navigation",
          href: "",
          url: "https://www.matson.com/ship-your-car-with-matson-2.html"
        },
        {
          name: "Maurice Ward",
          href: "",
          url: "http://www.trackload.com/cgi-bin/mwardtrk/xtrak.cgi?CMDQUERYFORM=1"
        },
        {
          name: "Menlo Worldwide",
          href: "UPS",
          url: "https://forwarding.ups-scs.com/tracking/TrackingQuery.aspx"
        },
        {
          name: "Mentfield",
          href: "",
          url: "https://mentfield.com/scripts/mgwms32.DLL?FORM=INPUTmencrg"
        },
        {
          name: "Messina Line",
          href: "(To Tracking)",
          url: "https://www.messinaline.it/NewWeb.nsf/(Chiave)/en-start?OpenDocument"
        },
        {
          name: "MISC Integrated Logistics",
          href: "",
          url: "http://www.mymils.com/home/login.asp"
        },
        {
          name: "MOL Mitsui OSK Lines",
          href: "",
          url: "http://210.59.239.125/mectrak/login.jsp"
        },
        {
          name: "Morrison Express",
          href: "",
          url: "http://210.59.239.125/mectrak/login.jsp"
        },
        {
          name: "MSC Mediterranean Shipping Company",
          href: "",
          url: "https://www.msc.com/"
        },
        {
          name: "M�ller + Partner",
          href: "(To TRACY)",
          url: "https://www.mnp.de/index.php?id=689"
        },
        {
          name: "Nippon Express",
          href: "",
          url: "http://www2.nittsu.co.jp/DWH/CSP/BEGIN.CSP"
        },
        {
          name: "Norasia",
          href: "",
          url: "https://www.hapag-lloyd.com/en/home.html"
        },
        {
          name: "NYK Logistics",
          href: "",
          url: "http://www.nykline.com/servlet/"
        },
        {
          name: "On Time",
          href: "",
          url: "https://www.overlandwest.ca/BOL_TracePage.htm"
        },
        {
          name: "Orient Overseas Container Line",
          href: "",
          url: "https://www.cargosmart.com/en/default.htm"
        },
        {
          name: "Overseas Express Consolidators",
          href: "",
          url: "https://www.cargosmart.com/en/default.htm"
        },
        {
          name: "Pacific International Lines (PIL)",
          href: "",
          url: "https://www.pilship.com/newpil/Public/TrackandTrace.aspx"
        },
        {
          name: "Pacific Network",
          href: "(To Freight Tracking)",
          url: "http://www.pacnet.com.au/"
        },
        {
          name: "Panalpina",
          href: "",
          url: "https://www.panalpina.com/content/pantrace/"
        },
        {
          name: "Qualitair & Sea",
          href: "",
          url: "https://www.panalpina.com/content/pantrace/"
        },
        {
          name: "Regional Container Lines",
          href: "",
          url: "http://www.rclgroup.com/"
        },
        {
          name: "R�hlig",
          href: "",
          url: "https://www.rohlig.com/"
        },
        {
          name: "SAFDAL",
          href: "",
          url: "http://www.dal.biz/english/onlineservices/tracking/index.php"
        },
        {
          name: "Safmarine",
          href: "",
          url: "https://www.safmarine.com/"
        },
        {
          name: "Seaboard Marine",
          href: "",
          url: "http://www.seaboardmarine.com/ESC/Login.aspx"
        },
        {
          name: "Seago Line",
          href: "",
          url: "https://www.sealandmaersk.com/"
        },
        {
          name: "SEKO Worldwide",
          href: "",
          url: "https://www.sekologistics.com/en/"
        },
        {
          name: "Senator Lines",
          href: "",
          url: "http://www.senatorlines.com/seservice/cargo/front.do"
        },
        {
          name: "Shipco Transport",
          href: "",
          url: "https://www.shipco.com/s3w/detail/index.html"
        },
        {
          name: "Sinotrans",
          href: "",
          url: "http://www.sinolines.com"
        },
        {
          name: "Sofrana Unilines",
          href: "",
          url: "http://www.sofrana.com/office/track.htm"
        },
        {
          name: "Star Shipping",
          href: "",
          url: "http://66.0.33.171/wwwss/public/index.htm"
        },
        {
          name: "Stena Line Freight",
          href: "",
          url: "http://booking.freight.stenaline.com/"
        },
        {
          name: "SudCargos",
          href: "",
          url: "https://www.hamburgsud.com/WWW/EN/E-Business/Track_and_Trace/index.jsp"
        },
        {
          name: "Trans-Net International",
          href: "",
          url: "http://www.tnipk.com/track.asp"
        },
        {
          name: "Translink Shipping",
          href: "",
          url: "http://www.translinkshipping.com/Index/"
        },
        {
          name: "Tropical Shipping",
          href: "",
          url: "https://www.tropical.com/"
        },
        {
          name: "U-Freight",
          href: "",
          url: "http://www.ufreight.com/index.html"
        },
        {
          name: "United Arab Shipping Co",
          href: "",
          url: "https://unitedshipping.com/"
        },
        {
          name: "United Shipping",
          href: "(To Tracking System)",
          url: "https://unitedshipping.com/"
        },
        {
          name: "Unsworth Global Logistics",
          href: "",
          url: "https://unsworth.uk/our-pathway/"
        },
        {
          name: "UPS Supply Chain Solutions",
          href: "",
          url: "https://fgv.ups-scs.com/loginservices/logOn.nfdo"
        },
        {
          name: "UTi Worldwide",
          href: "",
          url: "http://vietnam-ship.com/news.aspx"
        },
        {
          name: "Vietnam Ship",
          href: "",
          url: "http://vietnam-ship.com/news.aspx"
        },
        {
          name: "Wallenius Wilhelmsen",
          href: "",
          url: "https://schedule.2wglobal.com/AppTracking/cargoTrack.do"
        },
        {
          name: "Wan Hai Lines",
          href: "",
          url: "https://www.wanhai.com/views/Main.xhtml"
        },
        {
          name: "Westwood Shipping Lines",
          href: "",
          url: "https://www.wsl.com/"
        },
        {
          name: "World Bridge Line",
          href: "",
          url: "http://www.wbridge.com.br/ingles/tracking.htm"
        },
        {
          name: "WSA Lines",
          href: "",
          url: "https://www.hugedomains.com/domain_profile.cfm?d=wsanet&e=com"
        },
        {
          name: "Yang Ming Group",
          href: "",
          url: "http://www.yml.com.tw/track_trace/track_trace_cargo_tracking.asp"
        },
        {
          name: "ZIM Israel Navigation",
          href: "",
          url: "https://www.zimchina.com/"
        }
      ]
    };
  },
  computed: {
    searchList() {
      var that = this;
      var newList = [];
      if (this.value == "") {
        newList = this.List;
      } else {
        this.List.map(function(item) {
          if (item.name.toLowerCase().search(that.value.toLowerCase()) != -1) {
            newList.push(item);
          }
        });
      }
      return newList;
    },
    searchList2() {
      var that = this;
      var newList = [];
      if (this.value == "") {
        newList = this.List2;
      } else {
        this.List2.map(function(item) {
          if (item.name.toLowerCase().search(that.value.toLowerCase()) != -1) {
            newList.push(item);
          }
        });
      }
      return newList;
    },
    searchList3() {
      var that = this;
      var newList = [];
      if (this.value == "") {
        newList = this.List3;
      } else {
        this.List3.map(function(item) {
          if (item.name.toLowerCase().search(that.value.toLowerCase()) != -1) {
            newList.push(item);
          }
        });
      }
      return newList;
    },
    searchList4() {
      var that = this;
      var newList = [];
      if (this.value == "") {
        newList = this.List4;
      } else {
        this.List4.map(function(item) {
          if (item.name.toLowerCase().search(that.value.toLowerCase()) != -1) {
            newList.push(item);
          }
        });
      }
      return newList;
    }
  },
  methods: {
    toUrl(val) {
      window.open(val);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.track {
  overflow: hidden;
  .footer {
    position: relative;
    padding-top: 0.01rem;
  }
  .inner-banner {
    background-position: 0 -63rem;
  }
  .container {
    width: 12.8rem;
    margin: 0 auto;
    padding: 0.8rem 0;
    .search-box {
      width: 9.6rem;
      margin: 0 auto;
      .ivu-input {
        height: 0.5rem;
      }
    }
    .content {
      h1 {
        margin-top: 0.4rem;
        color: #333;
        font-family: "biminbold";
        font-size: 0.42rem;
        text-align: center;
        position: relative;
        color: #4c4c4c;
        margin-bottom: 0.5rem;
        &::after {
          content: "";
          background: #2a6ec1;
          width: 2rem;
          height: 0.06rem;
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -0.05rem;
        }
      }
      ul {
        // width: 49%;
        display: inline-block;
        vertical-align: top;
        &:nth-of-type(1) {
          width: 7.6rem;
        }
        &:nth-of-type(2) {
          width: 5rem;
        }
        li {
          font-size: 0.2rem;
          letter-spacing: 0.01rem;
          line-height: 0.45rem;
          cursor: pointer;
        }
      }
    }
  }
}
@media (min-device-width: 375px) and (max-device-width: 812px){
.track{
  .container{
    width: 12.9rem;
    .search-box{
      .ivu-input{
        height: 1rem;
      }
    }
    .content{
      h1{
        font-size: 0.8rem;
      }
      ul{
        
        li{
          font-size: 0.4rem;
          line-height: 0.6rem;

        }
      }
    }
  }
}
}
</style>
<style lang="less">
.track {
  .search-box {
    .ivu-input {
      height: 0.5rem;
      font-size: 0.2rem;
      text-indent: 0.2rem;
    }
    .ivu-input-search {
      background: #3f6fb7 !important;
      padding: 0 0.36rem !important;
      i {
        font-size: 0.26rem;
      }
    }
  }
  
}
@media (min-device-width: 375px) and (max-device-width: 812px){
  .track{
    .search-box{
      .ivu-input{
        height: 1rem;
        font-size: 0.5rem;
      }
    }
  }
}
</style>
