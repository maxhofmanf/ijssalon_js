import os
import sys
ijssalon = 1
weetniet ="Sorry dat is geen optie die we aanbieden..."
bakgeld = 0
hoorngeld = 0
bakjeaantal = 0
hoornaantal = 0
hoorntotal= 0 
bakjetotal = 0
aantalbol = 0
bollen = 0
topkost = 0
toptotal = 0
totalkost = 0
aantalL = 0

#3
def smaken():
    global smaak
    for x in range(aantalbol or liters, 0 , -1):
        smaak = str(input("Welke smaak wilt u voor "+ str(welk) + " "+ str(x) +" A) Aardbei, C) Chocolade of V) Vanille?  ")).lower()
        if smaak == "a":
            smaak= "Aarbei"
        elif smaak == "c":
            smaak= "Chocolade"
        elif smaak == "v":
            smaak= "Vanille"
        else:
            print(weetniet)
            smaken()


#4
def topping():
    global topkost
    print("wilt u er nog een topping bij?")
    top = input("A.Slagroom, B.Sprinkles, C.Caramel saus D. geen topping : ").lower()
    if top == "a":
        topkost += 0.50
        print("+ slagroom")
    elif top == "b":
        topkost += 0.30 * aantalbol
        print("+ sprinkles")
    elif top == "c":
        if ['deel'] == "bakje":
            print("+ caramel saus")
            topkost += 0.90
        elif deel == "hoorntje":
            print("+ caramel saus")
            topkost += 0.60
    elif top == "d":
        print()
    else:
        print(weetniet)
        topping()
    bestellen()



#5
def bestellen():
    global bakjetotal ,bakjeaantal ,hoornaantal ,hoorntotal, bollen, toptotal, totalkost
    bestellen = input("Hier is uw "+ deel+ " met " + str(aantalbol)+ " bolletje(s). Wilt u nog meer bestellen? (Y/N)").lower()
    if bestellen == "y":
        bakjetotal += bakgeld
        hoorntotal += hoorngeld
        bollen += aantalbol
        toptotal += topkost
        twee()
    elif bestellen == "n":
        bakjetotal += bakgeld
        hoorntotal += hoorngeld
        bollen += aantalbol
        toptotal += topkost
        totalkost += toptotal
        totalkost += bakjetotal
        totalkost += hoorntotal        
        print('---------[Papi Gelato]---------')
        hoorntotal= "{:.2f}".format(round(float(hoorngeld), 2))
        bakjetotal= "{:.2f}".format(round(float(bakgeld), 2))
        toptotal = "{:.2f}".format(round(float(topkost), 2))

        print("toppings  1 x",toptotal,"=   ",toptotal)
        print("bakje     ", bakjeaantal," x 0,75 = ", "{:.2f}".format(round(float(bakjetotal), 2)))
        print("hoorntje  ", hoornaantal," x 1,25 = ",float(hoorntotal))

        total = "{:.2f}".format(round(float(bollen)*1.1 , 2))
        print("bolletjes", bollen ,"x 0.95 =   ", total)
        totalkost += bollen * 0.95

        print("                        -------- +")
        print("total               =","{:.2f}".format(round(float(totalkost), 2)))
        print("Bedankt en tot ziens.")
        print("--------------------------------")
        sys.exit()
    else:
        print(weetniet)
        ijssalon+0

#2
print("Welkom bij Papi Gelato. ")
def twee():

    global hoornaantal, hoorngeld, bakgeld , bakjeaantal ,deel, aantalbol
    while ijssalon == 1:
        aantalbol = int(input("Hoeveel bolletjes ijs wilt u? : "))
        if aantalbol >8:
            print("Sorry, zulke grote bakken hebben we niet")
        elif aantalbol >=1 and aantalbol <=3:
                hoorntje = str(input("Wilt u deze " + str(aantalbol) + " bolletje(s) in A) een hoorntje of B) een bakje? : ")).lower()
                if hoorntje == "a":
                    deel = "hoorntje"
                    hoorngeld += 1.25
                    hoornaantal += 1
                    smaken()
                    topping()
                elif hoorntje == "b":
                    deel = "bakje"
                    bakgeld += 0.75
                    bakjeaantal += 1
                    smaken()
                    topping()
                else:
                    print(weetniet)

        elif aantalbol >=4 and aantalbol <=8:
            deel = "bakje"
            bakgeld += 0.75
            bakjeaantal += 1
            smaken()
            topping()
        else:
            print(weetniet) 
#6
def zaakbon():
    aantalL = liters * 9.80
    procenten = aantalL/100 *6
    print('---------["Papi Gelato]---------')
    print(liters, "x 9.80               =", "{:.2f}".format(round(float(aantalL), 2)))
    print("                        -------- +")
    print("total                  =","{:.2f}".format(round(float(aantalL), 2)))
    print ("btw 6%                 =", "{:.2f}".format(round(float(procenten), 2)))
    print("Bedankt en tot ziens.")
    print("--------------------------------")
    sys.exit()
#1
def begin():
    global liters, soort, welk
    vraag = input("Bent u 1) particulier of 2) zakelijk? 1 of 2 : ")
    
    if vraag == "1":
        welk = "bolletje(s)"
        twee()
    
    elif vraag == "2":
        welk = "liter"
        liters = int(input("hoeveel liters wilt u? "))
        if liters > 0:
            smaken()
            zaakbon()
        else:
            print(weetniet)
            begin()
    else:
        print(weetniet)
        begin()
begin()