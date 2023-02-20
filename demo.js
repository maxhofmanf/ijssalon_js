let ijssalon = 1;
let weetniet = "Sorry dat is geen optie die we aanbieden...";
let bakgeld = 0;
let hoorngeld = 0;
let bakjeaantal = 0;
let hoornaantal = 0;
let hoorntotal = 0;
let bakjetotal = 0;
let aantalbol = 0;
let bollen = 0;
let topkost = 0;
let toptotal = 0;
let totalkost = 0;
let aantalL = 0;
function zaakbon() {
    aantalL = liters * 9.80;
    procenten = aantalL / 100 * 6;
    print('---------["Papi Gelato]---------');
    print(liters, "x 9.80               =", "{:.2f}".format(round(float(aantalL), 2)));
    print("                        -------- +");
    print("total                  =", "{:.2f}".format(round(float(aantalL), 2)));
    print("btw 6%                 =", "{:.2f}".format(round(float(procenten), 2)));
    print("Bedankt en tot ziens.");
    print("--------------------------------");
}
//5
function bestellen() {
    // global bakjetotal, bakjeaantal, hoornaantal, hoorntotal, bollen, toptotal, totalkost
    bestellen = document.createElement("INPUT");
    bestellen.setAttribute("Hier is uw " + deel + " met " + aantalbol + " bolletje(s). Wilt u nog meer bestellen? (Y/N)").toLowerCase()
    if (bestellen == "y") {
        bakjetotal += bakgeld;
        hoorntotal += hoorngeld;
        bollen += aantalbol;
        toptotal += topkost;
        twee();
    }
    else if (bestellen == "n") {
        bakjetotal += bakgeld;
        hoorntotal += hoorngeld;
        bollen += aantalbol;
        toptotal += topkost;
        totalkost += toptotal;
        totalkost += bakjetotal;
        totalkost += hoorntotal;
        document.write('---------[Papi Gelato]---------');
        hoorntotal = "{:.2f}".format(round(float(hoorngeld), 2));
        bakjetotal = "{:.2f}".format(round(float(bakgeld), 2));
        toptotal = "{:.2f}".format(round(float(topkost), 2));

        document.write("toppings  1 x", toptotal, "=   ", toptotal);
        document.write("bakje     ", bakjeaantal, " x 0,75 = ", "{:.2f}".format(round(float(bakjetotal), 2)));
        document.write("hoorntje  ", hoornaantal, " x 1,25 = ", float(hoorntotal));

        total = "{:.2f}".format(round(float(bollen) * 1.1, 2));
        document.write("bolletjes", bollen, "x 0.95 =   ", total);
        totalkost += bollen * 0.95;

        document.write("                        -------- +");
        document.write("total               =", "{:.2f}".format(round(float(totalkost), 2)));
        document.write("Bedankt en tot ziens.");
        document.write("--------------------------------");
    }
    else {
        document.write(weetniet);
        ijssalon + 0;
    }
}
//4
function topping() {
    // global topkost
    document.write("wilt u er nog een topping bij?");
    top = document.createElement("INPUT").toLowerCase();

    top.setAttribute("type", "A.Slagroom, B.Sprinkles, C.Caramel saus D. geen topping : ");


    if (top == "a") {
        topkost += 0.50;
        document.write("+ slagroom");
    }
    else if (top == "b") {
        topkost += 0.30 * aantalbol;
        document.write("+ sprinkles");
    }
    else if (top == "c") {
        if (deel == "bakje") {
            document.write("+ caramel saus");
            topkost += 0.90;
        }
        else if (deel == "hoorntje") {
            document.write("+ caramel saus");
            topkost += 0.60;
        }
    }
    else if (top == "d") {
        bestellen();
    }
    else {
        document.write(weetniet);
        topping();

    }
    bestellen();
}

//3
function smaken() {
    for (x = aantalbol || liters; x <= 0; x--) {
        smaak = str(input("Welke smaak wilt u voor " + str(welk) + " " + str(x) + " A) Aardbei, C) Chocolade of V) Vanille?  ")).toLowerCase()
        if (smaak == "a") {
            smaak = "Aarbei";
        }
        else if (smaak == "c") {
            smaak = "Chocolade";
        }
        else if (smaak == "v") {
            smaak = "Vanille";
        }
        else {
            document.write(weetniet);
            smaken()
        }
    }
}


//2
function twee() {

    // global hoornaantal, hoorngeld, bakgeld, bakjeaantal, deel, aantalbol
    while (ijssalon == 1) {
        aantalbol = int(input("Hoeveel bolletjes ijs wilt u? : "));
        if (aantalbol > 8) {
            document.write("Sorry, zulke grote bakken hebben we niet");
        }
        else if (aantalbol >= 1 && aantalbol <= 3) {

            hoorntje = str(input("Wilt u deze " + str(aantalbol) + " bolletje(s) in A) een hoorntje of B) een bakje? : ")).toLowerCase();

            if (hoorntje == "a") {
                deel = "hoorntje";
                hoorngeld += 1.25;
                hoornaantal += 1;
                smaken();
                topping();
            }

            else if (hoorntje == "b") {
                deel = "bakje";
                bakgeld += 0.75;
                bakjeaantal += 1;
                smaken();
                topping();
            }
            else {
                document.write(weetniet)
            }
        }
        else if (aantalbol >= 4 && aantalbol <= 8) {
            deel = "bakje"
            bakgeld += 0.75
            bakjeaantal += 1
            smaken()
            topping()
        }
        else {
            document.write(weetniet)
        }
    }
}

//1
function begin() {
    // global liters, soort, welk
    vraag = document.createElement("INPUT");
    vraag.setAttribute("type", "(Bent u 1) particulier of 2) zakelijk? 1 of 2 : ");


    if (vraag == "1") {
        welk = "bolletje(s)";
        twee();
    } else if (vraag == "2") {
        welk = "liter";
        let liters = document.createElement("INPUT");
        liters.setAttribute("type", "hoeveel liters wilt u? ");
        if (liters > 0) {
            smaken();
            zaakbon();
        }
        else {
            document.write(weetniet);
            begin();
        }
    } else {
        document.write(weetniet);
        begin();
    }
}
document.write("Welkom bij Papi Gelato. ");

begin();