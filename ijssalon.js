//1
let ijssalon = 1
let body = document.querySelector('body');
let bigg_array = { welk: 0, deel: 0, hoorntje: 0, bakgeld: 0, bakjeaantal: 0, hoorngeld: 0, hoornaantal: 0 }
let busniss_array = {
    aantalL: 0,
}
let private_array = {
    bakgeld: 0,
    hoorngeld: 0,
    aantalbol: 0,
    topkost: 0,
    toptotal: 0,
    bakjetotal: 0,
    hoorntotal: 0
}
let privateTotal_array = {
    bakjetotal: 0,
    hoorntotal: 0,
    bollen: 0,
    toptotal: 0,
    totalkost: 0,
}
let smaak = [];

const weetniet = "Sorry dat is geen optie die we aanbieden..."

function begin() {

    vraag = prompt("(Bent u 1) particulier of 2) zakelijk? 1 of 2 : ");


    if (vraag == "1") {
        bigg_array['welk'] = "bolletje(s)";
        twee();
    } else if (vraag == "2") {
        bigg_array['welk'] = "liter";
        // let liters = document.createElement("INPUT");
        liters = prompt("hoeveel liters wilt u? ");
        if (liters > 0) {
            smaken_2();
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




function twee() {
    while (ijssalon == 1) {
        private_array['aantalbol'] = prompt("Hoeveel bolletjes ijs wilt u? : ");
        if (private_array['aantalbol'] > 8) {
            alert("Sorry, zulke grote bakken hebben we niet");
        }
        else if (private_array['aantalbol'] >= 1 && private_array['aantalbol'] <= 3) {
            bigg_array['hoorntje'] = prompt("Wilt u deze " + private_array['aantalbol'] + " bolletje(s) in A) een hoorntje of B) een bakje? : ");

            if (bigg_array['hoorntje'] == "a") {
                bigg_array['deel'] = "hoorntje"
                private_array['hoorngeld'] += 1.25
                bigg_array['hoornaantal'] += 1
                smaken()
                topping()
            }
            else if (bigg_array['hoorntje'] == "b") {
                bigg_array['deel'] = "bakje"
                private_array['bakgeld'] += 0.75
                private_array['bakjeaantal'] += 1
                smaken()
                topping()
            }
            else {
                alert(weetniet)
            }
        }
        else if (private_array['aantalbol'] >= 4 && private_array['aantalbol'] <= 8) {
            deel = "bakje";
            bakgeld += 0.75;
            private_array['bakjeaantal'] += 1;
            smaken();
            topping();
        }
        else {
            alert(weetniet);
        }
    }
}


function topping() {
    alert("wilt u er nog een topping bij?")
    let top = prompt("A.Slagroom, B.Sprinkles, C.Caramel saus D. geen topping : ")
    if (top == "a") {
        privateTotal_array['topkost'] += 0.50
        alert("+ slagroom")
    }
    else if (top == "b") {
        privateTotal_array['topkost'] += 0.30 * private_array['aantalbol']
        alert("+ sprinkles")
    }
    else if (top == "c") {
        if (private_array['deel'] == "bakje") {
            alert("+ caramel saus")
            privateTotal_array['topkost'] += 0.90
        }
        else if (private_array['deel'] == "hoorntje") {
            alert("+ caramel saus")
            privateTotal_array['topkost'] += 0.60
        }
    }
    else if (top == "d") {
        alert()
    }
    else {
        alert(weetniet)
        topping()
    }
    func_bestellen()
}
function smaken() {
    // for x in range(private_array['aantalbol'] or liters, 0, -1)/:
    for (x = 0; x >= private_array['aantalbol']; x++) {

        smaakkiezen = prompt("Welke smaak wilt u voor " + bigg_array['welk'] + " " + str(x) + " A) Aardbei, C) Chocolade of V) Vanille?  ")
        if (smaak == "a") {
            smaak[x] = "Aarbei"
        }
        else if (smaak == "c") {
            smaak[x] = "Chocolade"
        }
        else if (smaak == "v") {
            smaak[x] = "Vanille"
        }
        else {
            alert(weetniet)
            smaken()
        }
    }
}

function smaken_2() {
    // for x in range(private_array['aantalbol'] or liters, 0, -1)/:
    for (x = 0; x >= liters; x++) {

        smaakkiezen = prompt("Welke smaak wilt u voor " + bigg_array['welk'] + " " + str(x) + " A) Aardbei, C) Chocolade of V) Vanille?  ")
        if (smaak == "a") {
            smaak[x] = "Aarbei"
        }
        else if (smaak == "c") {
            smaak[x] = "Chocolade"
        }
        else if (smaak == "v") {
            smaak[x] = "Vanille"
        }
        else {
            alert(weetniet)
            smaken_2()
        }
    }
}

function func_bestellen() {
    bestellen = prompt("Hier is uw " + bigg_array['deel'] + " met " + private_array['aantalbol'] + " bolletje(s). Wilt u nog meer bestellen? (Y/N)")
    privateTotal_array['bakjetotal'] += private_array['bakgeld']
    privateTotal_array['hoorntotal'] += private_array['hoorngeld']
    privateTotal_array['bollen'] += private_array['aantalbol']
    privateTotal_array['toptotal'] += private_array['topkost']
    if (bestellen == "y") {
        console.log("ah")
        twee()
    }
    else if (bestellen == "n") {
        privateTotal_array['totalkost'] += privateTotal_array['toptotal']
        privateTotal_array['totalkost'] += privateTotal_array['bakjetotal']
        privateTotal_array['totalkost'] += privateTotal_array['hoorntotal']
        body.inner += "<p> ('--------- [Papi Gelato]--------- ')</p >"
        body.inner += '<p>privateTotal_array["hoorntotal"] = (private_array["hoorngeld"], 2)</p>'
        privateTotal_array['bakjetotal'] = (private_array['bakgeld'], 2)
        body.inner += '<p>privateTotal_array["toptotal"] = (private_array["topkost"], 2)</p>'

        body.inner += "<p>('toppings  1 x', privateTotal_array['toptotal'], '=   ', privateTotal_array['toptotal'])</p>"
        body.inner += "<p>('bakje     ', privateTotal_array['bakjeaantal'], ' x 0,75 = ', (privateTotal_array['bakjetotal']), 2)</p>"
        body.inner += "<p>('hoorntje  ', privateTotal_array['hoornaantal'], ' x 1,25 = ', (privateTotal_array['hoorntotal']))</p>"

        privateTotal_array['total'] = (privateTotal_array['bollen']) * 1.1, 2
        body.inner += "<p> ('bolletjes', privateTotal_array['bollen'], 'x 0.95 = ', privateTotal_array['total'])</p>"
        privateTotal_array['totalkost'] += privateTotal_array['bollen'] * 0.95

        body.inner += '<p> ("                        -------- +")</p>'
        body.inner += "<p>('total = ', (privateTotal_array['totalkost']), 2)</p>"
        body.inner += '<p>("Bedankt en tot ziens.")</p>'
        body.inner += '<p>("--------------------------------")</p>'
        ijssalon + 1;
        console.log("beh")
    }
    else {
        alert(weetniet)
        ijssalon + 0
    }
}



document.write("Welkom bij Papi Gelato. ");

begin();