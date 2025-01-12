export interface IntervalTimer {
  highIntensity: number;
  lowIntensity: number;
  rounds: number;
  name: string;
  id: number;
}

export interface CreateIntervalTimer {
  highIntensity: number;
  lowIntensity: number;
  rounds: number;
  name: string;
}

export interface UpdateIntervalTimer extends Partial<CreateIntervalTimer> {
  id: number;
}

export interface DeleteIntervalTimer {
  id: number;
}
