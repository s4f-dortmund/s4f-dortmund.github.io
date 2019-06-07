$(document).ready(function() {
    moment.locale('de');
    var now = moment();
    var nextStrikeDate = ""
    const strikeDay = 5; // for Friday
    const strikeLoc = "Dortmund"

    // https://stackoverflow.com/a/39615119
    // if we haven't yet passed the day of the week that I need:
    if (now.isoWeekday() <= strikeDay) {
        // then just give me this week's instance of that day
        nextStrikeDate = now.isoWeekday(strikeDay).format("LL");
    } else {
        // otherwise, give me next week's instance of that day
        nextStrikeDate = now.add(1, 'weeks').isoWeekday(strikeDay).format("LL");
    }
    $('#next-strike-date').prepend(nextStrikeDate);

    $.ajax({
        url: "https://fff-api.dmho.de/v1/scrape/list"
    }).then(function(data) {
        var msg = '<a href="https://fridaysforfuture.de/streiktermine/">Kein Streik geplant</a>';
        for (var entry of data["list"]) {
            if (entry["city"] == strikeLoc) {
              msg = entry["time"] + " (" + entry["place"] + ")";
            }
        }
       $('#next-strike-ld').prepend(msg);
    });
});
