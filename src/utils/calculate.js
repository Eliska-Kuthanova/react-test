//export const operations = [
//    { value = "+", label = "Sèítání" },
//    { value = "-", label = "Odèítání" },
//    { value = "*", label = "Násobení" },
//    { value = "/", label = "Dìlení" }
//];
export const operations = [
    { value: "+", label: "Sèítání" },
    { value: "-", label: "Odèítání" },
    { value: "*", label: "Násobení" },
    { value: "/", label: "Dìlení" },
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