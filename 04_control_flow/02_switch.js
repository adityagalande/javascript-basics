const val = "JAPAN"

switch(val){
    case "IND":
        console.log("INDIA")
        break;

    case "CAN":
        console.log("CANADA");
        break;
    
    case "USA":
    case "SOUTH KOREA":
    case "JAPAN":
    case "GERMANY":
        console.log("UNITED STATES OF AMERICA");
        break;

    case "USSR":
    case "RUSSIA":
        console.log("UNION OF SOVIET SOCIALISTS REPUBLIC");
        break;

    default:
        console.log("UNITED NATIONS");
        break;
}