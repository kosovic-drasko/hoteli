import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { startOfDay } from 'date-fns';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'jhi-tabela-raspolozivosti-soba',
  styleUrls: ['/jhi-tabela-raspolozivosti.scss'],
  templateUrl: 'jhi-tabela-raspolozivosti-soba.component.html',
})
export class TabelaRaspolozivostiSobaComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    },
  ];

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    // let x=this.adminService.dateFormat(date)
    // this.openAppointmentList(x)
  }
}
