module.exports.numGenerator = numGenerator;

function numGenerator (max, min) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
   return randomNum;
}
