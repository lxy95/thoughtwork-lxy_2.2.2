module.exports = function main() {
    if(arguments.length == 1 && !isNaN(Number(arguments[0]))) {
        var x = arguments[0];
        var firstline = "";
        var secondline = "";
        var thirdline = "";
        for(i = 0; i < x.length; i++) {
            switch(x[i]) {
                case "0":
                    firstline += "._.";
                    secondline += "|.|";
                    thirdline += "|_|";
                    break;
                case "1":
                    firstline += "...";
                    secondline += "..|";
                    thirdline += "..|";
                    break;
                case "2":
                    firstline += "._.";
                    secondline += "._|";
                    thirdline += "|_.";
                    break;
                case "3":
                    firstline += "._.";
                    secondline += "._|";
                    thirdline += "._|";
                    break;
                case "4":
                    firstline += "...";
                    secondline += "|_|";
                    thirdline += "..|";
                    break;
                case "5":
                    firstline += "._.";
                    secondline += "|_.";
                    thirdline += "._|";
                    break;
                case "6":
                    firstline += "._.";
                    secondline += "|_.";
                    thirdline += "|_|";
                    break;
                case "7":
                    firstline += "._.";
                    secondline += "..|";
                    thirdline += "..|";
                    break;
                case "8":
                    firstline += "._.";
                    secondline += "|_|";
                    thirdline += "|_|";
                    break;
                case "9":
                    firstline += "._.";
                    secondline += "|_|";
                    thirdline += "..|";
                    break;
            }
            if(i != x.length-1) {
                firstline += " ";
                secondline += " ";
                thirdline += " ";
            }
        }
        return firstline + "\n" + secondline + "\n" + thirdline + "\n";
    }
    return 'Hello World!';
};