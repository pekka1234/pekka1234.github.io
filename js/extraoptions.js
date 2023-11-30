function extraoptions(){
    document.getElementById("achvstats").style.display = "none";
    document.getElementById("exop").style.display = "block";
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function exportf(){
    var prestr = "";

    prestr += money.toString() + "\n";
    prestr += "[" + stockvalues.toString() + "]" + "\n";
    prestr += "[" + stockowns.toString() + "]" + "\n";
    prestr += "[" + rescha.toString() + "]" + "\n";
    prestr += "[" + stats.toString() + "]" + "\n";
    prestr += JSON.stringify(trade_history) + "\n";
    prestr += "[" + achvunlocked[0].toString() + "]" + "\n";
    prestr += "[" + achvunlocked[1].toString() + "]" + "\n";
    prestr += "[" + achvunlocked[2].toString() + "]" + "\n";
    prestr += "[" + achvunlocked[3].toString() + "]" + "\n";
    prestr += "[" + achvunlocked[4].toString() + "]" + "\n";
    prestr += "[" + curachvs.toString() + "]" + "\n";
    prestr += "[" + acmode.toString() + "]";

    finalstr = prestr.split('').reverse().join('');

    console.log(prestr, finalstr, finalstr.split('').reverse().join(''));

    download("StockProfitSave.sps", finalstr);
    

}


function importf(){
    var uploadBtn = document.getElementById("savefile");

    function setOutput(response) {
        outputText = response;
        console.log(outputText);

        var fout = outputText.split('').reverse().join('');
        fout = fout.split('\n');

        localStorage.setItem("Money", fout[0]);    
        localStorage.setItem("Stockvalues", fout[1]);
        localStorage.setItem("Stockowns", fout[2]);
        localStorage.setItem("Rescha", fout[3]);
        localStorage.setItem("Stats", fout[4]);
        localStorage.setItem("Trades", fout[5]);
        localStorage.setItem("ACHV1", fout[6]);
        localStorage.setItem("ACHV2", fout[7]);
        localStorage.setItem("ACHV3", fout[8]);
        localStorage.setItem("ACHV4", fout[9]);
        localStorage.setItem("ACHV5", fout[10]);
        localStorage.setItem("cura", fout[11]);
        localStorage.setItem("acmo", fout[12]);

        alert("Refresh page");
    };

    var fr = new FileReader();
    fr.onload = function() {
    uploadBtn.textContent = fr.result;
    }
    var outputText = uploadBtn.files[0].text().then( res => { setOutput(res) });

}