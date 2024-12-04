import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { VacacionesService } from '../service/vacaciones.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {
  @Input() id!: number | null;
  @Input() dialogDetail: boolean = false;
  @Output() dialogClosed = new EventEmitter<void>();

  startDate: Date = new Date();
  endDate: Date = new Date();
  vacacionTomada: any;
  disabledDates: Date[] = [];
  isLoading: boolean = false;
  months: number = 1;

  constructor(private VacacionesService: VacacionesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id !== null) {
      this.getVacacionesTById(this.id);
    }
  }

  getVacacionesTById(id: number) {
    this.isLoading = true;
    this.VacacionesService.getById(id).subscribe({
      next: (vacacionTomada) => {
        console.log('VacacionTomada:', vacacionTomada);
        this.vacacionTomada = vacacionTomada;

        this.setVacationDates(vacacionTomada);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      },
    });
  }

  setVacationDates(vacacionTomada: any) {
    this.startDate = new Date(vacacionTomada.fecha_inicio);
    this.startDate.setDate(this.startDate.getDate() + 1);

    this.endDate = new Date(vacacionTomada.fecha_fin);
    this.endDate.setDate(this.endDate.getDate() + 1);

    let currentDate = new Date(this.startDate);
    this.disabledDates = [];

    if (this.startDate.getMonth() !== this.endDate.getMonth()) {
      this.months = 2;
    } else {
      this.months = 1;
    }
  }

  isDateInRange(date: any): boolean {
    if (!this.startDate || !this.endDate) {
      console.error("startDate o endDate no están definidos", this.startDate, this.endDate);
      return false;
    }

    const startDateAdjusted = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());
    const endDateAdjusted = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());
    const dateAdjusted = new Date(date.year, date.month, date.day);

    const isAfterStartDate = dateAdjusted >= startDateAdjusted;
    const isBeforeEndDate = dateAdjusted <= endDateAdjusted;


    const result = isAfterStartDate && isBeforeEndDate;

    return result;
  }

  onDialogClose() {
    this.dialogClosed.emit();
  }
}
