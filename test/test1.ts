// test interpreter
import Interpreter from "../src/interpreter";

const generator = Interpreter(
    "👆👆👆👆👆👆👆👆😒👉👆👆👆👆😒👉👆👆👉👆👆👆👉👆👆👆👉👆👈👈👈👈👇😡👉👆👉👆👉👇👉👉👆😒👈😡👈👇😡👉👉🥺👉👇👇👇🥺👆👆👆👆👆👆👆🥺🥺👆👆👆🥺👉👉🥺👈👇🥺👈🥺👆👆👆🥺👇👇👇👇👇👇🥺👇👇👇👇👇👇👇👇🥺👉👉👆🥺👉👆👆🥺"
);

const main = async () => {
    let output = "";
    let res = await generator.next();
    while (res.value) {
        output += res.value;
        res = await generator.next();
    }

    console.log(output);
};

main();
