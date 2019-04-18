<template>
  <div class="track">
    <my-head></my-head>
    <div class="inner-banner"></div>
    <div class="container">
      <div class="search-box">
        <Input search enter-button :placeholder="$t('track.placeholder')" v-model="value"/>
      </div>
      <div class="content">
        <h1>{{$t('track.title1')}}</h1>
        <ul v-show="searchList.length>0">
          <li v-for="(item,index) in searchList" :key="index">
            <p>
              <span>{{item.name}}</span>
              <a :href="item.url" target="_blank">{{item.href}}</a>
            </p>
          </li>
        </ul>
        <ul>
          <li v-for="(item,index) in searchList2" :key="index">
            <p>
              <span>{{item.name}}</span>
              <a :href="item.url" target="_blank">{{item.href}}</a>
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
          url: "http://www.baidu.com"
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
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Baltic",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Canada Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Canada Cargo",
          href: "CPS",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Cargo Germany",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air China",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Europa",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Europa Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air France Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air France Cargo",
          href: "SkyTeam",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air France Cargo Equation",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Gabon",
          href: "ANA Aviation",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Greenland",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Hong Kong",
          href: "Cathay (AWB Prefix 288)",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Hong Kong",
          href: "Hactl",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Jamaica",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Jamaica",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Macau",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Madagascar",
          href: "Datacair",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Malta",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Malta",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Mauritius ",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Mauritius ",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Moldova",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air New Zealand",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air New Zealand",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Niugini",
          href: "Mercator",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air Seychelles",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Air-India Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "AirBridge Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Airmax Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Alaska Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Alaska Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Alitalia",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Alitalia ",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Alitalia",
          href: "SkyTeam",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Allied Air",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "American Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "American Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Amerijet International",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "ANA All Nippon Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Asiana Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Asiana Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Atlantic Southeast",
          href: "Delta Air Logistics",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Atlas Air Worldwide",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Austrian Airlines",
          href: "CPS",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Avianca",
          href: "ANA Aviation",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Avient Cargo",
          href: "Delta Air Logistics",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Azerbaijan Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Azul Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Biman Bangladesh",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "bmi",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "bmi",
          href: "Tradevision",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Bringer Air Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "British Airways",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "British Airways (IAG)",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Brussels Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Bulgaria Air",
          href: "datacair",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "BWIA West Indies Airways",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "C.A.L. Cargo Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Canadian Cargo",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cargoitalia",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cargolux Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Caribbean Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cathay Pacific Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cayman Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Centurian Air Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "China Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "China Eastern Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "China Hainan Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "China Southern Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cielos Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Comair Delta Air",
          href: "Logistics",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Continental Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Copa Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Coyne Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Croatia Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Crossair ",
          href: "via SWISS World",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cubana Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Cyprus Airways",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Czech Airlines CSA Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Czech Airlines CSA Cargo ",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Czech Airlines CSA Cargo",
          href: "SkyTeam",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Daallo Airlines",
          href: "ANA Aviation",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "DAS Air",
          href: "ANA Aviation",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "DAS Air USA",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Delta Air Logistics",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Delta Air Logistics",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Delta Air Logistics",
          href: "SkyTeam",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "DHL Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "DHL Aviation Americas",
          href: "Airline (Tracking)",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Dragonair",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Egyptair",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Egyptair",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "El Al Israel Airlines",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "El Al Israel Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Emirates SkyCargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Estafeta Carga",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Estafeta Carga",
          href: "ANA Aviation",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Ethiopian Airlines",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Etihad Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "European Air Transport",
          href: "DHL",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "EVA Airways",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "EVA Airways",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Far Eastern Air Transport",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "FedEx",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "FedEx",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "FedEx Express",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Fenix Air",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Finnair Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Finnair Cargo",
          href: "CHAMP",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "FlyDubai Cargo",
          href: "Mercator",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Four Star Air Cargo",
          href: "Airline",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        },
        {
          name: "Gabon Airlines",
          href: "datacair",
          url: "https://www.adria.si/en/article.cp2?linkid=cargo"
        }
      ],
      List2: [
        {
          name: "Garuda Indonesia",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "GB Airways",
          href: "BA (AWB Prefix 171)",
          url: "http://www.baidu.com"
        },
        {
          name: "Global Aviation Services",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Gol Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Grandstar Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Great Wall Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Gulf Air",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Gulf Air Falcon Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Hawaiian Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Hong Kong Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Iberia",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Iberia",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Icelandair-Flugleidir",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Indian Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "IndiGo CarGo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Insel Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Iran Air",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Jade Cargo International",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Japan Air System",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Japan Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Japan Asia",
          href: "Japan Airlines",
          url: "http://www.baidu.com"
        },
        {
          name: "JAT - Jugoslovenski Aerotransport",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Jet Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Jetairfly",
          href: "Network Aviation",
          url: "http://www.baidu.com"
        },
        {
          name: "jetBlue Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Jubba Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Kales",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Kalitta Air",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Kenya Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "KLM",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "KLM",
          href: "SkyTeam",
          url: "http://www.baidu.com"
        },
        {
          name: "Korean Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Korean Air Cargo",
          href: "SkyTeam",
          url: "http://www.baidu.com"
        },
        {
          name: "Kuwait Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Kuwait Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "LACSA Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "LAN Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Lan Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Leisure Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "LIAT",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "LOT-Polish Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "LOT-Polish Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "LTU International",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Lufthansa Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Lufthansa Cargo",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Lybian Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Malaysia Airlines Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Mandarin Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Martinair Cargo",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Mas Air",
          href: "Lan-Chile (AWB Prefix 865)",
          url: "http://www.baidu.com"
        },
        {
          name: "Mexicana ",
          href: "(VIA Cargolux)",
          url: "http://www.baidu.com"
        },
        {
          name: "Middle East Airlines Airliban",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "MNG Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "National Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Nippon Cargo Airlines ",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Northern Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Northwest Cargo",
          href: "CPS",
          url: "http://www.baidu.com"
        },
        {
          name: "Northwest Cargo",
          href: "SkyTeam",
          url: "http://www.baidu.com"
        },
        {
          name: "Norwegian Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Olympic Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Oman Air",
          href: "EA CARGO (UK Only)",
          url: "http://www.baidu.com"
        },
        {
          name: "Pakistan International Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Pegasus Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Philippine Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Polar Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Polar Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Qantas Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Qantas Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Qatar Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Royal Air Maroc",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Royal Brunei Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Royal Jordanian",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "RUS Aviation",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "SAS Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "SAS Cargo",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Saudi Arabian Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Saudi Arabian Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Shanghai Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Shenzhen Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Siberia Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Sichuan",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Silkair",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Silkway West Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Singapore Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "SkyLease Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "SkyWest Airlines",
          href: "Delta Air Logistics",
          url: "http://www.baidu.com"
        },
        {
          name: "SkyWest Airlines",
          href: "via Australian Air Express",
          url: "http://www.baidu.com"
        },
        {
          name: "South African Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "South American Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Southwest Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "SriLankan Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "SriLankan Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Starlight Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Sudan Airways",
          href: "ANA Aviation",
          url: "http://www.baidu.com"
        },
        {
          name: "Swiss WorldCargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Swiss WorldCargo",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Syrian Arab Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "TAAG Angola Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "TACA Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "TAM Linhas Aereas",
          href: "Datacair",
          url: "http://www.baidu.com"
        },
        {
          name: "Tampa Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "TAP Air Portugal",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Tarom",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Thai Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Thai Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Thomas Cook (Condor)",
          href: "Lufthansa Cargo",
          url: "http://www.baidu.com"
        },
        {
          name: "Thomsonfly Cargo",
          href: "Network Aviation",
          url: "http://www.baidu.com"
        },
        {
          name: "TNT Airways",
          href: "Airline (Track Package)",
          url: "http://www.baidu.com"
        },
        {
          name: "Tobruk Air",
          href: "ANA Aviation",
          url: "http://www.baidu.com"
        },
        {
          name: "Trans Mediterranean Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Transaero",
          href: "BA (AWB Prefix 670)",
          url: "http://www.baidu.com"
        },
        {
          name: "Tui Belgium",
          href: "Network Aviation",
          url: "http://www.baidu.com"
        },
        {
          name: "Turkish Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Turkish Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Ukraine International Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Ukraine International Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "United Air Lines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "United Air Lines",
          href: "CPS",
          url: "http://www.baidu.com"
        },
        {
          name: "UPS Air Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "US Airways",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "US Airways",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "VARIG",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "VARIG",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "VARIG Logistica",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Vietnam Airlines",
          href: "CHAMP",
          url: "http://www.baidu.com"
        },
        {
          name: "Virgin Atlantic Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Volga-Dnepr",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "WestJet Cargo",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Xiamen Airlines",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Yangtze River Express",
          href: "Airline",
          url: "http://www.baidu.com"
        },
        {
          name: "Yemenia - Yemen Airways",
          href: "ANA Aviation",
          url: "http://www.baidu.com"
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
          if ((item.name.toLowerCase()).search(that.value.toLowerCase()) != -1) {
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
          if ((item.name.toLowerCase()).search(that.value.toLowerCase()) != -1) {
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
          line-height: 0.4rem;
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
</style>
