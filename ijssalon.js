//1
let ijssalon = 1
let body = document.querySelector('body');
let bigg_array = { welk: 0, }
let business_array = {
    aantalL: 0,
    procenten: 0,
}
let private_array = {
    deel: 0,
    aantalbol: 0,
    bakgeld: 0,
    bakjeaantal: 0,
    smaak: 0,
    topkost: 0,
    hoorntje: 0,
    hoornaantal: 0,
    hoorngeld: 0,
}

let privateTotal_array = {
    bakjetotal: 0,
    hoorntotal: 0,
    bollen: 0,
    hoorntotal: 0,
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
        business_array['liters'] = prompt("hoeveel liters wilt u? ");
        if (business_array['liters'] > 0) {
            smaken_2();
        }
        else {
            alert(weetniet);
            begin();
        }
    } else {
        alert(weetniet);
        begin();
    }
}



function twee() {
    private_array['aantalbol'] = prompt("Hoeveel bolletjes ijs wilt u? : ");
    if (private_array['aantalbol'] > 8) {
        alert("Sorry, zulke grote bakken hebben we niet");
        twee()
        return;
    }
    else if (private_array['aantalbol'] >= 1 && private_array['aantalbol'] <= 3) {
        private_array['hoorntje'] = prompt("Wilt u deze " + private_array['aantalbol'] + " bolletje(s) in A) een hoorntje of B) een bakje? : ");

        if (private_array['hoorntje'] == "a") {
            private_array['deel'] = "hoorntje"
            private_array['hoorngeld'] += 1.25;
            private_array['hoornaantal'] += 1;

            smaken()
            topping()
        }
        else if (private_array['hoorntje'] == "b") {
            private_array['deel'] = "bakje"
            private_array['bakgeld'] += 0.75
            private_array['bakjeaantal'] += 1
            smaken()
            topping()
        }
        else {
            alert(weetniet)
            twee()
            return;
        }
    }
    else if (private_array['aantalbol'] >= 4 && private_array['aantalbol'] <= 8) {
        private_array['deel'] = "bakje";
        private_array['bakgeld'] += 0.75;
        private_array['bakjeaantal'] += 1;
        smaken();
        topping();
    }
    else {
        alert(weetniet);
        twee();
    }
}


function topping() {
    alert("wilt u er nog een topping bij?")
    let top = prompt("A.Slagroom, B.Sprinkles, C.Caramel saus D. geen topping : ")
    if (top == "a") {
        private_array['topkost'] += 0.50
        alert("+ slagroom")
    }
    else if (top == "b") {
        private_array['topkost'] += 0.30 * private_array['aantalbol']
        alert("+ sprinkles")
    }
    else if (top == "c") {
        if (private_array['deel'] == "bakje") {
            alert("+ caramel saus")
            private_array['topkost'] += 0.90
        }
        else if (private_array['deel'] == "hoorntje") {
            alert("+ caramel saus")
            private_array['topkost'] += 0.60
        }
    }
    else if (top == "d" || " ") {
    }
    else {
        alert(weetniet)
        topping()
        return;
    }
    func_bestellen()
}
function smaken() {
    // for x in range(private_array['aantalbol'] or liters, 0, -1)/:
    console.log(private_array['aantalbol'])
    for (x = 1; x <= private_array['aantalbol']; x++) {

        smaakkiezen = prompt("Welke smaak wilt u voor " + bigg_array['welk'] + " " + x + " A) Aardbei, C) Chocolade of V) Vanille?  ").toLowerCase()
        if (smaakkiezen == "a") {
            private_array['smaak'][x] = "Aarbei"
        }
        else if (smaakkiezen == "c") {
            private_array['smaak'][x] = "Chocolade"
        }
        else if (smaakkiezen == "v") {
            private_array['smaak'][x] = "Vanille"
        }
        else {
            alert(weetniet)
            smaken()
            return;
        }
    }
}

