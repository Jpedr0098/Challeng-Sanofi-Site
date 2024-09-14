document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: '700px',
      fixedWeekCount: false,
      events: []
    });
    calendar.render();

    // Função para adicionar eventos
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