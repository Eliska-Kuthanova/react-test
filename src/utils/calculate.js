//export const operations = [
//    { value = "+", label = "S��t�n�" },
//    { value = "-", label = "Od��t�n�" },
//    { value = "*", label = "N�soben�" },
//    { value = "/", label = "D�len�" }
//];
export const operations = [
    { value: "+", label: "S��t�n�" },
    { value: "-", label: "Od��t�n�" },
    { value: "*", label: "N�soben�" },
    { value: "/", label: "D�len�" },
];
export function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;

    }
}