function smaken_2() {
    // for x in range(private_array['aantalbol'] or liters, 0, -1)/:
    for (x = 1; x <= business_array['liters']; x++) {
        smaakkiezen = prompt("Welke smaak wilt u voor " + bigg_array['welk'] + " " + x + " A) Aardbei, C) Chocolade of V) Vanille?  ")
        if (smaakkiezen == "a") {
            private_array['smaak'] = "Aarbei"
        }
        else if (smaakkiezen == "c") {
            private_array['smaak'] = "Chocolade"
        }
        else if (smaakkiezen == "v") {
            private_array['smaak'] = "Vanille"
        }
        else {
            alert(weetniet)
            smaken_2()
        }
    }
    zaakbon();

}

function func_bestellen() {
    bestellen = prompt("Hier is uw " + private_array['deel'] + " met " + private_array['aantalbol'] + " bolletje(s). Wilt u nog meer bestellen? (Y/N)")
    privateTotal_array['bakjetotal'] += parseFloat(private_array['bakgeld'])
    privateTotal_array['hoorntotal'] += parseFloat(private_array['hoorngeld'])
    privateTotal_array['bollen'] += parseFloat(private_array['aantalbol'])
    privateTotal_array['toptotal'] += parseFloat(private_array['topkost'])




    if (bestellen == "y") {
        twee()
    }
    else if (bestellen == "n") {
        console.log(privateTotal_array['toptotal'])

        privateTotal_array['totalkost'] += privateTotal_array['toptotal']
        console.log(privateTotal_array['totalkost'])
        privateTotal_array['totalkost'] += parseFloat(privateTotal_array['bakjetotal'])
        privateTotal_array['totalkost'] += parseFloat(privateTotal_array['hoorntotal'])
        privateTotal_array['totalkost'] += parseFloat(privateTotal_array['bollen'] * 0.95)


        body.innerHTML += "<p> ('--------- [Papi Gelato]--------- ')</p >"

        if (privateTotal_array > 0) {
            body.innerHTML += "<p>('toppings  1 x'" + privateTotal_array['toptotal'].toFixed(2) + '=   ' + privateTotal_array['toptotal'].toFixed(2) + ")</p>"
        }
        if (private_array['bakjeaantal']) {
            body.innerHTML += "<p>('bakje     '" + private_array['bakjeaantal'] + ' x 0+75 = ' + privateTotal_array['bakjetotal'].toFixed(2) + ")</p>"
        }
        if (private_array['hoornaantal']) {
            body.innerHTML += "<p>('hoorntje  '" + private_array['hoornaantal'] + ' x 1+25 = ' + privateTotal_array['hoorntotal'].toFixed(2) + ")</p>"
        }
        privateTotal_array['total'] = parseFloat(privateTotal_array['bollen'] * 0.95).toFixed(2)
        body.innerHTML += "<p> ('bolletjes'" + privateTotal_array['bollen'] + 'x 0.95 = ' + parseFloat(privateTotal_array['total']).toFixed(2) + ")</p>"

        body.innerHTML += '<p> ("                        -------- +")</p>'
        body.innerHTML += "<p>('total = '" + privateTotal_array['totalkost'].toFixed(2) + ")</p>"
        body.innerHTML += '<p>("Bedankt en tot ziens.")</p>'
        body.innerHTML += '<p>("--------------------------------")</p>'
        return;
    }
    else {
        alert(weetniet)
        func_bestellen()
        return;
    }
}
function zaakbon() {
    business_array['aantalL'] = business_array['liters'] * 9.80
    business_array['procenten'] = business_array['aantalL'] / 100 * 6
    body.innerHTML += "<p>" + ('---------["Papi Gelato]---------')
    body.innerHTML += "<p>(" + business_array['liters'] + " x 9.80               = " + parseFloat(business_array['aantalL']).toFixed(2) + "</p>"
    body.innerHTML += "<p>(" + "                        -------- +"
    body.innerHTML += "<p>(" + "total                  = " + parseFloat(business_array['aantalL']).toFixed(2) + "</p>"
    body.innerHTML += "<p>(" + "btw 6%                 =" + parseFloat(business_array['procenten']).toFixed(2) + "</p>"
    body.innerHTML += "<p>( Bedankt en tot ziens. </p>"
    body.innerHTML += '<p>( ("--------------------------------") </p>'
    return;
}


document.write("Welkom bij Papi Gelato. ");

begin();