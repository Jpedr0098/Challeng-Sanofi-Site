document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: '700px',
        fixedWeekCount: false,
        events: [],

        //Click na barra do evento
        eventClick: function(info) {
            var eventObj = info.event;
            if (eventObj.url) {
                alert(
                'Clicked ' + eventObj.title + '.\n' +
                'Will open ' + eventObj.url + ' in a new tab'
                );

                window.open(eventObj.url);

                info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
            } else {
                alert('Clicked ' + eventObj.title);
            }
        }
    });

    calendar.render();

    //ADD eventos
    window.addEvent = function() {
    var title = document.getElementById('eventTitle').value;
    var date = document.getElementById('eventDate').value;

    if (title && date) {
        calendar.addEvent({
        title: title,
        start: date,
        allDay: true
        });
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventDate').value = '';
    } else {
        alert('Por favor, insira o título e a data do evento.');
    }
    }
});