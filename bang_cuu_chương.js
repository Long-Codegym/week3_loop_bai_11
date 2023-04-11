let tb;
tb = "<table style=' margin-left: auto; margin-right: auto;' text-align: center ' border='10' width='300' cellspacing='0' cellpadding='3'>"
for (i = 1; i <= 10; i++) {
    tb = tb + "<tr>";
    for (j = 1; j <= 10; j++) {
        tb = tb + "<td>" +j + "x" +i +"="+ (i*j) + "</td>";
    }
    tb = tb + "</tr>";
}
tb = tb + "</table>" ;
document.write(tb);