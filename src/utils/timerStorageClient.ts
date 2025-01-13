import {
  CreateIntervalTimer,
  DeleteIntervalTimer,
  IntervalTimer,
  UpdateIntervalTimer,
} from '../types/IntervalTimer';

export class TimerStorageClient {
  static getTimers(): IntervalTimer[] {
    return JSON.parse(localStorage.getItem('timers') || '[]');
  }

  static saveTimer(timer: CreateIntervalTimer) {
    const id = this.generateId();
    const newTimer = { ...timer, id };
    const timers = this.getTimers();
    timers.push(newTimer);
    localStorage.setItem('timers', JSON.stringify(timers));
  }

  static updateTimer(timer: UpdateIntervalTimer) {
    const timers = this.getTimers();
    const index = timers.findIndex((t) => t.id === timer.id);
    if (index === -1) throw new Error('Timer not found');
    timers[index] = { ...timers[index], ...timer };
    localStorage.setItem('timers', JSON.stringify(timers));
  }

  static deleteTimer(timer: DeleteIntervalTimer) {
    const timers = this.getTimers();
    const index = timers.findIndex((t) => t.id === timer.id);
    if (index === -1) throw new Error('Timer not found');
    timers.splice(index, 1);
    localStorage.setItem('timers', JSON.stringify(timers));
  }

  static getTimer(id: number): IntervalTimer {
    const timers = this.getTimers();
    const timer = timers.find((t) => t.id === id);
    if (!timer) throw new Error('Timer not found');
    return timer;
  }

  static generateId(): number {
    return this.getTimers().length + 1;
  }
}
