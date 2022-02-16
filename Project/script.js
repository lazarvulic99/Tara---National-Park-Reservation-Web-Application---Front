function proveri() {
    var ime = document.mojaforma.Ime.value;
    var prezime = document.mojaforma.Prezime.value;
    var tip = document.mojaforma.Tip.value;
    var br = document.mojaforma.br.value;
    var telefon = document.mojaforma.Telefon.value;
    if (ime == "" || prezime == "" || tip == "" || br == "" || telefon == "") {
        alertify.warning('Unesite sva polja!');
    } else {
        var telRegex = /^((063|064|065)\/\d{4}-\d{3})$/;
        if (!telRegex.test(telefon)) {
            alertify.error('Greska za telefon');
        } else {
            var status = true;
            var racun = 0;
            var brNocenja = parseInt(br);
            if (tip == 'Hotel') {
                if (brNocenja > 2) {
                    status = false;
                } else {
                    racun = brNocenja * 2000;
                }
            }
            if (tip == 'Vila') {
                if (brNocenja > 5) {
                    status = false;
                } else {
                    racun = brNocenja * 1500;
                }
            }
            if (tip == 'Seoska kuća') {
                if (brNocenja > 10) {
                    status = false;
                } else {
                    racun = brNocenja * 1200;
                }
            }
            if (!status) {
                alertify.error('Nema mesta');
            } else {
                alertify.success('Koirsnik ' + ime + ' ' + ' - ' + telefon + ' , racun je: ' + račun + ' dinara.');
            }
        }
    }
}