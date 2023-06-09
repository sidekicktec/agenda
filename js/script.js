document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'pt-BR',
    initialView: 'dayGridMonth',
    // height: 'auto',
    // aspectRatio: 2.5,
    // themeSystem: 'bootstrap5',
    // headerToolbar: {
    //   end: 'today,next',
    //   center: 'title',
    //   start: 'dayGridWeek,dayGridMonth', //,listMonth'
    // },
    headerToolbar: {
      end: 'dayGridWeek,dayGridMonth',
      start: 'title'
    },
    validRange: {
      start: '2023-04-30', // set the start date to the beginning of the year
      end: '2023-06-04' // set the end date to the end of the year
    },
    titleRangeSeparator: '..',
    buttonText: {
      week: 'semana',
      month: 'mês',
      list: 'lista',
      today: 'hoje'
    },
    eventColor: 'rgba(0,0,0,0)',
    eventBackgroundColor: 'red',
    eventBorderColor: '#714fac',


    events: [
      {
        title: 'indisponível',
        start: '2023-04-30',
        end: '2023-05-02',
      },

      {
        title: '',
        start: '2023-05-05',
        display: 'background'
      },
      {
        title: 'reunião',
        start: '2023-05-05',
      }
    ]

    // ABRIL 2023
    // events: [
    //   {
    //     title: 'estudando',
    //     start: '2023-04-02',
    //   },

    //   {
    //     title: '',
    //     start: '2023-04-04',
    //     display: 'background'
    //   },
    //   {
    //     title: 'em evento',
    //     start: '2023-04-04',
    //   },
      
    //   {
    //     title: 'indisponível',
    //     start: '2023-04-07',
    //     end: '2023-04-10',
    //     // url: '//sidekick.tec.br'
    //   },

    //   {
    //     title: '',
    //     start: '2023-04-12',
    //     end: '2023-04-16',
    //     display: 'background'
    //   },
    //   {
    //     title: 'em evento',
    //     start: '2023-04-12',
    //     end: '2023-04-16'
    //   },

    //   {
    //     title: '',
    //     start: '2023-04-18',
    //     end: '2023-04-22',
    //     display: 'background'
    //   },
    //   {
    //     title: 'em evento',
    //     start: '2023-04-18',
    //     end: '2023-04-22'
    //   },

    //   {
    //     title: '',
    //     start: '2023-04-22',
    //     end: '2023-04-27',
    //     display: 'background'
    //   },
    //   {
    //     title: 'em evento',
    //     start: '2023-04-22',
    //     end: '2023-04-27'
    //   }
    // ]


  });

  calendar.render();
});