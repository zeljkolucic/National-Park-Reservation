function proveri() {
    var ime = document.mojaforma.ime.value;
    var prezime = document.mojaforma.prezime.value;
    var tip = document.mojaforma.tip.value;
    var brojNocenja = document.mojaforma.brojNocenja.value;
    var broj = document.mojaforma.broj.value;
    if(ime == "" || prezime == "" || tip == "" || brojNocenja == "" || broj == "") {
        alertify.warning("Unesite sva polja!");
    } else {
        var telRegex = /^((063|064|065)\/\d{4}-\d{3})$/
        if(!telRegex.test(broj)){
            alertify.error("Greska za telefon!");
        } else {
            var status = true;
            var brojNocenjaInt = parseInt(brojNocenja);
            var racun = 0;
            if(tip == "Hotel") {
                if(brojNocenjaInt > 2) {
                    status = false;
                } else {
                    racun = brojNocenjaInt * 2000;
                }
            } else if(tip == "Vila") {
                if(brojNocenjaInt > 5) {
                    status = false;
                } else {
                    racun = brojNocenjaInt * 1500;
                }
            } else if(tip == "Seoska kuca") {
                if(brojNocenjaInt > 10) {
                    status = false;
                } else {
                    racun = brojNocenja * 1200;
                }
            }
            if(!status) {
                alertify.error("Nema mesta!");
            } else {
                alertify.success("Korisnik " + ime + " - " + broj + ", racun je " + racun);
            }
        }
    }

}