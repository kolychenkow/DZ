let language = prompt("Language")
switch (language.toLowerCase()){
    case "en":
        console.log("Hello!");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
    case "ru":
        console.log("Привет!");
        break;
    case "tat":
        console.log("салам!");
        break;
    case "Esp":
        console.log("holla!");
        break;
        default:
        console.log("Not found")
}