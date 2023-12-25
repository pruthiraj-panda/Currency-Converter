const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
}  
const fromTab=document.querySelector('.from')
const toTab=document.querySelector('.To')
const result=document.querySelector('.result')
const fromImage=document.querySelector('.fromImage')
const inputData=document.querySelector('.inputTag')
const resultPara=document.querySelector('.resultpara')
// console.log(fromTab)

window.addEventListener('load', function() {
    const str="1"
    inputData.value=str
    console.log("reloding")
    addOptionfrom()
    addOptionto()
    convertMoney(inputData.value)
  });
function addOptionfrom(){
for (let [key,value] of Object.entries(countryList)) {
     const select=document.createElement('option')
     select.innerText=key
     fromTab.appendChild(select)
    //  if(key==="INR"){
    //     const image=document.querySelector('.fromImage')
    //     image.src=`https://flagsapi.com/${value}/flat/64.png`
    //  }
}
}

function addOptionto(){
for (let [key,value] of Object.entries(countryList)) {
    const select=document.createElement('option')
    select.innerText=key
    toTab.appendChild(select)
    // if(key==="USR"){
    //     const image=document.querySelector('.fromImage')
    //     image.src=`https://flagsapi.com/${value}/flat/64.png`
    //     toTab.innerText=key
    //  }
}
}

fromTab.addEventListener('click',function(e){
    let k=e.target.value
    let countryCode=countryList[k]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=e.target.parentElement.querySelector('img')
    img.src=newSrc
})

toTab.addEventListener('click',function(e){
    let k=e.target.value
    let countryCode=countryList[k]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=e.target.parentElement.querySelector('img')
    img.src=newSrc
})
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  async function convertMoney(amount){
       const fromCountry=fromTab.value
       const toCountry=toTab.value
       console.log(fromCountry,toCountry)
       console.log(amount)
       const url=`${BASE_URL}/${fromCountry.toLowerCase()}/${toCountry.toLowerCase()}.json`
       fetch(url)
       .then((response)=>{
          return response.json()
       })
       .then((response)=>{
        console.log(response)
         let data=response[toCountry.toLowerCase()]
         console.log(data)
         let answar=amount*data
         let str=`${amount} of ${fromCountry} == ${answar} of ${toCountry}`
        resultPara.innerText=str
       })
  }
  result.addEventListener('click',function(e){
    const amount=parseInt(inputData.value)
    convertMoney(amount)
  })